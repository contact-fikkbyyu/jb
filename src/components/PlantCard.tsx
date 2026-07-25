import { Link } from "react-router-dom";
import type { Plant } from "../types";
import { RarityBadge } from "./RarityBadge";
import { PlantVisualCover } from "./PlantVisual";
import { CATEGORY_LABEL } from "../data/categories";
import { useCollection } from "../context/CollectionContext";

export function PlantCard({ plant }: { plant: Plant }) {
  const { isSeen, toggleSeen } = useCollection();
  const seen = isSeen(plant.id);

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition hover:shadow-[var(--shadow-card-hover)] ${
        seen
          ? "border-[var(--accent-soft-line)] bg-[var(--accent-soft)]"
          : "border-[var(--line)] bg-[var(--paper-raised)] shadow-[var(--shadow-card)]"
      }`}
    >
      <button
        onClick={() => toggleSeen(plant.id)}
        title={seen ? "Marquer comme non vue" : "Marquer comme vue"}
        className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-base shadow-sm transition ${
          seen
            ? "bg-[var(--accent)] text-white"
            : "bg-white/90 text-[var(--text-muted)] hover:text-[var(--text)]"
        }`}
      >
        {seen ? "👁" : "○"}
      </button>

      <Link to={`/plante/${plant.id}`} className="flex flex-col">
        <PlantVisualCover plant={plant} />
        <div className="flex flex-col gap-3 p-4">
          <div>
            <h3 className="font-display text-lg font-semibold leading-snug text-[var(--ink)]">
              {plant.name}
            </h3>
            <p className="text-sm italic text-[var(--text-muted)]">
              {plant.latinName}
            </p>
            <p className="mt-0.5 text-xs text-[var(--text-muted)]">
              {CATEGORY_LABEL[plant.category]}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <RarityBadge rarity={plant.rarity} />
          </div>
        </div>
      </Link>
    </div>
  );
}
