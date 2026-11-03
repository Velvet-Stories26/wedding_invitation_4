import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Canvas "foil" the guest rubs away to reveal what's underneath. */
export function ScratchReveal({ children, className }: { children: ReactNode; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const moves = useRef(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const css = getComputedStyle(document.documentElement);
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, css.getPropertyValue("--blush").trim() || "#efe3ea");
    grad.addColorStop(0.5, "oklch(0.78 0.07 320)");
    grad.addColorStop(1, css.getPropertyValue("--blush-deep").trim() || "#f1d9d2");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // shimmer specks
    ctx.fillStyle = "oklch(1 0 0 / 0.35)";
    for (let i = 0; i < 140; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = css.getPropertyValue("--wine").trim() || "#6b1f2a";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `32px "Great Vibes", cursive`;
    ctx.fillText("Scratch here", width / 2, height / 2 - 4);
    ctx.font = `600 9px "Cinzel", serif`;
    ctx.fillText("✦  WITH YOUR FINGER  ✦", width / 2, height / 2 + 26);
    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || revealed) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.arc(clientX - rect.left, clientY - rect.top, 22, 0, Math.PI * 2);
    ctx.fill();
    moves.current++;
    if (moves.current % 12 === 0) checkCleared();
  };

  const checkCleared = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let clear = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 64) {
      total++;
      if (data[i] === 0) clear++;
    }
    if (clear / total > 0.45) setRevealed(true);
  };

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)}>
      {children}
      <canvas
        ref={canvasRef}
        aria-label="Scratch to reveal the date"
        className={cn(
          "absolute inset-0 h-full w-full cursor-pointer touch-none transition-opacity duration-1000",
          revealed && "pointer-events-none opacity-0",
        )}
        onPointerDown={(e) => {
          drawing.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          scratchAt(e.clientX, e.clientY);
        }}
        onPointerMove={(e) => drawing.current && scratchAt(e.clientX, e.clientY)}
        onPointerUp={() => {
          drawing.current = false;
          checkCleared();
        }}
        onPointerCancel={() => (drawing.current = false)}
      />
    </div>
  );
}
