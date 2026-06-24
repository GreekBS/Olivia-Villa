import { BEACHES, RESTAURANTS } from "@/constants/destinations";
import { SITE } from "@/constants/site";

export type MapPoiCategory =
  | "villa"
  | "beach"
  | "restaurant"
  | "supermarket"
  | "hospital"
  | "airport"
  | "port";

export type MapPoi = {
  id: string;
  name: string;
  descriptor: string;
  category: MapPoiCategory;
  lat: number;
  lng: number;
  cluster?: boolean;
};

/** Geocoded via OpenStreetMap Nominatim (Corfu island, 2026). */
const RESTAURANT_COORDINATES: Record<
  (typeof RESTAURANTS)[number]["slug"],
  { lat: number; lng: number }
> = {
  etrusco: { lat: 39.689156, lng: 19.834635 },
  avli: { lat: 39.610819, lng: 19.922695 },
  "taverna-agni": { lat: 39.736471, lng: 19.92923 },
  "rex-restaurant": { lat: 39.62444, lng: 19.923558 },
  "the-venetian-well": { lat: 39.626723, lng: 19.921772 },
  "kaiser-bridge-restaurant": { lat: 39.5612, lng: 19.912 },
  "akrogiali-taverna": { lat: 39.4672, lng: 20.0694 },
  "mikro-nisi": { lat: 39.54613, lng: 19.849832 },
  cosy: { lat: 39.5482, lng: 19.8515 },
};

const BEACH_COORDINATES: Record<
  (typeof BEACHES)[number]["slug"],
  { lat: number; lng: number }
> = {
  "paleokastritsa-beach": { lat: 39.675772, lng: 19.711904 },
  "glyfada-beach": { lat: 39.591339, lng: 19.808875 },
  "porto-timoni": { lat: 39.715093, lng: 19.657751 },
  "issos-beach": { lat: 39.429309, lng: 19.939326 },
  "barbati-beach": { lat: 39.715729, lng: 19.867222 },
  "agios-gordios-beach": { lat: 39.54613, lng: 19.849832 },
  "canal-d-amour": { lat: 39.797475, lng: 19.698083 },
};

const BEACH_DESCRIPTORS: Record<(typeof BEACHES)[number]["slug"], string> = {
  "paleokastritsa-beach": "Turquoise bays and sheltered coves",
  "glyfada-beach": "Popular sandy beach",
  "porto-timoni": "Twin coves along a coastal path",
  "issos-beach": "Wild dunes and open shoreline",
  "barbati-beach": "Clear water in a refined setting",
  "agios-gordios-beach": "Dramatic cliffs and sandy bay",
  "canal-d-amour": "Rock formations and swim spots",
};

const SUPERMARKET_POIS: readonly MapPoi[] = [
  {
    id: "supermarket-moraitis",
    name: "Moraitis Supermarket",
    descriptor: "Local supermarket",
    category: "supermarket",
    lat: 39.485755,
    lng: 19.925079,
    cluster: true,
  },
  {
    id: "supermarket-ab",
    name: "AB Vasilopoulos",
    descriptor: "Local supermarket",
    category: "supermarket",
    lat: 39.609618,
    lng: 19.901861,
    cluster: true,
  },
  {
    id: "supermarket-sklavenitis",
    name: "Sklavenitis",
    descriptor: "Local supermarket",
    category: "supermarket",
    lat: 39.606474,
    lng: 19.895882,
    cluster: true,
  },
];

export const MAP_POIS: readonly MapPoi[] = [
  {
    id: "villa",
    name: SITE.name,
    descriptor: "Bastatika, Paleochori",
    category: "villa",
    lat: SITE.location.coordinates.lat,
    lng: SITE.location.coordinates.lng,
    cluster: false,
  },
  ...RESTAURANTS.map((item) => ({
    id: `restaurant-${item.slug}`,
    name: item.name,
    descriptor: capitalizeDescriptor(item.tag),
    category: "restaurant" as const,
    ...RESTAURANT_COORDINATES[item.slug],
    cluster: true,
  })),
  ...BEACHES.map((item) => ({
    id: `beach-${item.slug}`,
    name: item.name,
    descriptor: BEACH_DESCRIPTORS[item.slug],
    category: "beach" as const,
    ...BEACH_COORDINATES[item.slug],
    cluster: true,
  })),
  ...SUPERMARKET_POIS,
  {
    id: "corfu-hospital",
    name: "Corfu General Hospital",
    descriptor: "Main public hospital",
    category: "hospital",
    lat: 39.6436483,
    lng: 19.8507427,
    cluster: false,
  },
  {
    id: "corfu-airport",
    name: "Corfu Airport",
    descriptor: "International airport",
    category: "airport",
    lat: 39.6019011,
    lng: 19.9140363,
    cluster: false,
  },
  {
    id: "corfu-port",
    name: "Port of Corfu",
    descriptor: "Ferry terminal",
    category: "port",
    lat: 39.6265888,
    lng: 19.9063408,
    cluster: false,
  },
];

function capitalizeDescriptor(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const MAP_FIT_OPTIONS = {
  paddingTopLeft: [20, 28] as [number, number],
  paddingBottomRight: [20, 28] as [number, number],
  maxZoom: 11,
} as const;
