import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { JsonLd } from "@/components/layout/json-ld";
import { SiteHeader } from "@/components/layout/site-header";
import { FloatingCarRentalButton } from "@/components/layout/floating-car-rental-button";
import { SkipLink } from "@/components/layout/skip-link";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full pb-14 lg:pb-0">
        <JsonLd />
        <AppProviders>
          <SkipLink />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <FloatingCarRentalButton />
        </AppProviders>
      </body>
    </html>
  );
}
