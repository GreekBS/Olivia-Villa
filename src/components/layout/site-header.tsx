"use client";

import { useCallback, useState } from "react";
import { NAV_LINKS, SITE, WHATSAPP_BOOKING_URL } from "@/constants/site";
import { useScrolledPastHero } from "@/components/providers/app-providers";
import { NavLink } from "@/components/ui/nav-link";
import { TextLink } from "@/components/ui/text-link";
import { useEscapeKey } from "@/hooks/use-escape-key";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { CONTAINER, NAV_LINK, PAGE_PADDING } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const scrolledPastHero = useScrolledPastHero();
  const [menuOpen, setMenuOpen] = useState(false);
  const onHero = !scrolledPastHero;

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const scrollToBooking = useCallback(() => {
    closeMenu();
    window.setTimeout(() => {
      document
        .getElementById("booking-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [closeMenu]);
  const menuRef = useFocusTrap(menuOpen);

  useLockBodyScroll(menuOpen);
  useEscapeKey(closeMenu, menuOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div
        className={cn(
          "transition-[background-color,backdrop-filter,border-color] duration-[600ms] ease-elysion",
          scrolledPastHero || menuOpen
            ? "border-b border-charcoal/8 bg-alabaster/72 backdrop-blur-[16px]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className={cn(CONTAINER, "flex h-16 items-center justify-between md:h-[72px]", PAGE_PADDING)}>
          <NavLink
            href="#hero"
            className={cn(
              "font-display text-lg font-light tracking-tight transition-colors duration-300",
              onHero && !menuOpen ? "text-white" : "text-charcoal",
            )}
            aria-label={`${SITE.name} — Home`}
          >
            {SITE.name}
          </NavLink>

          <nav aria-label="Primary" className="hidden items-center gap-8 xl:gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className={cn(
                  NAV_LINK,
                  "transition-opacity duration-300 hover:opacity-100",
                  onHero ? "text-white/80 hover:text-white" : "text-charcoal/70 hover:text-charcoal",
                )}
              >
                {link.label}
              </NavLink>
            ))}
            <TextLink href={WHATSAPP_BOOKING_URL} light={onHero} external className="opacity-80 hover:opacity-100">
              Book
            </TextLink>
          </nav>

          <button
            type="button"
            className={cn(
              "relative flex h-12 w-12 flex-col items-center justify-center gap-2 lg:hidden",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber",
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                "block h-px w-6 origin-center transition-all duration-[400ms] ease-elysion",
                onHero && !menuOpen ? "bg-white" : "bg-charcoal",
                menuOpen && "translate-y-[4.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 origin-center transition-all duration-[400ms] ease-elysion",
                onHero && !menuOpen ? "bg-white" : "bg-charcoal",
                menuOpen && "-translate-y-[4.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-0 z-[200] flex h-dvh max-h-dvh flex-col overflow-y-auto overscroll-y-contain bg-alabaster transition-opacity duration-[400ms] ease-elysion lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <button
          type="button"
          className={cn(
            "absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center text-charcoal",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber",
          )}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span aria-hidden="true" className="text-3xl font-light leading-none">
            ×
          </span>
        </button>
        <div className="px-6 pb-10 pt-24">
          <nav aria-label="Mobile primary" className="flex flex-col gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="font-display text-3xl font-light text-charcoal"
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              className="font-display text-3xl font-light text-charcoal text-left md:hidden"
              onClick={scrollToBooking}
            >
              Book
            </button>
          </nav>
        </div>
        <div className="shrink-0 border-t border-charcoal/8 px-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <TextLink href={WHATSAPP_BOOKING_URL} external onClick={closeMenu}>
            Book Your Stay
          </TextLink>
        </div>
      </div>
    </header>
  );
}
