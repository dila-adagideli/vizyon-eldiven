"use client";

import { FlagIcon } from "@/components/layout/FlagIcon";
import { localeMeta, locales } from "@/i18n";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  variant?: "header" | "mobile";
};

export function LanguageSwitcher({ variant = "header" }: LanguageSwitcherProps) {
  const { locale, messages, setLocale } = useLanguage();
  const isMobile = variant === "mobile";

  const flags = (
    <ul
      className={cn(
        "flex items-center",
        isMobile ? "mt-3 gap-1.5" : "gap-[11px]",
      )}
    >
      {locales.map((item) => {
        const active = item === locale;

        return (
          <li key={item}>
            <button
              type="button"
              aria-label={localeMeta[item].name}
              aria-current={active ? "true" : undefined}
              aria-pressed={active}
              className={cn(
                "relative inline-flex items-center justify-center",
                "opacity-70 transition-[opacity,transform] duration-[180ms] ease-out",
                "hover:opacity-100 motion-safe:hover:scale-[1.05]",
                "focus-visible:opacity-100",
                "after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-foreground/45 after:opacity-0 after:content-[''] after:transition-opacity after:duration-[180ms] after:ease-out",
                active && "opacity-100 after:opacity-100",
                isMobile ? "min-h-9 min-w-9" : "pb-px",
              )}
              onClick={() => setLocale(item)}
            >
              <FlagIcon locale={item} />
            </button>
          </li>
        );
      })}
    </ul>
  );

  if (isMobile) {
    return (
      <div
        className="border-b border-border pb-5"
        role="group"
        aria-label={messages.a11y.langSelect}
      >
        <p className="t-label text-[0.7rem] tracking-[0.14em] text-muted-foreground">
          {messages.a11y.langSelect}
        </p>
        {flags}
      </div>
    );
  }

  return (
    <div role="group" aria-label={messages.a11y.langSelect} className="me-2 shrink-0">
      {flags}
    </div>
  );
}
