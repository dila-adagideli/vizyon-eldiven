"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/i18n/LanguageProvider";
import woodPhoto from "../../../public/images/vizyon-wood.webp";
import automotivePhoto from "../../../public/images/vizyon-automotive.webp";
import metalPhoto from "../../../public/images/vizyon-metal.webp";
import constructionPhoto from "../../../public/images/vizyon-construction.webp";

export function UseCases() {
  const { messages } = useLanguage();
  const copy = messages.useCases;

  return (
    <section
      id="kullanim-alanlari"
      aria-labelledby="kullanim-heading"
      className="bg-background text-foreground"
    >
      <Container className="py-16 lg:py-[6.875rem]">
        <article className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="t-eyebrow">{copy.eyebrow}</p>
            <h2 id="kullanim-heading" className="t-h1 mt-3">
              {copy.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-body mt-3 text-muted-foreground">{copy.intro}</p>

            <div className="use-case-copy mt-10 lg:mt-12">
              <p className="use-case-label t-label text-muted-foreground">
                {copy.wood.label}
              </p>
              <h3 className="use-case-heading t-h2 mt-3">{copy.wood.title}</h3>
              <p className="use-case-text t-body mt-4 text-muted-foreground">
                {copy.wood.p1}
              </p>
            </div>
          </div>

          <div className="media-zoom relative h-[20rem] w-full overflow-hidden rounded-[4px] sm:h-[24rem] lg:h-[38.75rem]">
            <Image
              src={woodPhoto}
              alt={messages.media.wood}
              fill
              quality={95}
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-[center_32%]"
            />
          </div>
        </article>

        <article className="mt-24 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="media-zoom relative h-[20rem] w-full overflow-hidden rounded-[4px] sm:h-[23.75rem] lg:h-[28.75rem]">
            <Image
              src={automotivePhoto}
              alt={messages.media.automotive}
              fill
              quality={95}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-[center_48%]"
            />
          </div>
          <div className="use-case-copy min-w-0">
            <p className="use-case-label t-label text-muted-foreground">
              {copy.automotive.label}
            </p>
            <h3 className="use-case-heading t-h2 mt-3">
              {copy.automotive.title}
            </h3>
            <p className="use-case-text t-body mt-4 text-muted-foreground">
              {copy.automotive.p1}
            </p>
            <p className="use-case-text t-body mt-4 text-muted-foreground">
              {copy.automotive.p2}
            </p>
          </div>
        </article>

        <div className="mt-24">
          <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="use-case-copy min-w-0">
              <p className="use-case-label t-eyebrow">{copy.metal.label}</p>
              <h3 className="use-case-heading t-h2 mt-3">{copy.metal.title}</h3>
              <p className="use-case-text t-body mt-4 text-muted-foreground">
                {copy.metal.p1}
              </p>
              <p className="use-case-text t-body mt-4 text-muted-foreground">
                {copy.metal.p2}
              </p>
            </div>
            <div className="media-zoom relative h-[18rem] w-full overflow-hidden rounded-[4px] sm:h-[22rem] lg:h-[26rem]">
              <Image
                src={metalPhoto}
                alt={messages.media.metal}
                fill
                quality={95}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </article>

          <article className="mt-16 grid grid-cols-1 items-center gap-8 lg:mt-24 lg:grid-cols-2 lg:gap-16">
            <div className="media-zoom relative h-[18rem] w-full overflow-hidden rounded-[4px] sm:h-[22rem] lg:h-[26rem]">
              <Image
                src={constructionPhoto}
                alt={messages.media.construction}
                fill
                quality={95}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="use-case-copy min-w-0">
              <p className="use-case-label t-eyebrow">
                {copy.construction.label}
              </p>
              <h3 className="use-case-heading t-h2 mt-3">
                {copy.construction.title}
              </h3>
              <p className="use-case-text t-body mt-4 text-muted-foreground">
                {copy.construction.p1}
              </p>
              <p className="use-case-text t-body mt-4 text-muted-foreground">
                {copy.construction.p2}
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
