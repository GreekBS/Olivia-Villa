import Link from "next/link";
import { FOCUS_RING } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[400]",
        "focus:rounded-sm focus:bg-alabaster focus:px-4 focus:py-3",
        "focus:font-sans focus:text-sm focus:tracking-wide focus:text-charcoal",
        FOCUS_RING,
      )}
    >
      Skip to content
    </Link>
  );
}
