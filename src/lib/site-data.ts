import heroStudio from "@/assets/hero-studio.jpg";
import auralisImage from "@/assets/work-auralis.jpg";
import seneschalImage from "@/assets/work-seneschal.jpg";
import velocityImage from "@/assets/work-velocity.jpg";
import nexusImage from "@/assets/work-nexus.jpg";
import lumenImage from "@/assets/work-lumen.jpg";
import terraImage from "@/assets/work-terra.jpg";
import aboutStudio from "@/assets/about-studio.jpg";

export const assets = { heroStudio, aboutStudio };

export const services = [
  {
    number: "01",
    title: "Brand Strategy",
    icon: "Compass",
    description:
      "Positioning, architecture, voice, and a commercial roadmap that turns difference into demand.",
    detail:
      "Research · Market Positioning · Brand Architecture · Tone of Voice · Commercial Roadmap",
    deliverables: [
      "Market & Competitor Audit",
      "Core Positioning Platform",
      "Brand Architecture",
      "Verbal Identity & Messaging Guidelines",
    ],
  },
  {
    number: "02",
    title: "Creative & Design",
    icon: "PenTool",
    description:
      "Distinct visual systems and campaign ideas built to earn attention across every channel.",
    detail: "Identity Systems · Art Direction · Campaign Systems · Motion Design · Packaging",
    deliverables: [
      "Visual Identity & Guidelines",
      "Art Direction & Lookbooks",
      "Packaging & Print Collateral",
      "Motion & 3D Assets",
    ],
  },
  {
    number: "03",
    title: "Social Media Marketing",
    icon: "MessagesSquare",
    description:
      "Platform-native ideas, creator partnerships, and always-on content that build communities.",
    detail: "Content Systems · Community Architecture · Creator Partnerships · Social Analytics",
    deliverables: [
      "Platform Strategy & Cadence",
      "Creator Partnerships Program",
      "Always-On Asset Production",
      "Community Management Systems",
    ],
  },
  {
    number: "04",
    title: "Performance Marketing",
    icon: "TrendingUp",
    description:
      "Precision media planning, creative testing, and optimization focused on profitable growth.",
    detail: "Paid Social · Search & PMax · Creative Iteration · Attribution & CRO",
    deliverables: [
      "Full-Funnel Paid Media Planning",
      "High-Velocity Creative Testing",
      "Conversion Rate Optimization (CRO)",
      "Advanced Attribution Modeling",
    ],
  },
  {
    number: "05",
    title: "SEO",
    icon: "Search",
    description:
      "Technical rigor and authoritative content that compounds visibility over the long term.",
    detail:
      "Technical SEO · Authority Systems · Search Intent Architecture · Performance Reporting",
    deliverables: [
      "Technical Health Audit & Fixes",
      "Search Intent Architecture",
      "Topical Authority Engine",
      "Executive Ranking Telemetry",
    ],
  },
  {
    number: "06",
    title: "Web Design & Development",
    icon: "Monitor",
    description:
      "Fast, accessible digital experiences that balance editorial craft with conversion clarity.",
    detail: "UX Research · Design Systems · Modern Headless Engineering · Web Performance",
    deliverables: [
      "UX Architecture & User Flows",
      "Figma Design System",
      "High-Performance Next/Vite Build",
      "Accessibility & Speed Optimization",
    ],
  },
  {
    number: "07",
    title: "Content Marketing",
    icon: "FileText",
    description:
      "Editorial platforms and original stories that make expertise useful, memorable, and shareable.",
    detail: "Content Strategy · Thought Leadership · Editorial Systems · Multi-Format Distribution",
    deliverables: [
      "Editorial Platform Blueprint",
      "Executive Ghostwriting & Articles",
      "Cinematic Video Storytelling",
      "Omni-Channel Distribution Engine",
    ],
  },
];

export const projects = [
  {
    slug: "auralis-sound",
    client: "Auralis Sound",
    industry: "Consumer Technology",
    services: "Brand Strategy · Digital Flagship · Performance Media",
    description: "Reframing spatial audio as a luxury design object for modern living.",
    result: "+184% direct revenue",
    metricBadge: "+184% Revenue",
    image: auralisImage,
    accent: "Case Study 01",
    featured: true,
  },
  {
    slug: "seneschal-horology",
    client: "Seneschal Horology",
    industry: "Luxury",
    services: "Global Campaign · E-commerce · Content Strategy",
    description: "A contemporary digital language for a century of independent Swiss watchmaking.",
    result: "2.7× conversion rate",
    metricBadge: "2.7× Conversion",
    image: seneschalImage,
    accent: "Case Study 02",
    featured: true,
  },
  {
    slug: "velocity-capital",
    client: "Velocity Capital",
    industry: "Fintech",
    services: "Product Design · Brand System · Growth Engine",
    description:
      "Making institutional-grade algorithmic investing feel radically clear and trustworthy.",
    result: "+91% funded accounts",
    metricBadge: "+91% Accounts",
    image: velocityImage,
    accent: "Case Study 03",
    featured: true,
  },
  {
    slug: "nexus-coffee",
    client: "Nexus Coffee",
    industry: "Hospitality & CPG",
    services: "Identity · Packaging · Social Community",
    description:
      "Turning an ethical fair-trade coffee collective into a daily ritual and retail phenomenon.",
    result: "+63% repeat orders",
    metricBadge: "+63% Retention",
    image: nexusImage,
    accent: "Case Study 04",
    featured: true,
  },
  {
    slug: "lumen-botanicals",
    client: "Lumen Botanicals",
    industry: "Clean Beauty & Wellness",
    services: "Brand Launch · Packaging · E-commerce Flagship",
    description:
      "A luxury skincare launch built on clinical honesty, quiet luxury, and sustainable formulation.",
    result: "+142% launch target",
    metricBadge: "+142% Target",
    image: lumenImage,
    accent: "Case Study 05",
    featured: true,
  },
  {
    slug: "terra-mobility",
    client: "Terra Mobility",
    industry: "Urban Mobility & Tech",
    services: "Global Campaign · Product Identity · Interactive Flagship",
    description:
      "Positioning urban micro-mobility as an object of desire, high design, and zero compromise.",
    result: "3.8X ROAS · Sold Out",
    metricBadge: "3.8X ROAS",
    image: terraImage,
    accent: "Case Study 06",
    featured: true,
  },
];

export const articles = [
  {
    slug: "death-of-cool",
    category: "Brand Strategy",
    title: "The Death of Cool: Culture Is Built by the Useful",
    date: "August 28, 2026",
    time: "7 min",
    description:
      "Why brands that contribute something real outlast those that merely borrow an aesthetic.",
    image: aboutStudio,
    author: "Julian Vance · Head of Strategy",
  },
  {
    slug: "engineering-organic-reach",
    category: "Performance Media",
    title: "Engineering Organic Reach: From Brand Signals to Demand",
    date: "August 14, 2026",
    time: "6 min",
    description:
      "A practical model for linking distinctive creative signals to measurable commercial growth.",
    image: velocityImage,
    author: "Elena Rostova · Creative Director",
  },
  {
    slug: "beyond-performance-hacks",
    category: "Growth & Attribution",
    title: "Beyond Performance Hacks: The Enduring Full Funnel",
    date: "July 30, 2026",
    time: "8 min",
    description:
      "How patient brand building and rigorous acquisition work together instead of competing.",
    image: auralisImage,
    author: "Marcus Thorne · Managing Partner",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    tagline: "Uncovering commercial leverage through rigorous inquiry",
    description:
      "We immerse ourselves in your market, customers, competitors, culture, and commercial ambition to find the sharpest, unexploited opportunity.",
    deliverables: [
      "Executive Interviews & Stakeholder Mapping",
      "Audience Perception Research",
      "Competitive Whitespace Analysis",
      "Commercial Opportunity Brief",
    ],
  },
  {
    step: "02",
    title: "Strategize",
    tagline: "Translating evidence into a singular point of view",
    description:
      "We turn raw research into a focused brand position, creative territory, channel distribution plan, and measurable commercial scorecard.",
    deliverables: [
      "Core Brand Positioning & Architecture",
      "Category Point-of-View",
      "Channel Allocation & Budget Modeling",
      "Attribution & KPI Framework",
    ],
  },
  {
    step: "03",
    title: "Create",
    tagline: "Crafting distinct visual and verbal systems that earn attention",
    description:
      "Our senior integrated team designs the identity, campaign creative, digital flagship, and content engine as one unified, unmistakable system.",
    deliverables: [
      "Visual Identity & Typography System",
      "Campaign Concepts & Hero Assets",
      "High-Fidelity UI/UX & Prototypes",
      "Editorial & Verbal Guidelines",
    ],
  },
  {
    step: "04",
    title: "Launch",
    tagline: "Orchestrating high-impact market entry with zero friction",
    description:
      "We choreograph rollout timing, paid media bursts, press distribution, and internal enablement so your brand enters the market with undeniable velocity.",
    deliverables: [
      "Omni-Channel Rollout Choreography",
      "Paid Media Campaign Go-Live",
      "Technical Flagship Deployment",
      "PR & Creator Coordination",
    ],
  },
  {
    step: "05",
    title: "Optimize",
    tagline: "Compounding returns through continuous creative intelligence",
    description:
      "Live performance telemetry informs weekly creative iteration, landing page conversion tests, and media budget reallocation for sustainable compound growth.",
    deliverables: [
      "Weekly Creative Testing Cadence",
      "Landing Page & Funnel CRO",
      "Media Efficiency Optimization",
      "Executive Impact Dashboard",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "KINETIC understood that our challenge was not awareness; it was meaning. They found the single idea that unified product, brand, and performance — and gave our team the confidence to scale 3× faster.",
    name: "Elena Marlow",
    role: "Chief Marketing Officer",
    company: "Auralis Sound",
    initials: "EM",
    avatarBg: "#1e3a8a",
    stats: "+184% Revenue Growth",
  },
  {
    quote:
      "They bring rare strategic depth without sacrificing pace. Every decision felt mathematically sound and artistically pristine. The work completely transformed how customers and investors talk about us.",
    name: "Marcus Chen",
    role: "Founder & CEO",
    company: "Velocity Capital",
    initials: "MC",
    avatarBg: "#065f46",
    stats: "2.1× Activation Rate",
  },
  {
    quote:
      "The relaunch resulted in our strongest commercial quarter in a decade. More importantly, KINETIC gave us a digital platform and visual identity that still feels unmistakably ours two years later.",
    name: "Sofia Laurent",
    role: "Global Brand Director",
    company: "Seneschal Horology",
    initials: "SL",
    avatarBg: "#78350f",
    stats: "2.7× E-commerce Conv.",
  },
  {
    quote:
      "KINETIC took an ethical coffee brand and turned it into an obsession. Their content and packaging strategy opened 340 retail doors in under nine months while tripling direct subscriptions.",
    name: "Tariq Al-Mansoor",
    role: "Co-Founder",
    company: "Nexus Coffee",
    initials: "TA",
    avatarBg: "#9a3412",
    stats: "+63% Repeat Orders",
  },
];
