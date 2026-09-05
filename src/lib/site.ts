/**
 * Merkezi site ve SEO yapılandırması.
 * Canonical, Open Graph, robots ve sitemap bu URL’yi kullanır.
 *
 * Production’da gerçek domain’i NEXT_PUBLIC_SITE_URL ile verin.
 * Domain uydurmayın.
 */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  return raw.replace(/\/+$/, "");
}

export function isLocalSiteUrl(url = getSiteUrl()) {
  try {
    const { hostname } = new URL(url);
    return (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "::1"
    );
  } catch {
    return true;
  }
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (path === "/" || path === "") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Open Graph: yatay ürün çekimi (1024×572), 1.91:1’e portre hero’dan daha yakın. */
export const ogImage = {
  path: "/images/vizyon-studio.webp",
  width: 1024,
  height: 572,
  alt: "Mor aşındırıcı yüzeye sahip Vizyon Zımparalı Eldiven",
} as const;

export const siteConfig = {
  name: "Vizyon Zımparalı Eldiven",
  title: "Vizyon Zımparalı Eldiven | Profesyonel Zımparalama",
  description:
    "Vizyon Zımparalı Eldiven; ahşap, metal ve otomotiv yüzeylerinde kullanılan, P40–P3000 aralığında yerli üretim profesyonel zımparalama eldivenidir.",
  keywords: [
    "zımparalı eldiven",
    "profesyonel zımparalama",
    "P40 P3000",
    "yerli üretim",
  ],
  locale: "tr_TR",
  language: "tr",
} as const;

/**
 * Firma bilgileri. Boş alanlar JSON-LD çıktısına eklenmez.
 * Adres ve unvan uydurulmamalı.
 */
export const companyPlaceholders = {
  legalName: "",
  telephone: "+905454427477",
  email: "info@vizyoneldiven.com",
  streetAddress: "",
  addressLocality: "",
  postalCode: "",
  addressCountry: "",
  sameAs: [] as string[],
};

/**
 * İletişim kanalları. Boş bırakılan alanlar sitede gösterilmez.
 * Telefon: ekranda görünen biçim. WhatsApp: ülke koduyla, örn. 905xxxxxxxxx
 */
export const contactConfig = {
  phone: "0545 442 74 77",
  email: "info@vizyoneldiven.com",
  whatsapp: "905454427477",
} as const;

export const dealershipMailSubject = "Vizyon Bölgesel Bayilik Başvurusu";

export function isContactValue(value: string) {
  return value.trim().length > 0;
}

export function getTelHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("0") && digits.length === 11) {
    return `tel:+90${digits.slice(1)}`;
  }
  if (digits.startsWith("90")) return `tel:+${digits}`;
  return `tel:${digits}`;
}

export function getMailtoHref(email: string, subject?: string) {
  const address = email.trim();
  if (!address) return "";
  if (!subject) return `mailto:${address}`;
  return `mailto:${address}?subject=${encodeURIComponent(subject)}`;
}

export function getWhatsAppHref(raw: string) {
  const digits = raw.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

/**
 * Ürün katalog alanları henüz netleşmedi.
 * Fiyat, SKU, patent ve görsel uydurulmamalı.
 */
export const productPlaceholders = {
  sku: "",
  gtin: "",
  patentNumber: "",
  price: "",
  priceCurrency: "TRY",
  image: "",
};
