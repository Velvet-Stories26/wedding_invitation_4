import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PhotoFrame } from "./PhotoFrame";
import type { Photo } from "./photos";

/**
 * Swipeable photo gallery.
 * - "full": one photo at a time, full width.
 * - "peek": centered photo with the neighbours peeking in, softly faded.
 */
export function SwipeGallery({
  items,
  variant = "full",
  tone = "light",
  aspect = "aspect-[4/5]",
}: {
  items: readonly Photo[];
  variant?: "full" | "peek";
  tone?: "light" | "dark";
  aspect?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let dist = Infinity;
      slides.forEach((s, i) => {
        const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center);
        if (d < dist) {
          dist = d;
          best = i;
        }
      });
      setActive(best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const slide = track?.children[i] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2, behavior: "smooth" });
  };

  const peek = variant === "peek";
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div>
      <div
        ref={trackRef}
        className={cn(
          "flex snap-x snap-mandatory overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          peek ? "gap-4 px-[14%]" : "gap-4",
        )}
      >
        {items.map((p, i) => (
          <div
            key={i}
            className={cn(
              "shrink-0 snap-center transition-all duration-700 ease-out",
              peek ? "w-[72%]" : "w-full",
              peek && i !== active && "scale-[0.9] opacity-50",
            )}
          >
            <PhotoFrame photo={p} tone={tone} className={cn("w-full", aspect)} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => goTo(Math.max(0, active - 1))}
          className={cn("label-caps text-[0.6rem] transition-opacity", tone === "light" ? "text-ink-soft" : "text-gold-soft", active === 0 && "opacity-30")}
        >
          ←
        </button>
        <div className="flex items-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-px transition-all duration-500",
                i === active ? "w-8 bg-gold" : cn("w-3", tone === "light" ? "bg-ink-soft/40" : "bg-ivory/30"),
              )}
            />
          ))}
        </div>
        <span className={cn("label-caps w-10 text-[0.5rem]", tone === "light" ? "text-ink-soft" : "text-gold-soft")}>
          {pad(active + 1)}/{pad(items.length)}
        </span>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => goTo(Math.min(items.length - 1, active + 1))}
          className={cn(
            "label-caps text-[0.6rem] transition-opacity",
            tone === "light" ? "text-ink-soft" : "text-gold-soft",
            active === items.length - 1 && "opacity-30",
          )}
        >
          →
        </button>
      </div>
    </div>
  );
}
