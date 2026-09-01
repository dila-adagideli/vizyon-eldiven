"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function SkipLink() {
  const { messages } = useLanguage();

  return (
    <a href="#icerik" className="skip-link t-small">
      {messages.a11y.skip}
    </a>
  );
}
