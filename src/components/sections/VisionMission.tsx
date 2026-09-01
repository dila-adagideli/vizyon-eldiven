"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/i18n/LanguageProvider";
import { media } from "@/lib/media";

export function VisionMission() {
  const { messages } = useLanguage();
  const copy = messages.vision;

  return (
    <section
      id="vizyon"
      aria-labelledby="vizyon-heading"
      className="bg-background text-foreground"
    >
      <Container className="relative section">
        <header>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <p className="t-eyebrow">{copy.eyebrow}</p>
            <p className="t-label text-[0.7rem] tracking-[0.14em] text-muted-foreground">
              {copy.madeIn}
            </p>
          </div>

          <div className="mt-4 grid items-center lg:grid-cols-2">
            <div className="min-w-0 lg:pe-12 xl:pe-16">
              <h2 id="vizyon-heading" className="t-h1 max-w-[16ch]">
                {copy.title}
              </h2>
              <p className="t-body mt-4 max-w-[42ch] text-muted-foreground">
                {copy.intro}
              </p>
            </div>

            <div className="mt-6 flex justify-center lg:mt-0 lg:justify-start lg:ps-12 xl:ps-16">
              <div className="logo-zoom relative h-[15rem] w-[15rem] lg:h-[18rem] lg:w-[18rem]">
                <Image
                  src={media.emblem.src}
                  alt={messages.brand.alt}
                  fill
                  unoptimized
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="mt-10 grid lg:mt-12 lg:grid-cols-2">
          <article className="border-t border-border py-8 lg:pe-12 xl:pe-16">
            <p className="t-label text-muted-foreground">{copy.visionLabel}</p>
            <h3 className="t-h2 mt-4 max-w-[14ch]">{copy.visionTitle}</h3>
            <p className="t-body mt-4 max-w-[42ch] text-muted-foreground">
              {copy.visionBody}
            </p>
          </article>

          <article className="border-t border-border py-8 lg:border-s lg:ps-12 xl:ps-16">
            <p className="t-label text-muted-foreground">{copy.missionLabel}</p>
            <h3 className="t-h2 mt-4 max-w-[14ch]">{copy.missionTitle}</h3>
            <p className="t-body mt-4 max-w-[42ch] text-muted-foreground">
              {copy.missionBody}
            </p>
          </article>
        </div>

        <div className="mt-10 border-t border-border py-8 lg:mt-12">
          <h3 className="t-h2 max-w-[20ch]">{copy.emphasisTitle}</h3>
          <p className="t-body mt-4 max-w-[46ch] text-muted-foreground">
            {copy.emphasisBody}
          </p>
        </div>

        <ul className="mt-10 grid list-none gap-4 lg:mt-12 lg:grid-cols-3 lg:gap-10">
          {copy.pillars.map((item) => (
            <li key={item.title}>
              <p className="font-display text-[clamp(1.55rem,3.6vw,2.5rem)] font-medium uppercase leading-[1.1] tracking-[-0.03em]">
                {item.title}
                <span className="text-accent">.</span>
              </p>
              <p className="t-small mt-3 text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
