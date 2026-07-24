import type { Rarity } from "../types";

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
