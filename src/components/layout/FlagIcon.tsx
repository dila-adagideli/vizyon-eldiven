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
    <>
      <rect width="24" height="16" fill="#165D31" />
      <path
        fill="#fff"
        d="M6.2 6.4c.4-.85 1.35-1.4 2.55-1.4.7 0 1.25.18 1.65.5.35-.32.85-.5 1.45-.5.7 0 1.25.22 1.6.62.4-.4 1.05-.62 1.8-.62 1.45 0 2.35.78 2.35 1.95 0 .95-.55 1.58-1.45 1.85.55.28.9.82.9 1.5 0 1.12-.9 1.9-2.2 1.9-.7 0-1.25-.22-1.65-.58-.4.36-.95.58-1.6.58-.85 0-1.5-.32-1.85-.95-.45.6-1.2.95-2.1.95-1.45 0-2.4-.95-2.4-2.2 0-.7.35-1.28.95-1.62-.7-.32-1.15-.95-1.15-1.72 0-.7.4-1.26 1.15-1.56Z"
      />
      <path
        fill="#fff"
        d="M5.4 11.35h13.2c.2 0 .32.2.24.38l-.55 1.22H5.7l-.55-1.22c-.08-.18.04-.38.25-.38Z"
      />
    </>
  );
}
