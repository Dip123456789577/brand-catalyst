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
  { number: "01", title: "Brand Strategy", icon: "Compass", description: "Positioning, architecture, voice, and a commercial roadmap that turns difference into demand.", detail: "Research · Positioning · Naming · Brand systems" },
  { number: "02", title: "Creative & Design", icon: "PenTool", description: "Distinct visual systems and campaign ideas built to earn attention across every channel.", detail: "Identity · Art direction · Campaigns · Motion" },
  { number: "03", title: "Social Media Marketing", icon: "MessagesSquare", description: "Platform-native ideas, creator partnerships, and always-on content that build communities.", detail: "Content systems · Community · Creators · Reporting" },
  { number: "04", title: "Performance Marketing", icon: "TrendingUp", description: "Precision media planning, creative testing, and optimization focused on profitable growth.", detail: "Paid social · Search · CRO · Attribution" },
  { number: "05", title: "SEO", icon: "Search", description: "Technical rigor and authoritative content that compounds visibility over the long term.", detail: "Technical SEO · Content · Authority · Analytics" },
  { number: "06", title: "Web Design & Development", icon: "Monitor", description: "Fast, accessible digital experiences that balance editorial craft with conversion clarity.", detail: "UX · UI systems · Development · Optimization" },
  { number: "07", title: "Content Marketing", icon: "FileText", description: "Editorial platforms and original stories that make expertise useful, memorable, and shareable.", detail: "Strategy · Editorial · Film · Distribution" },
];

export const projects = [
  { slug: "auralis-sound", client: "Auralis Sound", industry: "Consumer Technology", services: "Brand Strategy · Digital Flagship", description: "Reframing spatial audio as a design object for everyday life.", result: "+184% direct revenue", image: auralisImage, accent: "Case Study 01" },
  { slug: "seneschal-horology", client: "Seneschal Horology", industry: "Luxury", services: "Global Campaign · E-commerce", description: "A modern language for a century of independent watchmaking.", result: "2.7× conversion rate", image: seneschalImage, accent: "Case Study 02" },
  { slug: "velocity-capital", client: "Velocity Capital", industry: "Fintech", services: "Product Design · Brand System", description: "Making institutional-grade investing feel radically clear.", result: "+91% funded accounts", image: velocityImage, accent: "Case Study 03" },
  { slug: "nexus-coffee", client: "Nexus Coffee", industry: "Hospitality", services: "Identity · Packaging · Social", description: "Turning an ethical coffee collective into a daily ritual.", result: "+63% repeat orders", image: nexusImage, accent: "Case Study 04" },
  { slug: null, client: "Lumen Botanicals", industry: "Beauty", services: "Brand Launch · E-commerce", description: "A skincare launch built on clinical honesty and quiet luxury.", result: "Sold out first drop", image: lumenImage, accent: "Project 05" },
  { slug: null, client: "Terra Mobility", industry: "Mobility", services: "Campaign · Content · Retail", description: "Positioning urban e-mobility as an object of desire, not compromise.", result: "+148% pre-orders", image: terraImage, accent: "Project 06" },
];

export const articles = [
  { slug: "death-of-cool", category: "Brand Strategy", title: "The Death of Cool: Culture Is Built by the Useful", date: "August 28, 2026", time: "7 min", description: "Why brands that contribute something real outlast those that merely borrow an aesthetic.", image: aboutStudio },
  { slug: "engineering-organic-reach", category: "Performance", title: "Engineering Organic Reach: From Brand Signals to Demand", date: "August 14, 2026", time: "6 min", description: "A practical model for linking distinctive creative signals to measurable commercial growth.", image: velocityImage },
  { slug: "beyond-performance-hacks", category: "Growth", title: "Beyond Performance Hacks: The Enduring Full Funnel", date: "July 30, 2026", time: "8 min", description: "How patient brand building and rigorous acquisition work together instead of competing.", image: auralisImage },
];

export const processSteps = [
  { title: "Discover", description: "We immerse ourselves in your market, customers, culture, and commercial ambition to find the sharpest opportunity." },
  { title: "Strategize", description: "We turn evidence into a focused position, creative territory, channel plan, and measurement framework." },
  { title: "Create", description: "A senior integrated team builds the identity, campaign, content, and digital experience as one coherent system." },
  { title: "Launch", description: "We choreograph rollout, media, production, and internal adoption so the work arrives with momentum." },
  { title: "Optimize", description: "Live performance signals inform continuous creative iteration, conversion improvements, and sustainable growth." },
];

export const testimonials = [
  { quote: "KINETIC understood that our challenge was not awareness; it was meaning. They found the idea that unified product, brand, and performance—and gave our team the confidence to move faster.", name: "Elena Marlow", role: "Chief Marketing Officer", company: "Auralis Sound" },
  { quote: "They bring rare strategic depth without sacrificing pace. Every decision felt intentional, and the work has changed how customers and our own team talk about the business.", name: "Marcus Chen", role: "Founder", company: "Velocity Capital" },
  { quote: "The launch became our strongest commercial quarter in a decade. More importantly, KINETIC gave us a platform that still feels unmistakably ours.", name: "Sofia Laurent", role: "Global Brand Director", company: "Seneschal" },
];