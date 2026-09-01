"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";
import { media } from "@/lib/media";

const scaleTicks = [0, 1, 2, 3, 4, 5] as const;

export function Standards() {
  const { messages } = useLanguage();
  const copy = messages.standards;

  return (
    <section
      id="standartlar"
      aria-labelledby="standartlar-heading"
      className="bg-charcoal text-background"
    >
      <div className="relative h-auto min-h-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[140%] lg:h-[150%]"
        >
          <Image
            src={media.studio.src}
            alt=""
            fill
            quality={95}
            sizes="100vw"
            className="object-cover object-[80%_center] contrast-[1.06] saturate-[1.04]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.35) 36%, #000 58%), linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,0.55) 78%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.35) 36%, #000 58%), linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,0.55) 78%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent lg:from-charcoal lg:via-charcoal/28 lg:to-transparent rtl:bg-gradient-to-l" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgb(17 17 20 / 0.18) 0%, rgb(17 17 20 / 0.08) 42%, rgb(17 17 20 / 0.16) 62%, rgb(17 17 20 / 0.4) 76%, rgb(17 17 20 / 0.72) 88%, #111114 100%)",
            }}
          />
        </div>
        <Container className="relative z-10 py-14 md:py-[4.5rem] lg:pt-[90px] lg:pb-[100px]">
          <p className="t-eyebrow">{copy.eyebrow}</p>
          <h2
            id="standartlar-heading"
            className="mt-5 font-display text-[clamp(2.4rem,6vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.045em]"
          >
            P40
            <span className="mx-2 text-accent sm:mx-3">—</span>
            P3000
          </h2>
          <p className="t-body mt-7 max-w-[32ch] text-background/75">
            {copy.subtitle}
          </p>
        </Container>
      </div>

      <Container className="relative z-10 pb-14 md:pb-[4.5rem] lg:pb-[100px]">
        <p className="t-body max-w-[46ch] text-background/60">{copy.body}</p>

        <div className="mt-10 lg:mt-14">
          <p className="sr-only">{copy.scaleAria}</p>

          <div className="flex items-end justify-between gap-6" aria-hidden>
            <div>
              <p className="font-display text-[clamp(1.5rem,3vw,2.35rem)] font-medium tracking-tight">
                P40
              </p>
              <p className="t-label mt-1 text-background/55">{copy.coarse}</p>
            </div>
            <div className="text-end">
              <p className="font-display text-[clamp(1.5rem,3vw,2.35rem)] font-medium tracking-tight">
                P3000
              </p>
              <p className="t-label mt-1 text-background/55">{copy.fine}</p>
            </div>
          </div>

          <div className="relative mt-4" aria-hidden>
            <div className="h-px bg-background/20">
              <div className="scale-line h-px w-full bg-accent" />
            </div>
            <span className="absolute start-0 top-1/2 size-1.5 -translate-y-1/2 bg-accent" />
            <span className="absolute end-0 top-1/2 size-1.5 -translate-y-1/2 bg-accent" />
          </div>

          <div className="mt-2 flex justify-between px-px" aria-hidden>
            {scaleTicks.map((tick) => (
              <span key={tick} className="h-2 w-px bg-background/25" />
            ))}
          </div>

          <p className="t-label mt-4 max-w-2xl text-[0.7rem] tracking-[0.14em] text-background/55">
            {copy.highlight}
          </p>
        </div>

        <div className="mt-12 grid border-t border-background/12 lg:mt-16 lg:grid-cols-3">
          {copy.facts.map((fact, index) => (
            <article
              key={fact.number}
              className={cn(
                "py-7 lg:px-8 lg:py-9",
                index > 0 &&
                  "border-t border-background/12 lg:border-s lg:border-t-0",
                index === 0 && "lg:ps-0",
                index === copy.facts.length - 1 && "lg:pe-0",
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="t-eyebrow">{fact.number}</span>
                <span className="t-label text-[0.65rem] tracking-[0.14em] text-background/55">
                  {fact.label}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl tracking-tight">
                {fact.title}
              </h3>
              <p className="t-small mt-2 max-w-sm text-background/55">
                {fact.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-background/12 pt-7 lg:mt-16 lg:pt-9">
          <p className="t-label text-background/55">{copy.patentTitle}</p>
          <p className="t-small mt-3 max-w-2xl text-background/55">
            {copy.patentBody}
          </p>
        </div>
      </Container>
    </section>
  );
}
