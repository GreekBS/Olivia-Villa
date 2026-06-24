"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { VillaImage as VillaImageType } from "@/constants/images";
import { GALLERY_IMAGES } from "@/constants/images";
import { SECTION_IDS } from "@/constants/site";
import { ChapterWhisper } from "@/components/ui/chapter";
import { SectionHeading } from "@/components/ui/section-heading";
import { VillaImage } from "@/components/ui/villa-image";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { FOCUS_RING, SECTION_LABEL } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { imageSizesFullBleed, imageSizesSplit } from "@/lib/images";

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  useLockBodyScroll(isOpen);

  const close = useCallback(() => setLightboxIndex(null), []);

  const navigate = useCallback(
    (direction: 1 | -1) => {
      setLightboxIndex((current) => {
        if (current === null) return null;
        const next = current + direction;
        if (next < 0) return GALLERY_IMAGES.length - 1;
        if (next >= GALLERY_IMAGES.length) return 0;
        return next;
      });
    },
    [],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") navigate(1);
      if (event.key === "ArrowLeft") navigate(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, navigate]);

  return (
    <>
      <ChapterWhisper
        id={SECTION_IDS.gallery}
        aria-labelledby="gallery-heading"
        dark
        className="bg-obsidian"
        compact
      >
        <SectionHeading
          id="gallery-heading"
          label="Gallery"
          title="Walk through the house"
          description="Views of stone, water, and light."
          light
          align="center"
          className="mb-10 md:mb-12"
        />
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryItem
              key={image.src}
              image={image}
              index={index}
              onOpen={() => setLightboxIndex(index)}
              large={index % 5 === 0}
            />
          ))}
        </div>
      </ChapterWhisper>

      {isOpen && lightboxIndex !== null && (
        <GalleryLightbox
          image={GALLERY_IMAGES[lightboxIndex]}
          index={lightboxIndex}
          total={GALLERY_IMAGES.length}
          onClose={close}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
        />
      )}
    </>
  );
}

type GalleryItemProps = {
  image: VillaImageType;
  index: number;
  large?: boolean;
  onOpen: () => void;
};

function GalleryItem({ image, index, large = false, onOpen }: GalleryItemProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative mb-4 block w-full overflow-hidden break-inside-avoid lg:mb-6",
        FOCUS_RING,
      )}
      aria-label={`View image: ${image.caption ?? image.alt}`}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          large ? "aspect-[16/10]" : "aspect-[4/5]",
        )}
      >
        <div className="relative size-full transition-transform duration-700 ease-elysion motion-reduce:transition-none group-hover:scale-[1.02]">
          <VillaImage
            image={image}
            sizes={index < 3 ? imageSizesSplit() : imageSizesFullBleed()}
            className="absolute inset-0 size-full"
          />
        </div>
        {image.caption && (
          <span
            className={cn(
              SECTION_LABEL,
              "absolute bottom-4 left-4 text-white/80 opacity-0 transition-opacity duration-300 ease-elysion group-hover:opacity-100 group-focus-visible:opacity-100",
            )}
          >
            {image.caption}
          </span>
        )}
      </div>
    </button>
  );
}

type GalleryLightboxProps = {
  image: VillaImageType;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function GalleryLightbox({
  image,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image ${index + 1} of ${total}`}
      className="fixed inset-0 z-[300] flex flex-col bg-obsidian/95"
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <p className={cn(SECTION_LABEL, "text-alabaster/50")}>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className={cn(
            "flex size-11 items-center justify-center text-alabaster/80 transition-opacity duration-300 ease-elysion hover:text-alabaster",
            FOCUS_RING,
          )}
        >
          <X className="size-6 stroke-[1.5]" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-12">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous image"
          className={cn(
            "absolute left-2 z-10 flex size-11 items-center justify-center text-alabaster/70 transition-opacity duration-300 ease-elysion hover:text-alabaster md:left-6",
            FOCUS_RING,
          )}
        >
          <ChevronLeft className="size-6 stroke-[1.5]" />
        </button>

        <div className="relative max-h-[70svh] w-full max-w-6xl">
          <div className="relative aspect-[16/10] w-full">
            <VillaImage
              image={image}
              sizes="90vw"
              quality={90}
              className="absolute inset-0 size-full"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next image"
          className={cn(
            "absolute right-2 z-10 flex size-11 items-center justify-center text-alabaster/70 transition-opacity duration-300 ease-elysion hover:text-alabaster md:right-6",
            FOCUS_RING,
          )}
        >
          <ChevronRight className="size-6 stroke-[1.5]" />
        </button>
      </div>

      {image.caption && (
        <p className={cn(SECTION_LABEL, "px-4 pb-6 text-center text-alabaster/60 md:pb-8")}>
          {image.caption}
        </p>
      )}
    </div>
  );
}
