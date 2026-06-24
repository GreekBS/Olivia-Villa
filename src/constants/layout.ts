/** Shared layout constants — single source of truth for spacing & behaviour */
export const SCROLL_THRESHOLD = 80;

export const Z_INDEX = {
  header: 100,
  stickyCta: 150,
  mobileMenu: 200,
  lightbox: 300,
  skipLink: 400,
} as const;

export const LAYOUT = {
  containerMax: "1440px",
  textMax: "640px",
  proseMax: "480px",
} as const;
