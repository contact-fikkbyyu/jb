export interface Location {
  id: string;
  name: string;
  city: string;
  lat: number;
  lng: number;
  description: string;
}

export const locations: Location[] = [
  {
    id: "paris-jdp",
    name: "Jardin des Plantes",
    city: "Paris",
    lat: 48.8438,
    lng: 2.3574,
    description:
      "Jardin botanique historique fondé en 1626, avec serres, jardin alpin et roseraie.",
  },
  {
    id: "lyon-tdo",
    name: "Parc de la Tête d'Or",
    city: "Lyon",
    lat: 45.7797,
    lng: 4.8509,
    description:
      "Grand jardin botanique avec serres tropicales et une roseraie réputée.",
  },
  {
    id: "marseille-borely",
    name: "Jardin Botanique du Parc Borély",
    city: "Marseille",
    lat: 43.2679,
    lng: 5.3811,
    description:
      "Jardin méditerranéen et collection de cactées créés en 1913.",
  },
  {
    id: "eze-exotique",
    name: "Jardin Exotique d'Èze",
    city: "Èze",
    lat: 43.6524,
    lng: 7.3616,
    description:
      "Jardin de cactus et succulentes perché sur un piton rocheux dominant la Méditerranée.",
  },
  {
    id: "menton-madone",
    name: "Serre de la Madone",
    city: "Menton",
    lat: 43.7776,
    lng: 7.4967,
    description:
      "Jardin méditerranéen en terrasses, l'un des plus riches d'Europe pour les plantes exotiques.",
  },
  {
    id: "maulevrier-oriental",
    name: "Parc Oriental de Maulévrier",
    city: "Maulévrier",
    lat: 47.1102,
    lng: -0.6967,
    description: "Le plus grand jardin japonais d'Europe.",
  },
  {
    id: "montpellier-jdp",
    name: "Jardin des Plantes de Montpellier",
    city: "Montpellier",
    lat: 43.6119,
    lng: 3.8722,
    description: "Le plus ancien jardin botanique de France, fondé en 1593.",
  },
  {
    id: "brest-cbn",
    name: "Conservatoire Botanique National",
    city: "Brest",
    lat: 48.4147,
    lng: -4.4676,
    description:
      "Conservatoire dédié à la sauvegarde des plantes rares et menacées.",
  },
  {
    id: "lautaret",
    name: "Jardin du Lautaret",
    city: "Col du Lautaret",
    lat: 45.0392,
    lng: 6.4075,
    description:
      "Jardin botanique alpin à plus de 2000 m d'altitude, dans les Hautes-Alpes.",
  },
  {
    id: "giverny",
    name: "Jardin d'Eau de Giverny",
    city: "Giverny",
    lat: 49.0759,
    lng: 1.5326,
    description:
      "Le jardin d'eau et ses nymphéas qui ont inspiré Claude Monet.",
  },
  {
    id: "vincennes-floral",
    name: "Parc Floral de Paris",
    city: "Paris (Vincennes)",
    lat: 48.8296,
    lng: 2.4325,
    description: "Grand parc floral avec bambouseraie et jardin aquatique.",
  },
  {
    id: "nancy-jdb",
    name: "Jardin Botanique du Montet",
    city: "Nancy",
    lat: 48.6634,
    lng: 6.1625,
    description: "Jardin botanique universitaire riche en collections variées.",
  },
  {
    id: "rothschild-ephrussi",
    name: "Villa Ephrussi de Rothschild",
    city: "Saint-Jean-Cap-Ferrat",
    lat: 43.6935,
    lng: 7.3298,
    description: "Jardins exotiques en terrasses surplombant la Méditerranée.",
  },
  {
    id: "rayol",
    name: "Domaine du Rayol",
    city: "Rayol-Canadel-sur-Mer",
    lat: 43.1667,
    lng: 6.4667,
    description:
      "Jardin des Méditerranées du monde, en bord de mer sur la Côte d'Azur.",
  },
];

export function findLocation(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}

/** Great-circle distance in kilometres between two points. */
export function distanceKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
