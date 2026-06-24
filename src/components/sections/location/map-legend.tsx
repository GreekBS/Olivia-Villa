import { MAP_LEGEND_ITEMS, MAP_PIN_COLORS } from "@/lib/maps";
import { cn } from "@/lib/utils";

export function MapLegend() {
  return (
    <ul
      className={cn(
        "mx-auto mt-5 grid w-full max-w-4xl grid-cols-2 justify-items-center gap-x-6 gap-y-2.5",
        "min-[480px]:grid-cols-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-9 md:mt-6 md:gap-x-11 lg:gap-x-14",
      )}
      aria-label="Map legend"
    >
      {MAP_LEGEND_ITEMS.map(({ category, label }) => (
        <li
          key={category}
          className="inline-flex items-center gap-1.5 font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-charcoal/45"
        >
          <span
            className="size-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: MAP_PIN_COLORS[category] }}
            aria-hidden="true"
          />
          {label}
        </li>
      ))}
    </ul>
  );
}
