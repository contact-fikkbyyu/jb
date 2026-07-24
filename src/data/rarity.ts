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
  commune: "bg-slate-100 text-slate-700 ring-slate-300",
  "peu-commune": "bg-emerald-100 text-emerald-700 ring-emerald-300",
  rare: "bg-sky-100 text-sky-700 ring-sky-300",
  exceptionnelle: "bg-amber-100 text-amber-800 ring-amber-400",
};

export const RARITY_DOT: Record<Rarity, string> = {
  commune: "bg-slate-400",
  "peu-commune": "bg-emerald-500",
  rare: "bg-sky-500",
  exceptionnelle: "bg-amber-500",
};

export const ZONE_TYPE_ICON: Record<ZoneType, string> = {
  succulentes: "🌵",
  "tropicale-africaine": "🌴",
  japonais: "⛩️",
  roseraie: "🌹",
  alpin: "⛰️",
  orchidees: "🦋",
};
