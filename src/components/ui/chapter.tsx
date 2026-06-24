import { cn } from "@/lib/utils";
import { CONTAINER, PAGE_PADDING, SECTION_PY, SECTION_PY_COMPACT } from "@/lib/styles";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

type ChapterMonumentProps = {
  id?: string;
  "aria-labelledby"?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export function ChapterMonument({
  id,
  "aria-labelledby": ariaLabelledby,
  children,
  className,
  dark = false,
}: ChapterMonumentProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "relative min-h-svh w-full overflow-hidden",
        dark ? "bg-obsidian" : "bg-alabaster",
        className,
      )}
    >
      {children}
    </section>
  );
}

type ChapterSplitProps = {
  id?: string;
  "aria-labelledby"?: string;
  children: React.ReactNode;
  reverse?: boolean;
  dark?: boolean;
  className?: string;
  contentClassName?: string;
  compact?: boolean;
};

export function ChapterSplit({
  id,
  "aria-labelledby": ariaLabelledby,
  children,
  reverse = false,
  dark = false,
  className,
  contentClassName,
  compact = false,
}: ChapterSplitProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "relative w-full",
        dark ? "bg-obsidian text-alabaster" : "bg-alabaster",
        className,
      )}
    >
      <RevealOnScroll
        className={cn(
          CONTAINER,
          PAGE_PADDING,
          "grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14",
          compact ? "py-14 md:py-16" : "py-16 md:py-20 lg:py-24",
          reverse && "md:[&>*:first-child]:order-2",
          contentClassName,
        )}
      >
        {children}
      </RevealOnScroll>
    </section>
  );
}

type ChapterWhisperProps = {
  id?: string;
  "aria-labelledby"?: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  contentClassName?: string;
  compact?: boolean;
};

export function ChapterWhisper({
  id,
  "aria-labelledby": ariaLabelledby,
  children,
  dark = false,
  className,
  contentClassName,
  compact = false,
}: ChapterWhisperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "w-full",
        compact ? SECTION_PY_COMPACT : SECTION_PY,
        dark ? "bg-obsidian" : "bg-alabaster",
        PAGE_PADDING,
        className,
      )}
    >
      <div className={cn(CONTAINER, "mx-auto", contentClassName)}>
        <RevealOnScroll>{children}</RevealOnScroll>
      </div>
    </section>
  );
}
