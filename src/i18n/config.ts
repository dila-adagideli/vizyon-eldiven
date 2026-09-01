export const locales = ["tr", "en", "de", "ru", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeCookie = "vizyon-locale";

export const localeMeta: Record<
  Locale,
  { htmlLang: string; dir: "ltr" | "rtl"; code: string; name: string }
> = {
  tr: { htmlLang: "tr", dir: "ltr", code: "TR", name: "Türkçe" },
  en: { htmlLang: "en", dir: "ltr", code: "EN", name: "English" },
  de: { htmlLang: "de", dir: "ltr", code: "DE", name: "Deutsch" },
  ru: { htmlLang: "ru", dir: "ltr", code: "RU", name: "Русский" },
  ar: { htmlLang: "ar", dir: "rtl", code: "AR", name: "العربية" },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function parseLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}
