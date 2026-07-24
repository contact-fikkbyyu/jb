import type { Garden, Plant, Zone } from "../types";

export const gardens: Garden[] = [
  {
    id: "jardin-des-plantes",
    name: "Jardin des Plantes",
    city: "Paris",
    description:
      "Fondé en 1626 comme jardin royal des plantes médicinales, c'est l'un des plus anciens jardins botaniques de France.",
    zones: [
      {
        id: "serre-succulentes",
        name: "Serre des Succulentes et Cactus",
        type: "succulentes",
        description:
          "Une serre aride qui rassemble des plantes grasses venues des déserts du monde entier.",
        plants: [
          {
            id: "welwitschia-mirabilis",
            name: "Welwitschia",
            latinName: "Welwitschia mirabilis",
            emoji: "🌵",
            rarity: "rare",
            funFact:
              "Cette plante du désert du Namib ne possède que deux feuilles... qui poussent en continu pendant toute sa vie, sans jamais tomber ! Certains individus sont estimés à plus de 1500 ans.",
          },
          {
            id: "lithops",
            name: "Lithops (plante caillou)",
            latinName: "Lithops sp.",
            emoji: "🪨",
            rarity: "peu-commune",
            funFact:
              "Surnommée « plante caillou », elle imite la couleur et la texture des pierres environnantes pour échapper aux herbivores. Difficile de la repérer sans la connaître !",
          },
          {
            id: "astrophytum-asterias",
            name: "Cactus étoile de mer",
            latinName: "Astrophytum asterias",
            emoji: "⭐",
            rarity: "rare",
            funFact:
              "Sa forme parfaitement étoilée et sans épines en fait l'un des cactus les plus recherchés (et braconnés) au monde, au point d'être protégé par la convention CITES.",
          },
          {
            id: "echinocactus-grusonii",
            name: "Coussin de belle-mère",
            latinName: "Echinocactus grusonii",
            emoji: "🌵",
            rarity: "commune",
            funFact:
              "Ce gros cactus rond peut vivre plus de 100 ans et atteindre la taille d'un homme. Il est aujourd'hui quasi éteint à l'état sauvage au Mexique, mais très cultivé partout ailleurs.",
          },
          {
            id: "opuntia-figuier-barbarie",
            name: "Figuier de Barbarie",
            latinName: "Opuntia ficus-indica",
            emoji: "🌵",
            rarity: "commune",
            funFact:
              "Ses raquettes sont couvertes de minuscules touffes de poils crochus, les glochides, bien plus irritantes que les grandes épines visibles. Son fruit sucré est consommé depuis des siècles autour de la Méditerranée.",
          },
        ],
      },
      {
        id: "jardin-alpin",
        name: "Jardin Alpin",
        type: "alpin",
        description:
          "Un jardin en rocaille qui recrée les conditions de haute montagne pour des plantes habituées au froid et à l'altitude.",
        plants: [
          {
            id: "edelweiss",
            name: "Edelweiss",
            latinName: "Leontopodium alpinum",
            emoji: "🌼",
            rarity: "rare",
            funFact:
              "Son duvet blanc n'est pas décoratif : il filtre les rayons ultraviolets intenses de l'altitude, comme une crème solaire naturelle. Cueillir l'edelweiss sauvage est interdit dans les Alpes.",
          },
          {
            id: "gentiane",
            name: "Grande Gentiane",
            latinName: "Gentiana lutea",
            emoji: "💛",
            rarity: "peu-commune",
            funFact:
              "Sa racine, extrêmement amère, met plus de 10 ans à se développer avant que la plante ne fleurisse pour la première fois.",
          },
          {
            id: "saxifrage",
            name: "Saxifrage",
            latinName: "Saxifraga sp.",
            emoji: "🌸",
            rarity: "commune",
            funFact:
              "Son nom signifie littéralement « qui brise la roche » en latin : ses racines s'infiltrent dans les moindres fissures des falaises pour s'y accrocher.",
          },
          {
            id: "androsace",
            name: "Androsace",
            latinName: "Androsace alpina",
            emoji: "🌷",
            rarity: "rare",
            funFact:
              "Elle pousse en coussins denses jusqu'à plus de 4000 m d'altitude, l'une des altitudes les plus élevées jamais atteintes par une plante à fleurs en Europe.",
          },
          {
            id: "genepi",
            name: "Génépi",
            latinName: "Artemisia genepi",
            emoji: "🌿",
            rarity: "rare",
            funFact:
              "Cette petite plante argentée, cueillie traditionnellement à plus de 2500 m, donne la célèbre liqueur du même nom. Sa cueillette sauvage est aujourd'hui strictement réglementée dans les Alpes.",
          },
        ],
      },
      {
        id: "roseraie",
        name: "Roseraie",
        type: "roseraie",
        description:
          "Des centaines de variétés de roses, anciennes et modernes, cultivées pour leur parfum autant que pour leur histoire.",
        plants: [
          {
            id: "rosa-peace",
            name: "Rose 'Peace'",
            latinName: "Rosa 'Peace'",
            emoji: "🌹",
            rarity: "commune",
            funFact:
              "Créée en France juste avant la Seconde Guerre mondiale, cette rose a été baptisée « Peace » et distribuée aux délégués de l'ONU le jour même de la capitulation du Japon en 1945.",
          },
          {
            id: "rosa-gallica",
            name: "Rose des Apothicaires",
            latinName: "Rosa gallica officinalis",
            emoji: "🌹",
            rarity: "peu-commune",
            funFact:
              "Utilisée depuis le Moyen Âge en pharmacie pour ses vertus médicinales, elle est aussi appelée « Rose de Provins » et a longtemps servi à fabriquer confitures et sirops.",
          },
          {
            id: "rosa-chinensis",
            name: "Rosier de Chine",
            latinName: "Rosa chinensis",
            emoji: "🌸",
            rarity: "peu-commune",
            funFact:
              "Importé d'Asie en Europe au XVIIIe siècle, il a révolutionné l'horticulture en apportant aux rosiers occidentaux la capacité de refleurir plusieurs fois par an.",
          },
          {
            id: "rosa-banksiae",
            name: "Rosier de Banks",
            latinName: "Rosa banksiae",
            emoji: "🤍",
            rarity: "exceptionnelle",
            funFact:
              "Un unique pied planté en 1885 à Tombstone, en Arizona, a formé le plus grand rosier du monde : son tronc mesure plus de 3,7 m de circonférence et il couvre près de 740 m².",
          },
          {
            id: "rosa-souvenir-malmaison",
            name: "Rose 'Souvenir de la Malmaison'",
            latinName: "Rosa 'Souvenir de la Malmaison'",
            emoji: "🌸",
            rarity: "peu-commune",
            funFact:
              "Créée en 1843, elle rend hommage au château de la Malmaison où l'impératrice Joséphine rassembla, au début du XIXe siècle, l'une des toutes premières grandes collections de roses au monde.",
          },
        ],
      },
    ],
  },
  {
    id: "jardin-botanique-lyon",
    name: "Jardin Botanique du Parc de la Tête d'Or",
    city: "Lyon",
    description:
      "Un des plus grands jardins botaniques de France, réputé pour ses serres tropicales et sa collection de plantes du monde entier.",
    zones: [
      {
        id: "serre-tropicale-africaine",
        name: "Serre Tropicale Africaine",
        type: "tropicale-africaine",
        description:
          "Une immersion dans la végétation luxuriante et les plantes emblématiques du continent africain.",
        plants: [
          {
            id: "encephalartos-woodii",
            name: "Cycas de Wood",
            latinName: "Encephalartos woodii",
            emoji: "🌴",
            rarity: "exceptionnelle",
            funFact:
              "C'est probablement la plante la plus rare du monde : un seul pied mâle a jamais été découvert, en Afrique du Sud en 1895. Aucune femelle n'a jamais été trouvée, l'espèce est donc éteinte à l'état sauvage.",
          },
          {
            id: "baobab",
            name: "Baobab",
            latinName: "Adansonia digitata",
            emoji: "🌳",
            rarity: "peu-commune",
            funFact:
              "Surnommé « l'arbre bouteille », il peut stocker jusqu'à 120 000 litres d'eau dans son tronc et vivre plus de 1000 ans.",
          },
          {
            id: "strelitzia",
            name: "Oiseau de paradis",
            latinName: "Strelitzia reginae",
            emoji: "🦜",
            rarity: "commune",
            funFact:
              "Sa fleur, en forme de tête d'oiseau exotique, est pollinisée par des oiseaux-soleils qui se posent sur elle : leur poids fait s'ouvrir les pétales pour libérer le pollen.",
          },
          {
            id: "euphorbia-trigona",
            name: "Cactus Cathédrale",
            latinName: "Euphorbia trigona",
            emoji: "🌵",
            rarity: "commune",
            funFact:
              "Malgré son allure, ce n'est pas un cactus mais une euphorbe : sa sève blanche et laiteuse est irritante, voire toxique au contact de la peau ou des yeux.",
          },
          {
            id: "sansevieria",
            name: "Langue de belle-mère",
            latinName: "Sansevieria trifasciata",
            emoji: "🪴",
            rarity: "commune",
            funFact:
              "Contrairement à la plupart des plantes, elle continue de libérer de l'oxygène la nuit. Une étude de la NASA l'a classée parmi les meilleures plantes pour purifier l'air intérieur.",
          },
        ],
      },
      {
        id: "jardin-japonais",
        name: "Jardin Japonais",
        type: "japonais",
        description:
          "Un espace de contemplation inspiré des jardins traditionnels japonais, pensé pour évoluer au fil des saisons.",
        plants: [
          {
            id: "ginkgo-biloba",
            name: "Ginkgo",
            latinName: "Ginkgo biloba",
            emoji: "🍃",
            rarity: "peu-commune",
            funFact:
              "Surnommé « fossile vivant », le ginkgo existe sous une forme quasi inchangée depuis plus de 200 millions d'années. Six pieds ont même survécu à l'explosion atomique d'Hiroshima, à moins de 2 km de l'épicentre, et vivent toujours aujourd'hui.",
          },
          {
            id: "erable-japon",
            name: "Érable du Japon",
            latinName: "Acer palmatum",
            emoji: "🍁",
            rarity: "commune",
            funFact:
              "Ses feuilles peuvent virer au rouge écarlate en automne grâce à des pigments (anthocyanes) produits uniquement quand les nuits fraîchissent et que les journées restent lumineuses.",
          },
          {
            id: "cerisier-japon",
            name: "Cerisier du Japon",
            latinName: "Prunus serrulata",
            emoji: "🌸",
            rarity: "commune",
            funFact:
              "Sa floraison, le fameux « hanami », ne dure en moyenne qu'une à deux semaines par an au Japon, ce qui en fait un symbole de la beauté éphémère dans la culture japonaise.",
          },
          {
            id: "pin-noir-japon",
            name: "Pin Noir du Japon",
            latinName: "Pinus thunbergii",
            emoji: "🌲",
            rarity: "peu-commune",
            funFact:
              "C'est l'une des essences favorites de l'art du bonsaï : certains spécimens miniaturisés sont entretenus par la même famille depuis plus de 400 ans, de génération en génération.",
          },
          {
            id: "bambou-moso",
            name: "Bambou Moso",
            latinName: "Phyllostachys edulis",
            emoji: "🎋",
            rarity: "peu-commune",
            funFact:
              "C'est la plante à la croissance la plus rapide connue au monde : dans des conditions idéales, une pousse peut grandir de près d'un mètre en une seule journée.",
          },
        ],
      },
      {
        id: "serre-orchidees",
        name: "Serre aux Orchidées",
        type: "orchidees",
        description:
          "Une collection d'orchidées tropicales aux formes et couleurs spectaculaires, entre espèces communes et raretés botaniques.",
        plants: [
          {
            id: "vanilla-planifolia",
            name: "Vanillier",
            latinName: "Vanilla planifolia",
            emoji: "🌿",
            rarity: "peu-commune",
            funFact:
              "La vanille, deuxième épice la plus chère au monde après le safran, est en réalité le fruit d'une orchidée grimpante. Chaque fleur doit être pollinisée à la main en dehors du Mexique, son pays d'origine.",
          },
          {
            id: "vanda-coerulea",
            name: "Orchidée bleue",
            latinName: "Vanda coerulea",
            emoji: "💠",
            rarity: "rare",
            funFact:
              "Le bleu est la couleur la plus rare chez les orchidées. Cette espèce himalayenne a été si intensément collectée au XIXe siècle qu'elle est aujourd'hui protégée par la loi dans son habitat naturel.",
          },
          {
            id: "paphiopedilum",
            name: "Sabot de Vénus",
            latinName: "Paphiopedilum sp.",
            emoji: "👑",
            rarity: "rare",
            funFact:
              "Sa fleur en forme de pantoufle piège momentanément les insectes pollinisateurs à l'intérieur, les forçant à ressortir couverts de pollen par un unique passage étroit.",
          },
          {
            id: "phalaenopsis",
            name: "Orchidée Papillon",
            latinName: "Phalaenopsis sp.",
            emoji: "🦋",
            rarity: "commune",
            funFact:
              "C'est l'orchidée la plus vendue au monde en pot. Son nom vient du grec « qui ressemble à un papillon de nuit », à cause de la forme de ses fleurs.",
          },
          {
            id: "orchidee-fantome",
            name: "Orchidée fantôme",
            latinName: "Dendrophylax lindenii",
            emoji: "👻",
            rarity: "exceptionnelle",
            funFact:
              "Sans feuilles ni tige visibles, elle photosynthétise uniquement grâce à ses racines vertes accrochées aux arbres, et semble flotter dans les airs quand elle fleurit. Sa rareté a inspiré le livre puis le film « Adaptation ».",
          },
        ],
      },
    ],
  },
  {
    id: "jardin-botanique-marseille",
    name: "Jardin Botanique du Parc Borély",
    city: "Marseille",
    description:
      "Créé en 1913 au cœur du parc Borély, ce jardin marie une flore méditerranéenne préservée à des collections exotiques rapportées par les grands explorateurs du siècle dernier.",
    zones: [
      {
        id: "jardin-mediterraneen",
        name: "Jardin Méditerranéen",
        type: "mediterraneen",
        description:
          "Les essences emblématiques du pourtour méditerranéen, façonnées par le soleil, le vent et la sécheresse estivale.",
        plants: [
          {
            id: "olivier",
            name: "Olivier",
            latinName: "Olea europaea",
            emoji: "🫒",
            rarity: "commune",
            funFact:
              "Certains oliviers méditerranéens ont plus de 1000 ans et continuent de produire des fruits. Symbole de paix depuis l'Antiquité, l'olivier peut repartir de sa souche même après avoir été coupé ou brûlé.",
          },
          {
            id: "chene-kermes",
            name: "Chêne Kermès",
            latinName: "Quercus coccifera",
            emoji: "🌳",
            rarity: "peu-commune",
            funFact:
              "Ce petit chêne buissonnant doit son nom à la cochenille du kermès, un insecte qui vivait sur ses feuilles et dont on extrayait, avant l'arrivée des teintures venues d'Amérique, le seul rouge écarlate connu en Europe.",
          },
          {
            id: "ciste-montpellier",
            name: "Ciste de Montpellier",
            latinName: "Cistus monspeliensis",
            emoji: "🌸",
            rarity: "peu-commune",
            funFact:
              "Ses feuilles collantes sécrètent une résine parfumée, le ladanum, utilisée en parfumerie depuis l'Égypte antique. Ses graines, elles, ont besoin de la chaleur d'un incendie pour germer.",
          },
          {
            id: "caroubier",
            name: "Caroubier",
            latinName: "Ceratonia siliqua",
            emoji: "🌰",
            rarity: "rare",
            funFact:
              "Les graines du caroubier ont un poids si remarquablement constant qu'elles ont servi pendant des siècles d'unité de référence pour peser l'or et les pierres précieuses : le carat tire directement son nom de cet arbre.",
          },
        ],
      },
      {
        id: "serre-explorateurs",
        name: "Serre des Explorateurs",
        type: "exotique",
        description:
          "Un voyage sous verre parmi les plantes rapportées par les botanistes voyageurs des XIXe et XXe siècles.",
        plants: [
          {
            id: "bananier",
            name: "Bananier",
            latinName: "Musa sp.",
            emoji: "🍌",
            rarity: "commune",
            funFact:
              "Le bananier n'est pas un arbre mais la plus grande herbe du monde : son « tronc » n'est en réalité qu'un empilement de gaines de feuilles, et la banane, botaniquement, est classée comme une baie.",
          },
          {
            id: "papyrus",
            name: "Papyrus",
            latinName: "Cyperus papyrus",
            emoji: "🌾",
            rarity: "peu-commune",
            funFact:
              "En tressant et pressant la moelle de sa tige, les Égyptiens de l'Antiquité fabriquaient le tout premier support d'écriture léger et transportable de l'histoire, qui a donné son nom au mot « papier ».",
          },
          {
            id: "arbre-du-voyageur",
            name: "Arbre du voyageur",
            latinName: "Ravenala madagascariensis",
            emoji: "🌴",
            rarity: "rare",
            funFact:
              "Ni palmier ni bananier, cet arbre originaire de Madagascar déploie ses feuilles en éventail parfait. Les bases de ses feuilles retiennent l'eau de pluie, une réserve où les voyageurs assoiffés pouvaient autrefois puiser, d'où son nom.",
          },
          {
            id: "monstera-deliciosa",
            name: "Monstera",
            latinName: "Monstera deliciosa",
            emoji: "🌿",
            rarity: "commune",
            funFact:
              "Les trous caractéristiques de ses feuilles ne sont pas décoratifs : ils laissent passer la lumière vers les feuilles inférieures et permettent aux vents tropicaux violents de traverser le feuillage sans le déchirer.",
          },
        ],
      },
      {
        id: "collection-cactees",
        name: "Collection de Cactées",
        type: "succulentes",
        description:
          "Une des plus anciennes collections de cactus et plantes grasses de France, rassemblée depuis le début du XXe siècle.",
        plants: [
          {
            id: "cierge-perou",
            name: "Cierge du Pérou",
            latinName: "Cereus repandus",
            emoji: "🌵",
            rarity: "peu-commune",
            funFact:
              "Ce cactus colonnaire peut dépasser 10 mètres de haut et se ramifier comme un candélabre. Ses fleurs blanches, spectaculaires, ne s'ouvrent qu'une seule nuit par an pour être pollinisées par des chauves-souris.",
          },
          {
            id: "opuntia-oreilles-lapin",
            name: "Oreilles de lapin",
            latinName: "Opuntia microdasys",
            emoji: "🐰",
            rarity: "commune",
            funFact:
              "Ses raquettes, douces en apparence, sont couvertes de minuscules glochides à peine visibles, bien plus difficiles à retirer de la peau que de véritables épines.",
          },
          {
            id: "ferocactus",
            name: "Cactus Tonneau",
            latinName: "Ferocactus sp.",
            emoji: "🛢️",
            rarity: "rare",
            funFact:
              "Certains individus poussent légèrement inclinés vers le sud, ce qui leur a valu le surnom de « boussole du désert » chez les voyageurs qui s'en servaient autrefois pour s'orienter.",
          },
          {
            id: "espostoa",
            name: "Cactus Vieil Homme",
            latinName: "Espostoa lanata",
            emoji: "🧊",
            rarity: "rare",
            funFact:
              "Sa toison blanche et laineuse n'est pas qu'esthétique : elle protège la plante des rayons ultraviolets intenses et des nuits glaciales des Andes, où elle pousse parfois à plus de 3000 m d'altitude.",
          },
        ],
      },
    ],
  },
];

export function findGarden(gardenId: string): Garden | undefined {
  return gardens.find((g) => g.id === gardenId);
}

export function findZone(
  gardenId: string,
  zoneId: string,
): { garden: Garden; zone: Zone } | undefined {
  const garden = findGarden(gardenId);
  const zone = garden?.zones.find((z) => z.id === zoneId);
  if (!garden || !zone) return undefined;
  return { garden, zone };
}

export function findPlant(
  plantId: string,
): { garden: Garden; zone: Zone; plant: Plant } | undefined {
  for (const garden of gardens) {
    for (const zone of garden.zones) {
      const plant = zone.plants.find((p) => p.id === plantId);
      if (plant) return { garden, zone, plant };
    }
  }
  return undefined;
}

export function getAllPlants(): { garden: Garden; zone: Zone; plant: Plant }[] {
  return gardens.flatMap((garden) =>
    garden.zones.flatMap((zone) =>
      zone.plants.map((plant) => ({ garden, zone, plant })),
    ),
  );
}

export function searchPlants(
  query: string,
): { garden: Garden; zone: Zone; plant: Plant }[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllPlants().filter(
    ({ plant }) =>
      plant.name.toLowerCase().includes(q) ||
      plant.latinName.toLowerCase().includes(q),
  );
}
