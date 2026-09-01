export const navItems = [
  { href: "#urun", key: "product" },
  { href: "#kullanim-alanlari", key: "useCases" },
  { href: "#standartlar", key: "standards" },
  { href: "#vizyon", key: "vision" },
] as const;

export type NavItem = (typeof navItems)[number];
export type NavKey = NavItem["key"];
