"use client";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useScrolledPastHero } from "@/components/providers/app-providers";
import { SECTION_IDS } from "@/constants/site";
import { getHeaderScrollOffset } from "@/lib/scroll";
import { FOCUS_RING, SCROLL_HINT } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";

export function HeroScrollHint() {
  const scrolledPastHero = useScrolledPastHero();
  const reducedMotion = usePrefersReducedMotion();
  const lenis = useLenis();
  const visible = !scrolledPastHero;

  const scrollToPromise = () => {
    const target = document.getElementById(SECTION_IDS.promise);
    if (!target) return;

    if (lenis && !reducedMotion) {
      lenis.scrollTo(target, { offset: getHeaderScrollOffset() });
      return;
    }

    target.scrollIntoView({ behavior: "auto" });
  };

  return (
    <div
      className={cn(
        "absolute inset-x-0 bottom-8 z-10 flex justify-center transition-opacity duration-300",
        visible ? "opacity-60" : "pointer-events-none opacity-0",
      )}
    >
      <button
        type="button"
        aria-label="Scroll to explore"
        onClick={scrollToPromise}
        className={cn(
          "animate-scroll-hint flex flex-col items-center gap-3",
          FOCUS_RING,
        )}
      >
        <span className={cn(SCROLL_HINT, "text-white/70")}>Scroll</span>
        <span aria-hidden className="block h-10 w-px bg-white/50" />
      </button>
    </div>
  );
}
