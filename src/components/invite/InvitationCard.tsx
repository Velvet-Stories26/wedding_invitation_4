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
      className="relative isolate mx-auto h-[100svh] min-h-[720px] w-full max-w-[480px] overflow-hidden bg-ivory"
    >
      <img
        src={p.src}
        alt={p.alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: p.position }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%] bg-gradient-to-l from-ivory/35 via-ivory/15 to-transparent" />

      <Reveal className="absolute bottom-[6%] left-[43%] right-[7%] top-[7%] flex flex-col items-center justify-center px-1 text-center">
        <Flourish className="h-3 w-12 text-wine" />
        <p className="label-caps mt-3 text-[0.6rem] tracking-[0.16em] text-wine sm:text-[0.65rem]">
          The wedding of
        </p>
        <span className="mt-3 h-px w-12 bg-gold/80" />

        <h2 className="names-caps mt-5 text-[1.05rem] leading-tight text-wine sm:text-xl">
          {invite.groom}
        </h2>

        <div className="mt-3 space-y-2 font-display text-[0.9rem] italic leading-snug text-ink-soft sm:text-xs">
          <p>
            Son of
            <br />
            {invite.groomParents}
          </p>
        </div>


        
        <p className="font-script my-0.5 text-4xl leading-none text-gold sm:text-5xl">&amp;</p>

        <h2 className="names-caps mt-3 text-[1.05rem] leading-tight text-wine sm:text-xl">
          {invite.bride}
        </h2>
        <div className="mt-3 space-y-2 font-display text-[0.9rem] italic leading-snug text-ink-soft sm:text-xs">
          <p>
            Daughter of
            <br />
            {invite.brideParents}
          </p>
          </div>

        
        <p className="label-caps mt-4 text-[0.6rem] leading-relaxed text-wine sm:text-[0.65rem]">
          Together with their families
        </p>
        <span className="mt-3 h-px w-14 bg-gold/80" />
        <p className="label-caps mt-3 text-[0.6rem] text-wine sm:text-[0.65rem]">
          {invite.dateLong}
        </p>
        <p className="font-display mt-1 text-sm italic text-ink-soft sm:text-base">
          {invite.schedule[0].time} onwards
        </p>
        <span className="mt-3 h-px w-14 bg-gold/80" />
        <p className="label-caps mt-3 text-[0.6rem] leading-relaxed text-wine sm:text-[0.65rem]">
          {invite.church.name}
        </p>
        <Flourish className="mt-3 h-3 w-12 rotate-180 text-wine" />
      </Reveal>
    </section>
  );
}
