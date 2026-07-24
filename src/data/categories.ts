import type { PlantCategory } from "../types";

export const CATEGORY_ORDER: PlantCategory[] = [
  "cactus",
  "succulente",
  "palmier",
  "mediterraneenne",
  "tropicale",
  "japonaise",
  "alpine",
  "aromatique",
  "orchidee",
  "carnivore",
  "aquatique",
  "rosier",
];

export const CATEGORY_ICON: Record<PlantCategory, string> = {
  cactus: "🌵",
  succulente: "🪴",
  palmier: "🌴",
  mediterraneenne: "🫒",
  tropicale: "🌺",
  japonaise: "⛩️",
  alpine: "⛰️",
  aromatique: "🌿",
  orchidee: "🦋",
  carnivore: "🪰",
  aquatique: "🪷",
  rosier: "🌹",
};

export const CATEGORY_LABEL: Record<PlantCategory, string> = {
  cactus: "Cactées",
  succulente: "Succulentes",
  palmier: "Palmiers",
  mediterraneenne: "Méditerranéenne",
  tropicale: "Tropicale & exotique",
  japonaise: "Japonaise",
  alpine: "Alpine",
  aromatique: "Aromatique & médicinale",
  orchidee: "Orchidées",
  carnivore: "Carnivore",
  aquatique: "Aquatique",
  rosier: "Roseraie",
};

/** Gradient used behind each plant's illustration, keyed by category. */
export const CATEGORY_GRADIENT: Record<PlantCategory, string> = {
  cactus: "from-[#e3ecd2] to-[#c3d8a6] dark:from-[#2b3420] dark:to-[#1c2416]",
  succulente:
    "from-[#dde8d6] to-[#b7cdac] dark:from-[#25311f] dark:to-[#182015]",
  palmier: "from-[#e2ecc9] to-[#c0d68d] dark:from-[#2c3517] dark:to-[#1e260f]",
  mediterraneenne:
    "from-[#e9e0c9] to-[#cdbb8e] dark:from-[#322a17] dark:to-[#241e10]",
  tropicale:
    "from-[#f0e2b8] to-[#dfc688] dark:from-[#3a3016] dark:to-[#2a2210]",
  japonaise:
    "from-[#f3dfe0] to-[#e0b9c2] dark:from-[#3a2429] dark:to-[#2a1a1e]",
  alpine: "from-[#dde7ee] to-[#b9cedd] dark:from-[#1e2a33] dark:to-[#141e26]",
  aromatique:
    "from-[#e6ecd0] to-[#c6d69f] dark:from-[#2c331b] dark:to-[#1d2411]",
  orchidee:
    "from-[#e3ddf0] to-[#c3b6e0] dark:from-[#241f38] dark:to-[#191529]",
  carnivore:
    "from-[#ece0d8] to-[#d3b8a4] dark:from-[#332720] dark:to-[#241a15]",
  aquatique:
    "from-[#d8eaea] to-[#a9d1cf] dark:from-[#1a2f2e] dark:to-[#11201f]",
  rosier: "from-[#f6dde0] to-[#eab8c2] dark:from-[#3a1f24] dark:to-[#2b171b]",
};
