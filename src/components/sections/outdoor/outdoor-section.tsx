import { OUTDOOR_FEATURES } from "@/constants/content";
import { IMAGES } from "@/constants/images";
import { SECTION_IDS } from "@/constants/site";
import { ChapterSplit } from "@/components/ui/chapter";
import { SectionHeading } from "@/components/ui/section-heading";
import { EditorialImageFrame } from "@/components/ui/villa-image-fill";
import { BODY_PROSE, EDITORIAL_FRAME, SECTION_LABEL } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { imageSizesSplit } from "@/lib/images";

export function OutdoorSection() {
  return (
    <ChapterSplit
      id={SECTION_IDS.outdoor}
      aria-labelledby="outdoor-heading"
      compact
    >
      <EditorialImageFrame
        image={IMAGES.estatePoolDay}
        sizes={imageSizesSplit()}
        className={EDITORIAL_FRAME}
      />
      <div>
        <SectionHeading
          id="outdoor-heading"
          label="Outdoor Living"
          title="Where days unfold"
          description="Pool, terrace, and garden — yours alone, from first light to last."
        />
        <ul className="mt-6 space-y-2.5">
          {OUTDOOR_FEATURES.map((feature) => (
            <li
              key={feature}
              className={cn(
                SECTION_LABEL,
                "border-b border-charcoal/10 pb-3 text-charcoal/80 last:border-0",
              )}
            >
              {feature}
            </li>
          ))}
        </ul>
        <p className={cn(BODY_PROSE, "mt-5 max-w-md")}>
          Sun loungers line the pool. A shaded terrace seats eight. The upper
          balcony catches the last light of every day.
        </p>
      </div>
    </ChapterSplit>
  );
}
