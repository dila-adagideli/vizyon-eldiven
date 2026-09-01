"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/i18n/LanguageProvider";
import detailPhoto from "../../../public/images/vizyon-detail.webp";

export function ProductShowcase() {
  const { messages } = useLanguage();
  const { productShowcase } = messages;

  return (
    <section
      id="urun-detayi"
      aria-labelledby="urun-detay-heading"
      className="bg-charcoal text-background"
    >
      <Container className="pt-16 pb-14 lg:pt-[6.75rem] lg:pb-[6.25rem]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-center lg:gap-x-24 lg:gap-y-0">
          <div className="min-w-0">
            <h2 id="urun-detay-heading" className="t-h1">
              {productShowcase.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-body mt-5 max-w-[28.75rem] text-background/60">
              {productShowcase.body}
            </p>
          </div>

          <figure className="min-w-0 lg:row-span-2">
            <div className="w-full max-w-[32rem] lg:ms-auto">
              <div className="media-zoom relative aspect-[1/1] overflow-hidden rounded-[4px] border border-background/10">
                <Image
                  src={detailPhoto}
                  alt={messages.media.detail}
                  fill
                  quality={95}
                  sizes="(max-width: 1023px) 100vw, 512px"
                  className="object-cover object-[62%_48%]"
                />
              </div>
              <figcaption className="t-label mt-3 text-background/55">
                {productShowcase.caption}
              </figcaption>
            </div>
          </figure>

          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {productShowcase.specs.map((item, index) => (
              <li key={item} className="flex items-center gap-4">
                {index > 0 ? (
                  <span aria-hidden className="h-3 w-px bg-background/20" />
                ) : null}
                <span className="t-label text-background/55">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
