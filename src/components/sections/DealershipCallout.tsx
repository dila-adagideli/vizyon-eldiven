"use client";

import { Container } from "@/components/ui/Container";
import { HashLink } from "@/components/ui/HashLink";
import { useLanguage } from "@/i18n/LanguageProvider";

export function DealershipCallout() {
  const { messages } = useLanguage();
  const copy = messages.dealership;

  return (
    <aside
      aria-labelledby="bayilik-callout-heading"
      className="border-t border-border bg-background text-foreground"
    >
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:py-9 lg:py-10">
        <div className="min-w-0">
          <p className="t-eyebrow">{copy.label}</p>
          <h2
            id="bayilik-callout-heading"
            className="mt-3 font-display text-[clamp(1.35rem,2vw,1.75rem)] font-medium tracking-[-0.02em]"
          >
            {copy.calloutTitle}
          </h2>
          <p className="t-small mt-2 max-w-[36ch] text-muted-foreground">
            {copy.calloutBody}
          </p>
        </div>

        <HashLink
          href="#bayilik"
          className="editorial-link t-label shrink-0 text-[0.7rem] tracking-[0.14em] text-foreground"
        >
          {copy.calloutCta}{" "}
          <span aria-hidden className="dir-arrow">
            →
          </span>
        </HashLink>
      </Container>
    </aside>
  );
}
