import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/constants/site";
import { SiteContainer } from "@/components/layout/site-container";
import { BODY_PROSE, DISPLAY_SECTION } from "@/lib/styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <SiteContainer className="py-24 md:py-32">
      <Link
        href="/"
        className="font-sans text-xs uppercase tracking-[0.14em] text-charcoal/60 hover:text-charcoal"
      >
        &larr; Back to {SITE.name}
      </Link>
      <h1 className={cn(DISPLAY_SECTION, "mt-8 text-charcoal")}>
        Privacy Policy
      </h1>
      <div className={cn(BODY_PROSE, "mt-8 max-w-[640px] space-y-6")}>
        <p>
          {SITE.name} respects your privacy. This policy explains how we collect
          and use personal information when you enquire about a stay at our villa.
        </p>
        <h2 className="font-display text-xl font-light text-charcoal">
          Information we collect
        </h2>
        <p>
          When you contact us, we may collect your name, email address, phone
          number, preferred dates, and any other information you choose to
          provide.
        </p>
        <h2 className="font-display text-xl font-light text-charcoal">
          How we use your information
        </h2>
        <p>
          We use your information solely to respond to your enquiry, manage
          bookings, and communicate about your stay. We do not sell or share
          your data with third parties for marketing purposes.
        </p>
        <h2 className="font-display text-xl font-light text-charcoal">
          Contact
        </h2>
        <p>
          For privacy-related questions, contact us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-charcoal underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </SiteContainer>
  );
}
