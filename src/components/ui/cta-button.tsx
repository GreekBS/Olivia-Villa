import { FOCUS_RING, TRANSITION_BASE } from "@/lib/styles";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  light?: boolean;
  external?: boolean;
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  light = false,
  external = false,
  className,
}: CtaButtonProps) {
  const classes = cn(
    "inline-flex h-[52px] items-center justify-center px-8 font-sans text-xs font-medium uppercase tracking-[0.12em]",
    TRANSITION_BASE,
    "active:scale-[0.98]",
    FOCUS_RING,
    variant === "primary" && [
      light
        ? "bg-white text-charcoal hover:bg-white/90"
        : "bg-charcoal text-alabaster hover:bg-obsidian",
    ],
    variant === "secondary" && [
      "border",
      light
        ? "border-white/60 text-white hover:border-white hover:bg-white/10"
        : "border-charcoal/20 text-charcoal hover:border-charcoal/40",
    ],
    variant === "ghost" && [
      "text-charcoal underline-offset-4 hover:underline",
    ],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
