import { IMAGES } from "@/constants/images";
import { SECTION_IDS, SITE, WHATSAPP_BOOKING_URL } from "@/constants/site";
import { ChapterSplit } from "@/components/ui/chapter";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { EditorialImageFrame } from "@/components/ui/villa-image-fill";
import { BODY_PROSE, EDITORIAL_FRAME } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { imageSizesSplit } from "@/lib/images";

export function BookingSection() {
  return (
    <ChapterSplit
      id={SECTION_IDS.book}
      aria-labelledby="book-heading"
      className="bg-stone"
      contentClassName="py-20 md:py-24 lg:py-28"
    >
      <EditorialImageFrame
        image={IMAGES.estatePoolDay}
        sizes={imageSizesSplit()}
        className={EDITORIAL_FRAME}
      />
      <div>
        <SectionHeading
          id="book-heading"
          label="Reserve"
          title="Your stay begins here"
          description="Write to us and we will reply within twenty-four hours with availability and a quote."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <CtaButton
            href={WHATSAPP_BOOKING_URL}
            variant="primary"
            external
            className="w-full sm:w-auto"
          >
            Book Your Stay
          </CtaButton>
          <CtaButton
            href={WHATSAPP_BOOKING_URL}
            variant="secondary"
            external
            className="w-full sm:w-auto"
          >
            WhatsApp
          </CtaButton>
        </div>
        <p className="mt-6">
          <a
            href={`mailto:${SITE.email}`}
            className={cn(
              BODY_PROSE,
              "text-charcoal/70 underline-offset-4 transition-opacity duration-300 ease-elysion hover:text-charcoal hover:underline",
            )}
          >
            {SITE.email}
          </a>
        </p>
      </div>
    </ChapterSplit>
  );
}
