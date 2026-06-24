export type DestinationItem = {
  name: string;
  description: string;
  tag: string;
  context: string;
};

export type RestaurantItem = DestinationItem & {
  image: string;
  slug: string;
  mapsUrl: string;
};

export type BeachItem = DestinationItem & {
  slug: string;
  image: string;
};

export const RESTAURANTS = [
  {
    name: "Mikro Nisi",
    tag: "seaside Greek cuisine with stunning sunset views",
    context: "~14 km · ~18 min drive",
    description:
      "A beautiful seaside restaurant offering authentic Greek cuisine with stunning views, fresh local ingredients, and a relaxed island atmosphere perfect for sunset dining.",
    slug: "mikro-nisi",
    image: "/images/destinations/restaurants/mikronisi.jpeg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mikro+Nisi+Corfu+Ag+Gordios+Lefkimmi+490+80",
  },
  {
    name: "Etrusco",
    tag: "gourmet Corfiot cuisine in an intimate setting",
    context: "~8 km · ~10 min drive",
    description: "Refined island cooking for slow, indulgent evenings.",
    slug: "etrusco",
    image: "/images/destinations/restaurants/etrusco.jpg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Etrusco+Corfu",
  },
  {
    name: "Avli",
    tag: "modern Greek in a leafy courtyard",
    context: "~10 km · ~12 min drive",
    description: "Elegant courtyard dining with a contemporary Greek menu.",
    slug: "avli",
    image: "/images/destinations/restaurants/avli.jpg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avli+Corfu",
  },
  {
    name: "Taverna Agni",
    tag: "seaside traditional taverna",
    context: "~22 km · ~20 min drive",
    description: "Simple seafood and wine served steps from the water.",
    slug: "taverna-agni",
    image: "/images/destinations/restaurants/taverna-agni.jpg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Taverna+Agni+Corfu",
  },
  {
    name: "Rex Restaurant",
    tag: "classic Corfiot recipes in a historic setting",
    context: "~12 km · ~15 min drive",
    description: "Time-honoured dishes in the heart of Corfu old town.",
    slug: "rex-restaurant",
    image: "/images/destinations/restaurants/rex-restaurant.jpg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rex+Corfu",
  },
  {
    name: "The Venetian Well",
    tag: "romantic fine dining in the old town",
    context: "~12 km · ~15 min drive",
    description: "Candlelit dinners in a quietly romantic setting.",
    slug: "the-venetian-well",
    image: "/images/destinations/restaurants/the-venetian-well.jpg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Venetian+Well+Corfu",
  },
  {
    name: "Kaiser Bridge Restaurant",
    tag: "traditional dishes with sweeping sea views",
    context: "~6 km · ~8 min drive",
    description: "Local flavours overlooking the Ionian from the shore.",
    slug: "kaiser-bridge-restaurant",
    image: "/images/destinations/restaurants/kaiser-bridge-restaurant.jpg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kaiser+Bridge+Corfu",
  },
  {
    name: "Akrogiali Taverna",
    tag: "fresh seafood at the water's edge",
    context: "~5 km · ~7 min drive",
    description: "Just-caught seafood in an easy seaside atmosphere.",
    slug: "akrogiali-taverna",
    image: "/images/destinations/restaurants/akrogiali-taverna.jpg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Akrogiali+Corfu",
  },
] as const satisfies readonly RestaurantItem[];

export const BEACHES = [
  {
    name: "Paleokastritsa Beach",
    tag: "iconic turquoise bays and sheltered coves",
    context: "~18 km · ~20 min drive",
    description: "A celebrated coastline of luminous water and quiet coves.",
    slug: "paleokastritsa-beach",
    image: "/images/destinations/beaches/paleokastritsa-beach.jpg",
  },
  {
    name: "Glyfada Beach",
    tag: "long golden sand and calm shallows",
    context: "~16 km · ~18 min drive",
    description: "A wide sandy shore with relaxed, upscale appeal.",
    slug: "glyfada-beach",
    image: "/images/destinations/beaches/glyfada-beach.jpg",
  },
  {
    name: "Porto Timoni",
    tag: "twin coves along a coastal path",
    context: "~25 km · ~35 min drive",
    description: "Two hidden beaches linked by a scenic walk above the sea.",
    slug: "porto-timoni",
    image: "/images/destinations/beaches/porto-timoni.jpg",
  },
  {
    name: "Issos Beach",
    tag: "wild dunes and open shoreline",
    context: "~12 km · ~15 min drive",
    description: "An unspoilt stretch of sand backed by rolling dunes.",
    slug: "issos-beach",
    image: "/images/destinations/beaches/issos-beach.jpg",
  },
  {
    name: "Barbati Beach",
    tag: "clear water in a refined setting",
    context: "~8 km · ~10 min drive",
    description: "Crystal shallows and a calm, upscale beach atmosphere.",
    slug: "barbati-beach",
    image: "/images/destinations/beaches/barbati-beach.jpg",
  },
  {
    name: "Agios Gordios Beach",
    tag: "dramatic cliffs and wide sandy bay",
    context: "~14 km · ~18 min drive",
    description: "A sweeping bay framed by cliffs, golden at sunset.",
    slug: "agios-gordios-beach",
    image: "/images/destinations/beaches/agios-gordios-beach.jpg",
  },
  {
    name: "Canal d'Amour",
    tag: "unique rock formations and swim spots",
    context: "~30 km · ~40 min drive",
    description: "Sheltered swim channels carved through distinctive rock.",
    slug: "canal-d-amour",
    image: "/images/destinations/beaches/canal-d-amour.jpg",
  },
] as const satisfies readonly BeachItem[];
