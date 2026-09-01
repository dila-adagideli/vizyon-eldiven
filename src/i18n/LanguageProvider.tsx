"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  dictionaries,
  localeCookie,
  localeMeta,
  type Locale,
  type Messages,
} from "@/i18n";

type LanguageContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function persistLocale(locale: Locale) {
  try {
    window.localStorage.setItem(localeCookie, locale);
  } catch {
    /* ignore */
  }

  const secure = window.location.protocol === "https:" ? ";secure" : "";
  document.cookie = `${localeCookie}=${locale};path=/;max-age=31536000;samesite=lax${secure}`;
}

function applyDocumentLocale(locale: Locale, messages: Messages) {
  const meta = localeMeta[locale];
  document.documentElement.lang = meta.htmlLang;
  document.documentElement.dir = meta.dir;
  document.title = messages.seo.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", messages.seo.description);
  }
}

type LanguageProviderProps = {
  children: ReactNode;
  initialLocale: Locale;
};

export function LanguageProvider({
  children,
  initialLocale,
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const messages = dictionaries[locale];

  useEffect(() => {
    applyDocumentLocale(locale, messages);
  }, [locale, messages]);

  const setLocale = useCallback((next: Locale) => {
    persistLocale(next);
    setLocaleState(next);
  }, []);

  const value = useMemo(
    () => ({ locale, messages, setLocale }),
    [locale, messages, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
