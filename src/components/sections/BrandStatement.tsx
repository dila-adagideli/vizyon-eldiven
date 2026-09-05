"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/i18n/LanguageProvider";

export function BrandStatement() {
  const { messages } = useLanguage();
  const copy = messages.brandStatement;

  return (
    <section
      aria-labelledby="brand-statement-heading"
      className="brand-statement-band flex items-center overflow-hidden border-b border-border bg-background text-foreground"
    >
      <Container className="flex min-h-[8.75rem] flex-col items-center justify-center py-8 text-center sm:min-h-[9.5rem] md:min-h-[10.5rem] lg:min-h-[11.5rem] lg:py-10">
        <div className="brand-statement-zoom">
          <h2
            id="brand-statement-heading"
            className="max-w-full font-display text-[clamp(1.55rem,2.6vw+0.7rem,3.25rem)] font-medium leading-[1.12] tracking-[-0.025em]"
          >
            <span className="text-foreground">{copy.line}</span>{" "}
            <span className="text-accent">{copy.emphasis}</span>
          </h2>
          <p className="brand-statement-product t-label mt-3 max-w-full text-[0.65rem] tracking-[0.16em] text-charcoal sm:mt-3.5 sm:text-[0.7rem]">
            {copy.product}
          </p>
        </div>
      </Container>
    </section>
  );
}
