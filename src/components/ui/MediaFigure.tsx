import Image from "next/image";
import { cn } from "@/lib/cn";

type MediaFigureProps = {
  src: string;
  alt: string;
  sizes: string;
  aspectClassName: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  quality?: number;
  children?: React.ReactNode;
};

export function MediaFigure({
  src,
  alt,
  sizes,
  aspectClassName,
  className,
  imageClassName,
  priority = false,
  quality = 85,
  children,
}: MediaFigureProps) {
  return (
    <figure className={cn("relative", className)}>
      <div className={cn("relative overflow-hidden", aspectClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes={sizes}
          className={cn(
            "object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:hover:scale-[1.02]",
            imageClassName,
          )}
        />
      </div>
      {children}
    </figure>
  );
}
