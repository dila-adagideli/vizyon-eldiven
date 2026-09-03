"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/i18n/LanguageProvider";

export function BrandStatement() {
  const { messages } = useLanguage();
  const copy = messages.brandStatement;

  return (
    <section
      aria-labelledby="brand-statement-heading"
      className="brand-statement-band flex items-center overflow-hidden border-y border-background/10 bg-charcoal text-background"
    >
      <Container className="flex min-h-[16.5rem] flex-col items-center justify-center py-12 text-center md:min-h-[17.5rem] lg:min-h-[19rem] lg:py-16">
        <div className="brand-statement-zoom">
          <h2
            id="brand-statement-heading"
            className="max-w-full font-display text-[clamp(1.8rem,3.2vw+0.9rem,4.75rem)] font-medium leading-[1.08] tracking-[-0.025em]"
          >
            <span className="text-background">{copy.line}</span>{" "}
            <span className="brand-emphasis text-accent">{copy.emphasis}</span>
          </h2>
          <p className="brand-statement-product t-label mt-6 max-w-full text-[0.7rem] tracking-[0.16em] text-background/55">
            {copy.product}
          </p>
        </div>
      </Container>
    </section>
  );
}
