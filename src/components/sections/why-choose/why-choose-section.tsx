import { WHY_CHOOSE } from "@/constants/content";
import { SECTION_IDS } from "@/constants/site";
import { ChapterWhisper } from "@/components/ui/chapter";
import { SectionHeading } from "@/components/ui/section-heading";
import { BODY_PROSE, DISPLAY_SUBSECTION } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function WhyChooseSection() {
  return (
    <ChapterWhisper
      id={SECTION_IDS.whyChoose}
      aria-labelledby="why-choose-heading"
      compact
    >
      <SectionHeading
        id="why-choose-heading"
        label="Why Olivia"
        title="Not a template villa"
        description="Architecture, materials, and setting — composed into something singular."
        align="center"
        className="mb-8 md:mb-10"
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
        {WHY_CHOOSE.map((item) => (
          <article key={item.title}>
            <h3 className={cn(DISPLAY_SUBSECTION, "text-charcoal")}>
              {item.title}
            </h3>
            <p className={cn(BODY_PROSE, "mt-2")}>{item.description}</p>
          </article>
        ))}
      </div>
    </ChapterWhisper>
  );
}
