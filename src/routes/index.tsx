import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import frame from "@/assets/floral-frame.webp";
import { CurtainIntro } from "@/components/invite/CurtainIntro";
import { ScratchReveal } from "@/components/invite/ScratchReveal";
import { Countdown } from "@/components/invite/Countdown";
import { MomentsCarousel } from "@/components/invite/MomentsCarousel";
import { InvitationCard } from "@/components/invite/InvitationCard";
import { PhotoFrame } from "@/components/invite/PhotoFrame";
import { Reveal } from "@/components/invite/Reveal";
import { Cross, FloralDivider, Flourish, GoldRule, SectionHeading } from "@/components/invite/Ornaments";
import { invite } from "@/components/invite/invite-data";
import { photos } from "@/components/invite/photos";

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

const ROMAN = ["I", "II", "III", "IV", "V"];

function Invitation() {
  const [opened, setOpened] = useState(false);
  const couple = `${invite.bride} & ${invite.groom}`;

  return (
    <>
      <CurtainIntro onOpened={() => setOpened(true)} />

      <main className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-blush shadow-card">
        {/* HERO — full photo with inset gold frame */}
        <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
          <img
            key={`hero-${opened}`}
            src={photos.hero.src}
            alt={photos.hero.alt}
            className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: photos.hero.position }}
          />
          <div className="bg-hero-veil absolute inset-0" />
          <div className="pointer-events-none absolute inset-4 border border-gold/45" />
          <div className="pointer-events-none absolute inset-[22px] border border-gold/20" />

          <div
            key={String(opened)}
            className="relative z-10 flex h-full flex-col items-center justify-between px-10 pb-24 pt-14 text-center"
          >
            <Reveal>
              <Cross className="mx-auto h-7 w-5 text-gold-soft" />
              <p className="label-caps mt-4 text-[0.5rem] text-gold-soft">With the blessing of God</p>
            </Reveal>

            <div>
              <Reveal delay={200}>
                <p className="label-caps text-[0.5rem] text-ivory/80">The wedding of</p>
                <Flourish className="mx-auto mt-3 h-2.5 w-12 text-gold-soft" />
              </Reveal>
              <Reveal delay={400}>
                <h1 className="mt-5">
                  <span className="names-caps glow-text block text-[3.6rem] text-ivory">{invite.bride}</span>
                  <span className="font-script my-1 block text-5xl text-gold">&amp;</span>
                  <span className="names-caps glow-text block text-[3.6rem] text-ivory">{invite.groom}</span>
                </h1>
              </Reveal>
              <Reveal delay={650}>
                <div className="mx-auto mt-7 flex items-center justify-center gap-4 text-gold-soft">
                  <span className="h-px w-10 bg-current opacity-60" />
                  <p className="label-caps text-[0.6rem] text-ivory">{invite.dateShort}</p>
                  <span className="h-px w-10 bg-current opacity-60" />
                </div>
                <p className="font-display mt-3 text-sm italic text-ivory/75">
                  {invite.church.name}, {invite.church.city}
                </p>
              </Reveal>
            </div>
          </div>

          <a
            href="#love"
            aria-label="Scroll down"
            className="animate-drift absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-soft"
          >
            <span className="h-7 w-px bg-current opacity-70" />
          </a>
        </section>

        {/* VERSE */}
        <section id="love" className="bg-blush-paper px-8 pb-16 pt-20 text-center">
          <Reveal>
            <Cross className="mx-auto h-6 w-4 text-gold" />
            <p className="font-display mx-auto mt-6 max-w-[320px] text-xl font-light italic leading-relaxed text-ink">
              “{invite.verse}”
            </p>
            <p className="label-caps mt-4 text-[0.5rem] text-wine">{invite.verseRef}</p>
          </Reveal>
          <Reveal delay={200}>
            <GoldRule className="my-8" />
            <p className="font-display mx-auto max-w-[310px] text-base leading-relaxed text-ink-soft">
              By the grace of God and with the blessings of
            </p>
            <p className="font-display mt-4 text-lg text-ink">{invite.brideParents}</p>
            <p className="font-script my-1 text-3xl text-gold">&amp;</p>
            <p className="font-display text-lg text-ink">{invite.groomParents}</p>
            <p className="font-display mx-auto mt-4 max-w-[310px] text-base leading-relaxed text-ink-soft">
              we joyfully invite you to witness the union of their children in holy matrimony.
            </p>
          </Reveal>
        </section>

        {/* INVITATION CARD */}
        <section className="bg-peach-paper px-5 pb-20 pt-10">
          <Reveal>
            <SectionHeading eyebrow="You are cordially invited" title="The invitation" />
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <InvitationCard />
          </Reveal>
        </section>

        <FloralDivider />

        {/* BRIDE & GROOM */}
        <section className="bg-blush-paper px-6 py-20">
          <Reveal>
            <SectionHeading eyebrow="Two hearts, one faith" title="The bride & the groom" />
          </Reveal>

          <div className="mt-12 space-y-14">
            <Reveal className="flex items-center gap-5">
              <PhotoFrame photo={photos.bride} className="aspect-[3/4] w-[52%] shrink-0" />
              <div className="text-left">
                <p className="label-caps text-[0.5rem] text-wine">The bride</p>
                <h3 className="names-caps mt-3 text-4xl text-ink">{invite.bride}</h3>
                <span className="mt-4 block h-px w-10 bg-gold" />
                <p className="label-caps mt-4 text-[0.45rem] text-ink-soft">Daughter of</p>
                <p className="font-display mt-1 text-base italic leading-snug text-ink">{invite.brideParents}</p>
                <p className="font-display mt-3 text-sm leading-relaxed text-ink-soft">{invite.brideNote}</p>
              </div>
            </Reveal>

            <Reveal className="flex flex-row-reverse items-center gap-5">
              <PhotoFrame photo={photos.groom} className="aspect-[3/4] w-[52%] shrink-0" />
              <div className="text-right">
                <p className="label-caps text-[0.5rem] text-wine">The groom</p>
                <h3 className="names-caps mt-3 text-4xl text-ink">{invite.groom}</h3>
                <span className="ml-auto mt-4 block h-px w-10 bg-gold" />
                <p className="label-caps mt-4 text-[0.45rem] text-ink-soft">Son of</p>
                <p className="font-display mt-1 text-base italic leading-snug text-ink">{invite.groomParents}</p>
                <p className="font-display mt-3 text-sm leading-relaxed text-ink-soft">{invite.groomNote}</p>
              </div>
            </Reveal>
          </div>
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
                  <p className="label-caps text-[0.45rem] text-ink-soft">Save the date</p>
                  <p className="names-caps mt-2 text-2xl text-ink">{invite.dateShort}</p>
                  <p className="font-display mt-1 text-sm italic text-ink-soft">{invite.weekdayTime}</p>
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
          <p className="label-caps mt-6 text-[0.5rem] text-ink-soft/80">Scratch to reveal</p>
        </section>

        {/* COUNTDOWN */}
        <section className="bg-wine-velvet px-6 py-20">
          <Reveal>
            <SectionHeading eyebrow="Until we say “I do”" title="Counting every heartbeat" tone="dark" />
            <Countdown dateISO={invite.dateISO} />
          </Reveal>
        </section>

        {/* TOGETHER */}
        <section className="bg-blush-paper px-8 py-20">
          <Reveal>
            <SectionHeading eyebrow="Together" title="Moments, softly held" />
          </Reveal>
          <Reveal delay={150}>
            <MomentsCarousel />
          </Reveal>
        </section>

        <FloralDivider />

        {/* FAMILIES */}
        <section className="bg-peach-paper px-6 py-20 text-center">
          <Reveal>
            <SectionHeading eyebrow="Our families" title="Two families, one blessing" />
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <div className="relative">
              <PhotoFrame photo={photos.family} shape="rect" className="aspect-[4/3] w-full" />
              <div className="bg-photo-fade pointer-events-none absolute inset-1.5 rounded-sm" />
              <p className="label-caps absolute inset-x-0 bottom-6 text-[0.5rem] text-ivory">Together as one family</p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-5">
            {[
              { photo: photos.brideFamily, label: "The bride's family", family: invite.brideFamily, parents: invite.brideParents },
              { photo: photos.groomFamily, label: "The groom's family", family: invite.groomFamily, parents: invite.groomParents },
            ].map((f, i) => (
              <Reveal key={f.label} delay={i * 150}>
                <PhotoFrame photo={f.photo} shape="oval" className="mx-auto aspect-[4/5] w-full" />
                <p className="label-caps mt-5 text-[0.45rem] text-wine">{f.label}</p>
                <p className="font-display mt-2 text-lg text-ink">{f.family}</p>
                <p className="font-display mt-1 text-sm italic text-ink-soft">{f.parents}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <FloralDivider flip />

        {/* SCHEDULE */}
        <section className="bg-blush-paper px-8 py-20">
          <Reveal>
            <SectionHeading eyebrow="The celebration" title="Order of the day" />
          </Reveal>
          <ol className="relative mx-auto mt-10 max-w-[300px] border-l border-gold/60 pl-8">
            {invite.schedule.map((item, i) => (
              <li key={item.title} className="relative pb-8 last:pb-0">
                <Reveal delay={i * 120}>
                  <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rotate-45 border border-gold bg-blush" />
                  <p className="label-caps text-[0.5rem] text-wine">{item.time}</p>
                  <p className="font-display mt-1 text-xl text-ink">{item.title}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* VENUE */}
        <section className="bg-blush-paper px-6 pb-20 pt-4">
          <Reveal>
            <div className="bg-plum-night shadow-card mx-auto max-w-[380px] overflow-hidden rounded-t-[999px] border border-gold/40 p-2 text-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px]">
                <img
                  src={photos.venue.src}
                  alt={photos.venue.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: photos.venue.position }}
                />
                <div className="bg-photo-fade absolute inset-0" />
                <div className="pointer-events-none absolute inset-2 rounded-t-[999px] border border-gold/40" />
                <p className="label-caps absolute inset-x-0 bottom-6 text-[0.5rem] text-gold-soft">The ceremony</p>
              </div>
              <div className="px-6 pb-10 pt-8">
                <Cross className="mx-auto h-5 w-4 text-gold" />
                <h3 className="names-caps glow-text mt-4 text-3xl leading-tight text-ivory">{invite.church.name}</h3>
                <p className="font-display mt-3 italic text-ivory/70">{invite.church.address}</p>
                <p className="label-caps mt-4 text-[0.5rem] text-gold-soft">
                  {invite.weekday} · {invite.dateLong} · 4:00 PM
                </p>
                <a
                  href={invite.church.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="label-caps mt-7 inline-block border border-gold/60 px-5 py-3 text-[0.5rem] text-gold-soft transition-colors hover:bg-gold hover:text-wine-deep"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <FloralDivider />

        {/* FESTIVITIES */}
        <section className="bg-peach-paper px-6 py-20">
          <Reveal>
            <SectionHeading eyebrow="The festivities" title="Days filled with joy" />
          </Reveal>
          <div className="mt-12 space-y-14">
            {invite.festivities.map((f, i) => {
              const photo = photos.events[f.photo];
              return (
                <Reveal key={f.name} delay={100}>
                  <article className="bg-ivory-paper shadow-card relative border border-gold/40 p-2">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                        style={{ objectPosition: photo.position }}
                      />
                      <div className="pointer-events-none absolute inset-2 border border-ivory/50" />
                    </div>
                    <span className="names-caps relative mx-auto -mt-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory text-lg text-wine shadow-sm">
                      {ROMAN[i]}
                    </span>
                    <div className="px-6 pb-7 pt-4 text-center">
                      <h3 className="names-caps text-[1.7rem] text-ink">{f.name}</h3>
                      <p className="label-caps mt-3 text-[0.5rem] text-wine">{f.when}</p>
                      <p className="font-display mt-2 italic text-ink-soft">{f.where}</p>
                      <a
                        href={f.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="label-caps mt-5 inline-block border-b border-gold pb-0.5 text-[0.45rem] text-ink-soft hover:text-wine"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* DRESS CODE */}
        <section className="bg-blush-paper px-8 py-20 text-center">
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

        <FloralDivider flip />

        {/* CLOSING — couple photo + invitation message */}
        <section className="bg-plum-night px-6 pb-24 pt-20 text-center">
          <Reveal>
            <p className="label-caps text-[0.5rem] text-gold-soft">With love & gratitude</p>
            <PhotoFrame photo={photos.closing} className="mx-auto mt-8 aspect-[3/4] w-[78%]" />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-10">
              <span className="names-caps glow-text block text-5xl text-ivory">{invite.bride}</span>
              <span className="font-script block text-4xl text-gold">&amp;</span>
              <span className="names-caps glow-text block text-5xl text-ivory">{invite.groom}</span>
            </h2>
            <Flourish className="mx-auto mt-6 h-3 w-16 text-gold-soft" />
          </Reveal>
          <Reveal delay={300}>
            <p className="font-display mx-auto mt-6 max-w-[320px] text-lg font-light italic leading-relaxed text-ivory/85">
              {invite.closingMessage}
            </p>
            <p className="font-display mt-6 text-base text-ivory/70">
              We can't wait to celebrate with you.
            </p>
            <p className="font-script mt-6 text-4xl text-gold-soft">{couple}</p>
            <p className="label-caps mt-3 text-[0.45rem] text-ivory/60">
              with {invite.brideFamily} & {invite.groomFamily}
            </p>
            <div className="mx-auto mt-10 flex items-center justify-center gap-3 text-gold">
              <span className="h-px w-10 bg-current opacity-50" />
              <Cross className="h-5 w-4" />
              <span className="h-px w-10 bg-current opacity-50" />
            </div>
            <p className="label-caps mt-4 text-[0.45rem] text-gold-soft/80">
              {invite.dateLong} · {invite.church.name}
            </p>
          </Reveal>
        </section>
      </main>
    </>
  );
}
