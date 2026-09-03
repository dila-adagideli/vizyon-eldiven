export type Messages = {
  brand: {
    name: string;
    short: string;
    productLine: string;
    alt: string;
  };
  a11y: {
    skip: string;
    menuOpen: string;
    menuClose: string;
    navMain: string;
    navMobile: string;
    navFooter: string;
    langSelect: string;
    callPhone: string;
    sendEmail: string;
    dealershipEmail: string;
  };
  nav: {
    product: string;
    useCases: string;
    standards: string;
    vision: string;
    contact: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  media: {
    hero: string;
    texture: string;
    wood: string;
    automotive: string;
    metal: string;
    construction: string;
    studio: string;
    detail: string;
  };
  hero: {
    eyebrow: string;
    title: [string, string, string];
    body: string;
    ctaProduct: string;
    ctaUseCases: string;
    gritRange: string;
    gritScale: string;
    specLocal: string;
    specMulti: string;
  };
  brandStatement: {
    line: string;
    emphasis: string;
    product: string;
  };
  productIntro: {
    eyebrow: string;
    title: string;
    body: string;
    caption: string;
    features: Array<{ number: string; title: string; text: string }>;
  };
  productShowcase: {
    title: [string, string, string];
    body: string;
    caption: string;
    specs: [string, string, string];
  };
  useCases: {
    eyebrow: string;
    title: [string, string];
    intro: string;
    wood: { label: string; title: string; p1: string };
    automotive: { label: string; title: string; p1: string; p2: string };
    metal: { label: string; title: string; p1: string; p2: string };
    construction: { label: string; title: string; p1: string; p2: string };
  };
  standards: {
    eyebrow: string;
    subtitle: string;
    body: string;
    coarse: string;
    fine: string;
    scaleAria: string;
    highlight: string;
    patentTitle: string;
    patentBody: string;
    facts: Array<{ number: string; label: string; title: string; text: string }>;
  };
  vision: {
    eyebrow: string;
    madeIn: string;
    title: string;
    intro: string;
    emphasisTitle: string;
    emphasisBody: string;
    visionLabel: string;
    visionTitle: string;
    visionBody: string;
    missionLabel: string;
    missionTitle: string;
    missionBody: string;
    pillars: [
      { title: string; text: string },
      { title: string; text: string },
      { title: string; text: string },
    ];
  };
  dealership: {
    label: string;
    calloutTitle: string;
    calloutBody: string;
    calloutCta: string;
    title: string;
    body: string;
    cta: string;
    mailSubject: string;
  };
  contact: {
    eyebrow: string;
    title: [string, string, string];
    intro: string;
    phone: string;
    email: string;
    topics: [string, string, string];
  };
  footer: {
    rights: string;
  };
};
