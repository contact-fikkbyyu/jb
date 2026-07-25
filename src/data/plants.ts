import type { Plant } from "../types";

export const plants: Plant[] = [
  // --- Succulentes ---
  {
    id: "welwitschia-mirabilis",
    name: "Welwitschia",
    latinName: "Welwitschia mirabilis",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🌵",
    rarity: "rare",
    wikipediaTitle: "Welwitschia mirabilis",
    funFact:
      "Cette plante du désert du Namib ne possède que deux feuilles... qui poussent en continu pendant toute sa vie, sans jamais tomber ! Certains individus sont estimés à plus de 1500 ans.",
  },
  {
    id: "lithops",
    name: "Lithops (plante caillou)",
    latinName: "Lithops sp.",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🪨",
    rarity: "peu-commune",
    wikipediaTitle: "Lithops",
    funFact:
      "Surnommée « plante caillou », elle imite la couleur et la texture des pierres environnantes pour échapper aux herbivores. Difficile de la repérer sans la connaître !",
  },
  {
    id: "euphorbia-trigona",
    name: "Cactus Cathédrale",
    latinName: "Euphorbia trigona",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🌵",
    rarity: "commune",
    wikipediaTitle: "Euphorbia trigona",
    funFact:
      "Malgré son allure, ce n'est pas un cactus mais une euphorbe : sa sève blanche et laiteuse est irritante, voire toxique au contact de la peau ou des yeux.",
  },
  {
    id: "sansevieria",
    name: "Langue de belle-mère",
    latinName: "Sansevieria trifasciata",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🪴",
    rarity: "commune",
    wikipediaTitle: "Sansevieria trifasciata",
    funFact:
      "Contrairement à la plupart des plantes, elle continue de libérer de l'oxygène la nuit. Une étude de la NASA l'a classée parmi les meilleures plantes pour purifier l'air intérieur.",
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    latinName: "Aloe vera",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🪴",
    rarity: "commune",
    wikipediaTitle: "Aloe vera",
    funFact:
      "Les Égyptiens de l'Antiquité la surnommaient déjà « la plante de l'immortalité » et l'offraient aux pharaons défunts. Le gel contenu dans ses feuilles est composé à plus de 98 % d'eau.",
  },

  // --- Cactées ---
  {
    id: "astrophytum-asterias",
    name: "Cactus étoile de mer",
    latinName: "Astrophytum asterias",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol", "marseille-borely"],
    emoji: "⭐",
    rarity: "rare",
    wikipediaTitle: "Astrophytum asterias",
    funFact:
      "Sa forme parfaitement étoilée et sans épines en fait l'un des cactus les plus recherchés (et braconnés) au monde, au point d'être protégé par la convention CITES.",
  },
  {
    id: "echinocactus-grusonii",
    name: "Coussin de belle-mère",
    latinName: "Echinocactus grusonii",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol", "marseille-borely"],
    emoji: "🌵",
    rarity: "commune",
    wikipediaTitle: "Echinocactus grusonii",
    funFact:
      "Ce gros cactus rond peut vivre plus de 100 ans et atteindre la taille d'un homme. Il est aujourd'hui quasi éteint à l'état sauvage au Mexique, mais très cultivé partout ailleurs.",
  },
  {
    id: "opuntia-figuier-barbarie",
    name: "Figuier de Barbarie",
    latinName: "Opuntia ficus-indica",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol", "marseille-borely"],
    emoji: "🌵",
    rarity: "commune",
    wikipediaTitle: "Figuier de Barbarie",
    funFact:
      "Ses raquettes sont couvertes de minuscules touffes de poils crochus, les glochides, bien plus irritantes que les grandes épines visibles. Son fruit sucré est consommé depuis des siècles autour de la Méditerranée.",
  },
  {
    id: "cierge-perou",
    name: "Cierge du Pérou",
    latinName: "Cereus repandus",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol", "marseille-borely"],
    emoji: "🌵",
    rarity: "peu-commune",
    wikipediaTitle: "Cereus repandus",
    funFact:
      "Ce cactus colonnaire peut dépasser 10 mètres de haut et se ramifier comme un candélabre. Ses fleurs blanches, spectaculaires, ne s'ouvrent qu'une seule nuit par an pour être pollinisées par des chauves-souris.",
  },
  {
    id: "opuntia-oreilles-lapin",
    name: "Oreilles de lapin",
    latinName: "Opuntia microdasys",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol", "marseille-borely"],
    emoji: "🐰",
    rarity: "commune",
    wikipediaTitle: "Opuntia microdasys",
    funFact:
      "Ses raquettes, douces en apparence, sont couvertes de minuscules glochides à peine visibles, bien plus difficiles à retirer de la peau que de véritables épines.",
  },
  {
    id: "ferocactus",
    name: "Cactus Tonneau",
    latinName: "Ferocactus sp.",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol", "marseille-borely"],
    emoji: "🛢️",
    rarity: "rare",
    wikipediaTitle: "Ferocactus",
    funFact:
      "Certains individus poussent légèrement inclinés vers le sud, ce qui leur a valu le surnom de « boussole du désert » chez les voyageurs qui s'en servaient autrefois pour s'orienter.",
  },
  {
    id: "espostoa",
    name: "Cactus Vieil Homme",
    latinName: "Espostoa lanata",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol", "marseille-borely"],
    emoji: "🧊",
    rarity: "rare",
    wikipediaTitle: "Espostoa lanata",
    funFact:
      "Sa toison blanche et laineuse n'est pas qu'esthétique : elle protège la plante des rayons ultraviolets intenses et des nuits glaciales des Andes, où elle pousse parfois à plus de 3000 m d'altitude.",
  },
  {
    id: "saguaro",
    name: "Saguaro",
    latinName: "Carnegiea gigantea",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol", "marseille-borely"],
    emoji: "🌵",
    rarity: "rare",
    wikipediaTitle: "Saguaro",
    funFact:
      "Symbole du désert de Sonora, il peut vivre plus de 150 ans mais ne développe son premier « bras » qu'à partir de 75 ans environ. Un individu adulte gorgé d'eau peut peser plus d'une tonne.",
  },

  // --- Palmiers ---
  {
    id: "palmier-dattier",
    name: "Palmier dattier",
    latinName: "Phoenix dactylifera",
    category: "palmier",
    locationIds: ["rothschild-ephrussi", "rayol", "eze-exotique"],
    emoji: "🌴",
    rarity: "commune",
    wikipediaTitle: "Dattier",
    funFact:
      "Cultivé depuis plus de 5000 ans au Moyen-Orient, un seul palmier femelle adulte peut produire plus de 100 kg de dattes par an, et vivre lui-même plus d'un siècle.",
  },
  {
    id: "cocotier",
    name: "Cocotier",
    latinName: "Cocos nucifera",
    category: "palmier",
    locationIds: ["rothschild-ephrussi", "rayol", "eze-exotique"],
    emoji: "🥥",
    rarity: "commune",
    wikipediaTitle: "Cocotier",
    funFact:
      "La noix de coco est la plus grosse graine du monde. Étanche et flottante, elle peut dériver pendant des mois en pleine mer et germer intacte des milliers de kilomètres plus loin, sur une autre île.",
  },
  {
    id: "palmier-bleu-mexique",
    name: "Palmier bleu du Mexique",
    latinName: "Brahea armata",
    category: "palmier",
    locationIds: ["rothschild-ephrussi", "rayol", "eze-exotique"],
    emoji: "🌴",
    rarity: "peu-commune",
    wikipediaTitle: "Brahea armata",
    funFact:
      "Ses palmes sont recouvertes d'une fine pellicule de cire naturelle qui leur donne un éclat bleu argenté saisissant, et lui permet de survivre à une sécheresse extrême.",
  },
  {
    id: "latanier-rouge",
    name: "Latanier rouge",
    latinName: "Latania lontaroides",
    category: "palmier",
    locationIds: ["rothschild-ephrussi", "rayol", "eze-exotique"],
    emoji: "🌴",
    rarity: "rare",
    wikipediaTitle: "Latania lontaroides",
    funFact:
      "Endémique de l'île de La Réunion, il ne subsiste plus qu'à quelques centaines d'exemplaires sauvages, ce qui en fait l'un des palmiers les plus menacés de la planète.",
  },

  // --- Méditerranéenne ---
  {
    id: "olivier",
    name: "Olivier",
    latinName: "Olea europaea",
    category: "mediterraneenne",
    locationIds: ["menton-madone", "montpellier-jdp", "rayol"],
    emoji: "🫒",
    rarity: "commune",
    wikipediaTitle: "Olivier",
    funFact:
      "Certains oliviers méditerranéens ont plus de 1000 ans et continuent de produire des fruits. Symbole de paix depuis l'Antiquité, l'olivier peut repartir de sa souche même après avoir été coupé ou brûlé.",
  },
  {
    id: "chene-kermes",
    name: "Chêne Kermès",
    latinName: "Quercus coccifera",
    category: "mediterraneenne",
    locationIds: ["menton-madone", "montpellier-jdp", "rayol"],
    emoji: "🌳",
    rarity: "peu-commune",
    wikipediaTitle: "Chêne kermès",
    funFact:
      "Ce petit chêne buissonnant doit son nom à la cochenille du kermès, un insecte qui vivait sur ses feuilles et dont on extrayait, avant l'arrivée des teintures venues d'Amérique, le seul rouge écarlate connu en Europe.",
  },
  {
    id: "ciste-montpellier",
    name: "Ciste de Montpellier",
    latinName: "Cistus monspeliensis",
    category: "mediterraneenne",
    locationIds: ["menton-madone", "montpellier-jdp", "rayol"],
    emoji: "🌸",
    rarity: "peu-commune",
    wikipediaTitle: "Ciste de Montpellier",
    funFact:
      "Ses feuilles collantes sécrètent une résine parfumée, le ladanum, utilisée en parfumerie depuis l'Égypte antique. Ses graines, elles, ont besoin de la chaleur d'un incendie pour germer.",
  },
  {
    id: "caroubier",
    name: "Caroubier",
    latinName: "Ceratonia siliqua",
    category: "mediterraneenne",
    locationIds: ["menton-madone", "montpellier-jdp", "rayol"],
    emoji: "🌰",
    rarity: "rare",
    wikipediaTitle: "Caroubier",
    funFact:
      "Les graines du caroubier ont un poids si remarquablement constant qu'elles ont servi pendant des siècles d'unité de référence pour peser l'or et les pierres précieuses : le carat tire directement son nom de cet arbre.",
  },
  {
    id: "laurier-rose",
    name: "Laurier-rose",
    latinName: "Nerium oleander",
    category: "mediterraneenne",
    locationIds: ["menton-madone", "montpellier-jdp", "rayol"],
    emoji: "🌸",
    rarity: "rare",
    wikipediaTitle: "Laurier-rose",
    funFact:
      "C'est l'une des plantes ornementales les plus toxiques au monde : des campeurs l'ayant utilisé, sans le savoir, comme brochette pour griller de la viande en sont morts empoisonnés.",
  },

  // --- Tropicale & exotique ---
  {
    id: "encephalartos-woodii",
    name: "Cycas de Wood",
    latinName: "Encephalartos woodii",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp", "rayol"],
    emoji: "🌴",
    rarity: "exceptionnelle",
    wikipediaTitle: "Encephalartos woodii",
    funFact:
      "C'est probablement la plante la plus rare du monde : un seul pied mâle a jamais été découvert, en Afrique du Sud en 1895. Aucune femelle n'a jamais été trouvée, l'espèce est donc éteinte à l'état sauvage.",
  },
  {
    id: "baobab",
    name: "Baobab",
    latinName: "Adansonia digitata",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp", "rayol"],
    emoji: "🌳",
    rarity: "peu-commune",
    wikipediaTitle: "Baobab",
    funFact:
      "Surnommé « l'arbre bouteille », il peut stocker jusqu'à 120 000 litres d'eau dans son tronc et vivre plus de 1000 ans.",
  },
  {
    id: "strelitzia",
    name: "Oiseau de paradis",
    latinName: "Strelitzia reginae",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp", "rayol"],
    emoji: "🦜",
    rarity: "commune",
    wikipediaTitle: "Strelitzia reginae",
    funFact:
      "Sa fleur, en forme de tête d'oiseau exotique, est pollinisée par des oiseaux-soleils qui se posent sur elle : leur poids fait s'ouvrir les pétales pour libérer le pollen.",
  },
  {
    id: "bananier",
    name: "Bananier",
    latinName: "Musa sp.",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp", "rayol"],
    emoji: "🍌",
    rarity: "commune",
    wikipediaTitle: "Bananier",
    funFact:
      "Le bananier n'est pas un arbre mais la plus grande herbe du monde : son « tronc » n'est en réalité qu'un empilement de gaines de feuilles, et la banane, botaniquement, est classée comme une baie.",
  },
  {
    id: "arbre-du-voyageur",
    name: "Arbre du voyageur",
    latinName: "Ravenala madagascariensis",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp", "rayol"],
    emoji: "🌴",
    rarity: "rare",
    wikipediaTitle: "Arbre du voyageur",
    funFact:
      "Ni palmier ni bananier, cet arbre originaire de Madagascar déploie ses feuilles en éventail parfait. Les bases de ses feuilles retiennent l'eau de pluie, une réserve où les voyageurs assoiffés pouvaient autrefois puiser, d'où son nom.",
  },
  {
    id: "monstera-deliciosa",
    name: "Monstera",
    latinName: "Monstera deliciosa",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp", "rayol"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Monstera deliciosa",
    funFact:
      "Les trous caractéristiques de ses feuilles ne sont pas décoratifs : ils laissent passer la lumière vers les feuilles inférieures et permettent aux vents tropicaux violents de traverser le feuillage sans le déchirer.",
  },
  {
    id: "hibiscus",
    name: "Hibiscus",
    latinName: "Hibiscus rosa-sinensis",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp", "rayol"],
    emoji: "🌺",
    rarity: "commune",
    wikipediaTitle: "Hibiscus rosa-sinensis",
    funFact:
      "On le surnomme parfois « rose d'un jour » : chacune de ses grandes fleurs flamboyantes ne s'épanouit que 24 heures avant de faner, remplacée dès le lendemain par une nouvelle.",
  },

  // --- Japonaise ---
  {
    id: "ginkgo-biloba",
    name: "Ginkgo",
    latinName: "Ginkgo biloba",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🍃",
    rarity: "peu-commune",
    wikipediaTitle: "Ginkgo biloba",
    funFact:
      "Surnommé « fossile vivant », le ginkgo existe sous une forme quasi inchangée depuis plus de 200 millions d'années. Six pieds ont même survécu à l'explosion atomique d'Hiroshima, à moins de 2 km de l'épicentre, et vivent toujours aujourd'hui.",
  },
  {
    id: "erable-japon",
    name: "Érable du Japon",
    latinName: "Acer palmatum",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🍁",
    rarity: "commune",
    wikipediaTitle: "Acer palmatum",
    funFact:
      "Ses feuilles peuvent virer au rouge écarlate en automne grâce à des pigments (anthocyanes) produits uniquement quand les nuits fraîchissent et que les journées restent lumineuses.",
  },
  {
    id: "cerisier-japon",
    name: "Cerisier du Japon",
    latinName: "Prunus serrulata",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🌸",
    rarity: "commune",
    wikipediaTitle: "Prunus serrulata",
    funFact:
      "Sa floraison, le fameux « hanami », ne dure en moyenne qu'une à deux semaines par an au Japon, ce qui en fait un symbole de la beauté éphémère dans la culture japonaise.",
  },
  {
    id: "pin-noir-japon",
    name: "Pin Noir du Japon",
    latinName: "Pinus thunbergii",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🌲",
    rarity: "peu-commune",
    wikipediaTitle: "Pinus thunbergii",
    funFact:
      "C'est l'une des essences favorites de l'art du bonsaï : certains spécimens miniaturisés sont entretenus par la même famille depuis plus de 400 ans, de génération en génération.",
  },
  {
    id: "bambou-moso",
    name: "Bambou Moso",
    latinName: "Phyllostachys edulis",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🎋",
    rarity: "peu-commune",
    wikipediaTitle: "Phyllostachys edulis",
    funFact:
      "C'est la plante à la croissance la plus rapide connue au monde : dans des conditions idéales, une pousse peut grandir de près d'un mètre en une seule journée.",
  },
  {
    id: "azalee-japon",
    name: "Azalée du Japon",
    latinName: "Rhododendron sp.",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🌸",
    rarity: "commune",
    wikipediaTitle: "Azalée",
    funFact:
      "Toutes les azalées sont en réalité des rhododendrons. Au Japon, l'art de leur taille en boules ou en nuages compactes, l'« o-karikomi », est pratiqué avec la même patience que celui des bonsaïs.",
  },

  // --- Alpine ---
  {
    id: "edelweiss",
    name: "Edelweiss",
    latinName: "Leontopodium alpinum",
    category: "alpine",
    locationIds: ["lautaret", "paris-jdp"],
    emoji: "🌼",
    rarity: "rare",
    wikipediaTitle: "Edelweiss",
    funFact:
      "Son duvet blanc n'est pas décoratif : il filtre les rayons ultraviolets intenses de l'altitude, comme une crème solaire naturelle. Cueillir l'edelweiss sauvage est interdit dans les Alpes.",
  },
  {
    id: "gentiane",
    name: "Grande Gentiane",
    latinName: "Gentiana lutea",
    category: "alpine",
    locationIds: ["lautaret", "paris-jdp"],
    emoji: "💛",
    rarity: "peu-commune",
    wikipediaTitle: "Gentiane jaune",
    funFact:
      "Sa racine, extrêmement amère, met plus de 10 ans à se développer avant que la plante ne fleurisse pour la première fois.",
  },
  {
    id: "saxifrage",
    name: "Saxifrage",
    latinName: "Saxifraga sp.",
    category: "alpine",
    locationIds: ["lautaret", "paris-jdp"],
    emoji: "🌸",
    rarity: "commune",
    wikipediaTitle: "Saxifraga",
    funFact:
      "Son nom signifie littéralement « qui brise la roche » en latin : ses racines s'infiltrent dans les moindres fissures des falaises pour s'y accrocher.",
  },
  {
    id: "androsace",
    name: "Androsace",
    latinName: "Androsace alpina",
    category: "alpine",
    locationIds: ["lautaret", "paris-jdp"],
    emoji: "🌷",
    rarity: "rare",
    wikipediaTitle: "Androsace alpina",
    funFact:
      "Elle pousse en coussins denses jusqu'à plus de 4000 m d'altitude, l'une des altitudes les plus élevées jamais atteintes par une plante à fleurs en Europe.",
  },
  {
    id: "genepi",
    name: "Génépi",
    latinName: "Artemisia genepi",
    category: "alpine",
    locationIds: ["lautaret", "paris-jdp"],
    emoji: "🌿",
    rarity: "rare",
    wikipediaTitle: "Génépi",
    funFact:
      "Cette petite plante argentée, cueillie traditionnellement à plus de 2500 m, donne la célèbre liqueur du même nom. Sa cueillette sauvage est aujourd'hui strictement réglementée dans les Alpes.",
  },

  // --- Aromatique & médicinale ---
  {
    id: "lavande",
    name: "Lavande vraie",
    latinName: "Lavandula angustifolia",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "💜",
    rarity: "commune",
    wikipediaTitle: "Lavande vraie",
    funFact:
      "Il faut environ 150 kg de fleurs de lavande pour produire un seul litre d'huile essentielle. Un hectare en fleur peut recevoir la visite de plusieurs millions de passages d'abeilles durant l'été.",
  },
  {
    id: "romarin",
    name: "Romarin",
    latinName: "Rosmarinus officinalis",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Romarin",
    funFact:
      "Son nom vient du latin « ros marinus », la rosée de la mer, car il pousse naturellement sur les falaises du littoral méditerranéen, arrosé par les embruns salés.",
  },
  {
    id: "menthe-poivree",
    name: "Menthe Poivrée",
    latinName: "Mentha × piperita",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "peu-commune",
    wikipediaTitle: "Menthe poivrée",
    funFact:
      "C'est un hybride naturel entre la menthe aquatique et la menthe verte, apparu en Angleterre au XVIIe siècle. Stérile, elle ne produit pas de graines viables : chaque plant vient d'un bouturage.",
  },
  {
    id: "absinthe",
    name: "Absinthe",
    latinName: "Artemisia absinthium",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "rare",
    wikipediaTitle: "Armoise absinthe",
    funFact:
      "La plante qui a donné son nom à la célèbre liqueur du XIXe siècle doit son amertume extrême à l'absinthine, l'une des substances les plus amères connues : la langue humaine la détecte à des concentrations infimes.",
  },

  // --- Orchidées ---
  {
    id: "vanilla-planifolia",
    name: "Vanillier",
    latinName: "Vanilla planifolia",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌿",
    rarity: "peu-commune",
    wikipediaTitle: "Vanillier",
    funFact:
      "La vanille, deuxième épice la plus chère au monde après le safran, est en réalité le fruit d'une orchidée grimpante. Chaque fleur doit être pollinisée à la main en dehors du Mexique, son pays d'origine.",
  },
  {
    id: "vanda-coerulea",
    name: "Orchidée bleue",
    latinName: "Vanda coerulea",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "💠",
    rarity: "rare",
    wikipediaTitle: "Vanda coerulea",
    funFact:
      "Le bleu est la couleur la plus rare chez les orchidées. Cette espèce himalayenne a été si intensément collectée au XIXe siècle qu'elle est aujourd'hui protégée par la loi dans son habitat naturel.",
  },
  {
    id: "paphiopedilum",
    name: "Sabot de Vénus",
    latinName: "Paphiopedilum sp.",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "👑",
    rarity: "rare",
    wikipediaTitle: "Paphiopedilum",
    funFact:
      "Sa fleur en forme de pantoufle piège momentanément les insectes pollinisateurs à l'intérieur, les forçant à ressortir couverts de pollen par un unique passage étroit.",
  },
  {
    id: "phalaenopsis",
    name: "Orchidée Papillon",
    latinName: "Phalaenopsis sp.",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🦋",
    rarity: "commune",
    wikipediaTitle: "Phalaenopsis",
    funFact:
      "C'est l'orchidée la plus vendue au monde en pot. Son nom vient du grec « qui ressemble à un papillon de nuit », à cause de la forme de ses fleurs.",
  },
  {
    id: "orchidee-fantome",
    name: "Orchidée fantôme",
    latinName: "Dendrophylax lindenii",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "👻",
    rarity: "exceptionnelle",
    wikipediaTitle: "Dendrophylax lindenii",
    funFact:
      "Sans feuilles ni tige visibles, elle photosynthétise uniquement grâce à ses racines vertes accrochées aux arbres, et semble flotter dans les airs quand elle fleurit. Sa rareté a inspiré le livre puis le film « Adaptation ».",
  },

  // --- Carnivore ---
  {
    id: "dionee",
    name: "Dionée attrape-mouche",
    latinName: "Dionaea muscipula",
    category: "carnivore",
    locationIds: ["brest-cbn", "paris-jdp"],
    emoji: "🪰",
    rarity: "peu-commune",
    wikipediaTitle: "Dionée attrape-mouche",
    funFact:
      "Son piège se referme en moins d'une seconde, mais seulement si deux poils sensitifs sont touchés à environ 20 secondes d'intervalle : un mécanisme qui lui évite de gaspiller son énergie sur une simple goutte de pluie.",
  },
  {
    id: "nepenthes",
    name: "Népenthès",
    latinName: "Nepenthes sp.",
    category: "carnivore",
    locationIds: ["brest-cbn", "paris-jdp"],
    emoji: "🏺",
    rarity: "rare",
    wikipediaTitle: "Nepenthes",
    funFact:
      "Certaines espèces produisent des urnes assez grandes pour noyer et digérer de petits rongeurs, voire occasionnellement des oiseaux ou des lézards tombés à l'intérieur.",
  },
  {
    id: "sarracenie",
    name: "Sarracénie",
    latinName: "Sarracenia sp.",
    category: "carnivore",
    locationIds: ["brest-cbn", "paris-jdp"],
    emoji: "🎺",
    rarity: "peu-commune",
    wikipediaTitle: "Sarracenia",
    funFact:
      "L'intérieur de ses feuilles tubulaires est tapissé de poils orientés vers le bas et d'une cire glissante : une fois entré, un insecte ne peut quasiment plus remonter vers la sortie.",
  },
  {
    id: "drosera",
    name: "Rossolis",
    latinName: "Drosera sp.",
    category: "carnivore",
    locationIds: ["brest-cbn", "paris-jdp"],
    emoji: "✨",
    rarity: "commune",
    wikipediaTitle: "Drosera",
    funFact:
      "Ses tentacules gluants, couverts de gouttelettes brillantes, se replient lentement sur les insectes capturés comme de minuscules doigts, en quelques minutes à quelques heures.",
  },

  // --- Aquatique ---
  {
    id: "victoria-amazonica",
    name: "Nénuphar géant d'Amazonie",
    latinName: "Victoria amazonica",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "🪷",
    rarity: "exceptionnelle",
    wikipediaTitle: "Victoria amazonica",
    funFact:
      "Ses feuilles peuvent dépasser 2,5 m de diamètre et supporter le poids d'un enfant sans couler, grâce à un réseau de nervures rigides sous la surface, qui a inspiré l'architecture du Crystal Palace à Londres.",
  },
  {
    id: "eichhornia",
    name: "Jacinthe d'eau",
    latinName: "Eichhornia crassipes",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "💧",
    rarity: "commune",
    wikipediaTitle: "Jacinthe d'eau",
    funFact:
      "C'est l'une des plantes à la reproduction la plus rapide au monde : sa population peut doubler en moins de deux semaines, ce qui en fait à la fois une plante ornementale prisée et une redoutable espèce envahissante.",
  },
  {
    id: "lotus-sacre",
    name: "Lotus Sacré",
    latinName: "Nelumbo nucifera",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "🪷",
    rarity: "peu-commune",
    wikipediaTitle: "Nelumbo nucifera",
    funFact:
      "Des graines de lotus retrouvées dans un lac asséché en Chine ont germé avec succès après avoir été datées au carbone 14 à plus de 1300 ans d'âge.",
  },
  {
    id: "papyrus",
    name: "Papyrus",
    latinName: "Cyperus papyrus",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "🌾",
    rarity: "peu-commune",
    wikipediaTitle: "Papyrus (plante)",
    funFact:
      "En tressant et pressant la moelle de sa tige, les Égyptiens de l'Antiquité fabriquaient le tout premier support d'écriture léger et transportable de l'histoire, qui a donné son nom au mot « papier ».",
  },

  // --- Roseraie ---
  {
    id: "rosa-peace",
    name: "Rose 'Peace'",
    latinName: "Rosa 'Peace'",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌹",
    rarity: "commune",
    wikipediaTitle: "Peace (rose)",
    funFact:
      "Créée en France juste avant la Seconde Guerre mondiale, cette rose a été baptisée « Peace » et distribuée aux délégués de l'ONU le jour même de la capitulation du Japon en 1945.",
  },
  {
    id: "rosa-gallica",
    name: "Rose des Apothicaires",
    latinName: "Rosa gallica officinalis",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌹",
    rarity: "peu-commune",
    wikipediaTitle: "Rosa gallica",
    funFact:
      "Utilisée depuis le Moyen Âge en pharmacie pour ses vertus médicinales, elle est aussi appelée « Rose de Provins » et a longtemps servi à fabriquer confitures et sirops.",
  },
  {
    id: "rosa-chinensis",
    name: "Rosier de Chine",
    latinName: "Rosa chinensis",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌸",
    rarity: "peu-commune",
    wikipediaTitle: "Rosa chinensis",
    funFact:
      "Importé d'Asie en Europe au XVIIIe siècle, il a révolutionné l'horticulture en apportant aux rosiers occidentaux la capacité de refleurir plusieurs fois par an.",
  },
  {
    id: "rosa-banksiae",
    name: "Rosier de Banks",
    latinName: "Rosa banksiae",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🤍",
    rarity: "exceptionnelle",
    wikipediaTitle: "Rosa banksiae",
    funFact:
      "Un unique pied planté en 1885 à Tombstone, en Arizona, a formé le plus grand rosier du monde : son tronc mesure plus de 3,7 m de circonférence et il couvre près de 740 m².",
  },
  {
    id: "rosa-souvenir-malmaison",
    name: "Rose 'Souvenir de la Malmaison'",
    latinName: "Rosa 'Souvenir de la Malmaison'",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌸",
    rarity: "peu-commune",
    wikipediaTitle: "Souvenir de la Malmaison",
    funFact:
      "Créée en 1843, elle rend hommage au château de la Malmaison où l'impératrice Joséphine rassembla, au début du XIXe siècle, l'une des toutes premières grandes collections de roses au monde.",
  },

  // --- Cactées (suite) ---
  {
    id: "peyotl",
    name: "Peyotl",
    latinName: "Lophophora williamsii",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🌵",
    rarity: "exceptionnelle",
    wikipediaTitle: "Peyotl",
    funFact:
      "Ce petit cactus sans épines pousse si lentement qu'il lui faut souvent plus de 15 ans pour fleurir pour la première fois. Utilisé rituellement depuis des millénaires en Amérique du Nord, il est aujourd'hui menacé par la surcueillette.",
  },
  {
    id: "mammillaria",
    name: "Mammillaria",
    latinName: "Mammillaria sp.",
    category: "cactus",
    locationIds: ["eze-exotique", "marseille-borely"],
    emoji: "🌵",
    rarity: "commune",
    wikipediaTitle: "Mammillaria",
    funFact:
      "Avec plus de 200 espèces, c'est l'un des plus grands genres de cactus. Ses tubercules sont disposés en spirales qui suivent presque toujours la célèbre suite de Fibonacci.",
  },
  {
    id: "trichocereus",
    name: "Cactus de San Pedro",
    latinName: "Trichocereus pachanoi",
    category: "cactus",
    locationIds: ["rayol", "eze-exotique"],
    emoji: "🌵",
    rarity: "peu-commune",
    wikipediaTitle: "Trichocereus pachanoi",
    funFact:
      "Ce cactus colonnaire pousse remarquablement vite pour un cactus, plusieurs centimètres par an. Il est utilisé par les cultures andines depuis plus de 3000 ans.",
  },

  // --- Succulentes (suite) ---
  {
    id: "crassula-ovata",
    name: "Arbre de Jade",
    latinName: "Crassula ovata",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🪙",
    rarity: "commune",
    wikipediaTitle: "Crassula ovata",
    funFact:
      "Surnommé « arbre à monnaie », on lui prête traditionnellement le pouvoir d'attirer la prospérité. Il peut vivre plusieurs décennies et développer un véritable tronc ligneux, comme un petit arbre miniature.",
  },
  {
    id: "kalanchoe",
    name: "Kalanchoé",
    latinName: "Kalanchoe blossfeldiana",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🌸",
    rarity: "commune",
    wikipediaTitle: "Kalanchoe",
    funFact:
      "Certaines espèces du même genre produisent de minuscules plantules tout le long du bord de leurs feuilles : chacune peut se détacher, tomber au sol et s'enraciner pour former un nouveau plant complet.",
  },
  {
    id: "agave-americana",
    name: "Agave d'Amérique",
    latinName: "Agave americana",
    category: "succulente",
    locationIds: ["eze-exotique", "menton-madone"],
    emoji: "🪴",
    rarity: "peu-commune",
    wikipediaTitle: "Agave americana",
    funFact:
      "Surnommé « plante du siècle », il peut mettre plusieurs décennies avant de fleurir une seule fois... puis meurt juste après, toute son énergie ayant été investie dans cette unique floraison spectaculaire.",
  },

  // --- Palmiers (suite) ---
  {
    id: "palmier-chine",
    name: "Palmier de Chine",
    latinName: "Trachycarpus fortunei",
    category: "palmier",
    locationIds: ["paris-jdp", "nancy-jdb"],
    emoji: "🌴",
    rarity: "commune",
    wikipediaTitle: "Trachycarpus fortunei",
    funFact:
      "C'est l'un des palmiers les plus résistants au froid au monde, capable de survivre à la neige et à des températures de -15°C. C'est pourquoi on le croise si souvent planté en extérieur en France.",
  },
  {
    id: "sabal-palmetto",
    name: "Palmier de Caroline",
    latinName: "Sabal palmetto",
    category: "palmier",
    locationIds: ["rayol", "rothschild-ephrussi"],
    emoji: "🌴",
    rarity: "peu-commune",
    wikipediaTitle: "Sabal palmetto",
    funFact:
      "Arbre emblématique de Floride et de Caroline du Sud, son tronc fibreux plie sans se briser sous les vents d'ouragan, là où bien des arbres à bois rigide sont déracinés.",
  },
  {
    id: "washingtonia",
    name: "Washingtonia",
    latinName: "Washingtonia robusta",
    category: "palmier",
    locationIds: ["rothschild-ephrussi", "eze-exotique"],
    emoji: "🌴",
    rarity: "commune",
    wikipediaTitle: "Washingtonia robusta",
    funFact:
      "Ce palmier à la silhouette élancée peut dépasser 25 m de haut. Sa croissance rapide en a fait l'un des arbres emblématiques des promenades de la Côte d'Azur.",
  },

  // --- Méditerranéenne (suite) ---
  {
    id: "figuier-commun",
    name: "Figuier",
    latinName: "Ficus carica",
    category: "mediterraneenne",
    locationIds: ["montpellier-jdp", "marseille-borely"],
    emoji: "🍈",
    rarity: "commune",
    wikipediaTitle: "Figuier commun",
    funFact:
      "Chaque figue est en réalité une grappe de fleurs entièrement retournée vers l'intérieur, pollinisée par une minuscule guêpe spécialisée qui meurt à l'intérieur du fruit après l'avoir fécondé.",
  },
  {
    id: "myrte",
    name: "Myrte commun",
    latinName: "Myrtus communis",
    category: "mediterraneenne",
    locationIds: ["montpellier-jdp", "menton-madone"],
    emoji: "🌿",
    rarity: "peu-commune",
    wikipediaTitle: "Myrte commun",
    funFact:
      "Symbole d'amour et de victoire dans la Grèce et la Rome antiques, des couronnes de myrte étaient offertes aux vainqueurs lors de célébrations, en complément du fameux laurier.",
  },
  {
    id: "genet-espagne",
    name: "Genêt d'Espagne",
    latinName: "Spartium junceum",
    category: "mediterraneenne",
    locationIds: ["montpellier-jdp", "rayol"],
    emoji: "💛",
    rarity: "commune",
    wikipediaTitle: "Genêt d'Espagne",
    funFact:
      "Ses tiges vertes, presque sans feuilles, assurent l'essentiel de la photosynthèse : une adaptation qui lui permet de limiter au maximum les pertes en eau pendant les étés méditerranéens.",
  },

  // --- Tropicale & exotique (suite) ---
  {
    id: "frangipanier",
    name: "Frangipanier",
    latinName: "Plumeria sp.",
    category: "tropicale",
    locationIds: ["rayol", "rothschild-ephrussi"],
    emoji: "🌺",
    rarity: "peu-commune",
    wikipediaTitle: "Plumeria",
    funFact:
      "Son parfum, l'un des plus entêtants du monde végétal, s'intensifie la nuit pour attirer des papillons de nuit... alors que ses fleurs ne produisent pourtant aucun nectar : une pure tromperie florale.",
  },
  {
    id: "anthurium",
    name: "Anthurium",
    latinName: "Anthurium andraeanum",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "❤️",
    rarity: "commune",
    wikipediaTitle: "Anthurium andraeanum",
    funFact:
      "Sa grande « fleur » rouge et brillante n'est en réalité qu'une feuille modifiée. Les véritables fleurs, minuscules, sont regroupées sur l'épi jaune qui pointe en son centre.",
  },
  {
    id: "alocasia",
    name: "Alocasia",
    latinName: "Alocasia macrorrhiza",
    category: "tropicale",
    locationIds: ["lyon-tdo", "rayol"],
    emoji: "🌿",
    rarity: "peu-commune",
    wikipediaTitle: "Alocasia macrorrhiza",
    funFact:
      "Ses grandes feuilles en forme de cœur peuvent littéralement « transpirer » : la nuit, elles libèrent des gouttes d'eau par leur pointe, un phénomène appelé guttation.",
  },

  // --- Japonaise (suite) ---
  {
    id: "camelia-japon",
    name: "Camélia du Japon",
    latinName: "Camellia japonica",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🌺",
    rarity: "commune",
    wikipediaTitle: "Camellia japonica",
    funFact:
      "Contrairement à la plupart des fleurs qui perdent leurs pétales un à un, celle du camélia tombe d'un seul bloc. Ce trait la faisait autrefois associer par les samouraïs à une tête tranchée, d'où sa réputation de fleur porte-malheur au Japon.",
  },
  {
    id: "glycine-japon",
    name: "Glycine du Japon",
    latinName: "Wisteria floribunda",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "giverny"],
    emoji: "💜",
    rarity: "peu-commune",
    wikipediaTitle: "Wisteria floribunda",
    funFact:
      "Un unique pied planté au Japon il y a plus de 140 ans s'étend aujourd'hui sur près de 1900 m² de tonnelles en bois, formant l'un des spectacles floraux les plus photographiés du pays.",
  },
  {
    id: "iris-japon",
    name: "Iris du Japon",
    latinName: "Iris ensata",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "giverny"],
    emoji: "💠",
    rarity: "peu-commune",
    wikipediaTitle: "Iris ensata",
    funFact:
      "Traditionnellement cultivé dans des rizières inondées, il a besoin d'avoir les racines dans quelques centimètres d'eau stagnante pour s'épanouir pleinement.",
  },

  // --- Alpine (suite) ---
  {
    id: "rhododendron-ferrugineux",
    name: "Rhododendron des Alpes",
    latinName: "Rhododendron ferrugineum",
    category: "alpine",
    locationIds: ["lautaret", "paris-jdp"],
    emoji: "🌸",
    rarity: "commune",
    wikipediaTitle: "Rhododendron ferrugineum",
    funFact:
      "Surnommé « rose des Alpes », le dessous de ses feuilles est couvert de minuscules écailles couleur rouille qui limitent les pertes en eau à haute altitude.",
  },
  {
    id: "renoncule-glaciers",
    name: "Renoncule des Glaciers",
    latinName: "Ranunculus glacialis",
    category: "alpine",
    locationIds: ["lautaret"],
    emoji: "🤍",
    rarity: "rare",
    wikipediaTitle: "Ranunculus glacialis",
    funFact:
      "Elle détient le record de la plante à fleurs poussant à l'altitude la plus élevée des Alpes, observée à plus de 4200 m, au bord même des glaciers.",
  },
  {
    id: "chardon-bleu-alpes",
    name: "Chardon Bleu des Alpes",
    latinName: "Eryngium alpinum",
    category: "alpine",
    locationIds: ["lautaret"],
    emoji: "🔷",
    rarity: "rare",
    wikipediaTitle: "Eryngium alpinum",
    funFact:
      "Surnommée « reine des Alpes », cette plante spectaculaire est aujourd'hui strictement protégée en France : sa cueillette est interdite par la loi.",
  },

  // --- Aromatique & médicinale (suite) ---
  {
    id: "thym",
    name: "Thym Commun",
    latinName: "Thymus vulgaris",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Thym (plante)",
    funFact:
      "Les Égyptiens de l'Antiquité l'utilisaient dans leurs préparations d'embaumement, tandis que les soldats romains se baignaient dans une eau infusée de thym, persuadés qu'elle leur donnait du courage.",
  },
  {
    id: "basilic",
    name: "Basilic",
    latinName: "Ocimum basilicum",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Basilic (plante)",
    funFact:
      "Son nom vient du grec « basilikón », qui signifie « royal » : la plante était autrefois considérée comme digne des seuls souverains.",
  },
  {
    id: "sauge-officinale",
    name: "Sauge Officinale",
    latinName: "Salvia officinalis",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "peu-commune",
    wikipediaTitle: "Sauge officinale",
    funFact:
      "Son nom latin « salvia » vient de « salvare », guérir ou sauver, en écho à des siècles d'usage comme remède quasi universel dans la pharmacopée traditionnelle.",
  },

  // --- Orchidées (suite) ---
  {
    id: "orchis-pourpre",
    name: "Orchis Pourpre",
    latinName: "Orchis purpurea",
    category: "orchidee",
    locationIds: ["paris-jdp", "montpellier-jdp"],
    emoji: "🟣",
    rarity: "rare",
    wikipediaTitle: "Orchis purpurea",
    funFact:
      "C'est l'une des plus grandes orchidées sauvages poussant naturellement en France. Son épi de fleurs peut évoquer une petite foule de silhouettes encapuchonnées.",
  },
  {
    id: "cattleya",
    name: "Cattleya",
    latinName: "Cattleya labiata",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "💗",
    rarity: "peu-commune",
    wikipediaTitle: "Cattleya labiata",
    funFact:
      "L'orchidée-corsage classique du début du XXe siècle : des fortunes entières se sont faites et défaites autour des chasseurs de plantes victoriens partis en Amérique du Sud à la recherche de nouvelles espèces de Cattleya.",
  },
  {
    id: "ophrys-abeille",
    name: "Ophrys Abeille",
    latinName: "Ophrys apifera",
    category: "orchidee",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🐝",
    rarity: "rare",
    wikipediaTitle: "Ophrys apifera",
    funFact:
      "Sa fleur imite si bien la forme, la couleur et même l'odeur d'une abeille femelle que les mâles tentent de s'accoupler avec elle, pollinisant la plante sans le savoir.",
  },

  // --- Carnivores (suite) ---
  {
    id: "utriculaire",
    name: "Utriculaire",
    latinName: "Utricularia sp.",
    category: "carnivore",
    locationIds: ["brest-cbn"],
    emoji: "💧",
    rarity: "rare",
    wikipediaTitle: "Utricularia",
    funFact:
      "Ses pièges sous-marins aspirent leurs proies en moins d'une milliseconde : l'un des mouvements les plus rapides connus dans tout le règne végétal.",
  },
  {
    id: "grassette",
    name: "Grassette",
    latinName: "Pinguicula sp.",
    category: "carnivore",
    locationIds: ["brest-cbn", "lautaret"],
    emoji: "✨",
    rarity: "peu-commune",
    wikipediaTitle: "Pinguicula",
    funFact:
      "Ses feuilles luisantes et collantes piègent les petits insectes, que des enzymes contenues dans le même mucilage digèrent ensuite directement à la surface de la feuille.",
  },
  {
    id: "aldrovanda",
    name: "Aldrovande",
    latinName: "Aldrovanda vesiculosa",
    category: "carnivore",
    locationIds: ["brest-cbn"],
    emoji: "🫧",
    rarity: "exceptionnelle",
    wikipediaTitle: "Aldrovanda vesiculosa",
    funFact:
      "Cousine aquatique de la dionée, elle flotte librement sous l'eau sans aucune racine. C'est aujourd'hui l'une des plantes les plus menacées d'Europe.",
  },

  // --- Aquatique (suite) ---
  {
    id: "iris-marais",
    name: "Iris des Marais",
    latinName: "Iris pseudacorus",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "💛",
    rarity: "commune",
    wikipediaTitle: "Iris pseudacorus",
    funFact:
      "Malgré sa croissance les pieds dans l'eau au bord des étangs, chaque partie de cet iris est toxique en cas d'ingestion.",
  },
  {
    id: "roseau-commun",
    name: "Roseau Commun",
    latinName: "Phragmites australis",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "🌾",
    rarity: "commune",
    wikipediaTitle: "Phragmites australis",
    funFact:
      "Il forme certaines des colonies végétales les plus denses au monde grâce à ses rhizomes souterrains : une seule colonie clonale peut s'étendre sur plusieurs kilomètres.",
  },
  {
    id: "nenuphar-blanc",
    name: "Nénuphar Blanc",
    latinName: "Nymphaea alba",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "🤍",
    rarity: "peu-commune",
    wikipediaTitle: "Nymphaea alba",
    funFact:
      "C'est ce nénuphar blanc, indigène des étangs européens, qui a directement inspiré à Claude Monet sa célèbre série des « Nymphéas », peinte depuis son propre jardin d'eau.",
  },

  // --- Roseraie (suite) ---
  {
    id: "eglantier",
    name: "Églantier",
    latinName: "Rosa canina",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌹",
    rarity: "commune",
    wikipediaTitle: "Rosa canina",
    funFact:
      "Ancêtre sauvage de la plupart des rosiers cultivés, ses fruits (cynorrhodons) contiennent, à poids égal, davantage de vitamine C qu'une orange.",
  },
  {
    id: "rosier-new-dawn",
    name: "Rosier 'New Dawn'",
    latinName: "Rosa 'New Dawn'",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌸",
    rarity: "peu-commune",
    wikipediaTitle: "New Dawn (rose)",
    funFact:
      "En 1997, il est devenu la toute première plante à avoir jamais reçu un brevet aux États-Unis, ouvrant la voie au brevetage végétal moderne dans le monde entier.",
  },

  // --- Cactées (suite 2) ---
  {
    id: "aporocactus",
    name: "Cactus Queue de Rat",
    latinName: "Disocactus flagelliformis",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🌵",
    rarity: "commune",
    wikipediaTitle: "Disocactus flagelliformis",
    funFact:
      "Ses tiges retombantes, fines comme des cordes, peuvent dépasser un mètre de long en suspension. Dans son Mexique natal, ses fleurs roses vif sont pollinisées par les colibris.",
  },
  {
    id: "copiapoa",
    name: "Copiapoa",
    latinName: "Copiapoa sp.",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🌵",
    rarity: "rare",
    wikipediaTitle: "Copiapoa",
    funFact:
      "Ce genre de cactus chilien survit presque uniquement grâce au brouillard côtier qu'il capte, dans certaines zones du désert d'Atacama où il ne pleut parfois pas pendant des années entières.",
  },

  // --- Succulentes (suite 2) ---
  {
    id: "haworthia",
    name: "Haworthia",
    latinName: "Haworthia sp.",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🪴",
    rarity: "commune",
    wikipediaTitle: "Haworthia",
    funFact:
      "Le sommet translucide de ses feuilles agit comme une minuscule fenêtre : en milieu naturel, la plante reste presque entièrement enterrée et laisse simplement filtrer la lumière vers ses tissus photosynthétiques cachés sous le sable.",
  },
  {
    id: "sedum",
    name: "Orpin",
    latinName: "Sedum sp.",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🪴",
    rarity: "commune",
    wikipediaTitle: "Sedum",
    funFact:
      "De nombreuses espèces peuvent régénérer une plante entière à partir d'une seule feuille tombée au sol, une capacité de bouturage naturel spectaculaire.",
  },

  // --- Palmiers (suite 2) ---
  {
    id: "palmier-royal-cuba",
    name: "Palmier Royal de Cuba",
    latinName: "Roystonea regia",
    category: "palmier",
    locationIds: ["rothschild-ephrussi", "rayol"],
    emoji: "🌴",
    rarity: "peu-commune",
    wikipediaTitle: "Roystonea regia",
    funFact:
      "Son tronc peut se renfler en son milieu comme une bouteille. Cette réserve d'eau et de souplesse l'aide à résister aux vents violents des ouragans caribéens.",
  },
  {
    id: "chamaerops-humilis",
    name: "Palmier Nain",
    latinName: "Chamaerops humilis",
    category: "palmier",
    locationIds: ["eze-exotique", "montpellier-jdp"],
    emoji: "🌴",
    rarity: "commune",
    wikipediaTitle: "Chamaerops humilis",
    funFact:
      "C'est le seul palmier réellement indigène du continent européen : il pousse à l'état sauvage sur le pourtour méditerranéen depuis la dernière ère glaciaire.",
  },

  // --- Méditerranéenne (suite 2) ---
  {
    id: "arbousier",
    name: "Arbousier",
    latinName: "Arbutus unedo",
    category: "mediterraneenne",
    locationIds: ["montpellier-jdp", "rayol"],
    emoji: "🍓",
    rarity: "peu-commune",
    wikipediaTitle: "Arbousier",
    funFact:
      "Ses fruits rouges grenus, comestibles mais peu appétissants crus, ont donné son emblème à la ville de Madrid, dont le symbole représente un ours mangeant un arbousier.",
  },
  {
    id: "lentisque",
    name: "Lentisque Pistachier",
    latinName: "Pistacia lentiscus",
    category: "mediterraneenne",
    locationIds: ["montpellier-jdp", "menton-madone"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Lentisque",
    funFact:
      "Sa résine, le mastic, est récoltée depuis l'Antiquité sur l'île grecque de Chios et reste aujourd'hui la seule résine végétale au monde protégée par une appellation d'origine.",
  },

  // --- Tropicale & exotique (suite 2) ---
  {
    id: "heliconia",
    name: "Héliconia",
    latinName: "Heliconia sp.",
    category: "tropicale",
    locationIds: ["lyon-tdo", "rayol"],
    emoji: "🦞",
    rarity: "peu-commune",
    wikipediaTitle: "Heliconia",
    funFact:
      "Ses bractées en forme de pince de homard forment de véritables petites piscines suspendues, qui abritent parfois des larves de grenouilles ou d'insectes tropicaux.",
  },
  {
    id: "passiflore",
    name: "Fleur de la Passion",
    latinName: "Passiflora caerulea",
    category: "tropicale",
    locationIds: ["paris-jdp", "rayol"],
    emoji: "💜",
    rarity: "commune",
    wikipediaTitle: "Passiflora caerulea",
    funFact:
      "Sa fleur, d'une structure si complexe, a été interprétée par les missionnaires espagnols du XVIe siècle comme un symbole représentant les instruments de la Passion du Christ, d'où son nom.",
  },

  // --- Japonaise (suite 2) ---
  {
    id: "hortensia",
    name: "Hortensia",
    latinName: "Hydrangea macrophylla",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "giverny"],
    emoji: "💙",
    rarity: "commune",
    wikipediaTitle: "Hydrangea macrophylla",
    funFact:
      "La couleur de ses fleurs dépend directement de l'acidité du sol : bleu en sol acide, rose en sol basique, selon la disponibilité de l'aluminium que ses racines parviennent à absorber.",
  },
  {
    id: "kaki",
    name: "Plaqueminier du Japon",
    latinName: "Diospyros kaki",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🟠",
    rarity: "peu-commune",
    wikipediaTitle: "Diospyros kaki",
    funFact:
      "À Hiroshima, un plaqueminier situé à environ 1 km de l'épicentre de l'explosion atomique de 1945 a survécu et continue de produire des fruits chaque année depuis.",
  },

  // --- Alpine (suite 2) ---
  {
    id: "linaigrette",
    name: "Linaigrette",
    latinName: "Eriophorum sp.",
    category: "alpine",
    locationIds: ["lautaret"],
    emoji: "☁️",
    rarity: "commune",
    wikipediaTitle: "Eriophorum",
    funFact:
      "Ses aigrettes cotonneuses et blanches, qui recouvrent les tourbières alpines en été, étaient autrefois récoltées pour rembourrer coussins et pansements.",
  },
  {
    id: "pensee-alpes",
    name: "Pensée des Alpes",
    latinName: "Viola calcarata",
    category: "alpine",
    locationIds: ["lautaret"],
    emoji: "💜",
    rarity: "peu-commune",
    wikipediaTitle: "Viola calcarata",
    funFact:
      "Elle peut fleurir à peine les neiges fondues, parfois en perçant directement une fine couche de neige résiduelle encore présente au sol.",
  },

  // --- Aromatique & médicinale (suite 2) ---
  {
    id: "origan",
    name: "Origan",
    latinName: "Origanum vulgare",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Origan",
    funFact:
      "Son nom vient du grec « joie de la montagne ». Son huile essentielle compte parmi les plus riches en carvacrol, un puissant antimicrobien naturel.",
  },
  {
    id: "camomille",
    name: "Camomille",
    latinName: "Matricaria chamomilla",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "giverny"],
    emoji: "🌼",
    rarity: "commune",
    wikipediaTitle: "Matricaire camomille",
    funFact:
      "Son nom latin « matricaria » vient de « matrix », l'utérus, en écho à des siècles d'usage traditionnel de cette plante en médecine populaire féminine.",
  },

  // --- Orchidées (suite 2) ---
  {
    id: "cymbidium",
    name: "Cymbidium",
    latinName: "Cymbidium sp.",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🦋",
    rarity: "commune",
    wikipediaTitle: "Cymbidium",
    funFact:
      "Ses fleurs peuvent rester épanouies sur la plante pendant 8 à 10 semaines d'affilée, l'une des floraisons les plus durables de toutes les orchidées cultivées.",
  },
  {
    id: "miltonia",
    name: "Orchidée Pensée",
    latinName: "Miltonia sp.",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🦋",
    rarity: "peu-commune",
    wikipediaTitle: "Miltonia",
    funFact:
      "Ses fleurs plates et colorées évoquent des pensées de jardin, d'où son surnom, et libèrent souvent un parfum délicat proche de celui du muguet.",
  },

  // --- Carnivores (suite 2) ---
  {
    id: "cephalote",
    name: "Céphalote",
    latinName: "Cephalotus follicularis",
    category: "carnivore",
    locationIds: ["brest-cbn"],
    emoji: "👞",
    rarity: "exceptionnelle",
    wikipediaTitle: "Cephalotus follicularis",
    funFact:
      "Originaire d'une toute petite région du sud-ouest de l'Australie, ses urnes miniatures ressemblent à s'y méprendre à de minuscules chaussures moulées.",
  },
  {
    id: "byblis",
    name: "Byblis",
    latinName: "Byblis sp.",
    category: "carnivore",
    locationIds: ["brest-cbn"],
    emoji: "🌈",
    rarity: "rare",
    wikipediaTitle: "Byblis (plante)",
    funFact:
      "Surnommée « plante arc-en-ciel », ses poils gluants réfractent la lumière du soleil en un halo scintillant, bien qu'elle ne soit pas du tout apparentée aux droséras qu'elle imite.",
  },

  // --- Aquatique (suite 2) ---
  {
    id: "trapa",
    name: "Châtaigne d'Eau",
    latinName: "Trapa natans",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "🌰",
    rarity: "peu-commune",
    wikipediaTitle: "Trapa natans",
    funFact:
      "Ses fruits munis de cornes acérées ont inspiré la conception des chausse-trappes militaires antipersonnel, utilisées dès l'Antiquité pour blesser les pieds ennemis.",
  },
  {
    id: "pistia",
    name: "Laitue d'Eau",
    latinName: "Pistia stratiotes",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "🥬",
    rarity: "commune",
    wikipediaTitle: "Pistia stratiotes",
    funFact:
      "Elle flotte librement à la surface de l'eau sans jamais s'enraciner dans le fond : ses longues racines pendantes puisent directement les nutriments dissous.",
  },

  // --- Roseraie (suite 2) ---
  {
    id: "rosa-rugosa",
    name: "Rosier Rugueux",
    latinName: "Rosa rugosa",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌹",
    rarity: "commune",
    wikipediaTitle: "Rosa rugosa",
    funFact:
      "Extrêmement résistant, il pousse spontanément sur les dunes de sable du littoral, tolérant les embruns salés et les vents violents mieux qu'aucun autre rosier.",
  },
  {
    id: "rosier-iceberg",
    name: "Rosier 'Iceberg'",
    latinName: "Rosa 'Iceberg'",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🤍",
    rarity: "peu-commune",
    wikipediaTitle: "Iceberg (rose)",
    funFact:
      "Créée en 1958, c'est l'une des variétés de rosiers les plus cultivées au monde : elle reste, encore aujourd'hui, un incontournable des roseraies.",
  },

  // --- Cactées (suite 3) ---
  {
    id: "cactus-noel",
    name: "Cactus de Noël",
    latinName: "Schlumbergera sp.",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🎄",
    rarity: "commune",
    wikipediaTitle: "Schlumbergera",
    funFact:
      "Contrairement à la majorité des cactus qui fleurissent en été, celui-ci s'épanouit traditionnellement en hiver, autour de Noël dans l'hémisphère nord, d'où son nom.",
  },

  // --- Succulentes (suite 3) ---
  {
    id: "sempervivum",
    name: "Joubarbe",
    latinName: "Sempervivum tectorum",
    category: "succulente",
    locationIds: ["eze-exotique", "lautaret"],
    emoji: "🪴",
    rarity: "commune",
    wikipediaTitle: "Sempervivum tectorum",
    funFact:
      "Autrefois plantée sur les toits de chaume, on la croyait capable de protéger les maisons de la foudre et du feu, d'où son surnom d'« herbe de tonnerre ».",
  },
  {
    id: "pilea-peperomioides",
    name: "Plante à Monnaie Chinoise",
    latinName: "Pilea peperomioides",
    category: "succulente",
    locationIds: ["paris-jdp", "lyon-tdo"],
    emoji: "🪙",
    rarity: "commune",
    wikipediaTitle: "Pilea peperomioides",
    funFact:
      "Devenue une star des réseaux sociaux dans les années 2010, la quasi-totalité des pieds cultivés dans le monde descendent de boutures d'un unique plant ramené de Chine en Norvège en 1946.",
  },

  // --- Palmiers (suite 3) ---
  {
    id: "kentia",
    name: "Palmier Kentia",
    latinName: "Howea forsteriana",
    category: "palmier",
    locationIds: ["paris-jdp", "lyon-tdo"],
    emoji: "🌴",
    rarity: "commune",
    wikipediaTitle: "Howea forsteriana",
    funFact:
      "L'une des plantes d'intérieur les plus tolérantes à la faible luminosité, elle a fait fureur dans les salons victoriens dès la fin du XIXe siècle et reste un classique des grands halls d'hôtel.",
  },
  {
    id: "areca",
    name: "Palmier Areca",
    latinName: "Dypsis lutescens",
    category: "palmier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌴",
    rarity: "commune",
    wikipediaTitle: "Dypsis lutescens",
    funFact:
      "Une étude de la NASA sur la qualité de l'air intérieur l'a classé parmi les plantes les plus efficaces pour humidifier naturellement l'atmosphère d'une pièce.",
  },

  // --- Méditerranéenne (suite 3) ---
  {
    id: "laurier-sauce",
    name: "Laurier Sauce",
    latinName: "Laurus nobilis",
    category: "mediterraneenne",
    locationIds: ["montpellier-jdp", "menton-madone"],
    emoji: "🍃",
    rarity: "commune",
    wikipediaTitle: "Laurus nobilis",
    funFact:
      "Ses feuilles tressées en couronnes récompensaient les vainqueurs des Jeux Olympiques antiques et les plus grands poètes, ce qui a donné naissance au mot « lauréat ».",
  },
  {
    id: "buis",
    name: "Buis",
    latinName: "Buxus sempervirens",
    category: "mediterraneenne",
    locationIds: ["montpellier-jdp", "rayol"],
    emoji: "🌳",
    rarity: "commune",
    wikipediaTitle: "Buis commun",
    funFact:
      "Son bois compte parmi les plus denses et les plus durs d'Europe, si dense qu'il coule dans l'eau. Il a longtemps servi à graver les caractères d'imprimerie et les instruments de précision.",
  },

  // --- Tropicale & exotique (suite 3) ---
  {
    id: "ficus-lyrata",
    name: "Figuier Lyre",
    latinName: "Ficus lyrata",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🎻",
    rarity: "commune",
    wikipediaTitle: "Ficus lyrata",
    funFact:
      "Grâce à ses immenses feuilles en forme de violon, il est devenu l'une des plantes d'intérieur les plus photographiées sur les réseaux sociaux dans les années 2010.",
  },
  {
    id: "dracaena",
    name: "Dragonnier",
    latinName: "Dracaena draco",
    category: "tropicale",
    locationIds: ["rayol", "eze-exotique"],
    emoji: "🐉",
    rarity: "commune",
    wikipediaTitle: "Dracaena draco",
    funFact:
      "Certaines espèces du genre produisent une résine rouge sombre surnommée « sang de dragon », utilisée depuis l'Antiquité comme teinture et vernis.",
  },
  {
    id: "lierre-commun",
    name: "Lierre Commun",
    latinName: "Hedera helix",
    category: "tropicale",
    locationIds: ["paris-jdp", "lyon-tdo"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Lierre grimpant",
    funFact:
      "Sa forme juvénile grimpante ne fleurit jamais. Ce n'est qu'après avoir atteint suffisamment de lumière en hauteur qu'il se métamorphose en une forme arbustive adulte, seule capable de produire fleurs et baies.",
  },

  // --- Japonaise (suite 3) ---
  {
    id: "pivoine-arbustive",
    name: "Pivoine Arbustive",
    latinName: "Paeonia suffruticosa",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🌸",
    rarity: "commune",
    wikipediaTitle: "Paeonia suffruticosa",
    funFact:
      "Surnommée « reine des fleurs » en Chine comme au Japon, un même pied peut vivre et fleurir chaque printemps pendant plus de 100 ans.",
  },

  // --- Alpine (suite 3) ---
  {
    id: "myosotis-alpestre",
    name: "Myosotis des Alpes",
    latinName: "Myosotis alpestris",
    category: "alpine",
    locationIds: ["lautaret", "paris-jdp"],
    emoji: "💙",
    rarity: "commune",
    wikipediaTitle: "Myosotis alpestris",
    funFact:
      "Son nom signifie « oreille de souris » en grec, en référence à la forme douce et duveteuse de ses petites feuilles.",
  },

  // --- Aromatique & médicinale (suite 3) ---
  {
    id: "persil",
    name: "Persil",
    latinName: "Petroselinum crispum",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Persil",
    funFact:
      "Dans la Grèce antique, il était associé à la mort et tressé en couronnes funéraires : on ne l'utilisait jamais pour honorer les vivants.",
  },
  {
    id: "ciboulette",
    name: "Ciboulette",
    latinName: "Allium schoenoprasum",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Ciboulette",
    funFact:
      "C'est la plus petite espèce comestible de tout le genre Allium, qui regroupe aussi l'oignon, l'ail et le poireau.",
  },

  // --- Orchidées (suite 3) ---
  {
    id: "dendrobium-nobile",
    name: "Dendrobium Nobile",
    latinName: "Dendrobium nobile",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🦋",
    rarity: "commune",
    wikipediaTitle: "Dendrobium nobile",
    funFact:
      "Dans la médecine traditionnelle chinoise, sa tige séchée est utilisée depuis plus de 2000 ans sous le nom de « shi hu », l'une des plantes les plus prisées de cette pharmacopée.",
  },

  // --- Carnivores (suite 3) ---
  {
    id: "drosophyllum",
    name: "Attrape-mouches du Portugal",
    latinName: "Drosophyllum lusitanicum",
    category: "carnivore",
    locationIds: ["brest-cbn"],
    emoji: "🪰",
    rarity: "peu-commune",
    wikipediaTitle: "Drosophyllum lusitanicum",
    funFact:
      "Contrairement à la plupart des plantes carnivores qui affectionnent les zones humides, celle-ci pousse dans des sols secs et rocailleux, un cas unique dans son groupe.",
  },

  // --- Aquatique (suite 3) ---
  {
    id: "salvinia",
    name: "Salvinia",
    latinName: "Salvinia natans",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "💧",
    rarity: "commune",
    wikipediaTitle: "Salvinia natans",
    funFact:
      "Ses feuilles sont recouvertes de poils microscopiques en forme de fouet qui emprisonnent une fine couche d'air, la rendant quasiment impossible à mouiller.",
  },

  // --- Roseraie (suite 3) ---
  {
    id: "pierre-de-ronsard",
    name: "Rosier 'Pierre de Ronsard'",
    latinName: "Rosa 'Pierre de Ronsard'",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌹",
    rarity: "commune",
    wikipediaTitle: "Pierre de Ronsard (rose)",
    funFact:
      "Élue « rose préférée du monde » lors d'un concours international en 2006, cette variété grimpante porte le nom du célèbre poète français de la Renaissance.",
  },

  // --- Cactées (suite 4) ---
  {
    id: "gymnocalycium",
    name: "Cactus Lune",
    latinName: "Gymnocalycium mihanovichii",
    category: "cactus",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🌵",
    rarity: "commune",
    wikipediaTitle: "Gymnocalycium mihanovichii",
    funFact:
      "Ses formes mutantes rouges, jaunes ou roses, dépourvues de chlorophylle, sont incapables de survivre seules : elles sont systématiquement greffées sur un porte-greffe vert qui assure leur photosynthèse à leur place.",
  },
  {
    id: "echinopsis",
    name: "Cactus Oursin",
    latinName: "Echinopsis sp.",
    category: "cactus",
    locationIds: ["eze-exotique", "marseille-borely"],
    emoji: "🦔",
    rarity: "peu-commune",
    wikipediaTitle: "Echinopsis",
    funFact:
      "Ses fleurs, parmi les plus grandes de tous les cactus par rapport à la taille de la plante, s'ouvrent brusquement à la tombée de la nuit et se fanent dès le lendemain midi.",
  },

  // --- Succulentes (suite 4) ---
  {
    id: "faucaria",
    name: "Gueule de Tigre",
    latinName: "Faucaria tigrina",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "🐯",
    rarity: "peu-commune",
    wikipediaTitle: "Faucaria tigrina",
    funFact:
      "Ses feuilles bordées de pointes acérées évoquent une mâchoire menaçante, mais ce ne sont que des leurres inoffensifs et parfaitement mous, destinés à dissuader les herbivores.",
  },
  {
    id: "stapelia",
    name: "Fleur Étoile de Mer",
    latinName: "Stapelia sp.",
    category: "succulente",
    locationIds: ["eze-exotique", "rayol"],
    emoji: "⭐",
    rarity: "rare",
    wikipediaTitle: "Stapelia",
    funFact:
      "Sa grande fleur en forme d'étoile imite l'odeur de la viande en décomposition pour attirer les mouches, l'un des exemples les plus convaincants de mimétisme charognard chez les plantes.",
  },

  // --- Palmiers (suite 4) ---
  {
    id: "palmier-huile",
    name: "Palmier à Huile",
    latinName: "Elaeis guineensis",
    category: "palmier",
    locationIds: ["rayol", "eze-exotique"],
    emoji: "🌴",
    rarity: "commune",
    wikipediaTitle: "Elaeis guineensis",
    funFact:
      "C'est la source de l'huile végétale la plus produite au monde : on la retrouve dans près de la moitié des produits emballés vendus en supermarché.",
  },
  {
    id: "raphia",
    name: "Palmier Raphia",
    latinName: "Raphia sp.",
    category: "palmier",
    locationIds: ["rothschild-ephrussi", "rayol"],
    emoji: "🌴",
    rarity: "rare",
    wikipediaTitle: "Raphia",
    funFact:
      "Il produit les plus longues feuilles de tout le règne végétal, pouvant dépasser 25 mètres de longueur.",
  },

  // --- Méditerranéenne (suite 4) ---
  {
    id: "caprier",
    name: "Câprier",
    latinName: "Capparis spinosa",
    category: "mediterraneenne",
    locationIds: ["montpellier-jdp", "menton-madone"],
    emoji: "🌿",
    rarity: "peu-commune",
    wikipediaTitle: "Câprier",
    funFact:
      "Les câpres vendues en bocal sont en réalité ses boutons floraux, cueillis à la main avant qu'ils n'aient eu le temps de s'ouvrir en fleur.",
  },
  {
    id: "immortelle",
    name: "Immortelle",
    latinName: "Helichrysum italicum",
    category: "mediterraneenne",
    locationIds: ["montpellier-jdp", "rayol"],
    emoji: "💛",
    rarity: "peu-commune",
    wikipediaTitle: "Hélichryse italienne",
    funFact:
      "Ses fleurs conservent leur couleur et leur forme pendant des années après avoir été coupées et séchées, ce qui lui a valu son nom.",
  },

  // --- Tropicale & exotique (suite 4) ---
  {
    id: "calathea",
    name: "Calathéa",
    latinName: "Calathea sp.",
    category: "tropicale",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Calathea",
    funFact:
      "Surnommée « plante de la prière », ses feuilles se replient verticalement chaque soir et s'ouvrent à nouveau le matin, suivant un rythme circadien précis.",
  },
  {
    id: "bougainvillier",
    name: "Bougainvillier",
    latinName: "Bougainvillea sp.",
    category: "tropicale",
    locationIds: ["rayol", "eze-exotique"],
    emoji: "💜",
    rarity: "commune",
    wikipediaTitle: "Bougainvillier",
    funFact:
      "Ses éclatantes « fleurs » colorées sont en réalité des bractées, de simples feuilles modifiées : les véritables fleurs sont les minuscules tubes blancs cachés en leur centre.",
  },

  // --- Japonaise (suite 4) ---
  {
    id: "pin-blanc-japon",
    name: "Pin Blanc du Japon",
    latinName: "Pinus parviflora",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "vincennes-floral"],
    emoji: "🌲",
    rarity: "peu-commune",
    wikipediaTitle: "Pinus parviflora",
    funFact:
      "Sujet favori de l'art du bonsaï, il est prisé pour ses aiguilles bleu-vert soyeuses, regroupées par bouquets de cinq.",
  },
  {
    id: "fusain-japon",
    name: "Fusain du Japon",
    latinName: "Euonymus japonicus",
    category: "japonaise",
    locationIds: ["maulevrier-oriental", "paris-jdp"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Euonymus japonicus",
    funFact:
      "Traditionnellement taillé en haies denses dans les jardins japonais, son bois servait autrefois à fabriquer les chevilles des sandales traditionnelles.",
  },

  // --- Alpine (suite 4) ---
  {
    id: "silene-acaule",
    name: "Silène Acaule",
    latinName: "Silene acaulis",
    category: "alpine",
    locationIds: ["lautaret"],
    emoji: "🌸",
    rarity: "rare",
    wikipediaTitle: "Silene acaulis",
    funFact:
      "Elle forme des coussins compacts qui peuvent mettre plus de 100 ans à atteindre la taille d'une assiette, poussant à peine de quelques millimètres par an.",
  },
  {
    id: "pulsatille-alpine",
    name: "Anémone des Alpes",
    latinName: "Pulsatilla alpina",
    category: "alpine",
    locationIds: ["lautaret", "paris-jdp"],
    emoji: "🤍",
    rarity: "peu-commune",
    wikipediaTitle: "Pulsatilla alpina",
    funFact:
      "Ses boutons floraux sont couverts d'un fin duvet argenté qui emprisonne une couche d'air chaud, agissant comme une minuscule serre naturelle.",
  },

  // --- Aromatique & médicinale (suite 4) ---
  {
    id: "estragon",
    name: "Estragon",
    latinName: "Artemisia dracunculus",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "peu-commune",
    wikipediaTitle: "Estragon",
    funFact:
      "La variété française est stérile et ne produit aucune graine viable : chaque plant cultivé aujourd'hui descend uniquement de siècles de boutures successives.",
  },
  {
    id: "coriandre",
    name: "Coriandre",
    latinName: "Coriandrum sativum",
    category: "aromatique",
    locationIds: ["montpellier-jdp", "paris-jdp"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Coriandre",
    funFact:
      "Une simple variation génétique détermine si une personne perçoit ses feuilles comme fraîches et citronnées, ou au contraire avec un net goût de savon.",
  },

  // --- Orchidées (suite 4) ---
  {
    id: "angraecum",
    name: "Étoile de Madagascar",
    latinName: "Angraecum sesquipedale",
    category: "orchidee",
    locationIds: ["paris-jdp", "lyon-tdo"],
    emoji: "🤍",
    rarity: "rare",
    wikipediaTitle: "Angraecum sesquipedale",
    funFact:
      "Son éperon à nectar mesure près de 30 cm de long, ce qui a conduit Charles Darwin à prédire dès 1862 l'existence d'un papillon de nuit à la trompe tout aussi démesurée — découvert des décennies plus tard.",
  },
  {
    id: "bulbophyllum",
    name: "Bulbophyllum",
    latinName: "Bulbophyllum sp.",
    category: "orchidee",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🦋",
    rarity: "peu-commune",
    wikipediaTitle: "Bulbophyllum",
    funFact:
      "C'est le plus grand genre d'orchidées au monde avec plus de 2000 espèces, dont certaines dégagent une odeur de chair en décomposition pour attirer les mouches pollinisatrices.",
  },

  // --- Carnivores (suite 4) ---
  {
    id: "genlisea",
    name: "Plante Tire-Bouchon",
    latinName: "Genlisea sp.",
    category: "carnivore",
    locationIds: ["brest-cbn"],
    emoji: "🌀",
    rarity: "rare",
    wikipediaTitle: "Genlisea",
    funFact:
      "Ses feuilles souterraines forment des pièges spiralés sous-marins qui canalisent les micro-organismes dans un seul sens, rendant tout retour en arrière impossible.",
  },
  {
    id: "darlingtonia",
    name: "Plante Cobra",
    latinName: "Darlingtonia californica",
    category: "carnivore",
    locationIds: ["brest-cbn"],
    emoji: "🐍",
    rarity: "rare",
    wikipediaTitle: "Darlingtonia californica",
    funFact:
      "Ses feuilles translucides en forme de capuchon trompent les insectes piégés en leur faisant croire à une sortie, les épuisant jusqu'à ce qu'ils tombent dans le liquide digestif.",
  },

  // --- Aquatique (suite 4) ---
  {
    id: "elodee-canada",
    name: "Élodée du Canada",
    latinName: "Elodea canadensis",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "🌿",
    rarity: "commune",
    wikipediaTitle: "Élodée du Canada",
    funFact:
      "Un simple fragment de tige suffit à régénérer une plante entière, ce qui en a fait l'une des espèces aquatiques envahissantes les plus redoutables au monde.",
  },
  {
    id: "jussie",
    name: "Jussie",
    latinName: "Ludwigia grandiflora",
    category: "aquatique",
    locationIds: ["giverny", "vincennes-floral"],
    emoji: "💛",
    rarity: "peu-commune",
    wikipediaTitle: "Jussie à grandes fleurs",
    funFact:
      "Classée parmi les plantes aquatiques les plus envahissantes de France, elle peut former des tapis assez denses pour obstruer entièrement certains cours d'eau.",
  },

  // --- Roseraie (suite 4) ---
  {
    id: "rosier-ispahan",
    name: "Rosier Ispahan",
    latinName: "Rosa × damascena 'Ispahan'",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌸",
    rarity: "peu-commune",
    wikipediaTitle: "Rosa damascena",
    funFact:
      "Cette rose de Damas est toujours cultivée en Iran pour produire eau de rose et essence de rose, selon une tradition vieille de plus de mille ans.",
  },
  {
    id: "rosier-mutabilis",
    name: "Rosier Mutabilis",
    latinName: "Rosa chinensis 'Mutabilis'",
    category: "rosier",
    locationIds: ["lyon-tdo", "paris-jdp"],
    emoji: "🌼",
    rarity: "rare",
    wikipediaTitle: "Rosa chinensis",
    funFact:
      "Ses fleurs changent de couleur en vieillissant, s'ouvrant jaune pâle avant de virer au rose puis au cramoisi profond : un même pied peut ainsi afficher trois couleurs à la fois.",
  },
];

export function findPlant(plantId: string): Plant | undefined {
  return plants.find((p) => p.id === plantId);
}

export function searchPlants(query: string): Plant[] {
  const q = query.trim().toLowerCase();
  if (!q) return plants;
  return plants.filter(
    (plant) =>
      plant.name.toLowerCase().includes(q) ||
      plant.latinName.toLowerCase().includes(q),
  );
}

export function wikipediaUrl(plant: Plant): string {
  const title = plant.wikipediaTitle ?? plant.latinName;
  return `https://fr.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;
}
