import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import stage from "@/assets/stage.jpg";
import frame from "@/assets/floral-frame.webp";
import { CurtainIntro } from "@/components/invite/CurtainIntro";
import { ScratchReveal } from "@/components/invite/ScratchReveal";
import { Countdown } from "@/components/invite/Countdown";
import { MomentsCarousel } from "@/components/invite/MomentsCarousel";
import { Reveal } from "@/components/invite/Reveal";
import { FloralDivider, GoldRule, SectionHeading } from "@/components/invite/Ornaments";
import { invite } from "@/components/invite/invite-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${invite.bride} & ${invite.groom} — Wedding Invitation` },
      {
        name: "description",
        content: `You are warmly invited to the holy matrimony of ${invite.bride} & ${invite.groom} on ${invite.dateLong} at ${invite.church.name}.`,
      },
      { property: "og:title", content: `${invite.bride} & ${invite.groom} — Wedding Invitation` },
      {
        property: "og:description",
        content: `Join us as ${invite.bride} & ${invite.groom} say "I do" on ${invite.dateLong}.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

function Cross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden>
      <path
        className="fill-current"
        d="M10.5 0h3v8.5H22v3h-8.5V32h-3V11.5H2v-3h8.5z"
      />
    </svg>
  );
}

function Invitation() {
  const [opened, setOpened] = useState(false);
  const couple = `${invite.bride} & ${invite.groom}`;

  return (
    <>
      <CurtainIntro onOpened={() => setOpened(true)} />

      <main className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-blush shadow-card">
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-16">
          <img
            src={stage}
            alt=""
            width={768}
            height={1344}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="bg-hero-veil absolute inset-0" />
          <div
            key={String(opened)}
            className="relative flex w-full max-w-[330px] flex-col items-center rounded-[50%] border border-gold/50 px-6 py-16 text-center outline outline-1 outline-offset-[6px] outline-gold/25"
          >
            <Reveal>
              <Cross className="mx-auto h-8 w-6 text-gold-soft drop-shadow-[0_0_10px_var(--gold)]" />
              <p className="label-caps mt-4 text-[0.55rem] text-gold-soft">With the blessing of God</p>
            </Reveal>
            <Reveal delay={150}>
              <GoldRule className="my-5" />
              <p className="label-caps text-[0.55rem] text-ivory/80">We request your presence</p>
            </Reveal>
            <Reveal delay={300}>
              <h1 className="font-script glow-text mt-4 text-6xl text-ivory">{invite.bride}</h1>
              <p className="label-caps mt-1 text-[0.5rem] text-gold-soft/80">Daughter of {invite.brideParents}</p>
            </Reveal>
            <Reveal delay={450}>
              <p className="font-script my-3 text-3xl text-gold">&amp;</p>
            </Reveal>
            <Reveal delay={600}>
              <h1 className="font-script glow-text text-6xl text-ivory">{invite.groom}</h1>
              <p className="label-caps mt-1 text-[0.5rem] text-gold-soft/80">Son of {invite.groomParents}</p>
            </Reveal>
            <Reveal delay={750}>
              <p className="label-caps mt-8 text-[0.55rem] text-ivory/80">As they begin their forever</p>
            </Reveal>
          </div>
          <a
            href="#love"
            className="animate-drift absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-soft"
          >
            <span className="label-caps text-[0.5rem]">Scroll</span>
            <span className="h-8 w-px bg-current opacity-60" />
          </a>
        </section>

        {/* LOVE WRITTEN IN PRAYER */}
        <section id="love" className="bg-blush-paper px-8 pb-16 pt-20 text-center">
          <Reveal>
            <h2 className="font-script text-5xl text-ink">A love written in prayer</h2>
            <p className="font-display mx-auto mt-6 max-w-[300px] text-lg leading-relaxed text-ink-soft italic">
              “{invite.verse}”
            </p>
            <p className="label-caps mt-3 text-ink-soft/80">{invite.verseRef}</p>
          </Reveal>
          <Reveal delay={200}>
            <GoldRule className="my-8" />
            <p className="font-display mx-auto max-w-[300px] text-base leading-relaxed text-ink">
              By the grace of God and with the blessings of our families, we joyfully invite you to witness our
              union in holy matrimony.
            </p>
            <p className="font-script mt-6 text-4xl text-wine">{couple}</p>
          </Reveal>
        </section>

        <FloralDivider />

        {/* SCRATCH DATE */}
        <section className="bg-peach-paper px-6 py-20 text-center">
          <Reveal>
            <SectionHeading eyebrow="A date to hold close" title="Our forever begins" />
          </Reveal>
          <Reveal delay={150} className="relative mx-auto mt-10 w-full max-w-[380px]">
            <div className="relative aspect-[900/695]">
              <ScratchReveal className="absolute left-[19%] right-[19%] top-[24%] bottom-[19%] rounded-md bg-ivory">
                <div className="flex h-full flex-col items-center justify-center px-2">
                  <p className="label-caps text-[0.5rem] text-ink-soft">You're invited</p>
                  <p className="font-display mt-1 text-2xl text-ink">{invite.dateLong}</p>
                  <p className="font-display mt-1 text-sm text-ink-soft">{invite.weekdayTime}</p>
                </div>
              </ScratchReveal>
              <img
                src={frame}
                alt=""
                aria-hidden
                width={900}
                height={695}
                loading="lazy"
                className="pointer-events-none absolute inset-0 h-full w-full select-none drop-shadow-xl"
              />
            </div>
          </Reveal>
          <p className="label-caps mt-6 text-ink-soft/80">Scratch to reveal</p>
        </section>

        <FloralDivider />

        {/* STORY */}
        <section className="bg-blush-paper px-8 py-20">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Moments, softly held" />
          </Reveal>
          <Reveal delay={150}>
            <MomentsCarousel />
          </Reveal>
        </section>

        <FloralDivider />

        {/* COUNTDOWN */}
        <section className="bg-wine-velvet px-6 py-20">
          <Reveal>
            <SectionHeading eyebrow="Until we say “I do”" title="Counting every heartbeat" tone="dark" />
            <GoldRule className="mt-5" />
            <Countdown dateISO={invite.dateISO} />
          </Reveal>
        </section>

        <FloralDivider flip />

        {/* SCHEDULE */}
        <section className="bg-blush-paper px-8 py-20">
          <Reveal>
            <SectionHeading eyebrow="The celebration" title="Our wedding day" />
          </Reveal>
          <ol className="relative mx-auto mt-10 max-w-[300px] border-l border-gold/60 pl-8">
            {invite.schedule.map((item, i) => (
              <li key={item.title} className="relative pb-8 last:pb-0">
                <Reveal delay={i * 120}>
                  <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rotate-45 border border-gold bg-blush" />
                  <p className="label-caps text-[0.55rem] text-wine">{item.time}</p>
                  <p className="font-display mt-1 text-xl text-ink">{item.title}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <FloralDivider />

        {/* VENUE */}
        <section className="bg-blush-paper px-6 pb-20 pt-12">
          <Reveal>
            <div className="bg-plum-night shadow-card mx-auto max-w-[360px] rounded-t-[999px] border border-gold/40 px-8 pb-12 pt-20 text-center">
              <p className="label-caps text-gold-soft">The ceremony</p>
              <Cross className="mx-auto mt-4 h-5 w-4 text-gold" />
              <h3 className="font-script glow-text mt-4 text-5xl text-ivory">{invite.church.name}</h3>
              <p className="font-display mt-2 italic text-ivory/70">{invite.church.city}</p>
              <a
                href={invite.church.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="label-caps mt-8 inline-block border border-gold/60 px-5 py-3 text-[0.55rem] text-gold-soft transition-colors hover:bg-gold hover:text-wine-deep"
              >
                View on Google Maps
              </a>
            </div>
          </Reveal>
        </section>

        <FloralDivider />

        {/* DRESS CODE */}
        <section className="bg-peach-paper px-8 py-20 text-center">
          <Reveal>
            <SectionHeading eyebrow="Dress code" title={invite.dressCode.title} />
            <p className="font-display mt-3 italic text-ink-soft">{invite.dressCode.note}</p>
            <div className="mt-6 flex justify-center gap-3" aria-hidden>
              {["bg-ivory", "bg-blush-deep", "bg-gold-soft", "bg-wine", "bg-plum"].map((c) => (
                <span key={c} className={`${c} h-7 w-7 rounded-full border border-gold/50 shadow-sm`} />
              ))}
            </div>
          </Reveal>
        </section>

        <FloralDivider />

        {/* FESTIVITIES */}
        <section className="bg-blush-paper px-8 py-20">
          <Reveal>
            <SectionHeading eyebrow="The festivities" title="Days filled with joy" />
          </Reveal>
          <div className="mt-10 space-y-10 text-center">
            {invite.festivities.map((f, i) => (
              <Reveal key={f.name} delay={i * 120}>
                <h3 className="font-display text-2xl text-ink">{f.name}</h3>
                <p className="label-caps mt-2 text-[0.55rem] text-wine">{f.when}</p>
                <p className="font-display mt-1 italic text-ink-soft">{f.where}</p>
                <a
                  href={f.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="label-caps mt-3 inline-block border-b border-gold pb-0.5 text-[0.5rem] text-ink-soft hover:text-wine"
                >
                  View on Google Maps
                </a>
                {i < invite.festivities.length - 1 && <GoldRule className="mt-10" />}
              </Reveal>
            ))}
          </div>
        </section>

        <FloralDivider />

        {/* GIFTS */}
        <section className="bg-plum-night px-8 py-20 text-center">
          <Reveal>
            <SectionHeading eyebrow="With all our hearts" title="Your presence is our present" tone="dark" />
            <p className="font-display mx-auto mt-5 max-w-[280px] italic text-ivory/70">
              Your love, your prayers and your presence are the greatest gifts we could ask for.
            </p>
          </Reveal>
        </section>

        <FloralDivider flip />

        {/* CLOSING */}
        <section className="bg-blush-paper px-6 pb-24 pt-16">
          <Reveal>
            <div className="mx-auto max-w-[340px] rounded-t-[999px] border border-gold/50 px-8 pb-12 pt-24 text-center outline outline-1 outline-offset-[6px] outline-gold/25">
              <Cross className="mx-auto h-6 w-4 text-gold" />
              <h2 className="font-script mt-4 text-5xl leading-tight text-ink">We can't wait to celebrate with you</h2>
              <p className="font-script mt-6 text-4xl text-wine">{couple}</p>
              <p className="label-caps mt-6 text-[0.5rem] text-ink-soft">
                {invite.dateLong} · {invite.church.name}
              </p>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
