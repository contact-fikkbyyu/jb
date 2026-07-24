/**
 * Fetches one representative photo per plant from Wikipedia and saves it
 * locally, so the app can show real photos instead of illustrations.
 *
 * Run with: npm run fetch:photos
 * Requires internet access (this repo's dev sandbox has none, which is
 * why this is a script the user runs, not something done automatically).
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

interface WikiSummary {
  thumbnail?: { source: string; width: number; height: number };
  type?: string;
}

async function fetchSummary(title: string): Promise<WikiSummary | null> {
  const url = `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    title.replace(/ /g, "_"),
  )}`;
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
  });
  if (!res.ok) return null;
  const json = (await res.json()) as WikiSummary;
  if (json.type === "disambiguation") return null;
  return json;
}

function upsizeThumbnail(sourceUrl: string, width = 640): string {
  return sourceUrl.replace(/\/\d+px-/, `/${width}px-`);
}

async function downloadImage(url: string, destPath: string): Promise<void> {
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

    if (!FORCE && manifest[plant.id] && existsSync(
      path.resolve(__dirname, "..", "public", manifest[plant.id].replace(/^\//, "")),
    )) {
      skipped.push(plant.id);
      continue;
    }

    const candidates = [plant.wikipediaTitle, plant.latinName, plant.name].filter(
      (t): t is string => Boolean(t),
    );

    let summary: WikiSummary | null = null;
    for (const title of candidates) {
      try {
        summary = await fetchSummary(title);
      } catch {
        summary = null;
      }
      if (summary?.thumbnail) break;
    }

    if (!summary?.thumbnail) {
      console.log(`${progress} ✗ ${plant.name} — pas de photo trouvée`);
      failed.push(plant.name);
      continue;
    }

    try {
      const imageUrl = upsizeThumbnail(summary.thumbnail.source, 640);
      const ext = extensionFromUrl(imageUrl);
      const filename = `${plant.id}.${ext}`;
      await downloadImage(imageUrl, path.join(PHOTOS_DIR, filename));
      manifest[plant.id] = `/photos/${filename}`;
      await saveManifest(manifest);
      console.log(`${progress} ✓ ${plant.name}`);
      succeeded.push(plant.id);
    } catch (err) {
      console.log(`${progress} ✗ ${plant.name} — ${(err as Error).message}`);
      failed.push(plant.name);
    }

    // Be polite to Wikimedia's servers.
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  console.log("\n--- Résumé ---");
  console.log(`Réussies : ${succeeded.length}`);
  console.log(`Déjà présentes (ignorées) : ${skipped.length}`);
  console.log(`Échecs : ${failed.length}`);
  if (failed.length) {
    console.log("Plantes sans photo :", failed.join(", "));
  }
}

main();
