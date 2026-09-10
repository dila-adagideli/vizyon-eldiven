import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  Newsreader,
  Noto_Naskh_Arabic,
  Noto_Sans_Arabic,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google";
import { cookies } from "next/headers";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/layout/Providers";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/schema";
import { getSiteUrl, isLocalSiteUrl, ogImage, siteConfig } from "@/lib/site";
import { localeMeta, parseLocale } from "@/i18n";
import "./globals.css";

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-XBK383CKTV";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-source-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-newsreader",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-source-serif",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic-sans",
  display: "swap",
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic-display",
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const allowIndexing = !isLocalSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: ogImage.path,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage.path],
  },
  robots: allowIndexing
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      }
    : {
        index: false,
        follow: false,
      },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const locale = parseLocale(cookieStore.get("vizyon-locale")?.value);
  const { htmlLang, dir } = localeMeta[locale];

  return (
    <html
      lang={htmlLang}
      dir={dir}
      suppressHydrationWarning
      className={`${sourceSans.variable} ${newsreader.variable} ${sourceSerif.variable} ${notoSansArabic.variable} ${notoNaskhArabic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Providers initialLocale={locale}>
          <JsonLd data={organizationJsonLd()} />
          <JsonLd data={websiteJsonLd()} />
          <JsonLd data={webPageJsonLd()} />
          <SkipLink />
          <Header />
          <main id="icerik" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
      {!isLocalSiteUrl() ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
    </html>
  );
}
