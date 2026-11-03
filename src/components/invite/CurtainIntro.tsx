import { useEffect, useState } from "react";
import curtain from "@/assets/curtain.jpg";
import stage from "@/assets/stage.jpg";
import { cn } from "@/lib/utils";

type Phase = "closed" | "opening" | "gone";

export function CurtainIntro({ onOpened }: { onOpened: () => void }) {
  const [phase, setPhase] = useState<Phase>("closed");

  useEffect(() => {
    document.body.style.overflow = phase === "gone" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const open = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    window.setTimeout(() => {
      setPhase("gone");
      onOpened();
    }, 4200);
  };

  if (phase === "gone") return null;

  const halfStyle = (side: "left" | "right") => ({
    backgroundImage: `url(${curtain})`,
    backgroundSize: "200% 100%",
    backgroundPosition: side === "left" ? "left center" : "right center",
  });

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex justify-center bg-wine-deep transition-opacity duration-1000",
        phase === "opening" && "animate-out fade-out fill-mode-forwards delay-[3200ms] duration-1000",
      )}
    >
      <button
        type="button"
        onClick={open}
        aria-label="Tap to open the invitation"
        className="relative h-full w-full max-w-[480px] cursor-pointer overflow-hidden"
      >
        {/* Stage behind the curtains */}
        <img
          src={stage}
          alt=""
          width={768}
          height={1344}
          className={cn(
            "absolute inset-0 h-full w-full object-cover brightness-50",
            phase === "opening" && "animate-stage-in",
          )}
        />

        {/* Curtains */}
        <div
          className={cn("curtain-half absolute inset-y-0 left-0 w-1/2", phase === "opening" && "-translate-x-full")}
          style={halfStyle("left")}
        />
        <div
          className={cn("curtain-half absolute inset-y-0 right-0 w-1/2", phase === "opening" && "translate-x-full")}
          style={halfStyle("right")}
        />

        {/* Tap prompt */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-6 transition-opacity duration-700",
            phase === "opening" && "opacity-0",
          )}
        >
          <span className="relative flex h-14 w-14 items-center justify-center">
            <span className="animate-ripple absolute inset-0 rounded-full border border-gold-soft/70" />
            <span className="animate-ripple absolute inset-0 rounded-full border border-gold-soft/50 [animation-delay:1.1s]" />
            <span className="h-3 w-3 rounded-full bg-gold-soft shadow-glow" />
          </span>
          <div className="animate-breathe text-center">
            <svg width="48" height="12" viewBox="0 0 48 12" className="mx-auto mb-2 fill-gold-soft" aria-hidden>
              <path d="M24 0 L26 5 L24 12 L22 5 Z M0 6 Q12 2 21 6 Q12 10 0 6 Z M48 6 Q36 2 27 6 Q36 10 48 6 Z" />
            </svg>
            <p className="font-display text-glow text-2xl italic tracking-wide text-ivory">tap to open</p>
          </div>
        </div>
      </button>
    </div>
  );
}
