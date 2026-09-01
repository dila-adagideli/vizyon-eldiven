"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/i18n/LanguageProvider";
import { media } from "@/lib/media";

export function ProductIntro() {
  const { messages } = useLanguage();
  const { productIntro } = messages;

  return (
    <section
      id="urun"
      aria-labelledby="urun-heading"
      className="bg-charcoal text-background"
    >
      <Container className="py-[6.5rem] lg:py-[7.5rem]">
        <header className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div>
            <p className="t-eyebrow">{productIntro.eyebrow}</p>
            <h2 id="urun-heading" className="t-h1 mt-4 max-w-[14ch]">
              {productIntro.title}
            </h2>
          </div>
          <p className="t-body max-w-[32.5rem] text-background/60">
            {productIntro.body}
          </p>
        </header>

        <div className="mt-16 grid items-start gap-12 md:grid-cols-[minmax(0,0.46fr)_minmax(0,0.46fr)] md:justify-between md:gap-[8%]">
          <figure className="min-w-0 max-w-[560px]">
            <div className="media-zoom relative overflow-hidden rounded-[4px]">
              <Image
                src={media.texture.src}
                alt={messages.media.texture}
                width={768}
                height={1024}
                quality={95}
                sizes="(max-width: 767px) 100vw, 560px"
                className="h-[400px] w-full object-cover object-[center_68%] md:h-[480px] lg:h-[500px]"
              />
            </div>
            <figcaption className="t-label mt-3 text-background/55">
              {productIntro.caption}
            </figcaption>
          </figure>

          <ol className="min-w-0">
            {productIntro.features.map((feature, index) => (
              <li
                key={feature.number}
                className={
                  index > 0
                    ? "mt-8 border-t border-background/12 pt-8"
                    : undefined
                }
              >
                <p className="t-eyebrow">{feature.number}</p>
                <h3 className="mt-3 font-display text-xl tracking-tight">
                  {feature.title}
                </h3>
                <p className="t-small mt-3 max-w-sm text-background/55">
                  {feature.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
