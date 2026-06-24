import { AMENITIES } from "@/constants/content";
import { SECTION_IDS } from "@/constants/site";
import { AmenityGrid } from "@/components/ui/amenity-grid";
import { ChapterWhisper } from "@/components/ui/chapter";
import { SectionHeading } from "@/components/ui/section-heading";

export function AmenitiesSection() {
  return (
    <ChapterWhisper
      id={SECTION_IDS.amenities}
      aria-labelledby="amenities-heading"
      compact
      className="bg-alabaster"
    >
      <SectionHeading
        id="amenities-heading"
        label="Amenities"
        title="Everything considered"
        description="Every comfort considered — so nothing interrupts the stay."
        align="center"
        className="mb-8 md:mb-10"
      />
      <AmenityGrid items={AMENITIES} />
    </ChapterWhisper>
  );
}
