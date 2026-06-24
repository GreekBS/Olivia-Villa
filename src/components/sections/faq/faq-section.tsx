import { FAQ_ITEMS } from "@/constants/content";
import { SECTION_IDS } from "@/constants/site";
import { ChapterWhisper } from "@/components/ui/chapter";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <ChapterWhisper
      id={SECTION_IDS.faq}
      aria-labelledby="faq-heading"
      compact
      className="bg-stone"
    >
      <SectionHeading
        id="faq-heading"
        label="Questions"
        title="Frequently asked"
        align="center"
        className="mb-8 md:mb-10"
      />
      <div className="mx-auto max-w-[36rem]">
        <FaqAccordion items={FAQ_ITEMS} />
      </div>
    </ChapterWhisper>
  );
}
