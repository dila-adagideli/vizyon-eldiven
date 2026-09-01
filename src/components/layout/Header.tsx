"use client";

import { BrandMark } from "@/components/layout/BrandMark";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems } from "@/components/layout/nav";
import { useActiveNav } from "@/components/layout/useActiveNav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HashLink } from "@/components/ui/HashLink";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";

export function Header() {
  const activeHref = useActiveNav();
  const { messages } = useLanguage();

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-border bg-background">
      <Container className="flex h-20 items-center justify-between gap-6 overflow-visible">
        <BrandMark alt={messages.brand.alt} />

        <div className="flex min-w-0 items-center gap-8">
          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-8"
            aria-label={messages.a11y.navMain}
          >
            <LanguageSwitcher />
            {navItems.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <HashLink
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "nav-link whitespace-nowrap text-[0.8125rem] tracking-[0.04em] text-muted-foreground hover:text-foreground focus-visible:text-foreground",
                    isActive && "is-active",
                  )}
                >
                  {messages.nav[item.key]}
                </HashLink>
              );
            })}
          </nav>
          <Button
            href="#iletisim"
            className="hidden min-h-11 rounded-[5px] px-4 text-[0.8125rem] lg:inline-flex"
          >
            {messages.nav.contact}
          </Button>
          <MobileMenu items={[...navItems]} activeHref={activeHref} />
        </div>
      </Container>
    </header>
  );
}
