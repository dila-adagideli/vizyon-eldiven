"use client";

import { useEffect, useId, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { HashLink } from "@/components/ui/HashLink";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { NavItem } from "@/components/layout/nav";

type MobileMenuProps = {
  items: NavItem[];
  activeHref?: string;
};

export function MobileMenu({ items, activeHref = "" }: MobileMenuProps) {
  const { messages } = useLanguage();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const focusFirstLink = window.requestAnimationFrame(() => {
      panelRef.current
        ?.querySelector<HTMLAnchorElement>("nav a[href]")
        ?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const panelLinks = panelRef.current
        ? Array.from(
            panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
          )
        : [];

      const focusable = [buttonRef.current, ...panelLinks].filter(
        (node): node is HTMLElement => Boolean(node),
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.cancelAnimationFrame(focusFirstLink);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-[2px] text-foreground"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? messages.a11y.menuClose : messages.a11y.menuOpen}
        onClick={() => setOpen((current) => !current)}
      >
        <MenuIcon open={open} />
      </button>

      <div
        ref={panelRef}
        id={menuId}
        inert={!open}
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-background lg:hidden",
          "motion-safe:transition-opacity motion-safe:duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label={messages.a11y.navMobile} className="mx-auto flex max-w-container flex-col px-5 py-8 md:px-6">
          <LanguageSwitcher variant="mobile" />
          {items.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <HashLink
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "border-b border-border py-4 text-lg font-medium tracking-tight",
                  isActive
                    ? "text-foreground underline decoration-accent decoration-1 underline-offset-8"
                    : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {messages.nav[item.key]}
              </HashLink>
            );
          })}
          <div onClick={() => setOpen(false)}>
            <Button href="#iletisim" className="mt-8 w-full">
              {messages.nav.contact}
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      {open ? (
        <>
          <path
            d="M5 5L17 17"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
          />
          <path
            d="M17 5L5 17"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
          />
        </>
      ) : (
        <>
          <path
            d="M3 7.5H19"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
          />
          <path
            d="M3 14.5H19"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
          />
        </>
      )}
    </svg>
  );
}
