export type ImageFocalPoint = {
  x: number;
  y: number;
};

export type VillaImage = {
  src: string;
  alt: string;
  caption?: string;
  focalPoint: ImageFocalPoint;
  objectPositionClass: string;
  width: number;
  height: number;
};

export const IMAGES = {
  hero: {
    src: "/images/image00050.jpeg",
    alt: "Olivia Luxury Villa at twilight — illuminated pool, modern white facade, and private terrace in Corfu, Greece",
    caption: "Twilight",
    focalPoint: { x: 50, y: 55 },
    objectPositionClass: "object-[50%_55%]",
    width: 4032,
    height: 2268,
  },
  heroPoolDusk: {
    src: "/images/image00011.png",
    alt: "Olivia Luxury Villa swimming pool at dusk with illuminated wooden steps and soft blue water",
    caption: "Water & Light",
    focalPoint: { x: 50, y: 55 },
    objectPositionClass: "object-[50%_62%]",
    width: 1536,
    height: 1024,
  },
  estatePoolDay: {
    src: "/images/image00051.jpeg",
    alt: "Olivia Luxury Villa private pool and modern white facade on a sunlit day in Corfu, Greece",
    caption: "The Estate",
    focalPoint: { x: 48, y: 42 },
    objectPositionClass: "object-[48%_42%]",
    width: 1920,
    height: 1280,
  },
  hearthInterior: {
    src: "/images/image00053.jpeg",
    alt: "Open-plan living room with dark marble feature wall, wood accents, and linear lighting",
    caption: "The Hearth",
    focalPoint: { x: 45, y: 45 },
    objectPositionClass: "object-[45%_45%]",
    width: 1920,
    height: 1280,
  },
  livingOpenPlan: {
    src: "/images/image00048.jpeg",
    alt: "Open-plan kitchen, dining, and living area with dark marble and warm wood accents",
    caption: "Open Living",
    focalPoint: { x: 50, y: 50 },
    objectPositionClass: "object-center",
    width: 1920,
    height: 1280,
  },
  livingDining: {
    src: "/images/image00047.jpeg",
    alt: "Elegant dining and living space with wood slat walls and sculptural lighting",
    caption: "Gather",
    focalPoint: { x: 40, y: 45 },
    objectPositionClass: "object-[40%_45%]",
    width: 1920,
    height: 1280,
  },
  kitchen: {
    src: "/images/image00045.jpeg",
    alt: "Modern kitchen with dark veined stone countertops and integrated cabinetry",
    caption: "The Kitchen",
    focalPoint: { x: 50, y: 50 },
    objectPositionClass: "object-center",
    width: 1920,
    height: 1280,
  },
  stoneSinkDetail: {
    src: "/images/image00001.jpeg",
    alt: "Hand-carved stone vessel sink with warm oak vanity and polished chrome faucet",
    caption: "Stone & Water",
    focalPoint: { x: 50, y: 60 },
    objectPositionClass: "object-[50%_60%]",
    width: 1920,
    height: 1280,
  },
  stoneSinksMoody: {
    src: "/images/image00005.jpeg",
    alt: "Double stone vessel sinks with warm wood vanity and ambient lighting",
    caption: "Sanctuary",
    focalPoint: { x: 50, y: 50 },
    objectPositionClass: "object-center",
    width: 1920,
    height: 1280,
  },
  marbleBathroom: {
    src: "/images/image00021.jpeg",
    alt: "Marble ensuite bathroom with walk-in shower and floating vanity",
    caption: "Marble & Light",
    focalPoint: { x: 50, y: 50 },
    objectPositionClass: "object-center",
    width: 1920,
    height: 1280,
  },
  crittallShower: {
    src: "/images/image00006.jpeg",
    alt: "Walk-in shower with black-framed glass partition and wood-look tiles",
    caption: "The Shower",
    focalPoint: { x: 45, y: 50 },
    objectPositionClass: "object-[45%_50%]",
    width: 1920,
    height: 1280,
  },
  bedroomPatio: {
    src: "/images/image00007.png",
    alt: "Bright bedroom with tufted headboard and direct access to a private patio",
    caption: "The Olive Suite",
    focalPoint: { x: 50, y: 45 },
    objectPositionClass: "object-[50%_45%]",
    width: 1920,
    height: 1280,
  },
  bedroomSea: {
    src: "/images/image00023.jpeg",
    alt: "Elegant bedroom with natural light and a glimpse of the sea beyond",
    caption: "The Light Suite",
    focalPoint: { x: 55, y: 45 },
    objectPositionClass: "object-[55%_45%]",
    width: 1920,
    height: 1280,
  },
  bedroomWardrobe: {
    src: "/images/image00009.jpeg",
    alt: "Spacious bedroom with floor-to-ceiling wardrobe and balcony doors",
    caption: "The Terrace Suite",
    focalPoint: { x: 50, y: 45 },
    objectPositionClass: "object-[50%_45%]",
    width: 1920,
    height: 1280,
  },
  bedroomGarden: {
    src: "/images/image00052.jpeg",
    alt: "Living room opening to a private terrace with garden views at Olivia Luxury Villa",
    caption: "The Garden Suite",
    focalPoint: { x: 50, y: 45 },
    objectPositionClass: "object-[50%_45%]",
    width: 1920,
    height: 1280,
  },
  terraceLiving: {
    src: "/images/image00052.jpeg",
    alt: "Living room with garden terrace views and warm natural light",
    caption: "Garden Terrace",
    focalPoint: { x: 50, y: 45 },
    objectPositionClass: "object-[50%_45%]",
    width: 1920,
    height: 1280,
  },
  staircase: {
    src: "/images/image00054.jpeg",
    alt: "Modern open-tread staircase with wood slat wall and polished floors",
    caption: "Architecture",
    focalPoint: { x: 50, y: 55 },
    objectPositionClass: "object-[50%_55%]",
    width: 1920,
    height: 1280,
  },
  galleryImage15: {
    src: "/images/image15.jpeg",
    alt: "Olivia Luxury Villa — sunlit interior with warm natural tones",
    caption: "Light & Space",
    focalPoint: { x: 50, y: 50 },
    objectPositionClass: "object-center",
    width: 1920,
    height: 1280,
  },
  galleryImage17: {
    src: "/images/image17.jpeg",
    alt: "Olivia Luxury Villa — refined interior with Mediterranean character",
    caption: "Detail",
    focalPoint: { x: 50, y: 50 },
    objectPositionClass: "object-center",
    width: 1920,
    height: 1280,
  },
  galleryImage012: {
    src: "/images/image012.jpeg",
    alt: "Olivia Luxury Villa — architectural detail and curated finishes",
    caption: "Craft",
    focalPoint: { x: 50, y: 50 },
    objectPositionClass: "object-center",
    width: 1920,
    height: 1280,
  },
} as const satisfies Record<string, VillaImage>;

export const GALLERY_IMAGES = [
  IMAGES.hero,
  IMAGES.estatePoolDay,
  IMAGES.hearthInterior,
  IMAGES.livingOpenPlan,
  IMAGES.kitchen,
  IMAGES.marbleBathroom,
  IMAGES.bedroomSea,
  IMAGES.galleryImage15,
  IMAGES.galleryImage17,
  IMAGES.galleryImage012,
  IMAGES.terraceLiving,
  IMAGES.livingDining,
  IMAGES.staircase,
] as const;

export const OG_IMAGE = IMAGES.hero;

/** Responsive object-position tuned to image00050 — pool foreground, villa right, sky left */
export const HERO_IMAGE_POSITION =
  "object-[48%_58%] sm:object-[50%_56%] md:object-[50%_54%] lg:object-[48%_55%] xl:object-[46%_56%] 2xl:object-[44%_58%]";
