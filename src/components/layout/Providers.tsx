"use client";

import { LanguageProvider } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n";
import type { ReactNode } from "react";

export function Providers({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  return (
    <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
  );
}
