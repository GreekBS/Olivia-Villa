"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet.markercluster";
import { MAP_POIS, MAP_FIT_OPTIONS } from "@/constants/map-pois";
import {
  CORFU_FRAMING_BOUNDS,
  CORFU_ISLAND_BOUNDS,
  createMapPinHtml,
  createMapPopupHtml,
  getMapPinDimensions,
  MAP_TILE_ATTRIBUTION,
  MAP_TILE_URL,
} from "@/lib/maps";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

function createPoiIcon(category: (typeof MAP_POIS)[number]["category"]) {
  const { iconSize, iconAnchor } = getMapPinDimensions(category);

  return L.divIcon({
    className: "map-poi-pin-wrapper",
    html: createMapPinHtml(category),
    iconSize,
    iconAnchor,
  });
}

function getFramingBounds() {
  return L.latLngBounds(
    [CORFU_FRAMING_BOUNDS.southWest.lat, CORFU_FRAMING_BOUNDS.southWest.lng],
    [CORFU_FRAMING_BOUNDS.northEast.lat, CORFU_FRAMING_BOUNDS.northEast.lng],
  );
}

function applyEditorialView(map: L.Map) {
  map.fitBounds(getFramingBounds(), MAP_FIT_OPTIONS);
  const fittedZoom = map.getZoom();
  map.setMinZoom(fittedZoom);
  map.setMaxZoom(fittedZoom);
}

export function CorfuMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    const map = L.map(container, {
      center: [39.595, 19.86],
      zoom: 10,
      zoomControl: false,
      attributionControl: true,
      dragging: false,
      scrollWheelZoom: false,
      touchZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
    });

    L.tileLayer(MAP_TILE_URL, {
      attribution: MAP_TILE_ATTRIBUTION,
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map);

    const clusterGroup = L.markerClusterGroup({
      maxClusterRadius: 28,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      spiderfyOnMaxZoom: true,
      animate: false,
      iconCreateFunction: (cluster) => {
        const count = cluster.getChildCount();
        const size = count < 4 ? 22 : count < 7 ? 26 : 30;

        return L.divIcon({
          html: `<span class="map-cluster">${count}</span>`,
          className: "map-cluster-wrapper",
          iconSize: [size, size],
        });
      },
    });

    const standaloneMarkers: L.Marker[] = [];
    let villaMarker: L.Marker | null = null;

    for (const poi of MAP_POIS) {
      const marker = L.marker([poi.lat, poi.lng], {
        icon: createPoiIcon(poi.category),
        interactive: true,
        zIndexOffset:
          poi.category === "villa"
            ? 1000
            : poi.category === "hospital" ||
                poi.category === "airport" ||
                poi.category === "port"
              ? 200
              : 0,
      });

      marker.bindPopup(createMapPopupHtml(poi.name, poi.descriptor), {
        className: "map-poi-popup-wrapper",
        closeButton: true,
        maxWidth: 200,
        minWidth: 120,
        autoPan: true,
        autoPanPadding: [20, 20],
        offset: [0, -4],
      });

      if (poi.category === "villa") {
        villaMarker = marker;
      } else if (poi.cluster) {
        clusterGroup.addLayer(marker);
      } else {
        standaloneMarkers.push(marker);
      }
    }

    map.addLayer(clusterGroup);
    for (const marker of standaloneMarkers) {
      marker.addTo(map);
    }
    villaMarker?.addTo(map);

    applyEditorialView(map);

    map.setMaxBounds(
      L.latLngBounds(
        [CORFU_ISLAND_BOUNDS.southWest.lat, CORFU_ISLAND_BOUNDS.southWest.lng],
        [CORFU_ISLAND_BOUNDS.northEast.lat, CORFU_ISLAND_BOUNDS.northEast.lng],
      ),
    );

    mapRef.current = map;

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
      applyEditorialView(map);
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="corfu-map absolute inset-0 size-full"
      role="img"
      aria-label="Map of Corfu island showing Olivia Luxury Villa and nearby points of interest"
    />
  );
}
