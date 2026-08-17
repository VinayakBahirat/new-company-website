import chooseYourAttitudeImg from "@/img/Choose-Your-Attitude.jpg";
import evenskynBeautyImg from "@/img/Evenskyn-Beauty.jpg";
import sixVintageRugsImg from "@/img/Six-Vintage-Rugs.jpg";
import norsuHomeImg from "@/img/Norsu-Home.jpg";
import theNickStrandImg from "@/img/The-Nick-Strand.jpg";
import theSkintessaImg from "@/img/The-Skintessa.jpg";
import bellHolmeImg from "@/img/Bell-Holme.jpg";
import aliceDoremiImg from "@/img/Alice-Doremi.jpg";
import menuMuseImg from "@/img/MenuMuse.png";
import sparkFutureImg from "@/img/SparkFuture-Technologies.png";
import jsbsImg from "@/img/Jamea-Saifiyah-Business-School.png";
import rugnaAdhaarImg from "@/img/Rugna-Adhaar-Foundation-Website.avif";

export const COMPANY = {
  name: "Aeriform Systems",
  short: "Aeriform",
  tagline: "We help businesses build fast, reliable, and scalable software that solves real problems. From web applications to AI-powered solutions, we turn ideas into products people love to use.",
  email: "studio@aeriform.systems",
  phone: "+91 7709044575",
  address: "Pier 9, Innovation Quarter, San Francisco, CA",
  hq: "San Francisco · Amsterdam · Singapore",
};

export const NAV_LINKS = [
  { label: "Services", to: "/services" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Work", to: "/work" as const },
  { label: "Studio", to: "/studio" as const },
  { label: "Careers", to: "/careers" as const },
  { label: "Blog", to: "/blog" as const },
];

// export const METRICS = [
//   { value: 11, suffix: "+", label: "Years of shipping code" },
//   { value: 240, suffix: "+", label: "Production builds shipped" },
//   { value: 68, suffix: "", label: "Senior engineers on staff" },
//   { value: 19, suffix: "", label: "Countries served globally" },
// ];

export const STATS = [
  { value: 11, suffix: "+", label: "Years of engineering", note: "Not our first rodeo. We've seen tech stacks rise and fall." },
  { value: 240, suffix: "+", label: "Projects delivered", note: "From scratch startups to massive enterprise migrations." },
  { value: 68, suffix: "", label: "Senior engineers", note: "People who actually write code, not slide decks." },
  { value: 19, suffix: "", label: "Countries served", note: "Distributed pods operating in your time zone." },
  { value: 42, suffix: "", label: "Technologies mastered", note: "We pick the right tool for the job, never the trendiest." },
  { value: 98.4, decimals: 1, suffix: "%", label: "Client retention", note: "Our partners stay because our code compounds value." },
  { value: 99.98, decimals: 2, suffix: "%", label: "Uptime guarantee", note: "Monitored, automated, and built defensively." },
  { value: 98, suffix: "/100", label: "Median PageSpeed score", note: "Because slow software is expensive software." },
];

export const SERVICES = [
  // {
  //   slug: "enterprise",
  //   title: "Enterprise Software",
  //   summary:
  //     "Custom software built to streamline operations, improve efficiency, and support your business as it grows.",
  //   points: ["Business Process Automation", "Secure Access Control", "Scalable Architecture"],
  // },
  // {
  //   slug: "ai",
  //   title: "AI Product Development",
  //   summary:
  //     "AI-powered solutions that automate tasks, improve decision-making, and create better customer experiences.",
  //   points: ["AI Chatbots", "Workflow Automation", "Custom AI Solutions"],
  // },
  // {
  //   slug: "automation",
  //   title: "Automation Systems",
  //   summary:
  //     "Automate repetitive tasks and business workflows to save time, reduce errors, and improve productivity.",
  //   points: ["Workflow Automation", "Process Optimization", "Smart Notifications"],
  // },
  // {
  //   slug: "saas",
  //   title: "SaaS Platform Engineering",
  //   summary:
  //     "Scalable SaaS platforms built for subscription businesses, secure user management, and long-term growth.",
  //   points: ["Multi-Tenant Architecture", "Subscription & Billing", "User Management"],
  // },
  // {
  //   slug: "web",
  //   title: "Custom Web Applications",
  //   summary:
  //     "Fast, secure, and user-friendly web applications tailored to your business needs.",
  //   points: ["Responsive Design", "High Performance", "Secure Development"],
  // },
  // {
  //   slug: "mobile",
  //   title: "Mobile Applications",
  //   summary:
  //     "Cross-platform mobile apps that deliver a smooth experience on both Android and iOS.",
  //   points: ["Android & iOS Apps", "Offline Support", "App Store Deployment"],
  // },
  // {
  //   slug: "cloud",
  //   title: "Cloud & Platform Ops",
  //   summary:
  //     "Reliable cloud infrastructure that keeps your applications secure, scalable, and always available.",
  //   points: ["Cloud Deployment", "CI/CD Automation", "Infrastructure Management"],
  // },

  // {
  //   slug: "api",
  //   title: "API & Backend Engineering",
  //   summary:
  //     "Secure and scalable APIs that connect your applications, automate data flow, and support business growth.",
  //   points: ["API Development", "System Integration", "Secure Data Flow"],
  // },
  // {
  //   slug: "performance",
  //   title: "Performance Optimization",
  //   summary:
  //     "Improve the speed, reliability, and performance of your existing software for a better user experience.",
  //   points: ["Faster Loading", "Better Performance", "Optimized Code"],
  // },
  {
    slug: "website-web-app-development",
    title: "Website & Web App Development",
    summary:
      "Modern websites and web applications built to deliver seamless user experiences, support business goals, and scale with your needs.",
    points: ["Responsive & Modern UI", "High Performance", "Secure Development"],
  },
  {
    slug: "ai-solutions-development",
    title: "AI Solutions & Development",
    summary:
      "Practical AI solutions that help businesses automate processes, improve decision-making, and create smarter digital experiences.",
    points: ["AI-Powered Applications", "AI Chatbots & Assistants", "Custom AI Solutions"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary:
      "Reliable and user-friendly mobile applications designed to deliver smooth experiences across Android and iOS platforms.",
    points: ["Android & iOS Development", "Intuitive User Experience", "App Store Deployment"],
  },
  {
    slug: "business-software-solutions",
    title: "Business Software Solutions",
    summary:
      "Custom software solutions designed around your business processes to improve efficiency, simplify operations, and support growth.",
    points: ["Custom Software Solutions", "Business Process Management", "Scalable Architecture"],
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    summary:
      "Scalable SaaS products built with secure architecture, seamless user management, and the flexibility to grow with your business.",
    points: ["Multi-Tenant Architecture", "Subscription & Billing", "User Management"],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    summary:
      "Automate repetitive tasks and business workflows to reduce manual effort, minimize errors, and improve operational efficiency.",
    points: ["Workflow Automation", "Process Optimization", "Automated Notifications"],
  },
  {
    slug: "backend-api-development",
    title: "Backend & API Development",
    summary:
      "Secure and scalable backend systems that power your applications, connect services, manage data, and support reliable digital experiences.",
    points: ["API Development", "System Integration", "Secure Data Management"],
  },
  {
    slug: "cloud-devops-solutions",
    title: "Cloud & DevOps Solutions",
    summary:
      "Reliable cloud and deployment solutions that keep your applications secure, scalable, available, and ready for continuous growth.",
    points: ["Cloud Deployment", "CI/CD Automation", "Infrastructure Management"],
  },
  {
    slug: "application-performance-optimization",
    title: "Application Performance Optimization",
    summary:
      "Improve the speed, reliability, and efficiency of your existing applications with optimized code and performance-focused solutions.",
    points: ["Faster Loading", "Better Performance", "Code Optimization"],
  },
];

export const PROCESS = [
  { step: "01", title: "Discovery", body: "Every successful project starts with understanding your business, goals, and challenges." },
  { step: "02", title: "Planning", body: "A clear roadmap with realistic timelines, budgets, and milestones keeps every project on track." },
  { step: "03", title: "UX Research", body: "Understanding your users helps create experiences that are simple, intuitive, and effective." },
  { step: "04", title: "Wireframes", body: "Simple layouts help visualize the product and validate ideas before development begins." },
  { step: "05", title: "UI Design", body: "Clean, modern designs that are easy to use and create a great experience for your customers." },
  { step: "06", title: "Architecture", body: "A strong foundation ensures your software is reliable, scalable, and ready for future growth." },
  { step: "07", title: "Development", body: "Your project is built step by step, with regular updates so you can track progress throughout the development process." },
  { step: "08", title: "Testing", body: "Every feature is carefully tested to make sure your software is reliable, secure, and ready for launch." },
  { step: "09", title: "Deployment", body: "Your software is launched smoothly with minimal disruption, ensuring everything works as expected from day one." },
  { step: "10", title: "Maintenance", body: "Regular updates and ongoing support keep your software secure, reliable, and ready as your business grows." },
];

export const TECH_GROUPS = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "React Three Fiber", "Framer Motion", "Angular Bootstrap", "Ant Design", "TinyMCE", "jqGrid", "AG Grid"],
  },
  { group: "Backend", items: ["Node.js", "Express", "FastAPI", "Python", ".NET", "Java"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Vector Search", "Supabase"] },
  { group: "Cloud", items: ["AWS", "Docker", "CI/CD"] },
  { group: "AI", items: ["OpenAI", "Gemini", "LLM Systems", "RAG", "Prompt Engineering", "AI Automation"] },
];

export const INDUSTRIES = [
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Manufacturing",
  "Real Estate",
  "Artificial Intelligence",
  "Logistics",
  "Travel",
  "Startups",
  "Enterprise",
];

export const VALUES = [
  { title: "Smart Planning", body: "Every successful project starts with a clear plan. We understand your goals, identify the right solution, and build it the right way from the beginning." },
  { title: "Quality You Can Trust", body: "We focus on quality from start to finish, delivering reliable software that performs well today and is easy to improve in the future." },
  { title: "Clear Communication", body: "We keep you informed at every stage with clear updates, realistic timelines, and honest communication." },
  { title: "Ongoing Support", body: "Our support doesn't end after launch. We help keep your software secure, updated, and running smoothly as your business grows." },
  { title: "A True Partnership", body: "We work closely with your team, understand your goals, and stay involved throughout the project to deliver the best results." },
];

export const DIFFERENTIATORS = [
  { title: "Fast Delivery", body: "We deliver your project quickly without compromising on quality, so you can start seeing results sooner." },
  { title: "Built for Growth", body: "Architectures shaped for the traffic spikes when your business takes off." },
  { title: "Reliable Technology", body: "We use trusted technologies to build reliable software that is easy to maintain and ready for future growth" },
  { title: "Experienced Team", body: "Work directly with experienced developers who stay involved throughout your project from start to finish." },
  { title: "Transparent Pipelines", body: "Regular updates and clear communication keep you informed throughout every stage of your project." },
  { title: "Long-Term Partnership", body: "We build software that's easy to maintain, improve, and grow as your business evolves." },
  { title: "High Performance", body: "Fast, reliable software that delivers a smooth experience for your users as your business grows." },
  { title: "Easy to Maintain", body: "Your software is built to be easy to maintain, update, and improve as your business grows." },
  { title: "Security First", body: "Security is built into every project to help protect your business, data, and customers." },
  { title: "Clean Codebase", body: "Codebases that are easy to understand, easy to test, and easy to extend." },
];

export const PROJECTS = [
  {
    slug: "choose-your-attitude",
    name: "Choose Your Attitude",
    category: "Shopify / Store Setup",
    goal: "Built and optimized a complete Shopify store with custom theme development, product management, and enhanced user experience.",
    tech: ["Liquid", "JavaScript", "CSS3"],
    features: ["Custom theme development", "Product management integration", "Optimized checkout experience"],
    metric: "Shopify Store",
    image: chooseYourAttitudeImg,
    accent: "from-[oklch(0.8_0.12_75)] to-[oklch(0.6_0.14_45)]",
  },
  {
    slug: "evenskyn-beauty",
    name: "Evenskyn Beauty",
    category: "Shopify / Store Optimization",
    goal: "Enhanced Shopify store performance with custom integrations, payment gateway setup, and inventory management optimization.",
    tech: ["Shopify Apps", "Custom Scripts", "Liquid"],
    features: ["Performance optimization", "Payment gateway integration", "Inventory management"],
    metric: "Shopify Store",
    image: evenskynBeautyImg,
    accent: "from-[oklch(0.7_0.15_255)] to-[oklch(0.55_0.16_300)]",
  },
  {
    slug: "the-nick-strand",
    name: "The Nick Strand",
    category: "Squarespace / Full Site Development",
    goal: "Designed and developed professional Squarespace website with custom styling, responsive layouts, and optimized user experience.",
    tech: ["Squarespace", "Custom CSS", "JavaScript"],
    features: ["Custom Squarespace styling", "Responsive layout system", "Optimized user experience"],
    metric: "Squarespace Site",
    image: theNickStrandImg,
    accent: "from-[oklch(0.75_0.13_20)] to-[oklch(0.55_0.15_350)]",
  },
  {
    slug: "six-vintage-rugs",
    name: "Six Vintage Rugs",
    category: "Shopify / Custom eCommerce",
    goal: "Developed unique eCommerce experience with advanced product filtering, custom checkout flow, and responsive design.",
    tech: ["Liquid", "JavaScript", "Responsive Design"],
    features: ["Advanced product filtering", "Custom checkout flow", "Responsive layouts"],
    metric: "Shopify Store",
    image: sixVintageRugsImg,
    accent: "from-[oklch(0.72_0.14_165)] to-[oklch(0.55_0.12_200)]",
  },
  {
    slug: "norsu-home",
    name: "Norsu Home",
    category: "Shopify / Theme Customization",
    goal: "Customized Shopify theme with focus on performance optimization, SEO improvements, and enhanced product presentation.",
    tech: ["Liquid", "SEO Optimization", "Custom CSS"],
    features: ["Theme customization", "SEO improvements", "Product presentation design"],
    metric: "Shopify Store",
    image: norsuHomeImg,
    accent: "from-[oklch(0.78_0.12_95)] to-[oklch(0.6_0.13_60)]",
  },

  {
    slug: "the-skintessa",
    name: "The Skintessa",
    category: "Squarespace / Design & Customization",
    goal: "Created elegant Squarespace website with custom design elements, booking integration, and mobile-optimized experience.",
    tech: ["Squarespace", "Custom Design", "Responsive"],
    features: ["Booking workflow integration", "Custom design elements", "Mobile performance tuning"],
    metric: "Squarespace Site",
    image: theSkintessaImg,
    accent: "from-[oklch(0.68_0.11_230)] to-[oklch(0.5_0.1_265)]",
  },
  {
    slug: "bell-holme",
    name: "Bell Holme",
    category: "WordPress / Development",
    goal: "Developed custom WordPress site with optimized performance, SEO implementation, and responsive design across all devices.",
    tech: ["WordPress", "PHP", "Custom Plugins"],
    features: ["Custom WordPress architecture", "SEO implementation", "Responsive cross-device UI"],
    metric: "WordPress Site",
    image: bellHolmeImg,
    accent: "from-[oklch(0.74_0.12_120)] to-[oklch(0.56_0.14_150)]",
  },
  {
    slug: "alice-doremi",
    name: "Alice Doremi",
    category: "WordPress / Optimization",
    goal: "Enhanced WordPress website with performance optimization, custom theme modifications, and improved user interface.",
    tech: ["WordPress", "Custom Themes", "SEO"],
    features: ["Speed and load time optimization", "Theme modifications", "Improved navigation & UI"],
    metric: "WordPress Site",
    image: aliceDoremiImg,
    accent: "from-[oklch(0.81_0.13_110)] to-[oklch(0.63_0.15_80)]",
  },
  // {
  //   slug: "menumuse",
  //   name: "MenuMuse",
  //   category: "Next.js / Web App",
  //   goal: "A digital menu platform that helps businesses create and share interactive menus, pricing, and dishes videos through a QR Code, improving customer experience and engagement.",
  //   tech: ["Next.js", "Responsive design", "GSAP", "SEO", "Web app", "Prismic io", "Vercel"],
  //   features: ["QR Code menu sharing", "Interactive dish videos", "Real-time pricing dashboard"],
  //   metric: "Next.js Web App",
  //   image: menuMuseImg,
  //   accent: "from-[oklch(0.85_0.14_85)] to-[oklch(0.7_0.15_55)]",
  // },
  // {
  //   slug: "sparkfuture",
  //   name: "SparkFuture Technologies",
  //   category: "Next.js / Web Development",
  //   goal: "A modern technology solutions company offering web, mobile, and software development services, focused on helping businesses enhance their digital presence, streamline operations, and achieve scalable growth.",
  //   tech: ["Next.js", "Responsive design", "GSAP", "SEO", "Web development", "Github Action", "CI/CD Development"],
  //   features: ["Service portfolio showcases", "Automated deployment pipelines", "High-performance marketing pages"],
  //   metric: "Next.js Site",
  //   image: sparkFutureImg,
  //   accent: "from-[oklch(0.75_0.15_230)] to-[oklch(0.6_0.15_260)]",
  // },
  // {
  //   slug: "jsbs",
  //   name: "Jamea Saifiyah Business School",
  //   category: "Next.js / Web Portal",
  //   goal: "An institution that provides quality education in business and management, rooted in the principles of the Islamic ethos.",
  //   tech: ["Bootstrap", "CSS", "Next.js", "Vite", "SASS/SCSS"],
  //   features: ["Business curriculum modules", "Islamic ethos business case studies", "Performance-optimized static generation"],
  //   metric: "Next.js Portal",
  //   image: jsbsImg,
  //   accent: "from-[oklch(0.78_0.11_140)] to-[oklch(0.58_0.13_175)]",
  // },
  // {
  //   slug: "rugna-adhaar",
  //   name: "Rugna Adhaar Foundation Website",
  //   category: "Next.js / Frontend & Payment",
  //   goal: "A website built for Rugna Adhaar Foundation — providing support services and community outreach via a modern frontend, payment integration and automated tax receipt via email to donor.",
  //   tech: ["Next.js", "Bootstrap", "Razorpay", "Automated Email Receipt", "Smtp Integration"],
  //   features: ["Razorpay payment gateway", "Automated 80G tax receipt email", "Community outreach dynamic pages"],
  //   metric: "Next.js Website",
  //   image: rugnaAdhaarImg,
  //   accent: "from-[oklch(0.75_0.13_30)] to-[oklch(0.55_0.15_5)]",
  // },
];

export const ROLES = [
  { title: "AI Engineer", team: "Applied AI", location: "Remote", type: "Full-time" },
  { title: "Fullstack Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Business Development", team: "Growth", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", team: "Infrastructure", location: "Remote", type: "Full-time" },
  { title: "Java Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: ".Net Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
];

export const FAQS = [
  {
    q: "How do engagements usually start?",
    a: "With a paid two-week discovery. You leave with an architecture outline, a delivery plan and a fixed-scope first milestone — whether or not you continue with us.",
  },
  {
    q: "How are teams structured?",
    a: "Senior-weighted pods of three to seven: product engineering, applied AI, infrastructure and design, with a delivery lead accountable end to end.",
  },
  {
    q: "Who owns the code?",
    a: "You do, from the first commit. Repositories, pipelines and infrastructure live in your accounts with full documentation at handover.",
  },
  {
    q: "Can you work alongside an in-house team?",
    a: "Most of our work is embedded. We join your rituals, review your PRs and hand over ownership progressively rather than in one drop.",
  },
  {
    q: "What type of projects do you work on?",
    a: "We work on web applications, SaaS platforms, AI integrations, mobile apps, and enterprise software solutions.",
  },
  {
    q: "Can you work on an existing application?",
    a: "Yes. We frequently take over existing applications to improve performance, fix architecture issues, or add new features like AI integrations.",
  },
  {
    q: "Do you work with startups and digital agencies?",
    a: "Yes, we partner with startups to build and scale products, and with digital agencies as an extended technical development team.",
  },
  {
    q: "Can you provide ongoing development support?",
    a: "Absolutely. We offer long-term maintenance and support to ensure your application remains secure, up-to-date, and scalable.",
  }
];

export const PROBLEMS_SOLVED = [
  { title: "Need a new web application?", body: "We build fast, secure, and scalable custom web apps and SaaS platforms from the ground up." },
  { title: "Your application is slow?", body: "We optimize existing code, database architecture, and infrastructure to significantly reduce latency." },
  { title: "Need additional developers for your project?", body: "We integrate directly with your in-house team to provide senior-level engineering support." },
  { title: "Need to integrate APIs or AI?", body: "We connect disparate systems and build practical, production-ready AI features into your workflows." },
  { title: "Need ongoing development and maintenance?", body: "We provide reliable, long-term technical support to keep your software running smoothly." }
];

export const WHO_WE_HELP = [
  {
    title: "STARTUPS",
    body: "Build and launch digital products with a reliable development partner who understands scaling.",
  },
  {
    title: "AGENCIES",
    body: "Extend your development capacity without expanding your in-house team or compromising quality.",
  },
  {
    title: "EXISTING BUSINESSES",
    body: "Improve, maintain, and scale existing software products to eliminate bottlenecks and support growth.",
  }
];

export const TESTIMONIALS = [
  {
    quote: "Aeriform delivered our entire SaaS platform in 8 weeks — clean code, no drama. Their team understood our business from day one.",
    name: "Rahul Sharma",
    role: "Founder",
    company: "LegalDesk Pro",
    initials: "RS",
    color: "from-[oklch(0.65_0.18_250)] to-[oklch(0.5_0.2_280)]",
  },
  {
    quote: "We tried two agencies before Aeriform. Night and day difference. They actually push back when they think we're wrong — that's rare and valuable.",
    name: "Meera Kapoor",
    role: "CTO",
    company: "HealthSync",
    initials: "MK",
    color: "from-[oklch(0.65_0.18_150)] to-[oklch(0.5_0.16_180)]",
  },
  {
    quote: "Our Shopify store conversion rate went up 34% after they redesigned our product pages and optimized checkout. ROI was immediate.",
    name: "James Whitfield",
    role: "CEO",
    company: "Six Vintage Rugs",
    initials: "JW",
    color: "from-[oklch(0.65_0.18_40)] to-[oklch(0.52_0.18_20)]",
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    range: "₹1L – ₹3L",
    usd: "$1,200 – $3,500",
    ideal: "Small businesses, landing pages, MVPs",
    includes: [
      "Custom website or web app",
      "Mobile-responsive design",
      "Basic SEO setup",
      "30 days post-launch support",
    ],
  },
  {
    name: "Growth",
    range: "₹3L – ₹12L",
    usd: "$3,500 – $14,000",
    ideal: "Startups, SaaS platforms, complex apps",
    includes: [
      "Full-stack web or mobile app",
      "API & backend development",
      "Payment & third-party integrations",
      "3 months post-launch support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    range: "Custom",
    usd: "Custom",
    ideal: "Large teams, multi-product, AI systems",
    includes: [
      "Dedicated engineering pod",
      "AI & automation integrations",
      "Custom architecture design",
      "Ongoing retainer support",
    ],
  },
];

export const BLOG_POSTS = [
  {
    slug: "building-healthcare-software-compliance-first",
    title: "Building Healthcare Software That Doesn't Break Trust: Lessons From the Compliance-First Approach",
    metaTitle: "Healthcare Software Development: A Compliance-First Approach",
    metaDescription: "Why compliance, not features, is the real starting point for healthcare software — and how thoughtful AI integration can improve patient experience without cutting corners on data security.",
    summary: "Why compliance, not features, is the real starting point for healthcare software — and how thoughtful AI integration can improve patient experience.",
    date: "August 17, 2026",
    readTime: "9 min read",
    category: "Applied AI",
    author: "Vinayak, Founder",
    image: "/images/blog_healthcare_compliance.jpg",
    content: [
      "Most software projects start with a feature list. Healthcare software has to start somewhere else entirely — with the question of what happens if this system fails a patient, a provider, or an audit.",
      "That distinction sounds obvious once you say it out loud. But it's the single biggest thing that separates teams who've actually shipped healthcare products from teams who are building their first one. Over the years working as a vendor-side engineer inside the healthcare technology space — building systems that sit between providers, payers, and patient data — one lesson kept repeating itself: in healthcare, the \"boring\" parts of the system are the ones that matter most.",
      "**Compliance isn't a checklist you run at the end**",
      "A pattern we see often when talking to healthcare startups and clinics: they come to us with a fully designed product, ready for development, and compliance is somewhere on a \"phase 2\" list. That almost always creates rework later — sometimes expensive rework, sometimes rework that forces a redesign of core data flows.",
      "Data handling in healthcare needs to be a first-class design decision, not a bolt-on. That means deciding early:",
      "- Where patient data physically lives, and who can access it — down to the individual field level, not just the database level",
      "- How data is encrypted at rest and in transit, and who holds the keys",
      "- What gets logged for audit purposes, and how those logs are protected from tampering",
      "- How third-party integrations (labs, insurance systems, payment processors) are scoped so a breach in one doesn't cascade into the rest of the system",
      "None of this is exciting to build. It's also the part clients almost never see directly — and it's the part that determines whether the product survives its first serious audit or security review.",
      "**Where AI actually helps — and where it doesn't**",
      "AI gets pitched into healthcare products constantly right now, often because it's trendy rather than because it solves a real problem. The uses that actually hold up under scrutiny tend to be narrower and more operational than the flashy demos suggest:",
      "1. **Administrative load reduction.** Intake forms, appointment triage, insurance eligibility checks, and documentation summarization are places where AI can meaningfully cut the time staff spend on repetitive work — without touching clinical decision-making.",
      "2. **Structured data extraction.** A huge amount of healthcare data still arrives unstructured — scanned referral letters, free-text notes, PDF lab reports. Using AI to extract and structure this data (with human review built into the workflow, not bypassed by it) is one of the highest-value, lowest-risk applications we've built.",
      "3. **Patient-facing chat, scoped carefully.** A chatbot that helps a patient book an appointment or understand a billing statement is useful. A chatbot that starts answering clinical questions without a licensed provider in the loop is a liability, not a feature. The line between these two has to be drawn deliberately in the product design, not left to the model's judgment at runtime.",
      "What we've learned to avoid: treating AI output as a source of truth in anything that touches diagnosis, treatment, or a legally significant record. Every AI-assisted step in a compliant system needs a human checkpoint and an audit trail showing that checkpoint happened.",
      "**What we actually do differently on healthcare projects**",
      "A few things that show up consistently in how we approach this kind of build:",
      "- We map data flows before we write a line of UI code. Every place patient data enters, moves, or leaves the system gets documented before development starts, not discovered during a security review.",
      "- Access control is role-based from day one, not retrofitted once the \"important\" features are done.",
      "- We design integrations assuming they will eventually be audited — clear logging, clear ownership of each data point, no silent data duplication across services.",
      "- AI features are scoped narrowly and reviewed by someone who understands the clinical or regulatory context, not shipped as a general-purpose assistant bolted onto the product.",
      "None of this is unique or secret — it's standard practice for anyone who has actually shipped and maintained healthcare software past the demo stage. But it's surprising how often it gets skipped when a team is moving fast and compliance feels like something to handle \"later.\"",
      "**If you're building in this space**",
      "If you're a founder or a clinic evaluating a development partner for a healthcare product, the most useful question to ask isn't \"have you used AI before.\" It's: \"Walk me through how patient data moves through a system you've built, and what happens if that system gets audited tomorrow.\" The answer tells you a lot more than a feature list ever will.",
    ]
  },
  {
    slug: "why-we-default-to-nextjs-for-saas",
    title: "Why We Default to Next.js for SaaS Products (And When We Don't)",
    metaTitle: "Next.js for SaaS: Why It's Our Default Stack Choice",
    metaDescription: "A practical look at why Next.js has become our default framework for SaaS products — the real trade-offs, not just the marketing pitch — and the cases where we'd choose something else.",
    summary: "A practical look at why Next.js has become our default framework for SaaS products — the real trade-offs, not just the marketing pitch.",
    date: "August 18, 2026",
    readTime: "8 min read",
    category: "Architecture",
    author: "Vinayak, Founder",
    image: "/images/blog_nextjs_saas.jpg",
    content: [
      "Every few months a founder asks us the same question in a slightly different way: \"Why Next.js and not [insert framework]?\" It's a fair question, and the honest answer isn't \"because it's the best framework\" — it's \"because of what most early-to-mid stage SaaS products actually need, and where they tend to get stuck.\"",
      "Here's the reasoning we actually walk clients through, not the marketing version.",
      "**The real problem Next.js solves for SaaS**",
      "A SaaS product isn't one application — it's at least three, wearing the same UI:",
      "- A marketing site that needs to be fast and rank on Google (landing pages, pricing, blog)",
      "- A logged-in product that needs to feel instant and handle complex client-side state",
      "- An API layer that talks to your database, auth provider, billing system, and whatever else you're integrating",
      "Most frameworks make you pick a lane and then bolt the other two on with separate tooling — a static site generator for marketing, a SPA framework for the app, a separate Node service for the API. That's not wrong, but it's more moving parts than most early-stage teams need to manage, and it slows down the point where a small team can ship confidently.",
      "Next.js lets us build all three inside one codebase, one deploy pipeline, and one mental model — server-rendered marketing pages for SEO, React for the interactive product, and API routes for backend logic, without spinning up a separate service just to handle a webhook.",
      "**Where this actually matters in practice**",
      "- **SEO on the marketing pages.** SaaS companies live and die by organic search early on. Client-side-only React apps historically fought against SEO — Next.js's server rendering means your pricing page and blog posts are indexable and fast without extra tooling.",
      "- **Time to first meaningful feature.** For a founder validating a product, the framework shouldn't be the thing slowing down week one. Being able to stand up auth, a database connection, and a working dashboard inside a single Next.js project — instead of coordinating three separate services — is a real speed advantage in the first few months.",
      "- **One team, one codebase.** For a small engineering team (which is most early SaaS teams, ours included), having frontend and backend logic in one repository with shared types between the API and the UI cuts down on an entire category of integration bugs — the kind where the frontend and backend quietly drift out of sync.",
      "**Where we'd choose something else**",
      "We don't treat this as a universal answer, and we'd be doing clients a disservice if we did.",
      "- Heavy, long-running backend workloads — data pipelines, video processing, anything CPU or memory intensive — belong in a dedicated backend service (we typically reach for FastAPI or a Node/Express service here), not inside Next.js API routes.",
      "- Products with an extremely complex, stateful backend domain — think multi-tenant billing engines with intricate business rules — often benefit from a backend built and tested independently of the frontend's release cycle.",
      "- Teams that are backend-heavy already with a strong existing service in Python, Java, or .NET — in that case Next.js becomes the frontend layer talking to that service, not the place where all the logic lives.",
      "The mistake we try to help clients avoid isn't \"using the wrong framework\" — it's treating a framework choice as permanent and irreversible when the product is still finding its shape. Next.js is a strong default specifically because it doesn't lock you in early: you can start with everything in one project and peel out a dedicated backend service later, once you actually know which parts of the system need to scale independently.",
      "**The practical checklist we use**",
      "When a client asks us to weigh in on stack choice for a new SaaS product, this is roughly the order we think it through:",
      "1. Does the marketing site need to rank on search from day one? → Next.js's SSR is a strong argument.",
      "2. Is the team small (1-4 engineers) and moving fast? → One codebase reduces coordination overhead.",
      "3. Is there a known, heavy backend workload from the start (data processing, ML inference, etc.)? → Plan for a separate service from day one, don't force it into API routes.",
      "4. Is multi-tenancy and complex billing logic core to the product? → Design that layer independently, and treat Next.js as the consumer of that API, not its home.",
      "Most early-stage SaaS products land solidly in \"yes, yes, no, no\" — which is exactly the shape Next.js is built for.",
    ]
  },
  {
    slug: "manufacturing-workflows-businesses-automate-first",
    title: "5 Manufacturing Workflows We See Businesses Automate First (And Why)",
    metaTitle: "Business Process Automation for Manufacturing: Where to Start",
    metaDescription: "The manufacturing workflows that give the fastest, most reliable return when automated — based on the patterns we actually see in custom software projects.",
    summary: "The manufacturing workflows that give the fastest, most reliable return when automated — based on the patterns we actually see in custom software projects.",
    date: "August 19, 2026",
    readTime: "7 min read",
    category: "Business Automation",
    author: "Vinayak, Founder",
    image: "/images/blog_manufacturing_automation.jpg",
    content: [
      "\"Automation\" gets used as a buzzword often enough that it's lost some meaning. When a manufacturing business talks to us about automating their operations, the conversation is rarely about robots on a factory floor — it's about the paperwork, spreadsheets, and manual handoffs sitting between departments that quietly eat hours every week.",
      "Here are the workflows that tend to give manufacturing businesses the fastest, most reliable payoff when they're automated with custom software — and the reasoning behind why these specific ones, out of everything that could be automated.",
      "**1. Inventory and reorder tracking**",
      "The pattern we see constantly: inventory is tracked in a spreadsheet that one person owns, reorder points are based on memory or gut feeling, and stockouts or overstocking happen because the spreadsheet fell out of sync with reality.",
      "A connected inventory system — one that pulls from actual order and production data rather than manual entry — removes the single point of failure and gives automatic reorder alerts based on real consumption patterns, not guesswork. This is usually the first thing worth fixing because the cost of getting it wrong (a stalled production line, or capital tied up in excess stock) is immediate and easy to quantify.",
      "**2. Purchase order and vendor communication**",
      "Manufacturing businesses often manage a large number of vendors, each with their own preferred communication style — email, phone, portal logins. Purchase orders get created manually, followed up on manually, and tracked in whatever system happens to be open at the time.",
      "Automating this doesn't mean removing the human relationship with vendors — it means removing the manual re-entry of the same order information across three different systems, and giving whoever's managing procurement a single place to see order status, expected delivery, and any exceptions that need attention.",
      "**3. Quality control documentation**",
      "This is one of the highest-friction manual processes we see. Inspection results, non-conformance reports, and compliance documentation frequently live on paper or in disconnected spreadsheets, which makes two things hard: quickly spotting a quality trend before it becomes a bigger problem, and producing clean documentation when a customer or auditor asks for it.",
      "Digitizing this — capturing inspection data directly at the point of inspection, tied to a specific batch or work order — turns quality control from a paperwork burden into a searchable, trend-visible dataset. It also tends to be the workflow that pays for itself fastest when a business is dealing with regulated customers or industries.",
      "**4. Production scheduling and work order management**",
      "A lot of shops still run scheduling off a whiteboard or a shared spreadsheet, updated manually as jobs move through stages. This works fine at a small scale and starts breaking down as soon as multiple people need visibility into the same schedule at the same time, or a machine goes down and everything downstream needs to shift.",
      "A digital work order system that shows real-time status — what's queued, what's in progress, what's blocked and why — removes a lot of the \"let me call the floor and ask\" overhead that eats into a supervisor's day.",
      "**5. Reporting for leadership**",
      "The last one is less glamorous but shows up in almost every conversation: someone spends several hours a week (or a month) manually pulling numbers from different systems into a spreadsheet so leadership can see how the business is actually running.",
      "Automated reporting — dashboards that pull directly from the systems already generating the data — doesn't just save that person's time. It means leadership is making decisions on current numbers instead of numbers that are two weeks stale by the time the spreadsheet gets built.",
      "**What we'd actually recommend**",
      "If you're a manufacturing business looking at this list and wondering where to start, the honest answer is: start with whichever one is currently causing the most manual firefighting, not necessarily the one that sounds most impressive. A well-scoped fix to one broken workflow, actually used by the team every day, is worth more than a large system that tries to automate everything at once and takes a year to roll out.",
      "We generally recommend starting narrow — pick the one workflow with the clearest cost of staying manual, build that well, and expand from there once it's proven itself with the team actually using it.",
    ]
  },
  {
    slug: "building-custom-real-estate-platform-what-matters",
    title: "Building a Custom Real Estate Platform: What Actually Matters vs. What Sounds Good in a Pitch",
    metaTitle: "Real Estate Software Development: Features That Actually Matter",
    metaDescription: "What we've learned building custom real estate platforms — the features that drive real usage, and the ones that look good in a demo but get ignored after launch.",
    summary: "What we've learned building custom real estate platforms — the features that drive real usage, and the ones that look good in a demo but get ignored after launch.",
    date: "August 20, 2026",
    readTime: "8 min read",
    category: "Business Software Solutions",
    author: "Vinayak, Founder",
    image: "/images/blog_real_estate_platform.jpg",
    content: [
      "Real estate platforms tend to attract feature creep faster than almost any other category we build for. There's always another integration, another dashboard view, another \"nice to have\" that sounds compelling in a planning meeting. The problem is that a lot of it doesn't survive contact with actual daily use by agents, property managers, or buyers.",
      "Here's what we've learned separates the features that get used every day from the ones that quietly get ignored after launch.",
      "**Search and filtering has to be genuinely fast, not just functional**",
      "This sounds obvious, but it's the single most under-invested part of most real estate platforms we've reviewed or rebuilt. Buyers and renters filter aggressively — price range, bedrooms, location radius, amenities, sometimes school district or commute time. If filtering feels slow or the results page reloads awkwardly, users don't complain, they just leave and go back to whichever major listing site they were using before.",
      "Technically, this usually means investing in proper indexing and search infrastructure early rather than treating search as \"just a database query with some WHERE clauses\" — which works fine for a demo with fifty listings and falls apart at real scale.",
      "**Media handling matters more than most feature lists suggest**",
      "Photos, floor plans, and increasingly video walkthroughs are how listings actually get evaluated before a physical visit. A platform that handles image upload, compression, and responsive delivery poorly creates a worse first impression than almost any missing feature would. This is an area where the unglamorous engineering work — proper image pipelines, CDN delivery, lazy loading — has an outsized effect on how professional the platform feels to an end user.",
      "**CRM integration is where a lot of platforms quietly fail**",
      "Agents and property managers already live inside a CRM. A real estate platform that doesn't integrate cleanly with the CRM they're already using creates a second system they have to manually keep in sync — which means, in practice, one of the two systems stops being kept up to date.",
      "We've found that scoping CRM integration early, even if it's just two-way sync for leads and inquiries, matters more to daily adoption than most of the flashier features that get discussed in early planning.",
      "**Document handling and e-signatures need to be built in, not bolted on**",
      "Offers, disclosures, lease agreements — real estate runs on documents, and a platform that forces users out to a separate tool for anything document-related breaks the workflow at exactly the point where deals move fastest. Integrating document generation and e-signature capability directly into the platform (rather than treating it as a \"later\" feature) tends to be one of the higher-impact additions once the core listing and search experience is solid.",
      "**Where AI is actually useful here — and where it's noise**",
      "AI-powered features get pitched into real estate platforms constantly right now. The ones that hold up in real usage tend to be narrow and practical:",
      "- Automated listing descriptions generated from structured property data, reviewed and edited by an agent rather than published unedited",
      "- Lead scoring and routing, helping agents prioritize which inquiries are worth immediate follow-up",
      "- Natural-language search — letting a user type \"3 bedroom near downtown under 50 lakh\" instead of manually setting five filters",
      "What tends not to hold up: fully automated valuation tools presented as authoritative, or chat assistants that try to answer legal or financial questions without a licensed professional in the loop. Those create liability faster than they create value.",
      "**The honest advice we give clients**",
      "If you're planning a real estate platform, the highest-leverage thing you can do before writing a feature list is talk to the people who'll actually use it daily — agents, property managers, or your internal ops team — and ask what part of their current workflow wastes the most time. That answer is usually a better roadmap starting point than a competitor feature comparison.",
    ]
  },
  {
    slug: "ai-chatbots-for-retail-ecommerce-practical-guide",
    title: "AI Chatbots for Retail: What Actually Improves Customer Support (And What's Just Noise)",
    metaTitle: "AI Chatbots for Ecommerce and Retail: A Practical Guide",
    metaDescription: "A practical, no-hype breakdown of where AI chatbots genuinely improve retail customer support — and where they create more frustration than they solve.",
    summary: "A practical, no-hype breakdown of where AI chatbots genuinely improve retail customer support — and where they create more frustration than they solve.",
    date: "August 21, 2026",
    readTime: "7 min read",
    category: "Applied AI",
    author: "Vinayak, Founder",
    image: "/images/blog_retail_ai_chatbot.jpg",
    content: [
      "Every retail and ecommerce founder we talk to has, at some point, asked for \"an AI chatbot\" without necessarily meaning the same thing by it. Some mean a simple FAQ deflection tool. Some mean something that can look up an order and process a return. Some mean something closer to a full sales assistant. These are very different builds with very different payoffs — and conflating them is where a lot of chatbot projects go wrong before they even start.",
      "Here's how we actually think about it when scoping one of these for a retail client.",
      "**Start with what's actually clogging up support, not what sounds impressive**",
      "Before touching any AI tooling, the useful first step is looking at the support queue and asking: what are the top five things customers ask about repeatedly? For most retail businesses, it's a short, boring list — order status, return policy, sizing questions, shipping timelines, and \"where's my refund.\" None of that requires a sophisticated language model. It requires a system that can reliably pull real order data and answer accurately, every time, without hallucinating a delivery date.",
      "This is the highest-value, lowest-risk starting point, and it's also the one most businesses underinvest in because it doesn't sound as exciting as \"AI assistant.\"",
      "**Where a chatbot genuinely reduces support load**",
      "- **Order status and tracking.** Connected directly to the order management system, this alone often handles a large share of incoming queries without a human ever getting involved.",
      "- **Return and exchange initiation.** Walking a customer through starting a return, checking eligibility against policy, and generating a return label is a well-defined, rules-based workflow that AI-assisted chat handles well — because the \"AI\" part is really just natural language understanding on top of a deterministic process, not open-ended generation.",
      "- **Product discovery for larger catalogs.** \"Show me something like this but in blue\" or \"I need a gift for a 10-year-old under ₹1000\" are the kind of queries that traditional filter-based search handles poorly and conversational search handles well. This is one of the few places where the AI is adding real capability, not just automating an existing form.",
      "**Where it creates more problems than it solves**",
      "- **Fully autonomous responses on anything involving money or policy exceptions.** A chatbot that starts improvising discount approvals, warranty exceptions, or policy overrides without a human checkpoint is a liability. These need a clear escalation path, not an AI making a judgment call.",
      "- **Replacing human support entirely for complaint handling.** A frustrated customer who's had a bad experience wants to feel heard, not routed through another automated flow. The businesses that get this right use AI to triage and gather context quickly, then hand off to a human — not to avoid the human interaction altogether.",
      "- **Chat that doesn't know when to stop pretending it knows the answer.** The single most damaging failure mode we see in retail chatbots is confidently giving wrong information — a delivery date that isn't real, a policy that doesn't exist. Every deployment we build has explicit boundaries: if the system isn't pulling from real, structured data, it says so and hands off, rather than generating a plausible-sounding guess.",
      "**The build pattern we actually use**",
      "For most retail clients, the systems that hold up in production follow a similar shape:",
      "- Structured data first — connect the chat layer to real order, inventory, and policy data before adding any generative capability",
      "- Deterministic workflows for anything transactional — returns, refunds, order changes follow fixed rules, not model judgment",
      "- Generative AI reserved for language understanding and product discovery — where flexibility genuinely helps and getting it slightly wrong isn't costly",
      "- A clear, fast handoff to a human whenever the system hits the edge of what it can reliably answer",
      "**The honest takeaway**",
      "The retail businesses that get real value from AI chatbots are the ones that treat it as a support-efficiency tool wired into real data — not a replacement for their support team, and not a general-purpose assistant that tries to do everything. Scoped narrowly and built on top of accurate data, it quietly removes a lot of repetitive load. Scoped too broadly, it creates a new source of customer frustration instead of solving the old one.",
    ]
  },
  {
    slug: "build-mvp-without-building-wrong-thing",
    title: "How to Build an MVP Without Building the Wrong Thing Fast",
    metaTitle: "MVP Development for Startups: A Practical, Honest Guide",
    metaDescription: "A practical breakdown of how we approach MVP development with startup founders — what to cut, what not to cut, and the mistakes that cost the most time later.",
    summary: "A practical breakdown of how we approach MVP development with startup founders — what to cut, what not to cut, and the mistakes that cost the most time later.",
    date: "August 22, 2026",
    readTime: "8 min read",
    category: "Business Software Solutions",
    author: "Vinayak, Founder",
    image: "/images/blog_startup_mvp.jpg",
    content: [
      "\"MVP\" gets treated as a speed goal — build something, ship it, learn. That's the right instinct, but it quietly skips the harder question: an MVP built fast in the wrong shape doesn't save a founder time, it just moves the expensive mistake earlier. The goal isn't \"build fast.\" It's \"learn what actually matters, as cheaply as possible, without accumulating debt that makes the next version harder to build.\"",
      "Here's how we actually think through this with founders before writing any code.",
      "**Start with the one thing that has to be true**",
      "Every product idea rests on an assumption that, if wrong, means the rest doesn't matter. Before scoping features, we push founders to name that assumption explicitly. Not \"will people use this app\" in the abstract, but something specific and testable: \"will a small business owner pay for automated inventory alerts\" or \"will a patient actually complete a booking flow inside a chat interface instead of calling.\"",
      "The entire point of an MVP is to test that one assumption as directly and cheaply as possible. Everything that doesn't serve that test is, by definition, not part of the MVP — even if it feels important.",
      "**The features founders want to cut but shouldn't**",
      "Some things get labeled \"we'll add that later\" that genuinely can't wait, because they're structural rather than additive:",
      "- **Basic authentication and data separation** — even an MVP handling real user data needs this done properly from day one. Retrofitting security after real users are on the platform is far more expensive than building it correctly the first time.",
      "- **A data model that won't need to be rebuilt** — the underlying database structure doesn't need every field the final product will have, but it needs to be shaped correctly enough that adding features later doesn't mean migrating everything.",
      "- **A way to actually see what users are doing** — even lightweight analytics or event logging. Without this, the \"learn\" part of build-measure-learn doesn't happen; founders end up guessing instead of knowing.",
      "**The features founders want to keep that should get cut**",
      "The opposite mistake is just as common — holding onto features that feel important but don't actually test the core assumption:",
      "- Admin dashboards with every possible view, built before there's enough usage data to know which views anyone needs",
      "- Support for edge cases and rare user types that might matter eventually but aren't part of the core loop being tested",
      "- Polished onboarding flows for a product that hasn't yet proven anyone wants to get past step one",
      "- Multiple integrations planned \"because customers will probably ask\" rather than because a specific early customer has asked",
      "The pattern here: build for the users you have or are actively talking to, not the hypothetical users you're hoping to attract six months from now.",
      "**Where AI fits into MVP timelines**",
      "AI features are increasingly part of MVP requests, and the same discipline applies. If the AI feature is the core assumption being tested — \"will people trust an AI-generated summary of their finances\" — it needs to be built properly, even in an MVP, because a broken version of the core hypothesis gives you a false negative. If it's a nice-to-have layered on top of a different core assumption, it can usually wait for version two without weakening what you're actually trying to learn.",
      "**What an 8-week MVP timeline actually looks like**",
      "For a reasonably scoped MVP, here's roughly how the time tends to break down when we work with founders:",
      "- **Weeks 1-2: Scoping and architecture.** Nailing down the one assumption being tested, mapping the minimum data model and user flow that tests it, and making the handful of technical decisions (stack, hosting, auth approach) that are expensive to reverse later.",
      "- **Weeks 3-6: Core build.** The actual feature work — deliberately narrow, built against the real data model from week 1-2, not a throwaway prototype that gets rebuilt later.",
      "- **Weeks 7-8: Testing, polish on the critical path only, and launch prep.** Fixing what's broken in the core flow, not adding features. Polish gets applied only to the path a real user will actually walk through first.",
      "The founders who get the most out of this timeline are the ones who resist the urge to expand scope mid-build when a \"quick addition\" starts sounding tempting. Almost none of those additions are actually quick, and almost all of them delay the point where you learn whether the core idea works.",
      "**The honest advice**",
      "If you're a founder about to start an MVP, the most useful conversation to have with a development partner isn't about the feature list — it's about which single assumption the MVP needs to test, and what's the smallest, most honest version of the product that actually tests it. Everything else is a decision you get to make later, once you have real users telling you what they actually need.",
    ]
  }
];
