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
      className={cn(
        "pointer-events-none relative z-10 mx-auto -my-5 block w-[115%] max-w-none -translate-x-[6.5%] select-none",
        flip && "rotate-180",
        className,
      )}
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
      <p className={cn("label-caps", tone === "light" ? "text-ink-soft" : "text-gold-soft")}>{eyebrow}</p>
      <h2
        className={cn(
          "font-script mt-3 text-5xl leading-tight",
          tone === "light" ? "text-ink" : "text-ivory text-glow",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
