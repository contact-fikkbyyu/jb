export type Rarity = "commune" | "peu-commune" | "rare" | "exceptionnelle";

export type PlantCategory =
  | "cactus"
  | "succulente"
  | "palmier"
  | "mediterraneenne"
  | "tropicale"
  | "japonaise"
  | "alpine"
  | "aromatique"
  | "orchidee"
  | "carnivore"
  | "aquatique"
  | "rosier";

export interface Plant {
  id: string;
  name: string;
  latinName: string;
  category: PlantCategory;
  funFact: string;
  rarity: Rarity;
  /** Emoji used as a lightweight illustration */
  emoji: string;
  /** Article title on fr.wikipedia.org, when known */
  wikipediaTitle?: string;
  /** Ids of real French gardens/parks where this plant can typically be observed */
  locationIds: string[];
}
