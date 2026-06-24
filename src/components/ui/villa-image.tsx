import Image from "next/image";
import type { VillaImage as VillaImageType } from "@/constants/images";
import { imageSizesFullBleed } from "@/lib/images";
import { cn } from "@/lib/utils";

type VillaImageProps = {
  image: VillaImageType;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
};

export function VillaImage({
  image,
  priority = false,
  className,
  sizes = imageSizesFullBleed(),
  quality,
}: VillaImageProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      quality={quality ?? (priority ? 82 : 85)}
      sizes={sizes}
      className={cn("object-cover", image.objectPositionClass, className)}
    />
  );
}
