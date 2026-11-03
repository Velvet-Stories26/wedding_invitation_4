import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PhotoFrame } from "./PhotoFrame";
import { photos } from "./photos";

export function MomentsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const slides = photos.together;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => setActive(Math.round(track.scrollLeft / track.clientWidth));
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    track?.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="mt-8">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <div key={i} className="w-full shrink-0 snap-center px-1 pb-2">
            <PhotoFrame photo={s} className="aspect-[4/5] w-full" />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-1 rounded-full transition-all duration-500",
              i === active ? "w-8 bg-gold" : "w-2 bg-ink-soft/30",
            )}
          />
        ))}
      </div>
    </div>
  );
}
