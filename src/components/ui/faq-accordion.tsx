"use client";

import { useCallback, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { BODY_PROSE, FOCUS_RING } from "@/lib/styles";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  return (
    <div className={cn("divide-y divide-charcoal/10", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className={cn(
                "flex w-full items-center justify-between gap-4 py-6 text-left",
                FOCUS_RING,
              )}
            >
              <span className="font-display text-lg font-light text-charcoal md:text-xl">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 stroke-[1.5] text-charcoal/50 transition-transform duration-300 ease-elysion",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-elysion",
                isOpen ? "pb-6" : "pb-0",
              )}
            >
              <p className={cn(BODY_PROSE, "max-w-[36rem]")}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
