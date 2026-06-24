import { RESTAURANTS } from "@/constants/destinations";
import { SECTION_IDS } from "@/constants/site";
import { ChapterWhisper } from "@/components/ui/chapter";
import { DestinationCarousel } from "@/components/ui/destination-carousel";
import { SectionHeading } from "@/components/ui/section-heading";

export function DiningNearbySection() {
  return (
    <ChapterWhisper
      id={SECTION_IDS.diningNearby}
      aria-labelledby="dining-nearby-heading"
      compact
      className="bg-stone pt-8 md:pt-10"
    >
      <SectionHeading
        id="dining-nearby-heading"
        label="Corfu"
        title="Dining Nearby"
        description="Curated tables within easy reach of the villa — from fine dining to seaside tavernas."
        align="center"
        className="mb-8 md:mb-10"
      />
      <DestinationCarousel items={RESTAURANTS} tone="warm" />
    </ChapterWhisper>
  );
}
