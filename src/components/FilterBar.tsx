import type { Rarity } from "../types";
import { RARITY_LABELS, RARITY_ORDER } from "../data/rarity";

export type SeenFilter = "toutes" | "vues" | "non-vues";

export function FilterBar({
  activeRarities,
  onToggleRarity,
  seenFilter,
  onSeenFilterChange,
}: {
  activeRarities: Set<Rarity>;
  onToggleRarity: (rarity: Rarity) => void;
  seenFilter: SeenFilter;
  onSeenFilterChange: (filter: SeenFilter) => void;
}) {
  const seenOptions: SeenFilter[] = ["toutes", "vues", "non-vues"];

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {RARITY_ORDER.map((rarity) => {
          const active = activeRarities.has(rarity);
          return (
            <button
              key={rarity}
              onClick={() => onToggleRarity(rarity)}
              className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition ${
                active
                  ? "bg-green-600 text-white ring-green-600"
                  : "bg-white text-stone-600 ring-stone-300 hover:bg-stone-50"
              }`}
            >
              {RARITY_LABELS[rarity]}
            </button>
          );
        })}
      </div>
      <div className="flex gap-1 rounded-full bg-stone-100 p-1 text-xs font-medium">
        {seenOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => onSeenFilterChange(opt)}
            className={`rounded-full px-3 py-1.5 capitalize transition ${
              seenFilter === opt
                ? "bg-white text-stone-800 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            {opt.replace("-", " ")}
          </button>
        ))}
      </div>
    </div>
  );
}
