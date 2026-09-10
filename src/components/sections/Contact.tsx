"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  contactConfig,
  getMailtoHref,
  getWhatsAppHref,
  isContactValue,
} from "@/lib/site";

export function Contact() {
  const { messages } = useLanguage();
  const copy = messages.contact;
  const dealership = messages.dealership;

  const phoneHref = isContactValue(contactConfig.whatsapp)
    ? getWhatsAppHref(
        contactConfig.whatsapp,
        "Merhaba, Vizyon Zımparalı Eldiven hakkında bilgi almak istiyorum.",
      )
    : "";
  const emailHref = isContactValue(contactConfig.email)
    ? getMailtoHref(contactConfig.email)
    : "";
  const instagramHref = isContactValue(contactConfig.instagram.url)
    ? contactConfig.instagram.url
    : "";
  const facebookHref = isContactValue(contactConfig.facebook.url)
    ? contactConfig.facebook.url
    : "";
  const dealershipHref = isContactValue(contactConfig.email)
    ? getMailtoHref(contactConfig.email, dealership.mailSubject)
    : "";

  return (
    <section
      id="iletisim"
      aria-labelledby="iletisim-heading"
      className="relative overflow-hidden bg-charcoal text-background"
    >
      <Container className="relative section">
        <p className="t-eyebrow">{copy.eyebrow}</p>

        <h2
          id="iletisim-heading"
          className="mt-4 max-w-[12ch] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[clamp(2.15rem,5vw,3.5rem)]"
        >
          <span className="block">{copy.title[0]}</span>
          <span className="block">{copy.title[1]}</span>
          <span className="block text-accent">{copy.title[2]}</span>
        </h2>

        <p className="t-body mt-5 max-w-[40ch] text-background/60">
          {copy.intro}
        </p>

        {phoneHref || emailHref || instagramHref || facebookHref ? (
          <address className="mt-10 grid not-italic sm:grid-cols-2 sm:gap-x-10 lg:mt-12 lg:max-w-3xl">
            {phoneHref ? (
              <p className="border-t border-background/12 py-6">
                <span className="t-label block text-[0.7rem] tracking-[0.14em] text-background/55">
                  {copy.phone}
                </span>
                <a
                  href={phoneHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link mt-3 inline-block font-display text-[1.35rem] tracking-[-0.02em] text-background sm:text-[1.5rem]"
                  aria-label="WhatsApp üzerinden iletişime geç"
                  onClick={() => {
                    sendGAEvent("event", "whatsapp_click", {
                      link_type: "whatsapp",
                      link_location: "contact",
                      link_url: phoneHref,
                    });
                  }}
                >
                  {contactConfig.phone}
                </a>
              </p>
            ) : null}

            {emailHref ? (
              <p className="border-t border-background/12 py-6">
                <span className="t-label block text-[0.7rem] tracking-[0.14em] text-background/55">
                  {copy.email}
                </span>
                <a
                  href={emailHref}
                  className="editorial-link mt-3 inline-block break-all font-display text-[1.35rem] tracking-[-0.02em] text-background sm:text-[1.5rem]"
                  aria-label={messages.a11y.sendEmail.replace(
                    "{email}",
                    contactConfig.email,
                  )}
                >
                  {contactConfig.email}
                </a>
              </p>
            ) : null}

            {instagramHref ? (
              <p className="border-t border-background/12 py-6">
                <span className="t-label block text-[0.7rem] tracking-[0.14em] text-background/55">
                  {copy.instagram}
                </span>
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link mt-3 inline-block font-display text-[1.35rem] tracking-[-0.02em] text-background sm:text-[1.5rem]"
                  aria-label={messages.a11y.openInstagram}
                >
                  {contactConfig.instagram.handle}
                </a>
              </p>
            ) : null}

            {facebookHref ? (
              <p className="border-t border-background/12 py-6">
                <span className="t-label block text-[0.7rem] tracking-[0.14em] text-background/55">
                  {copy.facebook}
                </span>
                <a
                  href={facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link mt-3 inline-block font-display text-[1.35rem] tracking-[-0.02em] text-background sm:text-[1.5rem]"
                  aria-label={messages.a11y.openFacebook}
                >
                  {contactConfig.facebook.name}
                </a>
              </p>
            ) : null}
          </address>
        ) : null}

        <ul className="mt-2 flex flex-wrap gap-x-8 gap-y-3 lg:mt-4">
          {copy.topics.map((topic) => (
            <li
              key={topic}
              className="t-label text-[0.7rem] tracking-[0.14em] text-background/55"
            >
              {topic}
            </li>
          ))}
        </ul>

        {dealershipHref ? (
          <section
            id="bayilik"
            aria-labelledby="bayilik-heading"
            className="relative mt-12 overflow-hidden border border-background/12 border-s-2 border-s-accent bg-background/[0.03] px-5 py-8 sm:px-8 lg:mt-16 lg:px-10 lg:py-10"
          >
            <p
              aria-hidden
              className="pointer-events-none absolute end-3 bottom-0 z-0 select-none whitespace-nowrap font-display text-[clamp(3.25rem,9vw,6.5rem)] uppercase leading-[0.75] tracking-[-0.06em] text-background/[0.06] sm:end-4"
            >
              {messages.brand.short}
            </p>
            <div className="relative z-10">
              <p className="t-eyebrow">{dealership.label}</p>
              <h3 id="bayilik-heading" className="t-h2 mt-4 max-w-[16ch]">
                {dealership.title}
              </h3>
              <p className="t-body mt-4 max-w-[46ch] text-background/60">
                {dealership.body}
              </p>
              <Button
                href={dealershipHref}
                variant="inverse"
                className="mt-7 w-full rounded-[5px] sm:w-auto"
                aria-label={messages.a11y.dealershipEmail}
              >
                {dealership.cta}
                <span aria-hidden className="dir-arrow">
                  →
                </span>
              </Button>
            </div>
          </section>
        ) : null}
      </Container>
    </section>
  );
}
