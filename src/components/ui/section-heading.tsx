import { SectionLabel } from "@/components/ui/section-label";
import { BODY_LARGE, DISPLAY_SECTION, PROSE_WIDE } from "@/lib/styles";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  light = false,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className,
      )}
    >
      <SectionLabel light={light} className="mb-3 md:mb-4">
        {label}
      </SectionLabel>
      <h2
        id={id}
        className={cn(
          DISPLAY_SECTION,
          "text-balance",
          light ? "text-white" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            BODY_LARGE,
            "mt-4",
            PROSE_WIDE,
            light ? "text-white/75" : "text-charcoal/75",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
