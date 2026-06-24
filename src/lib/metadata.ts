import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { OG_IMAGE } from "@/constants/images";

const ogImageUrl = `${SITE.url}${OG_IMAGE.src}`;

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Luxury Private Villa in Corfu, Greece`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "luxury villa Corfu",
    "private pool villa Corfu",
    "Olivia Luxury Villa",
    "modern villa Greece",
    "exclusive villa Corfu",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Luxury Private Villa in Corfu, Greece`,
    description: SITE.description,
    images: [
      {
        url: ogImageUrl,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Luxury Private Villa in Corfu, Greece`,
    description: SITE.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  category: "travel",
};
