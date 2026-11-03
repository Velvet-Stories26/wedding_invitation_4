import type { Photo } from "./photos";

/** A slowly drifting strip of film frames. Pauses while being touched. */
export function FilmStrip({ items }: { items: readonly Photo[] }) {
  const loop = [...items, ...items];
  return (
    <div className="film-strip relative overflow-hidden bg-wine-deep py-5">
      <div className="film-holes absolute inset-x-0 top-1.5 h-2" />
      <div className="film-holes absolute inset-x-0 bottom-1.5 h-2" />
      <div className="animate-marquee flex w-max gap-3 hover:[animation-play-state:paused] active:[animation-play-state:paused]">
        {loop.map((p, i) => (
          <div key={i} className="h-40 w-32 shrink-0 overflow-hidden border border-gold/30">
            <img
              src={p.src}
              alt={i < items.length ? p.alt : ""}
              aria-hidden={i >= items.length}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover sepia-[0.15]"
              style={{ objectPosition: p.position }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
