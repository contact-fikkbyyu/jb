import type { Rarity, ZoneType } from "../types";

export const RARITY_ORDER: Rarity[] = [
  "commune",
  "peu-commune",
  "rare",
  "exceptionnelle",
];

export const RARITY_LABELS: Record<Rarity, string> = {
  commune: "Commune",
  "peu-commune": "Peu commune",
  rare: "Rare",
  exceptionnelle: "Exceptionnelle",
};

export const RARITY_STYLES: Record<Rarity, string> = {
  commune:
    "bg-[var(--rarity-commune-bg)] text-[var(--rarity-commune-fg)] ring-[var(--rarity-commune-fg)]/15",
  "peu-commune":
    "bg-[var(--rarity-peu-bg)] text-[var(--rarity-peu-fg)] ring-[var(--rarity-peu-fg)]/15",
  rare: "bg-[var(--rarity-rare-bg)] text-[var(--rarity-rare-fg)] ring-[var(--rarity-rare-fg)]/15",
  exceptionnelle:
    "bg-[var(--rarity-except-bg)] text-[var(--rarity-except-fg)] ring-[var(--rarity-except-fg)]/20",
};

export const RARITY_DOT: Record<Rarity, string> = {
  commune: "bg-[var(--rarity-commune-fg)]",
  "peu-commune": "bg-[var(--rarity-peu-fg)]",
  rare: "bg-[var(--rarity-rare-fg)]",
  exceptionnelle: "bg-[var(--rarity-except-fg)]",
};

export const ZONE_TYPE_ICON: Record<ZoneType, string> = {
  succulentes: "🌵",
  "tropicale-africaine": "🌴",
  japonais: "⛩️",
  roseraie: "🌹",
  alpin: "⛰️",
  orchidees: "🦋",
  mediterraneen: "🫒",
  exotique: "🌺",
};

export const ZONE_TYPE_LABEL: Record<ZoneType, string> = {
  succulentes: "Succulentes & cactées",
  "tropicale-africaine": "Flore tropicale africaine",
  japonais: "Jardin japonais",
  roseraie: "Roseraie",
  alpin: "Flore alpine",
  orchidees: "Orchidées",
  mediterraneen: "Flore méditerranéenne",
  exotique: "Plantes exotiques",
};

/** Gradient used behind each plant's illustration, keyed by the zone it grows in. */
export const ZONE_TYPE_GRADIENT: Record<ZoneType, string> = {
  succulentes:
    "from-[#e3ecd2] to-[#c3d8a6] dark:from-[#2b3420] dark:to-[#1c2416]",
  "tropicale-africaine":
    "from-[#f0e2b8] to-[#dfc688] dark:from-[#3a3016] dark:to-[#2a2210]",
  japonais: "from-[#f3dfe0] to-[#e0b9c2] dark:from-[#3a2429] dark:to-[#2a1a1e]",
  roseraie: "from-[#f6dde0] to-[#eab8c2] dark:from-[#3a1f24] dark:to-[#2b171b]",
  alpin: "from-[#dde7ee] to-[#b9cedd] dark:from-[#1e2a33] dark:to-[#141e26]",
  orchidees: "from-[#e3ddf0] to-[#c3b6e0] dark:from-[#241f38] dark:to-[#191529]",
  mediterraneen:
    "from-[#e9e0c9] to-[#cdbb8e] dark:from-[#322a17] dark:to-[#241e10]",
  exotique: "from-[#e4ecc8] to-[#c3d68f] dark:from-[#2a3318] dark:to-[#1c2410]",
};
