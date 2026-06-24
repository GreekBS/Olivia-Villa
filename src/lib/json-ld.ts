import { SITE } from "@/constants/site";
import { IMAGES } from "@/constants/images";

const postalAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: "Bastatika, Paleochori",
  addressLocality: SITE.location.locality,
  postalCode: SITE.location.postalCode,
  addressRegion: SITE.location.region,
  addressCountry: SITE.location.countryCode,
};

const geoCoordinates = {
  "@type": "GeoCoordinates" as const,
  latitude: SITE.location.coordinates.lat,
  longitude: SITE.location.coordinates.lng,
};

export function getVacationRentalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}${IMAGES.hero.src}`,
    address: postalAddress,
    geo: geoCoordinates,
    numberOfRooms: SITE.facts.suites,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private swimming pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
    ],
    containedInPlace: {
      "@type": "Place",
      name: SITE.location.region,
      address: {
        "@type": "PostalAddress",
        addressRegion: SITE.location.region,
        addressCountry: SITE.location.countryCode,
      },
    },
  };
}

export function getLodgingBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}${IMAGES.hero.src}`,
    email: SITE.email,
    priceRange: "$$$$",
    address: postalAddress,
    geo: geoCoordinates,
  };
}
