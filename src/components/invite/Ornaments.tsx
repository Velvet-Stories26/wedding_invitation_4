import divider from "@/assets/floral-divider.webp";
import { cn } from "@/lib/utils";

export function FloralDivider({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <img
      src={divider}
      alt=""
      aria-hidden
      loading="lazy"
      width={1200}
      height={134}
      className={cn("pointer-events-none relative z-10 mx-auto -my-5 block w-full select-none", flip && "rotate-180", className)}
    />
  );
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto flex items-center justify-center gap-2 text-gold", className)} aria-hidden>
      <span className="h-px w-12 bg-current opacity-60" />
      <svg width="10" height="10" viewBox="0 0 10 10" className="fill-current">
        <path d="M5 0 L6.2 3.8 L10 5 L6.2 6.2 L5 10 L3.8 6.2 L0 5 L3.8 3.8 Z" />
      </svg>
      <span className="h-px w-12 bg-current opacity-60" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="text-center">
      <p className={cn("label-caps text-[0.55rem]", tone === "light" ? "text-wine" : "text-gold-soft")}>{eyebrow}</p>
      <h2
        className={cn(
          "font-display mt-3 text-[2.4rem] font-light italic leading-[1.1]",
          tone === "light" ? "text-ink" : "text-ivory glow-text",
        )}
      >
        {title}
      </h2>
      <Flourish className={cn("mx-auto mt-4 h-3 w-16", tone === "light" ? "text-gold" : "text-gold-soft")} />
    </div>
  );
}

export function Flourish({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 12" className={cn("fill-current", className)} aria-hidden>
      <path d="M32 1 L33.6 6 L32 11 L30.4 6 Z" />
      <path d="M0 6 C10 6 18 3 28 6 C18 9 10 6 0 6 Z M64 6 C54 6 46 3 36 6 C46 9 54 6 64 6 Z" opacity="0.8" />
    </svg>
  );
}

export function Cross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden>
      <path className="fill-current" d="M11 0h2v9h9v2h-9v21h-2V11H2V9h9z" />
    </svg>
  );
}
