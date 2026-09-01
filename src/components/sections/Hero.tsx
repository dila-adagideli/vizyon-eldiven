"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";
import { media } from "@/lib/media";

function HeroSpecs({ className }: { className?: string }) {
  const { messages } = useLanguage();
  const specs = [messages.hero.specLocal, messages.hero.specMulti];

  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      <li className="flex items-center gap-5">
        <span className="flex flex-col leading-none">
          <span className="t-label text-muted-foreground">
            {messages.hero.gritRange}
          </span>
          <span className="t-label mt-1 text-muted-foreground">
            {messages.hero.gritScale}
          </span>
        </span>
      </li>
      {specs.map((item) => (
        <li key={item} className="flex items-center gap-5">
          <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />
          <span className="t-label text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  const { messages } = useLanguage();

  return (
    <section aria-labelledby="hero-heading" className="bg-background">
      <Container className="grid grid-cols-1 items-center gap-10 py-[4.5rem] lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:gap-12 lg:py-20">
        <div className="flex min-w-0 flex-col">
          <p className="t-eyebrow">{messages.hero.eyebrow}</p>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-[clamp(2.1rem,4.2vw,5.25rem)] font-medium leading-[1.08] tracking-[-0.03em]"
          >
            {messages.hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="t-body mt-5 max-w-[32.5rem] text-muted-foreground">
            {messages.hero.body}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="#urun" className="w-full rounded-[5px] sm:w-auto">
              {messages.hero.ctaProduct}
            </Button>
            <Button
              href="#kullanim-alanlari"
              variant="secondary"
              className="w-full rounded-[5px] sm:w-auto"
            >
              {messages.hero.ctaUseCases}
            </Button>
          </div>

          <HeroSpecs className="mt-8 hidden lg:flex" />
        </div>

        <div className="relative min-w-0">
          <div className="media-zoom relative aspect-[4/3] overflow-hidden rounded-[5px] border border-foreground/10">
            <Image
              src={media.hero.src}
              alt={messages.media.hero}
              fill
              priority
              quality={90}
              sizes="(max-width: 1023px) 100vw, 56vw"
              className="object-cover object-[center_42%]"
            />
          </div>
        </div>

        <HeroSpecs className="lg:hidden" />
      </Container>
    </section>
  );
}
