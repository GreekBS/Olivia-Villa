import { HERO_IMAGE_POSITION, IMAGES } from "@/constants/images";
import { HeroOverlay } from "@/components/sections/hero/hero-overlay";
import { HeroScrollHint } from "@/components/sections/hero/hero-scroll-hint";
import { VillaImageFill } from "@/components/ui/villa-image-fill";
import { GRADIENT_HERO_LEFT, GRADIENT_HERO_SCRIM } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-svh w-full overflow-hidden bg-obsidian"
    >
      <div className="absolute inset-0 animate-hero-reveal">
        <VillaImageFill
          image={IMAGES.hero}
          priority
          quality={80}
          sizes="100vw"
          imageClassName={cn(
            "animate-hero-image brightness-[0.97] contrast-[1.02]",
            HERO_IMAGE_POSITION,
          )}
        />
      </div>

      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0 z-[1]", GRADIENT_HERO_LEFT)}
      />
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0 z-[1]", GRADIENT_HERO_SCRIM)}
      />

      <HeroOverlay />
      <HeroScrollHint />
    </section>
  );
}
