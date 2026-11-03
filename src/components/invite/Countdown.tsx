import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    Days: Math.floor(ms / 86_400_000),
    Hours: Math.floor((ms / 3_600_000) % 24),
    Minutes: Math.floor((ms / 60_000) % 60),
    Seconds: Math.floor((ms / 1000) % 60),
  };
}

export function Countdown({ dateISO }: { dateISO: string }) {
  const target = new Date(dateISO).getTime();
  const [left, setLeft] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setLeft(diff(target));
    const id = window.setInterval(() => setLeft(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return (
    <div className="mt-8 grid grid-cols-4 gap-2">
      {(["Days", "Hours", "Minutes", "Seconds"] as const).map((unit) => (
        <div key={unit} className="text-center">
          <div className="font-display text-glow text-4xl font-light tabular-nums text-ivory">
            {left ? String(left[unit]).padStart(2, "0") : "--"}
          </div>
          <div className="label-caps mt-1 text-[0.5rem] text-gold-soft/80">{unit}</div>
        </div>
      ))}
    </div>
  );
}
