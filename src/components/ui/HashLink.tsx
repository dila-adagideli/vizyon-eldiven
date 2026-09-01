"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type HashLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

function scrollToHash(href: string) {
  const id = decodeURIComponent(href.slice(1));
  const target = document.getElementById(id);
  if (!target) return false;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });

  return true;
}

export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !href.startsWith("#") || href === "#") {
      return;
    }

    if (!scrollToHash(href)) return;

    event.preventDefault();

    if (window.location.hash !== href) {
      history.pushState(null, "", href);
    }

    window.dispatchEvent(new Event("hashchange"));
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
