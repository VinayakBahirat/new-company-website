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
  { label: "Work", to: "/work" as const },
  { label: "Studio", to: "/studio" as const },
  { label: "Careers", to: "/careers" as const },
  { label: "Blog", to: "/blog" as const },
];

export const METRICS = [
  { value: 11, suffix: "+", label: "Years of shipping code" },
  { value: 240, suffix: "+", label: "Production builds shipped" },
  { value: 68, suffix: "", label: "Senior engineers on staff" },
  { value: 19, suffix: "", label: "Countries served globally" },
];

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
    slug: "website",
    title: "Website & Web App Development",
    summary:
      "Modern websites and web applications built to deliver seamless user experiences, support business goals, and scale with your needs.",
    points: ["Responsive & Modern UI", "High Performance", "Secure Development"],
  },
  {
    slug: "AI",
    title: "AI Solutions & Development",
    summary:
      "Practical AI solutions that help businesses automate processes, improve decision-making, and create smarter digital experiences.",
    points: ["AI-Powered Applications", "AI Chatbots & Assistants", "Custom AI Solutions"],
  },
  {
    slug: "Mobile App",
    title: "Mobile App Development",
    summary:
      "Reliable and user-friendly mobile applications designed to deliver smooth experiences across Android and iOS platforms.",
    points: ["Android & iOS Development", "Intuitive User Experience", "App Store Deployment"],
  }, {
    slug: "Business Software",
    title: "Business Software Solutions",
    summary:
      "Custom software solutions designed around your business processes to improve efficiency, simplify operations, and support growth",
    points: ["Custom Software Solutions", "Business Process Management", "Scalable Architecture"],
  },
  {
    slug: "SaaS Product Development",
    title: "SaaS Product Development",
    summary:
      "Scalable SaaS products built with secure architecture, seamless user management, and the flexibility to grow with your business.",
    points: ["Multi-Tenant Architecture", "Subscription & Billing", "User Management"],
  },
  {
    slug: "Business Automation",
    title: "Business Automation",
    summary:
      "Automate repetitive tasks and business workflows to reduce manual effort, minimize errors, and improve operational efficiency.",
    points: ["Workflow Automation", "Process Optimization", "Automated Notifications"],
  },
  {
    slug: "Backend & API Development",
    title: "Backend & API Development",
    summary:
      "Secure and scalable backend systems that power your applications, connect services, manage data, and support reliable digital experiences.",
    points: ["API Development", "System Integration", "Secure Data Management"],
  },
  {
    slug: "Cloud & DevOps Solutions",
    title: "Cloud & DevOps Solutions",
    summary:
      "Reliable cloud and deployment solutions that keep your applications secure, scalable, available, and ready for continuous growth.",
    points: ["Cloud Deployment", "CI/CD Automation", "Infrastructure Management"],
  },
  {
    slug: "Application Performance Optimization",
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
    slug: "building-reliable-applied-ai-products",
    title: "How to Build Reliable Applied AI Features for Real Businesses",
    summary: "Going beyond the chat interface. A practical guide to implementing robust, deterministic AI agents in enterprise systems that deliver measurable value.",
    date: "August 12, 2026",
    readTime: "12 min read",
    category: "Applied AI",
    author: "Prasad Bahirat, Engineering Lead",
    content: [
      "Artificial Intelligence and Large Language Models (LLMs) have taken the industry by storm. Yet, there remains a massive chasm between running a simple python script in a Jupyter notebook and deploying a production-ready AI feature that enterprise clients can rely on day in and day out. In production environments, non-deterministic model outputs, high latency, API rate limits, and LLM hallucinations can ruin user trust. Moving to production requires treating AI not just as a machine learning task, but as a systems engineering challenge.",
      "The first design pattern we enforce at Aeriform is simple: avoid chat interfaces for core business operations. While conversational interfaces are useful for creative tasks or basic support desks, businesses run on structured data, deterministic actions, and reliability. Instead of exposing a raw input box to the user, integrate LLMs invisibly behind the scenes. For instance, build features that automatically tag incoming emails, parse receipts, extract tabular data from PDFs, or generate structured draft responses that humans review. By keeping AI in the background, you limit the surface area for user-facing errors.",
      "To achieve determinism in a non-deterministic environment, you must use structured outputs. Relying on raw text completions and hoping the LLM follows instructions is a recipe for failure. By leveraging APIs that support JSON Schema validation (like OpenAI's structured outputs or Gemini's schema mode) or using parsing libraries like Zod and Pydantic, you force the model to respond in a strict format. If a response does not conform to the required JSON schema, the application catches the validation error immediately, logs the incident, and gracefully falls back to a default state rather than crashing or writing corrupted data to the database.",
      "Another critical aspect of building resilient AI systems is model routing. Large models like GPT-4o or Claude 3.5 Sonnet are highly capable but expensive and slow. Smaller models like GPT-4o-mini or Gemini 1.5 Flash are fast and cost-efficient but struggle with complex reasoning. In production, we deploy a routing layer: a fast classification script determines the complexity of the user's request. Simple queries are handled by small models, whereas complex mathematical reasoning or multi-step synthesis tasks are routed to larger models. This hybrid routing architecture reduces average API costs by up to 65% and slashes latency for simple tasks.",
      "We also implement double-pass validation guardrails. Before any AI-generated content is saved or executed, a secondary, lightweight validation function checks for critical security policies, sensitive data leaks, or known hallucination patterns. If a validation check fails, the system runs a quick retry loop with adjusted generation temperatures. If it fails a second time, the task is flagged for human intervention. This 'human-in-the-loop' design ensures that high-stakes operations (like issuing financial statements, prescribing schedules, or executing database transactions) always have a safety net.",
      "Finally, treat evaluation (Eval) as code. You should never update a prompt in production based on 'vibes' or a single test case. We build automated regression evaluation pipelines that run during our CI/CD processes. We test new prompt variations against a pre-compiled dataset of 200+ test scenarios representing typical inputs, edge cases, and malicious inputs. If the prompt change causes a regression in accuracy, formatting, or safety on even one critical test case, the deployment build automatically fails. Standardizing LLMOps, tracking input/output logs, monitoring semantic drift, and implementing strict fallback structures are what separate weekend AI toys from resilient enterprise software."
    ]
  },
  {
    slug: "scaling-saas-architecture-multi-tenant-db",
    title: "Scaling SaaS Architectures: Choosing the Right Multi-Tenant DB Strategy",
    summary: "An in-depth comparison of schema-isolation, database-per-tenant, and row-level security models for modern high-performance subscription platforms.",
    date: "August 05, 2026",
    readTime: "15 min read",
    category: "Architecture",
    author: "Aniruddha Shinde, Principal Architect",
    content: [
      "For any Software-as-a-Service (SaaS) engineer, the fundamental architectural foundation is tenant isolation. Deciding how to separate, store, and manage data for thousands of different business customers affects everything: data security, regulatory compliance (like GDPR or HIPAA), operational scaling, backup-restore flexibility, and monthly cloud infrastructure costs. A wrong choice in the early stages can lead to millions in rewrite costs down the road.",
      "There are three primary multi-tenancy models, each with distinct advantages and drawbacks:",
      "1. Database-Per-Tenant: In this model, every customer gets their own physical database instance. This is the gold standard for security and isolation. Data leakage between tenants is physically impossible. GDPR compliance is simple: if a tenant cancels their subscription, you can simply drop their database. Performance is isolated, preventing the 'noisy neighbor' effect where one tenant's heavy queries slow down everyone else. However, the downside is cost and operational complexity. Running hundreds of idle database instances leads to massive resource underutilization and high monthly cloud bills. Upgrading database schemas requires executing migrations across hundreds of databases concurrently.",
      "2. Schema-Per-Tenant (Logical Isolation): Tenants share the same database server cluster, but their tables are separated into distinct database schemas (e.g., namespace isolation in PostgreSQL). This provides a great middle ground. It is more cost-efficient than running separate database instances, and you still get logical data separation. However, connection pooling becomes complex, database clusters must be large enough to handle the collective memory load, and schema migrations still require iterating through every single schema, which can become slow and error-prone as you grow.",
      "3. Shared-Database with Row-Level Security (RLS): All tenants share the exact same database tables. A `tenant_id` column is added to every table, and database-level security policies (such as PostgreSQL's RLS) restrict queries so that a tenant can only select, insert, or modify rows that match their authenticated `tenant_id`. This is incredibly cost-efficient, handles resource utilization perfectly, and schema migrations are trivial because you only have one schema to update. The trade-offs are the risk of code bugs letting data leak (though RLS mitigates this by enforcing security at the database engine level, not the app level) and the complex nature of individual tenant backups and restores.",
      "At Aeriform, we recommend a hybrid multi-tenant approach. For early and mid-stage SaaS products, we default to PostgreSQL with Row-Level Security (RLS). PostgreSQL's RLS runs directly on the database engine, meaning even if a developer forgets a `WHERE tenant_id = X` filter in their query, the database will automatically enforce it. We couple this with PgBouncer for high-performance connection pooling. For high-paying enterprise tenants who demand absolute isolation for compliance reasons, we provision a dedicated database instance using dynamic routing middleware. This gives the business the cost efficiency of shared tables for 95% of users, while satisfying the compliance demands of high-value corporate partners."
    ]
  },
  {
    slug: "why-performance-is-cheaper-than-cloud-bills",
    title: "Why Code Performance Optimization is Cheaper than Upgrading Servers",
    summary: "How a 150ms reduction in API latency saved one of our clients 40% on monthly AWS compute costs while boosting mobile conversions by 12%.",
    date: "July 28, 2026",
    readTime: "11 min read",
    category: "Performance",
    author: "Siddhesh Kadam, Infra & DevOps",
    content: [
      "When a web application begins to run slowly under heavy traffic, the instinctive reaction of many engineering teams is to 'throw hardware at the problem.' They upgrade their cloud server instances, double the CPU/RAM parameters, or configure Kubernetes to scale out automatically with additional replicas. While this fixes the immediate lag and keeps the site online, it is an extremely expensive band-aid that compounds underlying code inefficiencies and leads to skyrocketing monthly cloud statements.",
      "Code performance optimization is not just a nice-to-have engineering exercise or a matter of technical pride—it is a direct financial multiplier. The math is simple: if you optimize your code to handle a request in 50ms instead of 200ms, the same server can handle four times as many requests per second. Consequently, you need 75% fewer server resources to handle the same user load, translating directly into a smaller cloud infrastructure bill.",
      "Consider a real-world case study from one of our client engagements. An e-commerce platform was experiencing severe response lag and database lockups during marketing campaigns. The host team had scaled their AWS ECS container fleet to 12 instances and upgraded their database instance to a high-tier RDS class, bringing their monthly AWS bill to over $8,500. Despite this, API latency remained above 300ms.",
      "Instead of continuing to scale up the hardware, we set up performance profiling tools to find the actual bottlenecks. We identified two primary issues: first, a dashboard API was executing an 'N+1' query pattern, fetching related records in a loop instead of performing a single optimized database join. Second, large JSON payloads were being repeatedly serialized and deserialized inside loops, burning CPU cycles.",
      "We resolved these bottlenecks by rewriting the database queries to use targeted joins, indexing the columns, and implementing Redis to cache slow, read-heavy API responses for 60 seconds. We also swapped out the standard JSON parser for a high-speed library. These relatively simple code adjustments reduced average API latency by 150ms and cut CPU usage on the servers by 60%.",
      "As a result, the client downscaled their AWS ECS cluster from 12 instances to just 4, and downgraded their database tier. Their monthly AWS bill fell from $8,500 to $5,100—saving them $40,800 annually. As a major business benefit, the faster load times improved mobile conversion rates by 12%, proving that code performance is directly linked to business revenue. Before paying for more server power, always profile your code first."
    ]
  }
];
