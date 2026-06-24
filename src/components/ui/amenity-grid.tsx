import {
  AirVent,
  Bath,
  Car,
  ChefHat,
  Coffee,
  Shield,
  Tv,
  Users,
  WashingMachine,
  Wifi,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BODY_PROSE } from "@/lib/styles";

const ICON_MAP: Record<string, LucideIcon> = {
  wifi: Wifi,
  pool: Waves,
  "air-conditioning": AirVent,
  tv: Tv,
  parking: Car,
  coffee: Coffee,
  washing: WashingMachine,
  bbq: ChefHat,
  bath: Bath,
  kitchen: ChefHat,
  users: Users,
  shield: Shield,
};

type AmenityGridProps = {
  items: readonly { icon: string; label: string }[];
  className?: string;
};

export function AmenityGrid({ items, className }: AmenityGridProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-10",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = ICON_MAP[item.icon] ?? Shield;
        return (
          <li key={item.label} className="flex flex-col items-start gap-2.5">
            <Icon
              className="size-5 stroke-[1.5] text-amber md:size-6"
              aria-hidden
            />
            <span className={cn(BODY_PROSE, "text-charcoal/80")}>{item.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
