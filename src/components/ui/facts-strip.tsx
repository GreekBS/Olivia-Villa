import { cn } from "@/lib/utils";
import { SECTION_LABEL } from "@/lib/styles";

type FactsStripProps = {
  items: readonly { value: string; label: string }[];
  dark?: boolean;
  className?: string;
};

export function FactsStrip({ items, dark = false, className }: FactsStripProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-10 md:gap-x-12 md:py-12",
        dark ? "bg-obsidian" : "bg-charcoal",
        className,
      )}
    >
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-8 md:gap-12">
          {index > 0 && (
            <span
              aria-hidden
              className="hidden h-px w-6 bg-alabaster/20 md:block"
            />
          )}
          <div className="text-center">
            <p className="font-display text-2xl font-light text-alabaster md:text-3xl">
              {item.value}
            </p>
            <p className={cn(SECTION_LABEL, "mt-1.5 text-alabaster/60")}>
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
