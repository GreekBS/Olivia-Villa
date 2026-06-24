import { cn } from "@/lib/utils";
import { SECTION_LABEL } from "@/lib/styles";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <p
      className={cn(
        SECTION_LABEL,
        light ? "text-white/80" : "text-charcoal/60",
        className,
      )}
    >
      {children}
    </p>
  );
}
