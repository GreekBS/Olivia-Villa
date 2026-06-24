import { NAV_LINKS, SECTION_IDS, SITE, WHATSAPP_BOOKING_URL } from "@/constants/site";
import { BODY_PROSE, CONTAINER, PAGE_PADDING, SECTION_LABEL } from "@/lib/styles";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = [
  ...NAV_LINKS,
  { href: `#${SECTION_IDS.amenities}`, label: "Amenities" },
  { href: `#${SECTION_IDS.faq}`, label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-obsidian text-alabaster">
      <div className={cn(CONTAINER, PAGE_PADDING, "py-20 md:py-24")}>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-light tracking-tight">
              {SITE.name}
            </p>
            <p className={cn(BODY_PROSE, "mt-4 text-alabaster/60")}>
              {SITE.location.region}, {SITE.location.country}
            </p>
          </div>
          <nav aria-label="Footer" className="lg:col-span-2">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      SECTION_LABEL,
                      "text-alabaster/60 transition-opacity duration-300 ease-elysion hover:text-alabaster",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className={cn(SECTION_LABEL, "text-alabaster/50")}>Enquire</p>
            <a
              href={`mailto:${SITE.email}`}
              className={cn(BODY_PROSE, "mt-2 block text-alabaster/70 hover:text-alabaster")}
            >
              {SITE.email}
            </a>
            <div className="mt-6">
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center border border-alabaster/40 px-8 font-sans text-xs font-medium uppercase tracking-[0.12em] text-alabaster transition-all duration-300 ease-elysion hover:border-alabaster active:scale-[0.98]"
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-alabaster/10 pt-8 md:flex-row md:items-center">
          <p className={cn(SECTION_LABEL, "text-alabaster/40")}>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
