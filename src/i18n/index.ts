import { ar } from "@/i18n/ar";
import { de } from "@/i18n/de";
import { en } from "@/i18n/en";
import { ru } from "@/i18n/ru";
import { tr } from "@/i18n/tr";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/types";

export {
  defaultLocale,
  isLocale,
  localeCookie,
  localeMeta,
  locales,
  parseLocale,
} from "@/i18n/config";
export type { Locale } from "@/i18n/config";
export type { Messages } from "@/i18n/types";

export const dictionaries: Record<Locale, Messages> = {
  tr,
  en,
  de,
  ru,
  ar,
};

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}
