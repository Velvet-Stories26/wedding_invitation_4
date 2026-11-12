import { useEffect, useRef, useState } from "react";
import envelope from "@/assets/start-envelope.jpeg";
import envelopeVideo from "@/assets/envelope.mp4";
import { cn } from "@/lib/utils";

type Phase = "closed" | "playing" | "gone";

export function CurtainIntro({ onOpen, onOpened }: { onOpen: () => void; onOpened: () => void }) {
  const [phase, setPhase] = useState<Phase>("closed");
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = phase === "gone" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const open = () => {
    if (phase !== "closed") return;
    onOpen();
    setVideoError(false);
    void videoRef.current?.play().then(
      () => setPhase("playing"),
      () => setVideoError(true),
    );
  };

  const finish = () => {
    setPhase("gone");
    onOpened();
  };

  if (phase === "gone") return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center overflow-hidden bg-wine-deep">
      <div className="relative h-full w-full max-w-[480px] overflow-hidden">
        <img
          src={envelope}
          alt="A wedding invitation sealed with a gold monogram"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            phase === "playing" && "pointer-events-none opacity-0",
          )}
        />
        <video
          ref={videoRef}
          src={envelopeVideo}
          muted
          playsInline
          preload="auto"
          onEnded={finish}
          onError={() => {
            if (phase !== "gone") {
              setPhase("closed");
              setVideoError(true);
            }
          }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            phase !== "playing" && "pointer-events-none opacity-0",
          )}
        />
        {phase === "closed" && (
          <>
            <button
              type="button"
              onClick={open}
              aria-label="Open the wedding envelope"
              className="absolute left-1/2 top-[41%] h-[11%] w-[25%] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-gold-soft focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
            >
              <span className="animate-ripple absolute inset-0 rounded-full border border-gold-soft/70" />
            </button>
            <p className="font-display absolute bottom-[12%] left-0 w-full px-6 text-center text-xl italic text-ivory drop-shadow-lg">
              Tap the seal to open
            </p>
            {videoError && (
              <p
                role="alert"
                className="absolute bottom-5 left-1/2 w-[min(90%,400px)] -translate-x-1/2 rounded bg-wine-deep/90 px-4 py-2 text-center text-sm text-ivory"
              >
                The envelope video could not be played. Please try again.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
