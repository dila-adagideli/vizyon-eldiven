"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "urun",
  "urun-detayi",
  "kullanim-alanlari",
  "standartlar",
  "vizyon",
  "iletisim",
] as const;

const hrefById: Record<string, string> = {
  urun: "#urun",
  "urun-detayi": "#urun",
  "kullanim-alanlari": "#kullanim-alanlari",
  standartlar: "#standartlar",
  vizyon: "#vizyon",
  iletisim: "",
};

export function useActiveNav() {
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const update = () => {
      const mark = 96;
      let next = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= mark) {
          next = hrefById[id];
        }
      }

      setActiveHref(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  return activeHref;
}
