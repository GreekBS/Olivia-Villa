import { IMAGES } from "@/constants/images";

export const PROMISE_COPY = {
  lead: "Some places do not announce themselves.",
  body: "Behind white walls, Olivia Luxury Villa waits — stone, oak, and evening light. Time slows. The pool holds the sky.",
} as const;

export const ESTATE_COPY = {
  label: "The Estate",
  title: "Architecture with intention",
  body: "Four private suites, a heated pool, and terraces wrapped in stillness. Modern lines meet Mediterranean light — a house built for unhurried days.",
  highlights: [
    { value: "210", label: "Square metres" },
    { value: "4", label: "Suites" },
    { value: "3", label: "Bathrooms" },
    { value: "8", label: "Guests" },
  ],
} as const;

export const EXPERIENCE_COPY = {
  label: "The Experience",
  title: "Experience Corfu at Your Own Pace",
  intro:
    "Here, time loosens its hold. The island asks nothing of you except to arrive — and to let each day unfold as slowly or as boldly as you choose.",
  paragraphs: [
    "Slow mornings begin among olive trees, with light spilling through open doors and coffee taken on the terrace before the rest of Corfu stirs.",
    "Afternoons drift between sun and shade — a swim whenever the mood strikes, long lunches that stretch into nothing, and the easy rhythm of indoor and outdoor living flowing without interruption.",
    "As evening approaches, dinner moves outside beneath the pergola. Golden sunsets give way to quiet roads along the coast, hidden coves, and villages steeped in tradition — until you return together, carrying the day’s memories into the stillness of night.",
  ],
  highlights: [
    { label: "Heated Swimming Pool", icon: "sun" as const },
    { label: "Peaceful Mediterranean Setting", icon: "trees" as const },
    { label: "Minutes from Corfu's Finest Beaches", icon: "umbrella" as const },
    { label: "Outdoor Living & Dining", icon: "wine" as const },
  ],
} as const;

export const SUITES_COPY = {
  label: "Suites",
  title: "Designed for shared moments",
  description:
    "Four elegant bedrooms and three contemporary bathrooms create a comfortable retreat for families and groups seeking privacy, space, and effortless Mediterranean living.",
  details: [
    [
      { label: "4 Bedrooms", icon: "bed" as const },
      { label: "3 Bathrooms", icon: "bath" as const },
    ],
    [
      { label: "Sleeps 8–9 Guests", icon: "users" as const },
      { label: "Private Villa", icon: "home" as const },
    ],
  ],
  closing:
    "Whether travelling with family or friends, every space has been designed to balance privacy, comfort, and togetherness—allowing everyone to enjoy the villa at their own pace.",
  accent:
    "Natural light, handcrafted materials, and Mediterranean simplicity define every room.",
} as const;

export const LIVING_SPACES = [
  {
    title: "The Kitchen",
    description:
      "A kitchen of dark veined stone and integrated appliances, laid out for cooking at an unhurried pace.",
    image: IMAGES.kitchen,
  },
  {
    title: "The Hearth",
    description:
      "An open living space of marble and oak, softly lit and designed for gathering at the end of the day.",
    image: IMAGES.hearthInterior,
  },
  {
    title: "The Dining Room",
    description:
      "A solid wood table seats eight comfortably — made for long meals and lingering conversation.",
    image: IMAGES.livingDining,
  },
  {
    title: "The Bathrooms",
    description:
      "Hand-carved stone, warm wood, and veined marble transform everyday rituals into quiet moments of luxury.",
    image: IMAGES.stoneSinksMoody,
  },
] as const;

export const OUTDOOR_FEATURES = [
  "Private heated swimming pool",
  "Sun loungers and shaded terrace",
  "Outdoor dining for eight",
  "BBQ area",
  "Upper balcony with pergola",
  "Walled garden",
] as const;

export const AMENITIES = [
  { icon: "wifi", label: "High-Speed WiFi" },
  { icon: "pool", label: "Private Pool" },
  { icon: "air-conditioning", label: "Air Conditioning" },
  { icon: "tv", label: "Smart TV" },
  { icon: "parking", label: "Private Parking" },
  { icon: "coffee", label: "Coffee Machine" },
  { icon: "washing", label: "Laundry" },
  { icon: "bbq", label: "BBQ" },
  { icon: "bath", label: "Luxury Bathrooms" },
  { icon: "kitchen", label: "Equipped Kitchen" },
  { icon: "users", label: "Family Friendly" },
  { icon: "shield", label: "Complete Privacy" },
] as const;

export const LOCATION_HIGHLIGHTS = [
  {
    name: "Corfu Airport",
    distance: "45 min",
    description: "Direct flights from major European cities",
  },
  {
    name: "Corfu Old Town",
    distance: "35 min",
    description: "Venetian harbour, tavernas, and ancient streets",
  },
  {
    name: "Nearest Beach",
    distance: "10 min",
    description: "Quiet coves along the north coast",
  },
  {
    name: "Local Villages",
    distance: "5 min",
    description: "Local cooking in the surrounding hills",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Privacy",
    description: "Walled grounds. No shared spaces. The villa is entirely yours.",
  },
  {
    title: "Design",
    description: "Stone, marble, and sculpted light — a house with a point of view.",
  },
  {
    title: "The Pool",
    description: "Heated, private, and luminous at dusk.",
  },
  {
    title: "Materials",
    description: "Every surface chosen by hand. Nothing standard.",
  },
  {
    title: "Space",
    description: "Room for eight to gather — and room to disappear.",
  },
  {
    title: "Corfu",
    description: "Olive groves, ancient harbours, and enduring light.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is the minimum stay?",
    answer: "Five nights. Shorter visits are considered on request.",
  },
  {
    question: "Is the pool private?",
    answer:
      "Entirely. The pool, terrace, and loungers are yours alone for the duration of your stay.",
  },
  {
    question: "How do I reserve?",
    answer:
      "Write to us by email or WhatsApp. We reply within twenty-four hours with availability and a quote.",
  },
  {
    question: "What is provided?",
    answer:
      "Linens, towels, pool towels, WiFi, air conditioning, a fully equipped kitchen, and private parking.",
  },
  {
    question: "Is the villa suitable for families?",
    answer:
      "Yes. Four suites, a private pool, and generous outdoor space suit families and groups well.",
  },
  {
    question: "When are check-in and check-out?",
    answer: "Arrival from 16:00. Departure by 10:00. Other arrangements on request.",
  },
  {
    question: "How do we get there?",
    answer:
      "Corfu Airport is forty-five minutes by car. Directions are sent on confirmation.",
  },
  {
    question: "Is there on-site staff?",
    answer:
      "The villa is self-catered for privacy. Housekeeping and a private chef can be arranged.",
  },
] as const;
