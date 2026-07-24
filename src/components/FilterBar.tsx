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
  const seenOptions: { value: SeenFilter; label: string }[] = [
    { value: "toutes", label: "Toutes" },
    { value: "vues", label: "Vues" },
    { value: "non-vues", label: "Non vues" },
  ];

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {RARITY_ORDER.map((rarity) => {
          const active = activeRarities.has(rarity);
          return (
            <button
              key={rarity}
              onClick={() => onToggleRarity(rarity)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-inset transition ${
                active
                  ? "bg-[var(--accent)] text-white ring-[var(--accent)]"
                  : "bg-[var(--paper-raised)] text-[var(--text)] ring-[var(--line)] hover:ring-[var(--line-strong)]"
              }`}
            >
              {RARITY_LABELS[rarity]}
            </button>
          );
        })}
      </div>
      <div className="flex gap-1 rounded-full bg-[var(--paper-sunken)] p-1 text-xs font-medium">
        {seenOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSeenFilterChange(opt.value)}
            className={`rounded-full px-3 py-1.5 transition ${
              seenFilter === opt.value
                ? "bg-[var(--paper-raised)] text-[var(--ink)] shadow-[var(--shadow-card)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
