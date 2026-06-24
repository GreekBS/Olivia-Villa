import { SUITES_COPY } from "@/constants/content";
import { IMAGES } from "@/constants/images";
import { SECTION_IDS } from "@/constants/site";
import { ChapterSplit, ChapterWhisper } from "@/components/ui/chapter";
import { SectionHeading } from "@/components/ui/section-heading";
import { EditorialImageFrame } from "@/components/ui/villa-image-fill";
import { BODY_PROSE, EDITORIAL_FRAME, PROSE_MAX, SECTION_LABEL } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { imageSizesSplit } from "@/lib/images";
import { Bath, Bed, Home, Users, type LucideIcon } from "lucide-react";

const DETAIL_ICONS: Record<string, LucideIcon> = {
  bed: Bed,
  bath: Bath,
  users: Users,
  home: Home,
};

export function BedroomsSection() {
  return (
    <>
      <ChapterWhisper
        id={SECTION_IDS.bedrooms}
        aria-labelledby="bedrooms-heading"
        compact
        className="pb-6 md:pb-8"
      >
        <SectionHeading
          id="bedrooms-heading"
          label={SUITES_COPY.label}
          title={SUITES_COPY.title}
          description={SUITES_COPY.description}
          align="center"
        />
      </ChapterWhisper>

      <ChapterSplit
        aria-labelledby="suites-details-heading"
        compact
        contentClassName="pt-8 pb-14 md:pt-10 md:pb-16"
      >
        <div className="relative w-full pb-10 pr-6 sm:pr-8 md:pb-14 md:pr-12">
          <EditorialImageFrame
            image={IMAGES.bedroomSea}
            sizes={imageSizesSplit()}
            className={cn(EDITORIAL_FRAME, "w-[70%] max-w-none")}
          />
          <EditorialImageFrame
            image={IMAGES.marbleBathroom}
            sizes="(max-width: 768px) 40vw, 220px"
            className={cn(
              EDITORIAL_FRAME,
              "absolute bottom-0 left-[54%] w-[36%] min-w-[7.5rem] max-w-[14rem] shadow-[0_12px_36px_-14px_rgba(42,42,42,0.18)] sm:max-w-[16rem] md:left-[56%] md:w-[34%] md:max-w-[18rem]",
            )}
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 id="suites-details-heading" className="sr-only">
            Villa accommodation
          </h3>

          <div
            className={cn(
              "grid grid-cols-2 gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-12",
              PROSE_MAX,
            )}
            role="list"
          >
            {SUITES_COPY.details.flat().map((item) => {
              const Icon = DETAIL_ICONS[item.icon] ?? Home;
              return (
                <div key={item.label} role="listitem" className="flex flex-col gap-3">
                  <Icon
                    className="size-[1.125rem] stroke-[1.5] text-amber/75 md:size-5"
                    aria-hidden
                  />
                  <p className="font-display text-lg font-light leading-snug text-charcoal md:text-xl">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <p className={cn(BODY_PROSE, "mt-8 md:mt-10", PROSE_MAX)}>
            {SUITES_COPY.closing}
          </p>

          <p
            className={cn(
              SECTION_LABEL,
              "mt-6 max-w-sm text-[10px] leading-relaxed tracking-[0.08em] text-charcoal/45 md:mt-8",
            )}
          >
            {SUITES_COPY.accent}
          </p>
        </div>
      </ChapterSplit>
    </>
  );
}
