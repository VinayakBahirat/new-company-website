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
  {
    slug: "enterprise",
    title: "Enterprise Software",
    summary:
      "Custom software built to streamline operations, improve efficiency, and support your business as it grows.",
    points: ["Business Process Automation", "Secure Access Control", "Scalable Architecture"],
  },
  {
    slug: "ai",
    title: "AI Product Development",
    summary:
      "AI-powered solutions that automate tasks, improve decision-making, and create better customer experiences.",
    points: ["AI Chatbots", "Workflow Automation", "Custom AI Solutions"],
  },
  {
    slug: "saas",
    title: "SaaS Platform Engineering",
    summary:
      "Scalable SaaS platforms built for subscription businesses, secure user management, and long-term growth.",
    points: ["Multi-Tenant Architecture", "Subscription & Billing", "User Management"],
  },
  {
    slug: "web",
    title: "Custom Web Applications",
    summary:
      "Fast, secure, and user-friendly web applications tailored to your business needs.",
    points: ["Responsive Design", "High Performance", "Secure Development"],
  },
  {
    slug: "mobile",
    title: "Mobile Applications",
    summary:
      "Cross-platform mobile apps that deliver a smooth experience on both Android and iOS.",
    points: ["Android & iOS Apps", "Offline Support", "App Store Deployment"],
  },
  {
    slug: "cloud",
    title: "Cloud & Platform Ops",
    summary:
      "Reliable cloud infrastructure that keeps your applications secure, scalable, and always available.",
    points: ["Cloud Deployment", "CI/CD Automation", "Infrastructure Management"],
  },
  {
    slug: "automation",
    title: "Automation Systems",
    summary:
      "Automate repetitive tasks and business workflows to save time, reduce errors, and improve productivity.",
    points: ["Workflow Automation", "Process Optimization", "Smart Notifications"],
  },
  {
    slug: "api",
    title: "API & Backend Engineering",
    summary:
      "Secure and scalable APIs that connect your applications, automate data flow, and support business growth.",
    points: ["API Development", "System Integration", "Secure Data Flow"],
  },
  {
    slug: "performance",
    title: "Performance Optimization",
    summary:
      "Improve the speed, reliability, and performance of your existing software for a better user experience.",
    points: ["Faster Loading", "Better Performance", "Optimized Code"],
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
