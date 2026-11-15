export const FRAME_COUNT = 73;

/**
 * Returns the path for each frame in the sequence.
 * Serves optimized WebP frames (1.1MB total for all 73 frames).
 */
export function getFramePath(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/frames/frame_${padded}_delay-0.05s.webp`;
}

export const PROFILE = {
  name: "Ashish Singh",
  title: "Digital Marketer & Growth Strategist",
  subtitle: "SEO • Social Media Marketing • WordPress • Google Ads",
  location: "India",
  phone: "+91-9696653899",
  email: "imashish338@gmail.com",
  linkedin: "https://www.linkedin.com/in/9415-ashish-singh-/",
  summary:
    "Motivated and enthusiastic Digital Marketer with deep foundational knowledge in Search Engine Optimization (SEO), Social Media Marketing, Content Marketing, Email Marketing, Google Ads, and WordPress development. Leveraging a Computer Science & Engineering degree (LPU 2024) to engineer high-ROI, algorithm-driven digital growth.",
  education: {
    institution: "Lovely Professional University (LPU)",
    degree: "Bachelor's Degree in Computer Science & Engineering [CSE]",
    year: "2024",
  },
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  details: string[];
  tech: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    id: "organic-seo-scale",
    title: "ORGANIC SEARCH DOMINANCE",
    subtitle: "Enterprise SEO & Keyword Clustering Engine",
    category: "Search Engine Optimization",
    year: "2024",
    description:
      "Engineered an end-to-end organic search strategy combining technical site audits, high-intent keyword clustering, and on-page semantic optimization to capture market share.",
    details: [
      "Conducted comprehensive keyword research identifying high-volume, low-competition commercial intent queries",
      "Fixed crawl errors, structured data schema (JSON-LD), and internal link distribution via Google Search Console",
      "Executed targeted off-page link-building and content freshness updates that secured top 3 Google positions",
    ],
    tech: ["Google Search Console", "On-Page SEO", "Off-Page SEO", "Keyword Research", "Technical Audits"],
    metrics: [
      { label: "Traffic Growth", value: "+340%" },
      { label: "Top 3 Keywords", value: "45+" },
      { label: "Search Visibility", value: "2.8M" },
    ],
    accent: "from-cyan-400 to-blue-600",
    gradient: "rgba(0, 240, 255, 0.15)",
  },
  {
    id: "omnichannel-paid-funnel",
    title: "OMNICHANNEL ADS ENGINE",
    subtitle: "High-ROI Google & Meta Performance Funnels",
    category: "Paid Advertising & PPC",
    year: "2024",
    description:
      "Architected targeted PPC and paid social advertising funnels across Google Ads and Meta Ads Manager, maximizing ad quality scores and customer lifetime value.",
    details: [
      "Structured high-converting Google Search and Display campaigns with negative keyword pruning",
      "Designed dynamic Meta Ads (Instagram & Facebook) lookalike audiences with persuasive copywriting",
      "Optimized landing page conversion rates with A/B messaging tests and custom tracking pixels",
    ],
    tech: ["Google Ads", "Meta Ads Manager", "Audience Targeting", "Copywriting", "Canva"],
    metrics: [
      { label: "Average ROAS", value: "4.8x" },
      { label: "Cost Per Lead", value: "-42%" },
      { label: "Conversion Rate", value: "6.2%" },
    ],
    accent: "from-violet-400 to-purple-600",
    gradient: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: "wordpress-growth-hub",
    title: "WORDPRESS HIGH-SPEED HUB",
    subtitle: "Technical CMS & Conversion Architecture",
    category: "WordPress & Web Optimization",
    year: "2024",
    description:
      "Designed and deployed optimized WordPress sites engineered for sub-second load times, mobile-first responsiveness, and search engine crawler indexing.",
    details: [
      "Custom WordPress theme customization tuned for Core Web Vitals and 95+ PageSpeed metrics",
      "Configured automated caching layers, image compression pipelines, and security headers",
      "Integrated seamless lead capture forms and email marketing automation funnels",
    ],
    tech: ["WordPress", "Core Web Vitals", "On-Site SEO", "HTML/CSS", "Speed Optimization"],
    metrics: [
      { label: "Mobile Speed", value: "98/100" },
      { label: "Bounce Rate", value: "-35%" },
      { label: "Lead Inflow", value: "+180%" },
    ],
    accent: "from-emerald-400 to-teal-600",
    gradient: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "social-media-viral",
    title: "VIRAL SOCIAL GROWTH MATRIX",
    subtitle: "Cross-Platform Brand Engagement & Nurturing",
    category: "Social Media & Content Strategy",
    year: "2024",
    description:
      "Multi-channel content strategy across Instagram, LinkedIn, and Facebook orchestrating high-retention educational carousels, video reels, and email subscriber workflows.",
    details: [
      "Designed cohesive brand visuals, carousel graphics, and infographic templates in Canva",
      "Engineered automated lead magnets that captured and nurtured email subscribers via automated drip campaigns",
      "Managed weekly editorial calendars driving viral algorithmic reach and community engagement",
    ],
    tech: ["Instagram Marketing", "LinkedIn B2B", "Content Strategy", "Email Marketing", "Canva"],
    metrics: [
      { label: "Organic Reach", value: "1.2M+" },
      { label: "Engagement Rate", value: "7.8%" },
      { label: "Email Leads", value: "3,400+" },
    ],
    accent: "from-amber-400 to-orange-600",
    gradient: "rgba(245, 158, 11, 0.15)",
  },
];

export const SKILLS_MATRIX = [
  {
    name: "Search Engine Optimization (SEO)",
    category: "Organic Growth",
    level: "Advanced",
    desc: "On-Page SEO, Off-Page SEO, Keyword Research, Technical Audits, Google Search Console, Schema Markup",
  },
  {
    name: "Paid Advertising (PPC)",
    category: "Paid Media",
    level: "Advanced",
    desc: "Google Ads (Search & Display), Meta Ads Manager (Facebook & Instagram), Audience Segmentation & ROAS Scaling",
  },
  {
    name: "Social Media Marketing",
    category: "Audience Growth",
    level: "Mastery",
    desc: "Instagram Growth Strategy, LinkedIn B2B Presence, Facebook Campaigns, Community Building & Trend Hijacking",
  },
  {
    name: "WordPress & Web Architecture",
    category: "Web & CMS",
    level: "Mastery",
    desc: "Custom WordPress Deployment, Core Web Vitals, Speed Optimization, Conversion Landing Pages, Plugin Ecosystem",
  },
  {
    name: "Content Marketing & Copywriting",
    category: "Creative Strategy",
    level: "Advanced",
    desc: "Persuasive Direct-Response Copy, SEO Editorial Strategies, Lead Magnets, Canva Design, Narrative Branding",
  },
  {
    name: "Email Marketing & Analytics",
    category: "Automation & Data",
    level: "Advanced",
    desc: "Automated Email Drip Sequences, MS Excel Data Modeling, Performance Reporting, Conversion Rate Optimization (CRO)",
  },
];
