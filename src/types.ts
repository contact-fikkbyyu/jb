export type Rarity = "commune" | "peu-commune" | "rare" | "exceptionnelle";

export type ZoneType =
  | "succulentes"
  | "tropicale-africaine"
  | "japonais"
  | "roseraie"
  | "alpin"
  | "orchidees"
  | "mediterraneen"
  | "exotique";

export interface Plant {
  id: string;
  name: string;
  latinName: string;
  funFact: string;
  rarity: Rarity;
  /** Emoji used as a lightweight illustration */
  emoji: string;
}

export interface Zone {
  id: string;
  name: string;
  type: ZoneType;
  description: string;
  plants: Plant[];
}

export interface Garden {
  id: string;
  name: string;
  city: string;
  description: string;
  zones: Zone[];
}
