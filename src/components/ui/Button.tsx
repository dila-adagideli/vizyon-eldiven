import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-charcoal text-background hover:bg-graphite",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-graphite hover:bg-muted",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  inverse:
    "bg-background text-charcoal hover:bg-background/90 active:bg-background/80",
} as const;

const baseClassName =
  "ui-btn inline-flex h-11 items-center justify-center gap-2 rounded-sm px-5 text-sm font-medium tracking-wide active:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50";

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  href,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(baseClassName, variants[variant], className);

  if (href) {
    const ariaLabel = props["aria-label"];

    if (href.startsWith("#")) {
      return (
        <HashLink href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </HashLink>
      );
    }

    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
