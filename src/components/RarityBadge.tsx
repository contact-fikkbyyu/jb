import type { Rarity } from "../types";
import { RARITY_LABELS, RARITY_STYLES } from "../data/rarity";

export function RarityBadge({ rarity }: { rarity: Rarity }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${RARITY_STYLES[rarity]}`}
    >
      {RARITY_LABELS[rarity]}
    </span>
  );
}
