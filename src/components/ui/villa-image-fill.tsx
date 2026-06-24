import type { VillaImage as VillaImageType } from "@/constants/images";
import { imageSizesFullBleed } from "@/lib/images";
import { cn } from "@/lib/utils";
import { VillaImage } from "@/components/ui/villa-image";

type EditorialImageFrameProps = {
  image: VillaImageType;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  imageClassName?: string;
  className?: string;
};

/** Editorial image with inner zoom on hover — overflow clipped at frame edge */
export function EditorialImageFrame({
  image,
  priority = false,
  quality,
  sizes,
  imageClassName,
  className,
}: EditorialImageFrameProps) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div className="size-full transition-transform duration-700 ease-elysion motion-reduce:transition-none motion-reduce:transform-none group-hover:scale-[1.02]">
        <VillaImageFillInner
          image={image}
          priority={priority}
          quality={quality}
          sizes={sizes}
          imageClassName={imageClassName}
        />
      </div>
    </div>
  );
}

type VillaImageFillProps = {
  image: VillaImageType;
  priority?: boolean;
  quality?: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

function VillaImageFillInner({
  image,
  priority = false,
  quality,
  className,
  imageClassName,
  sizes = imageSizesFullBleed(),
}: VillaImageFillProps) {
  return (
    <div className={cn("relative size-full", className)}>
      <VillaImage
        image={image}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={cn("absolute inset-0 size-full", imageClassName)}
      />
    </div>
  );
}

/** Full-bleed image wrapper — use inside positioned containers */
export function VillaImageFill({
  image,
  priority = false,
  quality,
  className,
  imageClassName,
  sizes = imageSizesFullBleed(),
}: VillaImageFillProps) {
  return (
    <div className={cn("relative size-full overflow-hidden", className)}>
      <VillaImageFillInner
        image={image}
        priority={priority}
        quality={quality}
        sizes={sizes}
        imageClassName={imageClassName}
      />
    </div>
  );
}
