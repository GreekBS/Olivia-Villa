import { BEACHES } from "@/constants/destinations";
import { SECTION_IDS } from "@/constants/site";
import { ChapterWhisper } from "@/components/ui/chapter";
import { DestinationCarousel } from "@/components/ui/destination-carousel";
import { SectionHeading } from "@/components/ui/section-heading";

export function NearbyBeachesSection() {
  return (
    <ChapterWhisper
      id={SECTION_IDS.nearbyBeaches}
      aria-labelledby="nearby-beaches-heading"
      compact
    >
      <SectionHeading
        id="nearby-beaches-heading"
        label="Corfu"
        title="Nearby Beaches"
        description="The island's finest shores — from hidden coves to sweeping sandy bays."
        align="center"
        className="mb-8 md:mb-10"
      />
      <DestinationCarousel items={BEACHES} tone="bright" />
    </ChapterWhisper>
  );
}
