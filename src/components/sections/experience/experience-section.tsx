import { EXPERIENCE_COPY } from "@/constants/content";
import { IMAGES } from "@/constants/images";
import { SECTION_IDS } from "@/constants/site";
import { ChapterSplit } from "@/components/ui/chapter";
import { SectionHeading } from "@/components/ui/section-heading";
import { EditorialImageFrame } from "@/components/ui/villa-image-fill";
import { BODY_PROSE, EDITORIAL_FRAME } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { imageSizesSplit } from "@/lib/images";
import { Sun, Trees, Umbrella, Wine, type LucideIcon } from "lucide-react";

const HIGHLIGHT_ICONS: Record<string, LucideIcon> = {
  sun: Sun,
  trees: Trees,
  umbrella: Umbrella,
  wine: Wine,
};

export function ExperienceSection() {
  return (
    <ChapterSplit
      id={SECTION_IDS.experience}
      aria-labelledby="experience-heading"
      className="bg-stone"
      contentClassName="pt-6 pb-16 md:pt-6 md:pb-20 lg:pt-4 lg:pb-24"
    >
      <div className="flex flex-col justify-center">
        <SectionHeading
          id="experience-heading"
          label={EXPERIENCE_COPY.label}
          title={EXPERIENCE_COPY.title}
          description={EXPERIENCE_COPY.intro}
          className="max-w-[34rem]"
        />

        <div className="mt-8 max-w-[34rem] space-y-6 md:mt-9 md:space-y-7 lg:space-y-8">
          {EXPERIENCE_COPY.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className={BODY_PROSE}>
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className="mt-10 grid max-w-[34rem] grid-cols-2 gap-x-8 gap-y-10 md:mt-12 md:gap-x-12 md:gap-y-12 lg:mt-14"
          role="list"
        >
          {EXPERIENCE_COPY.highlights.map((item) => {
            const Icon = HIGHLIGHT_ICONS[item.icon] ?? Sun;
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
      </div>

      <div className="relative w-full pb-10 pr-6 sm:pr-8 md:pb-14 md:pr-12">
        <EditorialImageFrame
          image={IMAGES.hero}
          sizes={imageSizesSplit()}
          className={cn(
            EDITORIAL_FRAME,
            "w-[70%] max-w-none md:max-h-[min(580px,72vh)]",
          )}
        />
        <EditorialImageFrame
          image={IMAGES.estatePoolDay}
          sizes="(max-width: 768px) 42vw, 240px"
          className={cn(
            EDITORIAL_FRAME,
            "absolute bottom-0 left-[54%] w-[36%] min-w-[7.5rem] max-w-[14rem] shadow-[0_12px_36px_-14px_rgba(42,42,42,0.18)] sm:max-w-[16rem] md:left-[56%] md:w-[34%] md:max-w-[18rem]",
          )}
        />
      </div>
    </ChapterSplit>
  );
}
