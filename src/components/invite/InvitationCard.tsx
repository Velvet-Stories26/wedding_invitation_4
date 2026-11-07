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
      className="relative isolate h-[100svh] w-full overflow-hidden bg-ink"
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
        <p className="label-caps mt-2 text-[0.38rem] text-ink-soft">The wedding of</p>
        <span className="mt-2 h-px w-10 bg-gold/60" />
        <p className="names-caps mt-2 text-[1.55rem] text-ink sm:text-[1.8rem]">{invite.bride}</p>
        <p className="font-display font-light italic -my-1 text-2xl text-gold sm:text-3xl">&amp;</p>
        <p className="names-caps text-[1.55rem] text-ink sm:text-[1.8rem]">{invite.groom}</p>
        <p className="label-caps mt-2 text-[0.34rem] leading-relaxed text-ink-soft sm:text-[0.38rem]">
          Together with their families
        </p>
        <p className="font-display mt-1 text-[0.58rem] italic leading-snug text-ink-soft sm:text-[0.68rem]">
          {invite.brideParents}
          <br />
          &amp; {invite.groomParents}
        </p>
        <span className="mt-2 h-px w-14 bg-gold/60" />
        <p className="label-caps mt-2 text-[0.38rem] text-ink sm:text-[0.42rem]">Marriage</p>
        <p className="font-display mt-1 text-[0.6rem] italic text-ink-soft sm:text-[0.7rem]">
          {invite.dateLong}
        </p>
        <span className="mt-2 h-px w-14 bg-gold/60" />
        <p className="label-caps mt-2 text-[0.38rem] text-ink sm:text-[0.42rem]">
          {invite.church.name}
        </p>
        <Flourish className="mt-2 h-2.5 w-10 rotate-180 text-gold" />
      </Reveal>
    </section>
  );
}
