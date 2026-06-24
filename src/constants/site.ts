export const SITE = {
  name: "Olivia Luxury Villa",
  headline: "A private evening in Corfu",
  tagline:
    "Four suites, a luminous pool, and walled gardens — yours alone.",
  description:
    "Olivia Luxury Villa is a private luxury villa in Corfu, Greece. Four suites, a heated pool, and interiors of stone, oak, and sculpted light.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://olivialuxuryvilla.com",
  locale: "en_GB",
  email: "Sofokliskantas@hotmail.com",
  whatsapp: "491718601240",
  location: {
    region: "Corfu",
    country: "Greece",
    countryCode: "GR",
    address: "Bastatika, Paleochori, Bastátika, 49080, Greece",
    locality: "Bastátika",
    postalCode: "49080",
    coordinates: { lat: 39.3932062, lng: 20.071152 },
  },
  facts: {
    areaSqm: 200,
    suites: 4,
    bathrooms: 4,
    guests: 8,
    pool: "Private heated pool",
  },
  guest: {
    checkIn: "16:00",
    checkOut: "10:00",
    minimumStay: 5,
    parking: "Private on-site parking for multiple vehicles",
    rules: [
      "No smoking indoors",
      "Quiet hours after 23:00",
      "Pool towels provided — no glass poolside",
      "Please leave the villa as you found it",
    ],
  },
} as const;

export const SECTION_IDS = {
  hero: "hero",
  promise: "promise",
  estate: "estate",
  experience: "experience",
  diningNearby: "dining-nearby",
  bedrooms: "bedrooms",
  living: "living",
  outdoor: "outdoor",
  amenities: "amenities",
  gallery: "gallery",
  location: "location",
  nearbyBeaches: "nearby-beaches",
  whyChoose: "why-choose",
  guestInfo: "guest-info",
  faq: "faq",
  book: "book",
} as const;

export const NAV_LINKS = [
  { href: `#${SECTION_IDS.estate}`, label: "The Villa" },
  { href: `#${SECTION_IDS.experience}`, label: "Experience" },
  { href: `#${SECTION_IDS.bedrooms}`, label: "Suites" },
  { href: `#${SECTION_IDS.gallery}`, label: "Gallery" },
  { href: `#${SECTION_IDS.location}`, label: "Location" },
] as const;

export const BOOK_HREF = `#${SECTION_IDS.book}` as const;

export const WHATSAPP_BOOKING_URL =
  "https://wa.me/491718601240?text=Hello%21%20I%27m%20interested%20in%20booking%20Olivia%20Luxury%20Villa.%20Could%20you%20please%20let%20me%20know%20the%20availability%20and%20rates%3F%20Thank%20you%21" as const;
