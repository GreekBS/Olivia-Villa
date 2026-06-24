import { SECTION_IDS, SITE, WHATSAPP_BOOKING_URL } from "@/constants/site";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionLabel } from "@/components/ui/section-label";
import {
  BODY_LIGHT,
  CONTAINER,
  DISPLAY_HERO,
  PAGE_PADDING,
  PROSE_MAX,
} from "@/lib/styles";
import { cn } from "@/lib/utils";

export function HeroOverlay() {
  return (
    <div
      className={cn(
        "absolute inset-x-0 top-0 z-10 flex min-h-svh flex-col",
        "pointer-events-none",
      )}
    >
      <div
        className={cn(
          CONTAINER,
          PAGE_PADDING,
          "pointer-events-auto flex flex-1 flex-col justify-start",
          "max-w-xl pb-32 pt-24 sm:pt-28 md:max-w-2xl md:pb-36 md:pt-32 lg:max-w-3xl lg:pt-36",
        )}
      >
        <div className="animate-hero-content">
          <SectionLabel light className="mb-4 md:mb-5">
            {SITE.name} · {SITE.location.region}
          </SectionLabel>
          <h1
            id="hero-heading"
            className={cn(DISPLAY_HERO, "text-white text-balance")}
          >
            {SITE.headline}
          </h1>
          <p className={cn(BODY_LIGHT, "mt-5 md:mt-6", PROSE_MAX)}>
            {SITE.tagline}
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <CtaButton
              href={WHATSAPP_BOOKING_URL}
              variant="primary"
              light
              external
              className="w-full sm:w-auto"
            >
              Book Your Stay
            </CtaButton>
            <CtaButton
              href={`#${SECTION_IDS.estate}`}
              variant="secondary"
              light
              className="w-full sm:w-auto"
            >
              Discover the Villa
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
