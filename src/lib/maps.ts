import type { MapPoiCategory } from "@/constants/map-pois";
import { SITE } from "@/constants/site";

/** Geographic extent of Corfu island with sea padding (excludes Albania/mainland dominance). */
export const CORFU_ISLAND_BOUNDS = {
  southWest: { lat: 39.355, lng: 19.56 },
  northEast: { lat: 39.815, lng: 20.165 },
} as const;

/**
 * Editorial framing — Corfu landmass, not outer POI envelope.
 * Tighter than maxBounds; keeps all markers visible while reducing empty sea.
 */
export const CORFU_FRAMING_BOUNDS = {
  southWest: { lat: 39.388, lng: 19.645 },
  northEast: { lat: 39.802, lng: 20.075 },
} as const;

export const VILLA_COORDINATES = SITE.location.coordinates;

/** CARTO Voyager — OSM data, full colour, reduced label clutter for editorial use. */
export const MAP_TILE_URL =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

export const MAP_TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

/** Single source of truth for marker and legend colours. */
export const MAP_PIN_COLORS: Record<MapPoiCategory, string> = {
  villa: "#b87333",
  beach: "#5b87a8",
  restaurant: "#a67c52",
  supermarket: "#6b8f71",
  hospital: "#b86b6b",
  airport: "#2c4a6b",
  port: "#4a4a4a",
};

export const MAP_LEGEND_ITEMS: readonly {
  category: MapPoiCategory;
  label: string;
}[] = [
  { category: "villa", label: "Villa" },
  { category: "beach", label: "Beaches" },
  { category: "restaurant", label: "Restaurants" },
  { category: "supermarket", label: "Supermarkets" },
  { category: "hospital", label: "Hospital" },
  { category: "airport", label: "Airport" },
  { category: "port", label: "Port" },
];

type PinTier = "primary" | "infrastructure" | "secondary";

const PIN_TIER: Record<MapPoiCategory, PinTier> = {
  villa: "primary",
  hospital: "infrastructure",
  airport: "infrastructure",
  port: "infrastructure",
  beach: "secondary",
  restaurant: "secondary",
  supermarket: "secondary",
};

const PIN_SIZES: Record<PinTier, { head: number; stem: number; border: number }> =
  {
    primary: { head: 31, stem: 15, border: 3 },
    infrastructure: { head: 13, stem: 8, border: 2 },
    secondary: { head: 9, stem: 6, border: 1.5 },
  };

export function createMapPinHtml(category: MapPoiCategory): string {
  const tier = PIN_TIER[category];
  const color = MAP_PIN_COLORS[category];
  const { head, stem, border } = PIN_SIZES[tier];
  const isVilla = category === "villa";
  const modifier = isVilla ? " map-poi-pin--primary" : ` map-poi-pin--${category}`;

  return `
    <div class="map-poi-pin${modifier}" aria-hidden="true">
      <span class="map-poi-pin__head" style="width:${head}px;height:${head}px;border-width:${border}px;background:${color}"></span>
      <span class="map-poi-pin__stem" style="height:${stem}px"></span>
    </div>
  `;
}

export function createMapPopupHtml(name: string, descriptor: string): string {
  return `
    <div class="map-poi-popup">
      <p class="map-poi-popup__name">${name}</p>
      <p class="map-poi-popup__desc">${descriptor}</p>
    </div>
  `;
}

export function getMapPinDimensions(category: MapPoiCategory): {
  iconSize: [number, number];
  iconAnchor: [number, number];
} {
  const { head, stem } = PIN_SIZES[PIN_TIER[category]];
  const height = head + stem + 4;
  const width = head + 8;
  return {
    iconSize: [width, height],
    iconAnchor: [width / 2, height],
  };
}