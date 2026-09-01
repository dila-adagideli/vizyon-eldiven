"use client";

import Link from "next/link";
import { navItems } from "@/components/layout/nav";
import { Container } from "@/components/ui/Container";
import { HashLink } from "@/components/ui/HashLink";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const year = new Date().getFullYear();
  const { messages } = useLanguage();

  return (
    <footer className="border-t border-background/12 bg-charcoal text-background">
      <Container className="grid gap-8 py-8 sm:py-10 lg:grid-cols-3 lg:items-center lg:gap-10">
        <Link href="/" className="flex flex-col justify-center leading-none">
          <span className="font-display text-[1.1rem] tracking-[-0.03em]">
            {messages.brand.short}
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-background/55">
            {messages.brand.productLine}
          </span>
        </Link>

        <nav aria-label={messages.a11y.navFooter} className="lg:justify-self-center">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <HashLink
                  href={item.href}
                  className="t-small py-1 text-background/55 transition-colors hover:text-background focus-visible:text-background"
                >
                  {messages.nav[item.key]}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:justify-self-end lg:text-end">
          <p className="t-small text-background/55">
            © {year} {messages.brand.name}
          </p>
          <p className="t-small mt-1 text-background/55">{messages.footer.rights}</p>
        </div>
      </Container>
    </footer>
  );
}
