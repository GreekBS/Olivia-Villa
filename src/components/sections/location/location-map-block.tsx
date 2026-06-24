"use client";

import dynamic from "next/dynamic";
import { SITE } from "@/constants/site";
import { BODY_PROSE } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { MapLegend } from "./map-legend";

const CorfuMap = dynamic(
  () => import("./corfu-map").then((mod) => mod.CorfuMap),
  { ssr: false },
);

export function LocationMapBlock() {
  return (
    <>
      <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-[#c8dae8]">
        <CorfuMap />
      </div>
      <MapLegend />
      <address
        className={cn(
          BODY_PROSE,
          "mt-8 text-center not-italic text-charcoal/80",
        )}
      >
        <span className="block font-display text-xl font-light tracking-tight text-charcoal md:text-2xl">
          {SITE.name}
        </span>
        <span className="mt-3 block">Bastatika, Paleochori</span>
        <span className="block">Bastátika {SITE.location.postalCode}</span>
        <span className="block">
          {SITE.location.region}, {SITE.location.country}
        </span>
      </address>
    </>
  );
}
