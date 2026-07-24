import { Link } from "react-router-dom";
import type { Plant } from "../types";
import { RarityBadge } from "./RarityBadge";
import { SeenBadge } from "./SeenBadge";
import { useCollection } from "../context/CollectionContext";

export function PlantCard({
  plant,
  subtitle,
}: {
  plant: Plant;
  /** Optional secondary line, e.g. garden / zone name for global search results */
  subtitle?: string;
}) {
  const { isSeen, toggleSeen } = useCollection();
  const seen = isSeen(plant.id);

  return (
    <div
      className={`group relative flex flex-col gap-2 rounded-2xl border p-4 shadow-sm transition hover:shadow-md ${
        seen
          ? "border-green-300 bg-green-50/60"
          : "border-stone-200 bg-white"
      }`}
    >
      <button
        onClick={() => toggleSeen(plant.id)}
        title={seen ? "Marquer comme non vue" : "Marquer comme vue"}
        className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-lg transition ${
          seen
            ? "bg-green-600 text-white"
            : "bg-stone-100 text-stone-400 hover:bg-stone-200"
        }`}
      >
        {seen ? "✓" : "○"}
      </button>

      <Link to={`/plante/${plant.id}`} className="flex flex-col gap-2 pr-8">
        <span className="text-4xl">{plant.emoji}</span>
        <div>
          <h3 className="font-serif text-lg font-semibold text-stone-800">
            {plant.name}
          </h3>
          <p className="text-sm italic text-stone-500">{plant.latinName}</p>
          {subtitle && (
            <p className="mt-0.5 text-xs text-stone-400">{subtitle}</p>
          )}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <RarityBadge rarity={plant.rarity} />
          {seen && <SeenBadge />}
        </div>
      </Link>
    </div>
  );
}
