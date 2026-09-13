import { projects } from "./site-data";

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  year: string;
  services: string;
  summary: string;
  image: string;
  challenge: string[];
  strategy: string[];
  execution: string[];
  results: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "auralis-sound",
    client: "Auralis Sound",
    industry: "Consumer Technology",
    year: "2026",
    services: "Brand Strategy · Digital Flagship · Performance Media",
    summary: "Reframing spatial audio as a design object for everyday life.",
    image: projects[0].image,
    challenge: [
      "Auralis engineered genuinely remarkable spatial-audio hardware, but its brand spoke in spec sheets. Retail partners struggled to explain it, and direct sales lagged far behind review scores.",
      "The category was locked in a features race. Auralis needed to stop selling decibels and start owning a feeling — without alienating the audiophile community that championed it.",
    ],
    strategy: [
      "Our research showed buyers described the product in spatial, almost architectural terms: 'the room disappears.' We positioned Auralis not as audio equipment but as an object that reshapes everyday space.",
      "We rebuilt the brand architecture around a single idea — Sound You Can See — giving industrial design, packaging, retail, and the digital flagship one coherent story to tell.",
    ],
    execution: [
      "A new identity system translated waveforms into a precise visual language. The digital flagship led with cinematic product storytelling and an interactive listening-room configurator, while performance creative carried the same idea into paid social and search.",
      "Launch media concentrated on design and culture publications rather than tech press, shifting the conversation from specifications to taste.",
    ],
    results: [
      { value: "+184%", label: "Direct revenue in two quarters" },
      { value: "3.4×", label: "Return on ad spend" },
      { value: "+62%", label: "Average order value" },
      { value: "41%", label: "Of traffic from organic & direct" },
    ],
  },
  {
    slug: "seneschal-horology",
    client: "Seneschal Horology",
    industry: "Luxury",
    year: "2025",
    services: "Global Campaign · E-commerce · Content",
    summary: "A modern language for a century of independent watchmaking.",
    image: projects[1].image,
    challenge: [
      "Seneschal's craft was impeccable and its heritage genuine, yet the brand spoke to collectors who already owned its watches. A younger generation of buyers admired the product but saw the maison as someone else's heirloom.",
      "Meanwhile, e-commerce accounted for under four percent of revenue in a category where high-consideration online purchase was accelerating.",
    ],
    strategy: [
      "Instead of chasing trends, we reframed heritage as proof of independence: one family, one workshop, no compromises — told with contemporary restraint rather than nostalgia.",
      "We mapped a digital purchase journey that respected the category's need for confidence: concierge consultations, transparent provenance, and white-glove delivery as part of the brand experience.",
    ],
    execution: [
      "A global campaign, 'A Century, Uninterrupted,' paired archival watchmaker footage with stark modern portraiture. The new e-commerce flagship brought macro photography, movement cinematography, and a guided consultation flow together.",
      "Editorial films and a collector interview series gave the brand an owned content engine that continues to compound.",
    ],
    results: [
      { value: "2.7×", label: "E-commerce conversion rate" },
      { value: "+118%", label: "Online revenue year over year" },
      { value: "19 min", label: "Average consultation booking time" },
      { value: "34%", label: "Of buyers under 40, up from 11%" },
    ],
  },
  {
    slug: "velocity-capital",
    client: "Velocity Capital",
    industry: "Fintech",
    year: "2026",
    services: "Product Design · Brand System · Growth",
    summary: "Making institutional-grade investing feel radically clear.",
    image: projects[2].image,
    challenge: [
      "Velocity offered genuinely institutional-grade portfolios, but its product read as complex and intimidating. Activation stalled at onboarding, and paid acquisition costs were climbing faster than funded accounts.",
      "Competitors were louder and simpler. Velocity needed to be clearer without becoming simplistic — trust and sophistication were the product.",
    ],
    strategy: [
      "We defined the brand around 'radical clarity': every screen, chart, and sentence should make a sophisticated decision feel obvious.",
      "A redesigned onboarding flow turned compliance steps into a guided confidence-building narrative, while the brand system gave data visualization a distinctive, ownable style.",
    ],
    execution: [
      "We rebuilt the product's design system end to end — typography, charting language, motion principles — and relaunched onboarding as a four-step guided flow with plain-language explanations at every decision point.",
      "Growth creative mirrored the product: real portfolio scenarios, honest math, and none of the category's hype. Creative testing ran on a continuous weekly cadence.",
    ],
    results: [
      { value: "+91%", label: "Funded accounts per quarter" },
      { value: "-38%", label: "Cost per acquisition" },
      { value: "2.1×", label: "Onboarding completion rate" },
      { value: "+27 pts", label: "Product trust score (surveyed)" },
    ],
  },
  {
    slug: "nexus-coffee",
    client: "Nexus Coffee",
    industry: "Hospitality",
    year: "2025",
    services: "Identity · Packaging · Social",
    summary: "Turning an ethical coffee collective into a daily ritual.",
    image: projects[3].image,
    challenge: [
      "Nexus paid farmers well above fair-trade rates and had the loyalty of a devoted local following — but on the shelf and on the feed, it disappeared beside louder, better-funded competitors.",
      "The collective wanted national grocery distribution without sanding off the ethics and personality that made it worth distributing.",
    ],
    strategy: [
      "We leaned into the collective model as the brand: twelve farmers, named and photographed, became the face of every bag. Ethics stopped being a footnote and became the identity.",
      "A subscription-first social strategy turned morning ritual into content — quiet, tactile, and repeatable — instead of chasing viral formats.",
    ],
    execution: [
      "A new identity and packaging system gave each origin a distinct color field and portrait, unified by a strict typographic grid. Social launched 'The First Cup,' a daily ritual series with creators and farmers.",
      "We supported the grocery launch with geo-targeted media and in-store displays that carried the farmer portraits directly to the shelf.",
    ],
    results: [
      { value: "+63%", label: "Repeat subscription orders" },
      { value: "340", label: "Grocery doors in nine months" },
      { value: "4.8×", label: "Organic social reach growth" },
      { value: "+52%", label: "Direct-to-consumer revenue" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function nextCaseStudy(slug: string) {
  const i = caseStudies.findIndex((study) => study.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
}
