import { Flourish } from "./Ornaments";
import { invite } from "./invite-data";
import { photos } from "./photos";
import { Reveal } from "./Reveal";

/** Full-screen invitation page with the couple's photo behind the invitation details. */
export function InvitationCard() {
  const p = photos.invitation;
  return (
    <section
      aria-label="Wedding invitation"
      className="relative left-1/2 isolate h-[100svh] w-screen -translate-x-1/2 overflow-hidden bg-ink"
    >
      <img
        src={p.src}
        alt={p.alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: p.position }}
      />
      <div className="bg-invite-fade absolute inset-0" />
      <div className="pointer-events-none absolute inset-3 border border-gold/60 md:inset-6" />
      <div className="pointer-events-none absolute inset-5 border border-gold/25 md:inset-8" />

      <Reveal className="absolute bottom-[5%] right-[4%] top-[5%] flex w-[min(56%,420px)] flex-col items-center justify-center px-3 text-center sm:px-6 md:right-[8%] md:w-[min(42%,480px)]">
        <Flourish className="h-2.5 w-10 text-gold" />
        <p className="label-caps mt-2 text-[0.42rem] text-ink-soft">The wedding of</p>
        <span className="mt-2 h-px w-10 bg-gold/60" />
        <p className="names-caps mt-3 text-[2rem] text-ink sm:text-[2.5rem]">{invite.bride}</p>
        <p className="font-display font-light italic -my-1 text-3xl text-gold sm:text-4xl">&amp;</p>
        <p className="names-caps text-[2rem] text-ink sm:text-[2.5rem]">{invite.groom}</p>
        <p className="label-caps mt-3 text-[0.36rem] leading-relaxed text-ink-soft sm:text-[0.42rem]">
          Together with their families
        </p>
        <p className="font-display mt-1 text-[0.65rem] italic leading-snug text-ink-soft sm:text-[0.8rem]">
          {invite.brideParents}
          <br />
          &amp; {invite.groomParents}
        </p>
        <span className="mt-2 h-px w-14 bg-gold/60" />
        <p className="label-caps mt-2 text-[0.4rem] text-ink sm:text-[0.45rem]">{invite.weekday}</p>
        <p className="label-caps mt-1 text-[0.4rem] text-ink sm:text-[0.45rem]">
          {invite.dateLong}
        </p>
        <p className="font-display mt-1 text-[0.65rem] italic text-ink-soft sm:text-[0.75rem]">
          {invite.timeWords}
        </p>
        <span className="mt-2 h-px w-14 bg-gold/60" />
        <p className="label-caps mt-2 text-[0.4rem] text-ink sm:text-[0.45rem]">
          {invite.church.name}
        </p>
        <p className="label-caps mt-1 text-[0.36rem] text-ink-soft sm:text-[0.4rem]">
          {invite.church.city}
        </p>
        <Flourish className="mt-2 h-2.5 w-10 rotate-180 text-gold" />
      </Reveal>
    </section>
  );
}
