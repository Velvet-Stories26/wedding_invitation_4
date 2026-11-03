import { cn } from "@/lib/utils";
import type { Photo } from "./photos";

/** A photo in a gallery-style mount: thin gold border, inner hairline and gold corner marks. */
export function PhotoFrame({
  photo,
  className,
  eager,
  tone = "light",
}: {
  photo: Photo;
  className?: string;
  eager?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <figure
      className={cn(
        "relative border p-2",
        tone === "light" ? "border-gold/50 bg-ivory shadow-card" : "border-gold/40 bg-wine-deep",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={photo.src}
          alt={photo.alt}
          loading={eager ? "eager" : "lazy"}
          draggable={false}
          className="h-full w-full select-none object-cover transition-transform duration-[2s] ease-out hover:scale-[1.04]"
          style={{ objectPosition: photo.position }}
        />
        <div className="pointer-events-none absolute inset-2.5 border border-ivory/35" />
      </div>
      <Corners />
    </figure>
  );
}

export function Corners({ className }: { className?: string }) {
  const c = "pointer-events-none absolute h-3.5 w-3.5 border-gold";
  return (
    <span aria-hidden className={className}>
      <span className={cn(c, "-left-px -top-px border-l-2 border-t-2")} />
      <span className={cn(c, "-right-px -top-px border-r-2 border-t-2")} />
      <span className={cn(c, "-bottom-px -left-px border-b-2 border-l-2")} />
      <span className={cn(c, "-bottom-px -right-px border-b-2 border-r-2")} />
    </span>
  );
}
