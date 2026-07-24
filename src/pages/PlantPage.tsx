import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { findPlant, wikipediaUrl } from "../data/plants";
import { CATEGORY_LABEL } from "../data/categories";
import { locations } from "../data/locations";
import { RarityBadge } from "../components/RarityBadge";
import { SeenBadge } from "../components/SeenBadge";
import { PlantVisual } from "../components/PlantVisual";
import { useCollection } from "../context/CollectionContext";
import photoManifest from "../data/photoManifest.json";

const manifest: Record<string, string> = photoManifest;

export function PlantPage() {
  const { plantId } = useParams<{ plantId: string }>();
  const plant = plantId ? findPlant(plantId) : undefined;
  const { isSeen, toggleSeen } = useCollection();
  const navigate = useNavigate();

  if (!plant) return <Navigate to="/" replace />;
  const seen = isSeen(plant.id);
  const plantLocations = locations.filter((loc) =>
    plant.locationIds.includes(loc.id),
  );

  function goBack() {
    const historyState = window.history.state as { idx?: number } | null;
    if (historyState && typeof historyState.idx === "number" && historyState.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={goBack}
        className="flex w-fit items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
      >
        ← Toutes les plantes
      </button>

      <div className="flex flex-col gap-6 rounded-2xl border border-[var(--line)] bg-[var(--paper-raised)] p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center gap-1">
              <PlantVisual plant={plant} size="lg" />
              {manifest[plant.id] && (
                <span className="text-[10px] text-[var(--text-muted)]">
                  Photo : Wikipédia
                </span>
              )}
            </div>
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)]">
                {plant.name}
              </h1>
              <p className="italic text-[var(--text-muted)]">
                {plant.latinName}
              </p>
              <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                {CATEGORY_LABEL[plant.category]}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <RarityBadge rarity={plant.rarity} />
            {seen && <SeenBadge />}
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent-soft-line)] bg-[var(--accent-soft)] p-5">
          <h2 className="mb-1.5 flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-[var(--accent-hover)]">
            💡 Le saviez-vous ?
          </h2>
          <p className="leading-relaxed text-[var(--text)]">{plant.funFact}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => toggleSeen(plant.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
              seen
                ? "bg-[var(--paper-sunken)] text-[var(--text)] hover:bg-[var(--line)]"
                : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
            }`}
          >
            {seen
              ? "✓ Marquée comme vue — retirer"
              : "Marquer cette plante comme vue"}
          </button>
          <a
            href={wikipediaUrl(plant)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
          >
            Voir sur Wikipédia ↗
          </a>
        </div>

        {plantLocations.length > 0 && (
          <div>
            <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">
              📍 Où l'observer en France
            </h2>
            <div className="flex flex-wrap gap-2">
              {plantLocations.map((loc) => (
                <Link
                  key={loc.id}
                  to={`/carte?lieu=${loc.id}`}
                  className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--text)] transition hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
                >
                  {loc.name} · {loc.city}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
