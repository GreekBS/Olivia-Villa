import { LOCATION_HIGHLIGHTS } from "@/constants/content";
import { IMAGES } from "@/constants/images";
import { SECTION_IDS } from "@/constants/site";
import { LocationMapBlock } from "@/components/sections/location/location-map-block";
import { ChapterSplit, ChapterWhisper } from "@/components/ui/chapter";
import { SectionHeading } from "@/components/ui/section-heading";
import { EditorialImageFrame } from "@/components/ui/villa-image-fill";
import {
  BODY_PROSE,
  DISPLAY_SUBSECTION,
  EDITORIAL_FRAME,
  SECTION_LABEL,
} from "@/lib/styles";
import { cn } from "@/lib/utils";
import { imageSizesSplit } from "@/lib/images";

export function LocationSection() {
  return (
    <>
      <ChapterSplit
        id={SECTION_IDS.location}
        aria-labelledby="location-heading"
        reverse
        compact
        className="bg-stone"
      >
        <div>
          <SectionHeading
            id="location-heading"
            label="Location"
            title="Corfu, your private base"
            description="Ancient harbours, olive groves, and luminous coastlines — with Olivia Luxury Villa as your quiet centre."
          />
          <ul className="mt-6 space-y-5">
            {LOCATION_HIGHLIGHTS.map((item) => (
              <li key={item.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className={cn(DISPLAY_SUBSECTION, "text-charcoal")}>
                    {item.name}
                  </h3>
                  <span className={cn(SECTION_LABEL, "shrink-0 text-amber")}>
                    {item.distance}
                  </span>
                </div>
                <p className={cn(BODY_PROSE, "mt-1.5")}>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <EditorialImageFrame
          image={IMAGES.hearthInterior}
          sizes={imageSizesSplit()}
          className={EDITORIAL_FRAME}
        />
      </ChapterSplit>

      <ChapterWhisper compact className="py-10 md:py-12">
        <LocationMapBlock />
      </ChapterWhisper>
    </>
  );
}
