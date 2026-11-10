import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Music2, Pause } from "lucide-react";
import frame from "@/assets/floral-frame.webp";
import backgroundMusic from "@/assets/music.mp3";
import { CurtainIntro } from "@/components/invite/CurtainIntro";
import { ScratchReveal } from "@/components/invite/ScratchReveal";
import { Countdown } from "@/components/invite/Countdown";
import { InvitationCard } from "@/components/invite/InvitationCard";
import { PhotoFrame } from "@/components/invite/PhotoFrame";
import { SwipeGallery } from "@/components/invite/SwipeGallery";
import { FilmStrip } from "@/components/invite/FilmStrip";
import { Reveal } from "@/components/invite/Reveal";
import {
  Cross,
  FloralDivider,
  Flourish,
  GoldRule,
  SectionHeading,
} from "@/components/invite/Ornaments";
import { invite } from "@/components/invite/invite-data";
import { photos } from "@/components/invite/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${invite.bride} & ${invite.groom} — Wedding Invitation` },
      {
        name: "description",
        content: `You are warmly invited to the marriage of ${invite.bride} & ${invite.groom} on ${invite.dateLong}.`,
      },
      { property: "og:title", content: `${invite.bride} & ${invite.groom} — Wedding Invitation` },
      {
        property: "og:description",
        content: `Join us as ${invite.bride} & ${invite.groom} celebrate their marriage on ${invite.dateLong}.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

const ROMAN = ["I", "II", "III", "IV", "V"];

function Amp({ className }: { className?: string }) {
  return (
    <span className={`font-display font-light italic text-gold ${className ?? ""}`}>&amp;</span>
  );
}

function Invitation() {
  const [opened, setOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [musicError, setMusicError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setMusicError(false);
    void audio.play().catch(() => {
      setIsMusicPlaying(false);
      setMusicError(true);
    });
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      playMusic();
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="none"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      />
      <CurtainIntro onOpen={playMusic} onOpened={() => setOpened(true)} />
      {opened && (
        <div className="pointer-events-none fixed inset-x-0 top-4 z-[60] mx-auto flex w-full max-w-[480px] flex-col items-end px-4">
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}
            aria-pressed={isMusicPlaying}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold/70 bg-wine-deep/85 text-gold-soft shadow-lg backdrop-blur transition-colors hover:bg-wine"
          >
            {isMusicPlaying ? <Pause size={20} aria-hidden /> : <Music2 size={20} aria-hidden />}
          </button>
          {musicError && (
            <p
              role="alert"
              className="pointer-events-auto mt-2 max-w-56 rounded bg-wine-deep/90 px-3 py-2 text-right text-xs text-ivory"
            >
              Unable to play the background music. Please try again.
            </p>
          )}
        </div>
      )}

      <main className="mx-auto min-h-screen w-full max-w-[480px]">
        {/* HERO */}
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
              <p className="label-caps mt-4 text-[0.5rem] text-gold-soft">
                With the blessing of God
              </p>
            </Reveal>

            <div>
              <Reveal delay={200}>
                <p className="label-caps text-[0.5rem] text-ivory/80">The wedding of</p>
                <Flourish className="mx-auto mt-3 h-2.5 w-12 text-gold-soft" />
              </Reveal>
              <Reveal delay={400}>
                <h1 className="mt-5">
                  <span className="names-caps glow-text block text-[2.6rem] text-ivory sm:text-[3rem]">
                    {invite.bride}
                  </span>
                  <Amp className="my-1 block text-4xl" />
                  <span className="names-caps glow-text block text-[2.6rem] text-ivory sm:text-[3rem]">
                    {invite.groom}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={650}>
                <div className="mx-auto mt-7 flex items-center justify-center gap-4 text-gold-soft">
                  <span className="h-px w-10 bg-current opacity-60" />
                  <p className="label-caps text-[0.6rem] text-ivory">{invite.dateShort}</p>
                  <span className="h-px w-10 bg-current opacity-60" />
                </div>
              </Reveal>
            </div>
          </div>

          <a
            href="#love"
            aria-label="Scroll down"
            className="animate-drift absolute bottom-9 left-1/2 z-10 -translate-x-1/2 text-gold-soft"
          >
            <span className="block h-7 w-px bg-current opacity-70" />
          </a>
        </section>

        {/* VERSE */}
        <section id="love" className="bg-blush-paper px-8 py-20 text-center">
          <Reveal>
            <Cross className="mx-auto h-6 w-4 text-gold" />
            <p className="font-display mx-auto mt-6 max-w-[320px] text-xl font-light italic leading-relaxed text-ink">
              “{invite.verse}”
            </p>
            <p className="label-caps mt-4 text-[0.5rem] text-wine">{invite.verseRef}</p>
          </Reveal>
        </section>

        {/* FULL-SCREEN INVITATION */}
        <InvitationCard />

        {/* THE BRIDE */}
        <section className="bg-blush-paper py-20">
          <Reveal className="px-8 text-center">
            <p className="label-caps text-[0.5rem] text-wine">The bride</p>
            <h2 className="names-caps mt-4 text-5xl text-ink">{invite.bride}</h2>
            <p className="font-display mt-3 text-sm italic text-ink-soft">
              Daughter of {invite.brideParents}
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-8 px-6">
            <PhotoFrame
              photo={photos.bride}
              className="mx-auto aspect-[4/5] w-full max-w-[280px]"
            />
          </Reveal>
        </section>

        {/* THE GROOM */}
        <section className="bg-blush-paper py-20">
          <Reveal className="px-8 text-center">
            <p className="label-caps text-[0.5rem] text-wine">The groom</p>
            <h2 className="names-caps mt-4 text-5xl text-ink">{invite.groom}</h2>
            <p className="font-display mt-3 text-sm italic text-ink-soft">
              Son of {invite.groomParents}
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-8 px-6">
            <PhotoFrame
              photo={photos.groom}
              className="mx-auto aspect-[4/5] w-full max-w-[280px]"
            />
          </Reveal>
        </section>

        {/* FILM STRIP */}
        <section className="bg-blush-paper pb-16 pt-20">
          <Reveal className="px-8">
            <SectionHeading eyebrow="Our story" title="In frames" />
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <FilmStrip items={photos.filmstrip} />
          </Reveal>
        </section>

        {/* SCRATCH DATE */}
        <section className="bg-peach-paper px-6 pb-20 pt-10 text-center">
          <Reveal>
            <SectionHeading eyebrow="Save the date" title="Our forever begins" />
          </Reveal>
          <Reveal delay={150} className="relative mx-auto mt-10 w-full max-w-[380px]">
            <div className="relative aspect-[900/695]">
              <ScratchReveal className="absolute left-[19%] right-[19%] top-[24%] bottom-[19%] rounded-md bg-ivory">
                <div className="flex h-full flex-col items-center justify-center px-2">
                  <p className="label-caps text-[0.45rem] text-wine">Marriage</p>
                  <p className="font-script mt-1 text-4xl leading-tight text-wine">
                    {invite.dateDisplay}
                  </p>
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
        </section>

        {/* TOGETHER — peek gallery */}
        <section className="bg-plum-night py-20">
          <Reveal className="px-8">
            <SectionHeading eyebrow="Together" title="Two hearts, one faith" tone="dark" />
          </Reveal>
          <Reveal delay={150} className="mt-8">
            <SwipeGallery items={photos.together} variant="peek" tone="dark" />
          </Reveal>
        </section>

        {/* COUNTDOWN */}
        <section className="bg-wine-velvet px-6 py-16">
          <Reveal>
            <p className="label-caps text-center text-[0.5rem] text-gold-soft">
              Until we say “I do”
            </p>
            <Countdown dateISO={invite.dateISO} />
          </Reveal>
        </section>

        {/* MOSAIC */}
        <section className="bg-blush-paper px-6 py-20">
          <Reveal>
            <SectionHeading eyebrow="Little forevers" title="Moments we keep" />
          </Reveal>
          <Reveal
            delay={150}
            className="mt-10 grid grid-cols-5 grid-rows-[150px_150px_120px] gap-3"
          >
            <PhotoFrame photo={photos.mosaic.large} className="col-span-3 row-span-2" />
            <PhotoFrame photo={photos.mosaic.topRight} className="col-span-2" />
            <PhotoFrame photo={photos.mosaic.middleRight} className="col-span-2" />
            <PhotoFrame photo={photos.mosaic.wide} className="col-span-5" />
          </Reveal>
        </section>

        <FloralDivider />

        {/* FAMILIES */}
        <section className="bg-peach-paper px-6 py-20 text-center">
          <Reveal>
            <SectionHeading eyebrow="Our families" title="One blessing" />
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <PhotoFrame photo={photos.family} className="aspect-[4/3] w-full" />
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              {
                photo: photos.brideFamily,
                family: invite.brideFamily,
                parents: invite.brideParents,
              },
              {
                photo: photos.groomFamily,
                family: invite.groomFamily,
                parents: invite.groomParents,
              },
            ].map((f, i) => (
              <Reveal key={f.family} delay={i * 150}>
                <PhotoFrame photo={f.photo} className="aspect-[4/5] w-full" />
                <p className="font-display mt-4 text-lg text-ink">{f.family}</p>
                <p className="font-display text-xs italic text-ink-soft">{f.parents}</p>
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
          <ol className="relative mx-auto mt-10 max-w-[280px] border-l border-gold/60 pl-8">
            {invite.schedule.map((item, i) => (
              <li key={item.title} className="relative pb-7 last:pb-0">
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
        <section className="bg-blush-paper px-6 pb-20">
          <Reveal>
            <div className="bg-wine-velvet shadow-card relative mx-auto max-w-[380px] border border-gold/50 p-2 text-center">
              <PhotoFrame
                photo={photos.venue}
                tone="dark"
                className="aspect-[16/10] w-full border-0 p-0"
              />
              <div className="px-5 pb-9 pt-7">
                <p className="label-caps text-[0.5rem] text-gold-soft">The ceremony</p>
                <Flourish className="mx-auto mt-3 h-2.5 w-12 text-gold" />
                <h3 className="names-caps glow-text mx-auto mt-4 max-w-[290px] text-xl leading-snug text-ivory">
                  {invite.church.name}
                </h3>
                <a
                  href={invite.church.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="label-caps mt-6 inline-block border border-gold/60 bg-wine-deep/25 px-5 py-3 text-[0.48rem] text-gold-soft transition-colors hover:bg-gold hover:text-wine-deep"
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
          <div className="mt-12 space-y-12">
            {invite.festivities.map((f, i) => (
              <Reveal key={f.name} delay={100}>
                <article className="bg-ivory-paper shadow-card relative border border-gold/40 p-2">
                  <PhotoFrame
                    photo={photos.events[f.photo]}
                    className="aspect-[16/10] w-full border-0 p-0 shadow-none"
                  />
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
                      aria-label={`View ${f.name === "Engagement" ? "engagement hall" : "church"} location on Google Maps`}
                      className="label-caps mt-5 inline-block border-b border-gold pb-0.5 text-[0.45rem] text-ink-soft hover:text-wine"
                    >
                      View location
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 py-20 text-center">
          <img
            src={photos.invitation.src}
            alt=""
            aria-hidden
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            style={{ objectPosition: photos.invitation.position }}
          />
          <div className="absolute inset-0 -z-10 bg-plum-deep/80" />
          <Reveal>
            <h2>
              <span className="names-caps glow-text block text-4xl text-ivory sm:text-5xl">
                {invite.bride}
              </span>
              <Amp className="block text-4xl" />
              <span className="names-caps glow-text block text-4xl text-ivory sm:text-5xl">
                {invite.groom}
              </span>
            </h2>
            <Flourish className="mx-auto mt-6 h-3 w-16 text-gold-soft" />
          </Reveal>
          <Reveal delay={300}>
            <p className="font-display mx-auto mt-6 max-w-[310px] text-lg font-light italic leading-relaxed text-ivory/85">
              {invite.closingMessage}
            </p>
            <p className="label-caps mt-6 text-[0.45rem] text-gold-soft/70">
              With {invite.brideFamily} & {invite.groomFamily}
            </p>
            <GoldRule className="mt-10" />
            <p className="label-caps mt-4 text-[0.45rem] text-gold-soft/80">{invite.dateLong}</p>
            <p className="label-caps mt-6 text-[0.5rem] text-gold-soft">Best wishes</p>
            <p className="font-display mt-2 text-base text-ivory/85">
              {invite.bestWishes.join(" · ")}
            </p>
          </Reveal>
        </section>
      </main>
    </>
  );
}
