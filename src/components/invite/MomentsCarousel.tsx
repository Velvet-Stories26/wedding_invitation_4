import { useEffect, useRef, useState } from "react";
import hands from "@/assets/moment-hands.jpg";
import walk from "@/assets/moment-walk.jpg";
import stage from "@/assets/stage.jpg";
import { cn } from "@/lib/utils";

const slides = [
  { src: hands, alt: "Henna-adorned hands raised in dua", w: 768, h: 960 },
  { src: walk, alt: "The couple walking hand in hand toward a palace arch", w: 768, h: 960 },
  { src: stage, alt: "The Nikah stage beneath a crystal chandelier", w: 768, h: 1344 },
];

export function MomentsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

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
        {slides.map((s) => (
          <div key={s.alt} className="w-full shrink-0 snap-center px-1">
            <div className="shadow-card overflow-hidden rounded-t-[999px] rounded-b-md border border-gold/40 p-1.5">
              <img
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-t-[999px] rounded-b-sm object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.alt}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === active ? "w-6 bg-wine" : "w-1.5 bg-ink-soft/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
