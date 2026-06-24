import { ESTATE_COPY } from "@/constants/content";
import { IMAGES } from "@/constants/images";
import { SECTION_IDS } from "@/constants/site";
import { ChapterSplit } from "@/components/ui/chapter";
import { EditorialImageFrame } from "@/components/ui/villa-image-fill";
import { SectionLabel } from "@/components/ui/section-label";
import {
  BODY_LARGE,
  DISPLAY_SECTION,
  EDITORIAL_FRAME,
  PROSE_MAX,
  SECTION_LABEL,
} from "@/lib/styles";
import { cn } from "@/lib/utils";
import { imageSizesSplit } from "@/lib/images";

export function EstateSection() {
  return (
    <ChapterSplit
      id={SECTION_IDS.estate}
      aria-labelledby="estate-heading"
      contentClassName="pt-12 pb-16 md:pt-14 md:pb-20"
    >
      <EditorialImageFrame
        image={IMAGES.staircase}
        sizes={imageSizesSplit()}
        className={EDITORIAL_FRAME}
      />
      <div>
        <SectionLabel className="mb-3 md:mb-4">{ESTATE_COPY.label}</SectionLabel>
        <h2
          id="estate-heading"
          className={cn(DISPLAY_SECTION, "text-balance text-charcoal")}
        >
          {ESTATE_COPY.title}
        </h2>
        <p className={cn(BODY_LARGE, "mt-4", PROSE_MAX)}>{ESTATE_COPY.body}</p>
        <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-charcoal/10 pt-6 sm:grid-cols-4">
          {ESTATE_COPY.highlights.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-display text-2xl font-light text-charcoal md:text-3xl">
                {item.value}
              </dd>
              <dd className={cn(SECTION_LABEL, "mt-1 text-charcoal/70")}>
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </ChapterSplit>
  );
}
