"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { Car, X } from "lucide-react";
import { FOCUS_RING } from "@/lib/styles";
import { cn } from "@/lib/utils";

const CAR_RENTAL_URL = "https://cfucarrental.com/";
const TOOLTIP_TEXT =
  "Need a car? Would you like to rent a car during your stay?";
const TOOLTIP_DISMISS_MS = 6000;
const TOOLTIP_SESSION_KEY = "car-rental-tooltip-dismissed";

export function FloatingCarRentalButton() {
  const tooltipId = useId();
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(TOOLTIP_SESSION_KEY)) return;

    setTooltipVisible(true);

    const timer = window.setTimeout(() => {
      setTooltipVisible(false);
      sessionStorage.setItem(TOOLTIP_SESSION_KEY, "1");
    }, TOOLTIP_DISMISS_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const dismissTooltip = useCallback(() => {
    setTooltipVisible(false);
    sessionStorage.setItem(TOOLTIP_SESSION_KEY, "1");
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-20 right-4 z-[140] flex items-end justify-end gap-3",
        "lg:bottom-6 lg:right-6",
      )}
      aria-live="polite"
    >
      {tooltipVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={cn(
            "pointer-events-auto relative max-w-[min(16rem,calc(100vw-6rem))] rounded-lg border border-charcoal/10",
            "bg-alabaster px-3.5 py-2.5 shadow-[0_4px_20px_rgba(26,26,26,0.12)]",
            "font-sans text-[0.8125rem] leading-snug text-charcoal/85",
          )}
        >
          <p className="pr-6">{TOOLTIP_TEXT}</p>
          <button
            type="button"
            onClick={dismissTooltip}
            className={cn(
              "absolute right-1.5 top-1.5 rounded p-1 text-charcoal/50",
              "hover:text-charcoal/80",
              FOCUS_RING,
            )}
            aria-label="Dismiss car rental message"
          >
            <X className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      )}

      <a
        href={CAR_RENTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Car rental"
        aria-describedby={tooltipVisible ? tooltipId : undefined}
        className={cn(
          "pointer-events-auto flex shrink-0 items-center justify-center rounded-full",
          "bg-[#7EC8FF] text-obsidian shadow-[0_4px_20px_rgba(26,26,26,0.25)]",
          "transition-transform duration-300 ease-elysion hover:scale-105",
          "h-12 w-12 lg:h-14 lg:w-14",
          FOCUS_RING,
        )}
      >
        <Car className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.75} aria-hidden />
      </a>
    </div>
  );
}
