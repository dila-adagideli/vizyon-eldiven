import type { Locale } from "@/i18n";

type FlagIconProps = {
  locale: Locale;
};

export function FlagIcon({ locale }: FlagIconProps) {
  return (
    <svg
      viewBox="0 0 24 16"
      width={19}
      height={13}
      preserveAspectRatio="xMidYMid meet"
      className="block h-[13px] w-[19px] shrink-0 overflow-hidden rounded-[1px]"
      aria-hidden
      focusable="false"
    >
      {locale === "tr" ? <TurkeyFlag /> : null}
      {locale === "en" ? <UnitedKingdomFlag /> : null}
      {locale === "de" ? <GermanyFlag /> : null}
      {locale === "ru" ? <RussiaFlag /> : null}
      {locale === "ar" ? <SaudiArabiaFlag /> : null}
    </svg>
  );
}

function TurkeyFlag() {
  return (
    <>
      <rect width="24" height="16" fill="#E30A17" />
      <circle cx="10.2" cy="8" r="3.55" fill="#fff" />
      <circle cx="11.35" cy="8" r="2.85" fill="#E30A17" />
      <polygon
        fill="#fff"
        transform="translate(13.85 8) scale(0.92)"
        points="0,-2.15 0.65,-0.66 2.2,-0.66 0.95,0.25 1.4,1.75 0,0.85 -1.4,1.75 -0.95,0.25 -2.2,-0.66 -0.65,-0.66"
      />
    </>
  );
}

function UnitedKingdomFlag() {
  return (
    <>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#fff" strokeWidth="3.2" />
      <path d="M0 0 L24 16" stroke="#C8102E" strokeWidth="1.4" />
      <path d="M24 0 L0 16" stroke="#C8102E" strokeWidth="1.4" />
      <path d="M12 0 V16 M0 8 H24" stroke="#fff" strokeWidth="5.2" />
      <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="3.1" />
    </>
  );
}

function GermanyFlag() {
  return (
    <>
      <rect width="24" height="16" fill="#000" />
      <rect y="5.33" width="24" height="5.34" fill="#DD0000" />
      <rect y="10.67" width="24" height="5.33" fill="#FFCE00" />
    </>
  );
}

function RussiaFlag() {
  return (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect y="5.33" width="24" height="5.34" fill="#0039A6" />
      <rect y="10.67" width="24" height="5.33" fill="#D52B1E" />
    </>
  );
}

function SaudiArabiaFlag() {
  return (
    <image
      href="/images/Flag_of_Saudi_Arabia.svg"
      width="24"
      height="16"
      preserveAspectRatio="xMidYMid slice"
    />
  );
}
