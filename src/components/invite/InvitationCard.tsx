import frame from "@/assets/floral-divider.webp";
import { Flourish } from "./Ornaments";
import { invite } from "./invite-data";
import { photos } from "./photos";

/** Printed-style invitation card: couple photo on the left, arched text panel on the right. */
export function InvitationCard() {
  const p = photos.invitation;
  return (
    <div className="bg-ivory-paper shadow-card relative mx-auto aspect-[5/7] w-full max-w-[420px] overflow-hidden">
      <img
        src={p.src}
        alt={p.alt}
        loading="lazy"
        className="absolute inset-y-0 left-0 h-full w-[62%] object-cover"
        style={{ objectPosition: p.position }}
      />
      <div className="bg-invite-fade absolute inset-0" />
      <img
        src={frame}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -bottom-2 -right-16 w-[80%] rotate-[-8deg] opacity-90"
      />
      <div className="pointer-events-none absolute inset-2.5 border border-gold/50" />
      <div className="pointer-events-none absolute inset-3.5 border border-gold/25" />

      <div className="absolute bottom-[9%] right-[5%] top-[5%] flex w-[57%] flex-col items-center justify-center rounded-t-[999px] border border-gold/60 px-3 text-center">
        <Flourish className="h-2.5 w-10 text-gold" />
        <p className="label-caps mt-3 text-[0.42rem] text-ink-soft">The wedding of</p>
        <span className="mt-2 h-px w-10 bg-gold/60" />
        <p className="names-caps mt-4 text-[2.5rem] text-ink">{invite.bride}</p>
        <p className="font-script -my-1 text-4xl text-gold">&amp;</p>
        <p className="names-caps text-[2.5rem] text-ink">{invite.groom}</p>
        <p className="label-caps mt-4 text-[0.38rem] leading-relaxed text-ink-soft">Together with their families</p>
        <p className="font-display mt-1 text-[0.7rem] italic leading-snug text-ink-soft">
          {invite.brideParents}
          <br />& {invite.groomParents}
        </p>
        <span className="mt-3 h-px w-14 bg-gold/60" />
        <p className="label-caps mt-3 text-[0.45rem] text-ink">{invite.weekday}</p>
        <p className="label-caps mt-1 text-[0.45rem] text-ink">{invite.dateLong}</p>
        <p className="font-display mt-1 text-[0.7rem] italic text-ink-soft">{invite.timeWords}</p>
        <span className="mt-3 h-px w-14 bg-gold/60" />
        <p className="label-caps mt-3 text-[0.45rem] text-ink">{invite.church.name}</p>
        <p className="label-caps mt-1 text-[0.38rem] text-ink-soft">{invite.church.city}</p>
        <Flourish className="mt-3 h-2.5 w-10 rotate-180 text-gold" />
      </div>
    </div>
  );
}
