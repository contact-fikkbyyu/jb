/**
 * Fetches one representative photo per plant from Wikipedia and saves it
 * locally, so the app can show real photos instead of illustrations.
 *
 * Run with: npm run fetch:photos
 * Requires internet access (this repo's dev sandbox has none, which is
 * why this is a script the user runs, not something done automatically).
 *
 * For each plant: try the REST summary directly on a couple of likely
 * titles (cheap, 1 request each), then fall back to Wikipedia's search
 * API (French, then English) to find the best matching article. All
 * requests go through a small rate limiter that also backs off and
 * retries on HTTP 429, since Wikimedia throttles bursty anonymous
 * clients — that throttling was silently masquerading as "no photo
 * found" in an earlier version of this script.
 *
 * Resumable: already-downloaded photos are skipped on re-run unless
 * --force is passed. Progress is written to the manifest after every
 * plant, so interrupting the script loses no completed work.
 */
import { writeFile, mkdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { plants } from "../src/data/plants";

// Works on any Node version with ESM support (import.meta.dirname needs
// Node 20.11+, which not every environment — e.g. default Codespaces — has).
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const [major] = process.versions.node.split(".").map(Number);
if (major < 18 || typeof fetch === "undefined") {
  console.error(
    `\n❌ Ce script a besoin de Node.js 18 ou plus récent (fetch natif). Version détectée : ${process.versions.node}.\n` +
      `   Dans ce terminal, essayez :\n` +
      `     nvm install 20 && nvm use 20\n` +
      `   puis relancez : npm run fetch:photos\n`,
  );
  process.exit(1);
}

const PHOTOS_DIR = path.resolve(__dirname, "../public/photos");
const MANIFEST_PATH = path.resolve(__dirname, "../src/data/photoManifest.json");
const USER_AGENT =
  "HerbierApp/1.0 (contact@mozaic-pro.com) personal botanical-garden reference app";
const FORCE = process.argv.includes("--force");
const VERBOSE = process.argv.includes("--verbose");
const LANGS = ["fr", "en"] as const;
const MIN_REQUEST_GAP_MS = 250;

// --- A small global rate limiter shared by every request this script makes ---

let lastRequestAt = 0;
let rateLimitHits = 0;

async function politeFetch(url: string, retriesLeft = 2): Promise<Response> {
  const wait = lastRequestAt + MIN_REQUEST_GAP_MS - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastRequestAt = Date.now();

  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
  });

  if (res.status === 429 && retriesLeft > 0) {
    rateLimitHits++;
    const retryAfter = Number(res.headers.get("retry-after")) || 3;
    if (VERBOSE) console.log(`   ⏳ 429, pause ${retryAfter}s...`);
    await new Promise((r) => setTimeout(r, retryAfter * 1000));
    return politeFetch(url, retriesLeft - 1);
  }
  return res;
}

// --- Wikipedia lookups ---

interface WikiSummary {
  thumbnail?: { source: string; width: number; height: number };
  type?: string;
}

async function fetchSummary(lang: string, title: string): Promise<WikiSummary | null> {
  const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    title.replace(/ /g, "_"),
  )}`;
  const res = await politeFetch(url);
  if (!res.ok) {
    if (VERBOSE) console.log(`   summary(${lang}, ${title}) -> HTTP ${res.status}`);
    return null;
  }
  const json = (await res.json()) as WikiSummary;
  if (json.type === "disambiguation") return null;
  return json;
}

async function searchTitle(lang: string, query: string): Promise<string | null> {
  const url =
    `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&format=json` +
    `&srlimit=1&srsearch=${encodeURIComponent(query)}`;
  const res = await politeFetch(url);
  if (!res.ok) {
    if (VERBOSE) console.log(`   search(${lang}, ${query}) -> HTTP ${res.status}`);
    return null;
  }
  const json = (await res.json()) as {
    query?: { search?: { title: string }[] };
  };
  return json.query?.search?.[0]?.title ?? null;
}

interface Found {
  summary: WikiSummary;
  lang: string;
  title: string;
}

/**
 * Cheapest path first: try each candidate title directly (1 request).
 * Only if none of those work do we spend a search request per language.
 */
async function findPhoto(queries: string[]): Promise<Found | null> {
  for (const lang of LANGS) {
    for (const query of queries) {
      const summary = await fetchSummary(lang, query);
      if (summary?.thumbnail) return { summary, lang, title: query };
    }
  }

  for (const lang of LANGS) {
    const title = await searchTitle(lang, queries[0]);
    if (!title) continue;
    const summary = await fetchSummary(lang, title);
    if (summary?.thumbnail) return { summary, lang, title };
  }

  return null;
}

function upsizeThumbnail(sourceUrl: string, width = 640): string {
  return sourceUrl.replace(/\/\d+px-/, `/${width}px-`);
}

async function downloadImage(url: string, destPath: string): Promise<void> {
  const wait = lastRequestAt + MIN_REQUEST_GAP_MS - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastRequestAt = Date.now();
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buffer);
}

async function loadManifest(): Promise<Record<string, string>> {
  if (!existsSync(MANIFEST_PATH)) return {};
  try {
    return JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  } catch {
    return {};
  }
}

async function saveManifest(manifest: Record<string, string>) {
  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
}

function extensionFromUrl(url: string): string {
  const match = /\.(jpg|jpeg|png|gif|webp)(?:$|\?)/i.exec(url);
  return match ? match[1].toLowerCase() : "jpg";
}

async function main() {
  await mkdir(PHOTOS_DIR, { recursive: true });
  const manifest = await loadManifest();

  const succeeded: string[] = [];
  const failed: string[] = [];
  const skipped: string[] = [];

  for (const [i, plant] of plants.entries()) {
    const progress = `[${i + 1}/${plants.length}]`;

    if (
      !FORCE &&
      manifest[plant.id] &&
      existsSync(
        path.resolve(__dirname, "..", "public", manifest[plant.id].replace(/^\//, "")),
      )
    ) {
      skipped.push(plant.id);
      continue;
    }

    const queries = [
      ...new Set(
        [plant.latinName, plant.wikipediaTitle, plant.name].filter(
          (t): t is string => Boolean(t),
        ),
      ),
    ];

    let found: Found | null = null;
    try {
      found = await findPhoto(queries);
    } catch (err) {
      if (VERBOSE) console.log(`   erreur réseau: ${(err as Error).message}`);
    }

    if (!found) {
      console.log(`${progress} ✗ ${plant.name} — pas de photo trouvée`);
      failed.push(plant.name);
      continue;
    }

    try {
      const imageUrl = upsizeThumbnail(found.summary.thumbnail!.source, 640);
      const ext = extensionFromUrl(imageUrl);
      const filename = `${plant.id}.${ext}`;
      await downloadImage(imageUrl, path.join(PHOTOS_DIR, filename));
      manifest[plant.id] = `/photos/${filename}`;
      await saveManifest(manifest);
      console.log(`${progress} ✓ ${plant.name} (${found.lang}: ${found.title})`);
      succeeded.push(plant.id);
    } catch (err) {
      console.log(`${progress} ✗ ${plant.name} — ${(err as Error).message}`);
      failed.push(plant.name);
    }
  }

  console.log("\n--- Résumé ---");
  console.log(`Réussies : ${succeeded.length}`);
  console.log(`Déjà présentes (ignorées) : ${skipped.length}`);
  console.log(`Échecs : ${failed.length}`);
  if (rateLimitHits > 0) {
    console.log(
      `⚠️  ${rateLimitHits} pause(s) pour cause de limitation de débit (HTTP 429) — si beaucoup d'échecs, relancez le script plus tard, il reprendra où il s'est arrêté.`,
    );
  }
  if (failed.length) {
    console.log("Plantes sans photo :", failed.join(", "));
  }
}

main();
