"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_BOOKING_URL } from "@/constants/site";
import { useScrolledPastHero } from "@/components/providers/app-providers";
import { FOCUS_RING } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function MobileBookingBar() {
  const scrolledPastHero = useScrolledPastHero();
  const [nearBook, setNearBook] = useState(false);
  const visible = scrolledPastHero && !nearBook;

  useEffect(() => {
    const bookSection = document.getElementById("book");
    if (!bookSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearBook(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(bookSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[150] border-t border-charcoal/10 bg-obsidian transition-transform duration-500 ease-elysion lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <a
        href={WHATSAPP_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex h-14 items-center justify-center font-sans text-xs font-medium uppercase tracking-[0.14em] text-alabaster",
          FOCUS_RING,
        )}
      >
        Book Your Stay
      </a>
    </div>
  );
}
