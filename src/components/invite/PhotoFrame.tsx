import { cn } from "@/lib/utils";
import type { Photo } from "./photos";

type Shape = "arch" | "oval" | "rect";

const outer: Record<Shape, string> = {
  arch: "rounded-t-[999px] rounded-b-sm",
  oval: "rounded-[50%]",
  rect: "rounded-sm",
};

/** A photo inside a thin double gold border. Shape and aspect ratio are set by the caller. */
export function PhotoFrame({
  photo,
  shape = "arch",
  className,
  imgClassName,
  eager,
}: {
  photo: Photo;
  shape?: Shape;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  return (
    <div className={cn("shadow-card border border-gold/60 p-1.5", outer[shape], className)}>
      <div className={cn("relative h-full w-full overflow-hidden", outer[shape])}>
        <img
          src={photo.src}
          alt={photo.alt}
          loading={eager ? "eager" : "lazy"}
          className={cn("h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105", imgClassName)}
          style={{ objectPosition: photo.position }}
        />
        <div className={cn("pointer-events-none absolute inset-2 border border-ivory/40", outer[shape])} />
      </div>
    </div>
  );
}
