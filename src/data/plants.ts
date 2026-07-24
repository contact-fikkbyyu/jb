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
