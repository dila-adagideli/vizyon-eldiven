"use client";

import { useEffect, useId, useRef, useState } from "react";
import { localeMeta, locales, type Locale } from "@/i18n";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  variant?: "header" | "mobile";
};

export function LanguageSwitcher({ variant = "header" }: LanguageSwitcherProps) {
  const { locale, messages, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const listId = useId();

  const focusOption = (index: number) => {
    const next = (index + locales.length) % locales.length;
    optionRefs.current[next]?.focus();
  };

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectLocale = (next: Locale) => {
    setLocale(next);
    setOpen(false);
    buttonRef.current?.focus();
  };

  if (variant === "mobile") {
    return (
      <div className="border-b border-border pb-5">
        <p className="t-label text-[0.7rem] tracking-[0.14em] text-muted-foreground">
          {messages.a11y.langSelect}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {locales.map((item) => {
            const active = item === locale;

            return (
              <li key={item}>
                <button
                  type="button"
                  className={cn(
                    "inline-flex min-h-11 items-center text-[0.8125rem] tracking-[0.04em] text-muted-foreground",
                    active && "text-foreground",
                  )}
                  aria-pressed={active}
                  onClick={() => setLocale(item)}
                >
                  {localeMeta[item].name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        className="nav-link inline-flex min-h-11 items-center gap-1 whitespace-nowrap text-[0.8125rem] tracking-[0.04em] text-muted-foreground hover:text-foreground focus-visible:text-foreground"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-label={messages.a11y.langSelect}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
            window.requestAnimationFrame(() => focusOption(0));
          }
        }}
      >
        {localeMeta[locale].code}
        <span aria-hidden className="text-[0.65em] leading-none">
          ▾
        </span>
      </button>

      <ul
        id={listId}
        role="listbox"
        aria-label={messages.a11y.langSelect}
        hidden={!open}
        className="absolute start-0 top-full z-50 mt-3 min-w-[8.75rem] max-w-[calc(100vw-2.5rem)] rounded-[5px] border border-border bg-background py-1 shadow-[0_10px_28px_rgb(19_19_22/0.08)]"
      >
        {locales.map((item, index) => {
          const active = item === locale;

          return (
            <li key={item} role="none">
              <button
                ref={(node) => {
                  optionRefs.current[index] = node;
                }}
                type="button"
                role="option"
                aria-selected={active}
                className={cn(
                  "flex min-h-11 w-full items-center px-3 text-start text-[0.8125rem] tracking-[0.04em] text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground",
                  active && "text-foreground",
                )}
                onClick={() => selectLocale(item)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    focusOption(index + 1);
                  } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    focusOption(index - 1);
                  } else if (event.key === "Home") {
                    event.preventDefault();
                    focusOption(0);
                  } else if (event.key === "End") {
                    event.preventDefault();
                    focusOption(locales.length - 1);
                  } else if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectLocale(item);
                  }
                }}
              >
                {localeMeta[item].name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
