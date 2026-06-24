"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { DestinationItem } from "@/constants/destinations";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { BODY_PROSE, DISPLAY_SUBSECTION, FOCUS_RING, SECTION_LABEL } from "@/lib/styles";
import { cn } from "@/lib/utils";

type CarouselItem = DestinationItem & {
  image?: string;
  slug?: string;
  mapsUrl?: string;
};

type DestinationCarouselProps = {
  items: readonly CarouselItem[];
  tone?: "warm" | "bright";
  imageBasePath?: string;
};

const CARD_GAP_FALLBACK = 20;
const FORWARD_GROUP_SIZE = 3;
const BACKWARD_GROUP_SIZE = 4;

/** Quartz glass frame — shared by dining and beach cards */
const QUARTZ_CARD_FRAME =
  "border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[14px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-[border-color,backdrop-filter,box-shadow] duration-500 ease-elysion hover:border-[rgba(255,255,255,0.28)] hover:backdrop-blur-[16px] motion-reduce:backdrop-blur-none";

const TONE_STYLES = {
  warm: {
    visual: "bg-gradient-to-br from-obsidian via-charcoal/80 to-amber/25",
    card: QUARTZ_CARD_FRAME,
    image: "brightness-[0.92] saturate-[0.95]",
    overlay:
      "bg-gradient-to-t from-obsidian/35 via-amber/20 to-transparent",
  },
  bright: {
    visual: "bg-gradient-to-br from-stone via-alabaster to-sky-100/40",
    card: QUARTZ_CARD_FRAME,
    image: "brightness-[1.02] saturate-[1.05]",
    overlay:
      "bg-gradient-to-t from-[#3a6d85]/30 via-[#b8d4e8]/25 to-transparent",
  },
} as const;

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getImageSrc(
  item: CarouselItem,
  imageBasePath?: string,
): string | undefined {
  if (item.image) return item.image;
  if (!imageBasePath) return undefined;

  const slug = item.slug ?? slugify(item.name);
  return `${imageBasePath}/${slug}.jpg`;
}

type CarouselVisualProps = {
  name: string;
  imageSrc?: string;
  tone: keyof typeof TONE_STYLES;
};

function CarouselVisual({ name, imageSrc, tone }: CarouselVisualProps) {
  const [imageReady, setImageReady] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const styles = TONE_STYLES[tone];
  const showImage = Boolean(imageSrc) && imageReady && !imageFailed;

  return (
    <div
      className={cn(
        "relative aspect-[10/11] w-full overflow-hidden",
        !showImage && styles.visual,
      )}
    >
      {imageSrc && !imageFailed && (
        <div
          className={cn(
            "absolute inset-0 size-full transition-[transform,filter] duration-[900ms] ease-elysion motion-reduce:transition-none",
            "group-hover:scale-[1.03] group-hover:-translate-y-px motion-reduce:group-hover:transform-none",
            !imageReady && !reducedMotion && "scale-105 blur-[6px]",
            imageReady && "blur-0",
          )}
        >
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 640px) 85vw, 320px"
            className={cn("object-cover", styles.image)}
            loading="lazy"
            draggable={false}
            onLoad={() => setImageReady(true)}
            onError={() => setImageFailed(true)}
          />
        </div>
      )}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          styles.overlay,
          showImage ? "opacity-100" : "opacity-80",
        )}
      />
    </div>
  );
}

type CarouselCardProps = {
  item: CarouselItem;
  tone: keyof typeof TONE_STYLES;
  imageBasePath?: string;
  styles: (typeof TONE_STYLES)[keyof typeof TONE_STYLES];
  index: number;
  revealed: boolean;
};

function CarouselCard({
  item,
  tone,
  imageBasePath,
  styles,
  index,
  revealed,
}: CarouselCardProps) {
  const pointerStartX = useRef(0);
  const reducedMotion = usePrefersReducedMotion();
  const imageSrc = getImageSrc(item, imageBasePath);
  const mapsUrl = item.mapsUrl;

  const content = (
    <>
      <CarouselVisual name={item.name} imageSrc={imageSrc} tone={tone} />
      <div className="px-0.5 pt-2.5">
        <h3
          className={cn(
            DISPLAY_SUBSECTION,
            "line-clamp-1 text-[1.0625rem] leading-[1.25] text-charcoal md:text-lg",
          )}
        >
          {item.name}
          <span className="font-normal text-charcoal/75"> — {item.tag}</span>
        </h3>
        <p className={cn(SECTION_LABEL, "mt-1 text-[9px] tracking-[0.1em] text-charcoal/40")}>
          {item.context}
        </p>
        <p
          className={cn(
            BODY_PROSE,
            "mt-1.5 line-clamp-1 text-[0.8125rem] leading-[1.5] text-charcoal/65",
          )}
        >
          {item.description}
        </p>
        {mapsUrl && (
          <p
            className={cn(
              SECTION_LABEL,
              "mt-2 text-[9px] tracking-[0.12em] text-charcoal/45 transition-colors duration-300 group-hover:text-charcoal/65",
            )}
          >
            View on Google Maps →
          </p>
        )}
      </div>
    </>
  );

  const cardClassName = cn(
    "w-[min(82vw,300px)] shrink-0 snap-start overflow-hidden sm:w-[300px] lg:w-[320px]",
    "transition-[box-shadow,opacity] duration-500 ease-elysion motion-reduce:transition-none",
    "hover:shadow-[0_12px_36px_-14px_rgba(42,42,42,0.18)]",
    styles.card,
    mapsUrl && "group cursor-pointer",
    !reducedMotion && !revealed && "translate-y-3 opacity-0",
    (reducedMotion || revealed) && "translate-y-0 opacity-100",
  );

  const staggerStyle =
    !reducedMotion && revealed
      ? { transitionDelay: `${index * 80}ms` }
      : undefined;

  if (mapsUrl) {
    return (
      <a
        href={mapsUrl}
        data-carousel-card
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${item.name} in Google Maps`}
        style={staggerStyle}
        className={cn(cardClassName, FOCUS_RING, "no-underline")}
        onPointerDown={(event) => {
          pointerStartX.current = event.clientX;
        }}
        onClick={(event) => {
          if (Math.abs(event.clientX - pointerStartX.current) > 8) {
            event.preventDefault();
            return;
          }
          event.preventDefault();
          window.open(mapsUrl, "_blank", "noopener,noreferrer");
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      data-carousel-card
      style={staggerStyle}
      className={cn(cardClassName, "group")}
    >
      {content}
    </article>
  );
}

export function DestinationCarousel({
  items,
  tone = "warm",
  imageBasePath,
}: DestinationCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const [revealed, setRevealed] = useState(false);
  const showCards = reducedMotion || revealed;
  const styles = TONE_STYLES[tone];

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollPrev(scrollLeft > 4);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState, items.length]);

  useEffect(() => {
    if (reducedMotion) return;

    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const scrollByGroup = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;

      const firstCard = track.querySelector<HTMLElement>("[data-carousel-card]");
      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap =
        Number.parseFloat(getComputedStyle(track).gap) ||
        Number.parseFloat(getComputedStyle(track).columnGap) ||
        CARD_GAP_FALLBACK;
      const step = cardWidth + gap;
      const currentIndex = Math.round(track.scrollLeft / step);
      const targetIndex =
        direction === 1
          ? currentIndex + FORWARD_GROUP_SIZE
          : Math.max(0, currentIndex - BACKWARD_GROUP_SIZE);
      const maxScroll = track.scrollWidth - track.clientWidth;
      const targetScrollX = Math.min(Math.max(0, targetIndex * step), maxScroll);

      track.scrollTo({
        left: targetScrollX,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [reducedMotion],
  );

  return (
    <div ref={rootRef} className="relative">
      <div className="mb-6 flex justify-end gap-2 md:absolute md:right-0 md:top-[-4.5rem] md:mb-0">
        <button
          type="button"
          onClick={() => scrollByGroup(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous"
          className={cn(
            "flex size-11 items-center justify-center border border-charcoal/15 text-charcoal/70 transition-opacity duration-300 ease-elysion hover:text-charcoal disabled:pointer-events-none disabled:opacity-30",
            FOCUS_RING,
          )}
        >
          <ChevronLeft className="size-5 stroke-[1.5]" />
        </button>
        <button
          type="button"
          onClick={() => scrollByGroup(1)}
          disabled={!canScrollNext}
          aria-label="Next"
          className={cn(
            "flex size-11 items-center justify-center border border-charcoal/15 text-charcoal/70 transition-opacity duration-300 ease-elysion hover:text-charcoal disabled:pointer-events-none disabled:opacity-30",
            FOCUS_RING,
          )}
        >
          <ChevronRight className="size-5 stroke-[1.5]" />
        </button>
      </div>

      <div
        ref={trackRef}
        data-lenis-prevent
        onScroll={updateScrollState}
        className={cn(
          "flex gap-7 overflow-x-auto pb-2 md:gap-5",
          "snap-x snap-mandatory scroll-smooth",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          "[scroll-behavior:smooth]",
        )}
      >
        {items.map((item, index) => (
          <CarouselCard
            key={item.name}
            item={item}
            tone={tone}
            imageBasePath={imageBasePath}
            styles={styles}
            index={index}
            revealed={showCards}
          />
        ))}
      </div>
    </div>
  );
}
