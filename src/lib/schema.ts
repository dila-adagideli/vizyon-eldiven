import {
  absoluteUrl,
  companyPlaceholders,
  productPlaceholders,
  siteConfig,
} from "@/lib/site";

type JsonLd = Record<string, unknown>;

function compact<T extends JsonLd>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry === "" || entry === undefined || entry === null) return false;
      if (Array.isArray(entry) && entry.length === 0) return false;
      if (
        typeof entry === "object" &&
        !Array.isArray(entry) &&
        Object.keys(entry as object).length === 0
      ) {
        return false;
      }
      return true;
    }),
  ) as T;
}

function postalAddress() {
  const address = compact({
    "@type": "PostalAddress",
    streetAddress: companyPlaceholders.streetAddress,
    addressLocality: companyPlaceholders.addressLocality,
    postalCode: companyPlaceholders.postalCode,
    addressCountry: companyPlaceholders.addressCountry,
  });

  const hasLocation = Object.keys(address).some((key) => key !== "@type");
  return hasLocation ? address : undefined;
}

export function organizationJsonLd() {
  const address = postalAddress();

  return compact({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyPlaceholders.legalName || siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    logo: absoluteUrl("/images/logo-horizontal.png"),
    telephone: companyPlaceholders.telephone,
    email: companyPlaceholders.email,
    address,
    sameAs: companyPlaceholders.sameAs,
  });
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: siteConfig.language,
  };
}

export function productJsonLd() {
  const offers =
    productPlaceholders.price === ""
      ? undefined
      : compact({
          "@type": "Offer",
          price: productPlaceholders.price,
          priceCurrency: productPlaceholders.priceCurrency,
          url: absoluteUrl("/"),
        });

  const image = productPlaceholders.image
    ? [productPlaceholders.image]
    : [
        absoluteUrl("/images/vizyon-hero.webp"),
        absoluteUrl("/images/vizyon-studio.webp"),
      ];

  return compact({
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Vizyon Zımparalı Eldiven",
    description: siteConfig.description,
    brand: {
      "@type": "Brand",
      name: "Vizyon",
    },
    sku: productPlaceholders.sku,
    gtin: productPlaceholders.gtin,
    image,
    offers,
  });
}
