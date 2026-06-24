import { LIVING_SPACES } from "@/constants/content";
import { SECTION_IDS } from "@/constants/site";
import { ChapterSplit, ChapterWhisper } from "@/components/ui/chapter";
import { SectionHeading } from "@/components/ui/section-heading";
import { EditorialImageFrame } from "@/components/ui/villa-image-fill";
import { BODY_PROSE, DISPLAY_SUBSECTION, EDITORIAL_FRAME } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { imageSizesSplit } from "@/lib/images";

export function LivingSection() {
  return (
    <>
      <ChapterWhisper
        id={SECTION_IDS.living}
        aria-labelledby="living-heading"
        compact
        className="bg-stone pb-6 md:pb-8"
      >
        <SectionHeading
          id="living-heading"
          label="Interiors"
          title="Rooms of stone and light"
          description="Throughout the villa, marble, oak, and considered light create interiors that feel curated and calm — intimate in scale, generous in atmosphere."
          align="center"
        />
      </ChapterWhisper>

      {LIVING_SPACES.map((space, index) => (
        <ChapterSplit
          key={space.title}
          aria-labelledby={`living-${index}-heading`}
          reverse={index % 2 === 1}
          className={index % 2 === 1 ? "bg-stone" : undefined}
          compact
          contentClassName={index === 0 ? "pt-8 md:pt-10" : undefined}
        >
          <EditorialImageFrame
            image={space.image}
            sizes={imageSizesSplit()}
            className={EDITORIAL_FRAME}
          />
          <div>
            <h3
              id={`living-${index}-heading`}
              className={cn(DISPLAY_SUBSECTION, "text-charcoal")}
            >
              {space.title}
            </h3>
            <p className={cn(BODY_PROSE, "mt-2.5 max-w-md")}>{space.description}</p>
          </div>
        </ChapterSplit>
      ))}
    </>
  );
}
