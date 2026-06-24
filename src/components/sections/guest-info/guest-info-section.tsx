import { SECTION_IDS, SITE, WHATSAPP_BOOKING_URL } from "@/constants/site";
import { ChapterWhisper } from "@/components/ui/chapter";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { BODY_PROSE, DISPLAY_SUBSECTION, SECTION_LABEL } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function GuestInfoSection() {
  return (
    <ChapterWhisper
      id={SECTION_IDS.guestInfo}
      aria-labelledby="guest-info-heading"
      compact
    >
      <SectionHeading
        id="guest-info-heading"
        label="Guest Information"
        title="Before you arrive"
        align="center"
        className="mb-8 md:mb-10"
      />
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className={cn(DISPLAY_SUBSECTION, "text-charcoal")}>
            Arrival &amp; Departure
          </h3>
          <dl className="mt-5 space-y-4">
            <div>
              <dt className={cn(SECTION_LABEL, "text-charcoal/70")}>Check-in</dt>
              <dd className={cn(BODY_PROSE, "mt-1.5")}>From {SITE.guest.checkIn}</dd>
            </div>
            <div>
              <dt className={cn(SECTION_LABEL, "text-charcoal/70")}>Check-out</dt>
              <dd className={cn(BODY_PROSE, "mt-1.5")}>By {SITE.guest.checkOut}</dd>
            </div>
            <div>
              <dt className={cn(SECTION_LABEL, "text-charcoal/70")}>Minimum stay</dt>
              <dd className={cn(BODY_PROSE, "mt-1.5")}>
                {SITE.guest.minimumStay} nights
              </dd>
            </div>
            <div>
              <dt className={cn(SECTION_LABEL, "text-charcoal/70")}>Parking</dt>
              <dd className={cn(BODY_PROSE, "mt-1.5")}>{SITE.guest.parking}</dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 className={cn(DISPLAY_SUBSECTION, "text-charcoal")}>
            House Guidelines
          </h3>
          <ul className="mt-5 space-y-3">
            {SITE.guest.rules.map((rule) => (
              <li key={rule} className={cn(BODY_PROSE, "flex gap-3")}>
                <span aria-hidden className="text-amber">
                  —
                </span>
                {rule}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-charcoal/10 pt-6">
            <p className={cn(SECTION_LABEL, "text-charcoal/70")}>Contact</p>
            <p className="mt-2">
              <TextLink href={`mailto:${SITE.email}`}>{SITE.email}</TextLink>
            </p>
            <p className="mt-2">
              <TextLink href={WHATSAPP_BOOKING_URL} external>
                WhatsApp
              </TextLink>
            </p>
          </div>
        </div>
      </div>
    </ChapterWhisper>
  );
}
