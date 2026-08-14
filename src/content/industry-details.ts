export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryUseCaseDetail {
  id: string; // e.g. "Use Case 01"
  title: string;
  problem: string;
  solution: string;
  impact: string;
}

export interface IndustryCapability {
  title: string;
  description: string;
}

export interface IndustryProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface IndustryTechGroup {
  category: "Frontend" | "Backend" | "Database" | "Cloud & DevOps" | "AI";
  items: string[];
}

export interface IndustryBusinessOutcome {
  title: string;
  description: string;
}

export interface IndustryDetail {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  shortDescription: string;
  overview: {
    marketContext: string;
    challenges: string;
    transformationUrgency: string;
    howAeriformHelps: string;
  };
  solutions: IndustrySolution[];
  useCases: IndustryUseCaseDetail[];
  capabilities: IndustryCapability[];
  process: IndustryProcessStep[];
  deliverables: string[];
  techStack: IndustryTechGroup[];
  businessOutcomes: IndustryBusinessOutcome[];
  relatedServicesSlugs: string[];
}

export const INDUSTRY_DETAILS: Record<string, IndustryDetail> = {
  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Digital Health & Medical Software Engineering",
    headline: "HIPAA-Compliant Patient Portals, Telehealth Platforms, and AI Clinical Assistants.",
    shortDescription:
      "We design and build secure, compliant, and intuitive healthcare applications that streamline patient care, automate clinical workflows, and protect medical data.",
    overview: {
      marketContext:
        "The healthcare sector is rapidly shifting toward digital-first patient experiences, remote care delivery, and automated clinical documentation.",
      challenges:
        "Medical providers face severe administrative overload, data silos in legacy EMR systems, complex HIPAA compliance requirements, and fragmented patient communication channels.",
      transformationUrgency:
        "Modern health organizations must adopt secure cloud infrastructure and intelligent AI tools to reduce physician burnout and deliver timely, accurate patient care.",
      howAeriformHelps:
        "We build end-to-end medical software solutions with zero-trust security architecture, seamless FHIR/HL7 interoperability, and automated clinical documentation guardrails.",
    },
    solutions: [
      {
        title: "HIPAA-Compliant Patient Portals",
        description: "Self-service web & mobile portals for appointment booking, medical history access, and doctor messaging.",
      },
      {
        title: "Telehealth & Virtual Care Platforms",
        description: "HD WebRTC video consultation platforms with integrated prescription routing and digital intake forms.",
      },
      {
        title: "AI Clinical Document Summarizers",
        description: "RAG-powered AI assistants that extract key insights from complex medical charts for attending doctors.",
      },
      {
        title: "Pharmacy & Medical Inventory Controls",
        description: "Automated inventory management platforms tracking drug batch expiry dates and stock thresholds.",
      },
      {
        title: "Remote Patient Vitals Monitoring Apps",
        description: "Bluetooth-enabled mobile apps syncing patient blood pressure, glucose, and heart rate data in real time.",
      },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "Digital Patient Onboarding & Triage System",
        problem: "Patients spend 20+ minutes filling out manual paper forms in clinic waiting rooms, delaying consultations.",
        solution: "Engineered a digital self-service intake portal that validates insurance coverage and syncs intake data to EMRs automatically.",
        impact: "Reduced clinic check-in wait times by 75% and eliminated manual data entry errors.",
      },
      {
        id: "Use Case 02",
        title: "Multi-Clinic Telehealth Consultation Hub",
        problem: "Fragmented video call links and manual scheduling caused a 25% patient no-show rate for virtual visits.",
        solution: "Built a unified WebRTC telehealth platform with automated SMS reminders, digital lobby, and payment capture.",
        impact: "Slashed no-show rates to under 6% while doubling daily virtual appointment capacity.",
      },
      {
        id: "Use Case 03",
        title: "EMR Chart Clinical AI Summarizer",
        problem: "Physicians spent over 2 hours every evening reviewing dense multi-year medical histories before patient visits.",
        solution: "Deployed a secure, HIPAA-enclave AI summarization bot that compiles key medical history alerts in seconds.",
        impact: "Saved doctors an average of 90 minutes per day in chart review time.",
      },
      {
        id: "Use Case 04",
        title: "Diagnostic Lab Results Gateway",
        problem: "Patients waited up to 5 days to receive physical lab result letters by mail.",
        solution: "Engineered a real-time HL7 lab data parser delivering push-notified PDF test reports directly to patient mobile wallets.",
        impact: "Delivered lab test results to patients within 10 minutes of lab sign-off.",
      },
    ],
    capabilities: [
      { title: "HIPAA & HITECH Compliance Enclaves", description: "End-to-end KMS data encryption, access logging, and BAA compliant cloud setups." },
      { title: "FHIR & HL7 System Interoperability", description: "Standardized API integration connecting custom apps into Epic, Cerner, and AthenaHealth." },
      { title: "WebRTC Video & Tele-Consultation", description: "Encrypted low-latency video streaming optimized for low-bandwidth mobile connections." },
      { title: "Biometric & MFA Security Controls", description: "Strict multi-factor authentication and FaceID login preventing unauthorized chart access." },
    ],
    process: [
      { step: "01", title: "Compliance & Security Audit", description: "Auditing data flows, HIPAA requirements, and EMR integration points." },
      { step: "02", title: "Architecture & Enclave Blueprint", description: "Designing encrypted database schemas, IAM roles, and secure API boundaries." },
      { step: "03", title: "Patient UX/UI Engineering", description: "Crafting accessible, simple interfaces suitable for patients of all ages." },
      { step: "04", title: "API & EMR Integration", description: "Building FHIR connectors and background sync workers for real-time chart updates." },
      { step: "05", title: "Penetration Testing & UAT", description: "Rigorous vulnerability scanning and clinical workflow validation with medical staff." },
      { step: "06", title: "Cloud Deployment & SLA", description: "Launching on high-availability cloud infrastructure with continuous monitoring." },
    ],
    deliverables: [
      "Production Medical Software Codebase",
      "HIPAA Compliance Security Architecture Documentation",
      "FHIR / HL7 API Integration Middleware",
      "Web & Mobile Patient Apps (iOS & Android)",
      "Automated Testing Suite & Penetration Test Sign-off",
      "Dedicated Technical SLA Support",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "FastAPI", "Python"] },
      { category: "Database", items: ["PostgreSQL", "Supabase", "Vector Search"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
      { category: "AI", items: ["OpenAI", "Gemini", "RAG"] },
    ],
    businessOutcomes: [
      { title: "75% Faster Patient Intake", description: "Eliminate paper forms and manual data entry across clinics." },
      { title: "Sub-10 Min Lab Result Turnaround", description: "Deliver instant mobile access to test reports as soon as labs publish." },
      { title: "100% HIPAA Compliance Assurance", description: "Zero-trust encrypted cloud architecture protecting sensitive medical records." },
      { title: "Reduced Physician Burnout", description: "AI summarizers slash chart review time by 90 minutes daily." },
    ],
    relatedServicesSlugs: ["website-web-app-development", "ai-solutions-development", "mobile-app-development", "backend-api-development"],
  },

  finance: {
    slug: "finance",
    name: "Finance & Fintech",
    eyebrow: "Fintech & Banking Software Engineering",
    headline: "High-Throughput Financial Systems, Secure Banking Portals, and Automated Compliance.",
    shortDescription:
      "We build bank-grade fintech platforms, high-speed transaction ledgers, wealth dashboards, and AI fraud detection systems for financial institutions.",
    overview: {
      marketContext:
        "Financial institutions face intense pressure to deliver instant, frictionless digital transactions while maintaining stringent regulatory compliance.",
      challenges:
        "Legacy core banking software causes slow transaction processing, security vulnerabilities, high operational costs, and poor mobile user experiences.",
      transformationUrgency:
        "Fintech innovators and traditional banks must modernize their APIs, automate reconciliation, and deploy real-time fraud monitoring to retain customer trust.",
      howAeriformHelps:
        "We engineer high-throughput financial architectures featuring double-entry ledgers, sub-50ms transaction APIs, multi-currency engines, and SOC2 compliant security.",
    },
    solutions: [
      { title: "Customer Wealth & Investment Portals", description: "Real-time portfolio management dashboards with dynamic chart analysis and automated reporting." },
      { title: "High-Throughput Transaction Ledger APIs", description: "Immutable double-entry accounting ledgers processing thousands of concurrent transactions." },
      { title: "AI Fraud Anomaly Detection", description: "Machine learning pipelines analyzing transaction patterns in real time to block suspicious transfers." },
      { title: "B2B Multi-Currency Invoicing SaaS", description: "Automated subscription billing, tax calculation, and payment gateway reconciliation." },
      { title: "Biometric Mobile Banking Apps", description: "Native iOS and Android fintech apps featuring FaceID authentication and instant P2P transfers." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "Real-Time Portfolio Wealth Dashboard",
        problem: "Investment clients suffered 3-second chart lag times when reviewing market updates, causing frustration.",
        solution: "Built a high-frequency WebSocket data pipeline and React dashboard that updates asset values in under 45ms.",
        impact: "Increased daily active portal engagement by 40% and improved client satisfaction scores.",
      },
      {
        id: "Use Case 02",
        title: "Automated Bank Statement Reconciliation",
        problem: "Corporate accounting teams spent 30+ hours every month manually matching bank feeds against ERP invoices.",
        solution: "Engineered an event-driven reconciliation bot that automatically matches transaction entries and flags exceptions.",
        impact: "Slashed monthly accounting closing time from 5 days to 4 hours.",
      },
      {
        id: "Use Case 03",
        title: "Loan Application & Automated Credit Scoring",
        problem: "Paper-based commercial loan applications took 2 weeks to evaluate and approve.",
        solution: "Created a multi-step digital loan wizard with automated credit bureau API score checks and document extraction.",
        impact: "Cut average loan approval turnaround time from 14 days to under 24 hours.",
      },
      {
        id: "Use Case 04",
        title: "Unified Payment Adapter & Multi-Gateway Routing",
        problem: "High transaction failure rates occurred during payment gateway outages.",
        solution: "Built a smart payment adapter that routes transactions across Stripe, Razorpay, and Adyen automatically.",
        impact: "Achieved 99.98% successful payment completion rate globally.",
      },
    ],
    capabilities: [
      { title: "SOC2 & PCI-DSS Hardening", description: "Bank-grade infrastructure encryption, tokenization, and strict compliance controls." },
      { title: "Double-Entry Ledger Architecture", description: "Immutable, audit-ready financial data structures guaranteeing zero balance discrepancies." },
      { title: "Sub-50ms API Latency Engineering", description: "Ultra-fast microservices tuned for high-frequency financial queries." },
      { title: "OAuth2 & Single Sign-On (SSO)", description: "Enterprise identity access management supporting multi-factor authentication." },
    ],
    process: [
      { step: "01", title: "Financial Regulatory Audit", description: "Auditing compliance requirements (SOC2, PCI-DSS, AML) and security parameters." },
      { step: "02", title: "Ledger & API Architecture Design", description: "Modeling double-entry database schemas and microservices transaction flows." },
      { step: "03", title: "Fintech App Engineering", description: "Building high-performance web dashboards and mobile banking interfaces." },
      { step: "04", title: "Payment & Core Banking Integration", description: "Connecting payment gateways, banking feeds, and credit bureau APIs." },
      { step: "05", title: "Load Stress & Penetration Testing", description: "Simulating high transaction spikes and conducting thorough security audits." },
      { step: "06", title: "Production Deployment & Monitoring", description: "Deploying on isolated cloud VPCs with continuous anomaly alerting." },
    ],
    deliverables: [
      "Bank-Grade Fintech Software Platform",
      "Double-Entry Transaction Ledger Architecture",
      "OpenAPI / Swagger Interactive Documentation",
      "SOC2 / PCI-DSS Security Compliance Audit Sign-off",
      "Mobile Banking Apps (iOS & Android)",
      "Dedicated Technical Support SLA",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", items: ["Node.js", "FastAPI", ".NET", "Java", "Python"] },
      { category: "Database", items: ["PostgreSQL", "Supabase", "MongoDB"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
      { category: "AI", items: ["OpenAI", "Prompt Engineering"] },
    ],
    businessOutcomes: [
      { title: "Sub-50ms Transaction Speeds", description: "Deliver instant financial updates and payment processing." },
      { title: "90% Reduction in Closing Time", description: "Automated reconciliation cuts monthly accounting close from days to hours." },
      { title: "99.98% Payment Success Rate", description: "Smart multi-gateway routing prevents lost sales from payment outages." },
      { title: "Complete Regulatory Compliance", description: "Audit-ready ledgers meeting SOC2 and PCI-DSS compliance standards." },
    ],
    relatedServicesSlugs: ["backend-api-development", "saas-product-development", "business-automation", "application-performance-optimization"],
  },

  education: {
    slug: "education",
    name: "Education & EdTech",
    eyebrow: "Learning Management & Educational Software",
    headline: "Scalable LMS Platforms, Interactive Virtual Classrooms, and 24/7 AI Tutors.",
    shortDescription:
      "We design and build engaging EdTech software, learning management systems (LMS), student portals, and AI-powered personalized tutoring engines.",
    overview: {
      marketContext:
        "Education & EdTech engineering encompasses digital learning platforms, institutional administration systems, course authoring portals, and adaptive learning software.",
      challenges:
        "Educational institutions struggle with outdated learning platforms, low student completion rates, manual grading bottlenecks, and inefficient parent-teacher communication.",
      transformationUrgency:
        "Modern learning environments require accessible, mobile-first platforms and personalized AI support to keep students engaged and improve academic outcomes.",
      howAeriformHelps:
        "We build high-concurrency LMS platforms, automated grading engines, adaptive AI learning paths, and intuitive student portals handling thousands of concurrent users.",
    },
    solutions: [
      { title: "Interactive Student LMS Portals", description: "Custom learning management systems featuring video lectures, progress tracking, and interactive quizzes." },
      { title: "24/7 AI Subject Tutors", description: "Context-aware AI assistants that answer homework questions using verified course textbooks." },
      { title: "Virtual Classrooms & Assignment Hubs", description: "Centralized assignment submission portals with automated plagiarism checks and grading workflows." },
      { title: "School Administration & Grading SaaS", description: "Multi-tenant platforms for K-12 districts to manage attendance, report cards, and parent messaging." },
      { title: "Course Authoring & Monetization Platforms", description: "Empowers educators to create, host, and monetize digital courses with subscription paywalls." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "High-Concurrency Student LMS Platform",
        problem: "The legacy learning portal crashed during mid-term exam weeks when 15,000 students logged in simultaneously.",
        solution: "Re-engineered the platform with Next.js and AWS auto-scaling, serving static assets via CDN edge nodes.",
        impact: "Maintained 100% uptime with sub-second page loads during peak exam weeks.",
      },
      {
        id: "Use Case 02",
        title: "24/7 AI Homework Tutor Assistant",
        problem: "Students struggled with late-night study roadblocks when teaching assistants were unavailable.",
        solution: "Deployed a RAG-powered AI homework copilot trained exclusively on course curriculum materials.",
        impact: "Boosted course pass rates by 18% and answered over 50,000 student queries in the first semester.",
      },
      {
        id: "Use Case 03",
        title: "K-12 Parent-Teacher Communication Portal",
        problem: "Important school announcements lost in physical paper flyers resulted in poor parent event participation.",
        solution: "Built a mobile-first portal with instant push notifications, event calendars, and multi-language translation.",
        impact: "Increased parent meeting attendance by 65%.",
      },
      {
        id: "Use Case 04",
        title: "Automated Essay Feedback Engine",
        problem: "Instructors spent 40+ hours per week grading initial drafts of student essays.",
        solution: "Engineered an AI feedback tool providing instant grammar, structure, and citation feedback to students before submission.",
        impact: "Reduced instructor grading workload by 50% while improving initial draft quality.",
      },
    ],
    capabilities: [
      { title: "High-Concurrency Video Streaming", description: "Adaptive bitrate video hosting optimized for low-bandwidth mobile connections." },
      { title: "Adaptive AI Learning Algorithms", description: "Dynamic quiz generators tailoring difficulty based on individual student performance." },
      { title: "Multi-Tenant Institutional SaaS", description: "Secure tenant isolation allowing school districts to manage independent school portals." },
      { title: "WCAG 2.1 Accessibility Compliance", description: "Accessible UI design supporting screen readers, keyboard navigation, and high contrast." },
    ],
    process: [
      { step: "01", title: "Curriculum & User Journey Mapping", description: "Defining learner personas, course structures, and administrative requirements." },
      { step: "02", title: "UX Wireframing & Accessibility Design", description: "Designing intuitive UI layouts adhering to WCAG accessibility guidelines." },
      { step: "03", title: "LMS & AI Engine Development", description: "Building core learning modules, video players, and RAG AI tutoring features." },
      { step: "04", title: "Student Data Integration", description: "Syncing student information systems (SIS) and payment gateways." },
      { step: "05", title: "High-Load Concurrency Testing", description: "Simulating thousands of simultaneous student exam logins to verify server scaling." },
      { step: "06", title: "Deployment & Campus Rollout", description: "Deploying on high-availability cloud infrastructure with continuous monitoring." },
    ],
    deliverables: [
      "Custom LMS Web & Mobile Application Codebase",
      "24/7 AI Homework Tutor RAG Engine",
      "WCAG 2.1 Accessibility Audit Sign-off",
      "Student Information System (SIS) API Connectors",
      "Admin Operations & Grading Dashboard",
      "Teacher & Staff Training Documentation",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "FastAPI", "Python"] },
      { category: "Database", items: ["PostgreSQL", "Supabase", "Vector Search"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
      { category: "AI", items: ["OpenAI", "Gemini", "RAG"] },
    ],
    businessOutcomes: [
      { title: "100% Platform Peak Uptime", description: "Scalable architecture effortlessly handles exam week traffic surges." },
      { title: "18% Improvement in Pass Rates", description: "24/7 AI tutoring helps students overcome learning roadblocks immediately." },
      { title: "50% Reduction in Grading Workload", description: "Automated feedback tools free educators to focus on direct teaching." },
      { title: "WCAG Accessible Learning", description: "Inclusive software design accessible to all learners across devices." },
    ],
    relatedServicesSlugs: ["website-web-app-development", "ai-solutions-development", "mobile-app-development", "saas-product-development"],
  },

  retail: {
    slug: "retail",
    name: "Retail & E-Commerce",
    eyebrow: "Digital Commerce & Shopping Platforms",
    headline: "High-Conversion Web Stores, Mobile Shopping Apps, and Intelligent Inventory Sync.",
    shortDescription:
      "We design and build fast headless storefronts, mobile commerce apps, automated inventory sync engines, and AI shopping assistants.",
    overview: {
      marketContext:
        "Retail & E-Commerce engineering encompasses headless shopping platforms, mobile store apps, multi-channel inventory sync, and AI recommendation engines.",
      challenges:
        "Retail brands struggle with slow page speeds, cart abandonment, inventory discrepancies across channels, and generic product recommendations.",
      transformationUrgency:
        "To win modern consumers, retailers must deliver sub-second shopping experiences, personalized AI recommendations, and frictionless checkout across web and mobile.",
      howAeriformHelps:
        "We build sub-second headless storefronts (Next.js), one-tap checkout systems, real-time inventory synchronization across Shopify/Amazon, and semantic visual search.",
    },
    solutions: [
      { title: "Headless Storefronts (Next.js)", description: "Ultra-fast product catalogs with instant search, sub-second page turns, and high SEO rankings." },
      { title: "Native Mobile Shopping Apps", description: "High-speed iOS & Android shopping apps with Apple Pay / Google Pay one-tap checkout." },
      { title: "Multi-Channel Stock Inventory Sync", description: "Syncs inventory balances automatically across Shopify, Amazon, eBay, and physical POS." },
      { title: "Semantic Visual Search & AI Recommendations", description: "Enables shoppers to find items using natural language descriptions or photo references." },
      { title: "B2B Wholesale Ordering Portals", description: "Tiered pricing, bulk ordering, and credit invoice management portals for enterprise buyers." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "Sub-Second Headless E-Commerce Storefront",
        problem: "Slow page load speeds (3.8s) caused a high 68% mobile bounce rate and poor organic Google rankings.",
        solution: "Rebuilt the store as a Next.js headless storefront with CDN edge caching and optimized WebP images.",
        impact: "Slashed load times to 800ms, raising mobile conversion rates by 34% and doubling organic SEO traffic.",
      },
      {
        id: "Use Case 02",
        title: "Multi-Channel Stock Inventory Synchronization",
        problem: "Overselling occurred during flash sales when Shopify inventory failed to sync with Amazon warehouses in real time.",
        solution: "Engineered a high-speed event-driven inventory sync engine that updates stock balances across all channels in milliseconds.",
        impact: "Completely eliminated stockout overselling errors.",
      },
      {
        id: "Use Case 03",
        title: "One-Tap Mobile Shopping & Loyalty App",
        problem: "Mobile browser shoppers dropped out during complex multi-step checkout forms.",
        solution: "Launched a native React Native shopping app with Apple Pay one-tap checkout and digital QR loyalty rewards.",
        impact: "Increased repeat purchase rate by 42% and raised average order value (AOV) by 18%.",
      },
      {
        id: "Use Case 04",
        title: "AI Visual & Semantic Search Engine",
        problem: "Customers struggled to find specific clothing styles using standard keyword search filters.",
        solution: "Deployed a vector-based semantic search engine allowing users to upload photo references to find matching items.",
        impact: "Boosted search-to-cart conversion rate by 28%.",
      },
    ],
    capabilities: [
      { title: "Headless Architecture (Next.js / Shopify)", description: "Decoupled frontend storefronts delivering sub-second page loads and complete design freedom." },
      { title: "One-Tap Express Payment Integration", description: "Frictionless checkout integrated with Apple Pay, Google Pay, Stripe, and Razorpay." },
      { title: "Real-Time Event-Driven Inventory Sync", description: "Webhooks and background queues updating stock levels across multi-channel marketplaces." },
      { title: "Core Web Vitals Speed Optimization", description: "Optimized image loading, code splitting, and CDN caching achieving PageSpeed 95+." },
    ],
    process: [
      { step: "01", title: "Commerce Audit & Journey Scoping", description: "Analyzing catalog structures, checkout friction, and multi-channel inventory feeds." },
      { step: "02", title: "Headless Store UI/UX Design", description: "Designing high-conversion mobile storefronts and intuitive product filters." },
      { step: "03", title: "Frontend & API Engineering", description: "Building responsive storefronts, payment gateways, and cart microservices." },
      { step: "04", title: "Inventory & ERP Connectors", description: "Integrating Shopify API, Amazon SP-API, and warehouse management systems." },
      { step: "05", title: "Load & Speed Benchmarking", description: "Executing simulated Black Friday surge tests and Core Web Vitals audits." },
      { step: "06", title: "Store Launch & Growth SLA", description: "Launching on global CDN networks with continuous monitoring." },
    ],
    deliverables: [
      "Production Headless Storefront / Mobile App Codebase",
      "Multi-Channel Inventory Synchronization Engine",
      "Stripe / Payment Gateway Express Checkout Integration",
      "Core Web Vitals Benchmark Audit (PageSpeed 95+)",
      "Analytics & Conversion Tracking Setup",
      "Dedicated Technical SLA Support",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
      { category: "Backend", items: ["Node.js", "Express", "FastAPI", "Python"] },
      { category: "Database", items: ["PostgreSQL", "Supabase", "MongoDB"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
      { category: "AI", items: ["OpenAI", "Vector Search"] },
    ],
    businessOutcomes: [
      { title: "34% Increase in Mobile Conversions", description: "Sub-second load times keep shoppers engaged through checkout." },
      { title: "Zero Inventory Overselling", description: "Real-time sync keeps stock balances accurate across all sales channels." },
      { title: "42% Higher Repeat Purchases", description: "Mobile shopping apps and loyalty passes keep customers returning." },
      { title: "Sub-800ms Page Load Speeds", description: "PageSpeed scores above 95/100 driving higher organic SEO revenue." },
    ],
    relatedServicesSlugs: ["website-web-app-development", "mobile-app-development", "application-performance-optimization", "backend-api-development"],
  },

  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    eyebrow: "Industrial Software & Shop Floor Automation",
    headline: "Shop Floor Management, Predictive Equipment Maintenance, and Supply Chain Dashboards.",
    shortDescription:
      "We design and build custom industrial software, shop floor execution platforms, raw material procurement portals, and predictive maintenance engines.",
    overview: {
      marketContext:
        "Manufacturing software engineering focuses on shop floor execution systems (MES), raw material tracking, quality control logging, and industrial IoT data visualization.",
      challenges:
        "Factory floors suffer from manual paper job cards, unexpected machine breakdowns, unmonitored material waste, and disconnected ERP data.",
      transformationUrgency:
        "Modern manufacturers must digitize shop floor operations to track assembly line throughput, predict equipment failures, and maintain strict quality standards.",
      howAeriformHelps:
        "We build tablet-based shop floor platforms, automated procurement triggers, quality audit loggers, and predictive maintenance engines.",
    },
    solutions: [
      { title: "Shop Floor Production Execution Systems", description: "Real-time tablet interface tracking assembly line progress, machine output, and bottleneck alerts." },
      { title: "Predictive Equipment Maintenance Managers", description: "Schedules preventative servicing based on machine run-hours and diagnostic sensor logs." },
      { title: "Raw Material Procurement & Vendor Portals", description: "Automates purchase order creation when stock falls below minimum reorder thresholds." },
      { title: "Quality Assurance Inspection Tools", description: "Digital audit tool allowing inspectors to log defective batches with photos and defect codes." },
      { title: "Executive Operational Analytics Dashboards", description: "Real-time BI dashboards tracking Overall Equipment Effectiveness (OEE) across plants." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "Tablet Shop Floor Execution System",
        problem: "Paper job cards caused a 4-hour delay in reporting assembly line bottlenecks to plant managers.",
        solution: "Deployed a touch-optimized tablet interface allowing workers to log completed stages and flag downtime instantly.",
        impact: "Increased overall plant throughput by 22% and eliminated paper job cards.",
      },
      {
        id: "Use Case 02",
        title: "Predictive Machine Maintenance Logger",
        problem: "Unplanned CNC machine outages cost the plant over $45,000 per month in lost production time.",
        solution: "Built an IoT diagnostic engine that monitors machine vibration and run-hours to alert maintenance before breakdowns occur.",
        impact: "Reduced unplanned equipment downtime by 68%.",
      },
      {
        id: "Use Case 03",
        title: "Automated Raw Material Reordering Portal",
        problem: "Production halts occurred when stockroom staff forgot to manually order specialized steel alloys.",
        solution: "Engineered an automated stock tracking portal that generates vendor purchase orders when inventory hits reorder points.",
        impact: "Completely eliminated material stockout halts.",
      },
      {
        id: "Use Case 04",
        title: "Digital Quality Control & Defect Logger",
        problem: "Defect reports were recorded on paper, making it impossible to identify root-cause quality trends.",
        solution: "Created a mobile photo-logging inspection app that categorizes defect causes and generates Pareto quality charts.",
        impact: "Slashed product defect rate by 35% within 90 days.",
      },
    ],
    capabilities: [
      { title: "Industrial Tablet & Rugged UI Design", description: "High-contrast touch interfaces designed for shop floor workers using gloves." },
      { title: "IoT Sensor Data Ingestion", description: "High-throughput MQTT and WebSockets processing real-time machine telemetry." },
      { title: "Legacy ERP Integration (SAP / Oracle)", description: "Connects custom shop floor systems directly into core enterprise ERP databases." },
      { title: "Role-Based Security Controls", description: "Granular permissions restricting machine parameter edits to certified operators." },
    ],
    process: [
      { step: "01", title: "Factory Floor Process Audit", description: "Mapping assembly line flows, paper bottlenecks, and machine data sources." },
      { step: "02", title: "Shop Floor UI & System Architecture", description: "Designing touch-friendly tablet layouts and normalized database schemas." },
      { step: "03", title: "Custom Module Engineering", description: "Building production tracking, quality logging, and maintenance modules." },
      { step: "04", title: "ERP & IoT Sensor Integration", description: "Connecting shop floor data to central ERP software and machine sensors." },
      { step: "05", title: "Pilot Plant Testing", description: "Deploying on a single assembly line to train operators and refine workflows." },
      { step: "06", title: "Full Plant Rollout", description: "Staged deployment across all production lines with ongoing SLA support." },
    ],
    deliverables: [
      "Custom Shop Floor Software Platform",
      "Touch-Optimized Tablet & Mobile Applications",
      "Predictive Maintenance & IoT Telemetry Engine",
      "ERP Integration Connectors & Middleware",
      "Executive OEE BI Dashboard Setup",
      "Operator Training SOP Documentation",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Ant Design", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", ".NET", "Java", "Python"] },
      { category: "Database", items: ["PostgreSQL", "MongoDB", "Supabase"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
    ],
    businessOutcomes: [
      { title: "22% Increase in Plant Throughput", description: "Real-time shop floor visibility eliminates assembly line bottlenecks." },
      { title: "68% Reduction in Machine Downtime", description: "Predictive servicing alerts prevent expensive unplanned equipment outages." },
      { title: "35% Lower Defect Rates", description: "Digital quality logging identifies root-cause defect trends immediately." },
      { title: "Zero Paper Job Cards", description: "100% digital shop floor operations with real-time ERP syncing." },
    ],
    relatedServicesSlugs: ["business-software-solutions", "business-automation", "backend-api-development", "cloud-devops-solutions"],
  },

  "real-estate": {
    slug: "real-estate",
    name: "Real Estate & PropTech",
    eyebrow: "Property Management & PropTech Engineering",
    headline: "High-Traffic Property Listing Portals, Tenant Platforms, and Automated Lease Managers.",
    shortDescription:
      "We design and build fast property search portals, 3D virtual tour viewers, automated rent collection engines, and multi-property management SaaS.",
    overview: {
      marketContext:
        "Real Estate & PropTech engineering covers high-volume listing search engines, property management platforms, automated rent billing, and tenant maintenance portals.",
      challenges:
        "Property firms struggle with slow property search portals, delayed rent collection, manual maintenance ticket dispatch, and outdated paper lease renewals.",
      transformationUrgency:
        "Modern buyers and tenants demand instant mobile property searches, 3D virtual walkthroughs, automated rent payments, and self-service maintenance reporting.",
      howAeriformHelps:
        "We build sub-second property search portals, 3D WebGL tour viewers, automated Stripe rent collection pipelines, and tenant maintenance ticketing SaaS.",
    },
    solutions: [
      { title: "High-Traffic Property Search Portals", description: "Ultra-fast web platforms with dynamic location filtering, interactive maps, and instant lead routing." },
      { title: "3D Virtual Tour & WebGL Viewers", description: "Embedded Three.js virtual walkthroughs allowing buyers to inspect properties remotely." },
      { title: "Property Manager Operations Hub", description: "All-in-one platform enabling landlords to manage listings, leases, and tenant communications." },
      { title: "Automated Rent Collection & ACH Sync", description: "Collects monthly rent payments automatically via Stripe/ACH with late fee triggers." },
      { title: "Tenant Maintenance Ticketing SaaS", description: "Centralized maintenance portal connecting property managers, tenants, and repair technicians." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "High-Speed Property Search & Map Portal",
        problem: "Property search page loaded in 4.5 seconds with lagging map rendering, causing 60% of prospective buyers to bounce.",
        solution: "Rebuilt the search portal with Next.js, map cluster optimization, and CDN edge caching.",
        impact: "Reduced page load speed to 900ms and increased lead inquiry submissions by 48%.",
      },
      {
        id: "Use Case 02",
        title: "Automated Rent Collection & Stripe Sync",
        problem: "Landlords spent 15+ hours every month chasing manual rent bank transfers and writing paper receipts.",
        solution: "Deployed an automated recurring rent billing engine that processes ACH payments and issues automated receipts.",
        impact: "Achieved 98% on-time rent collection and saved 15 hours of manual administration monthly.",
      },
      {
        id: "Use Case 03",
        title: "Tenant Maintenance Work Order Router",
        problem: "Maintenance requests sent via email were frequently misplaced, leading to tenant complaints.",
        solution: "Created a mobile tenant app allowing tenants to upload photo repair requests routed automatically to vetted technicians.",
        impact: "Cut average repair turnaround time from 5 days to 24 hours.",
      },
      {
        id: "Use Case 04",
        title: "Interactive 3D Property Showcase",
        problem: "Out-of-state home buyers hesitated to submit offers based solely on static 2D photos.",
        solution: "Integrated Three.js WebGL interactive 3D floor plans and virtual walkthroughs into project listing pages.",
        impact: "Increased out-of-state buyer conversion rates by 35%.",
      },
    ],
    capabilities: [
      { title: "High-Performance Map Search Engineering", description: "Clustered map rendering and spatial queries handling 100k+ property listings smoothly." },
      { title: "3D WebGL & Three.js Integration", description: "Interactive 3D model rendering directly in the browser without external plugins." },
      { title: "Automated Recurring Billing & ACH", description: "Stripe and ACH payment integration for recurring rent collection and late fee processing." },
      { title: "Mobile Tenant & Agent Applications", description: "Cross-platform mobile apps for instant lead notifications, messaging, and ticket routing." },
    ],
    process: [
      { step: "01", title: "PropTech Requirements Scoping", description: "Defining listing structures, user roles, payment flows, and map requirements." },
      { step: "02", title: "UI/UX & Map Search Wireframing", description: "Designing intuitive property cards, filter panels, and tenant dashboards." },
      { step: "03", title: "Search Engine & App Development", description: "Building responsive web search portals, 3D viewers, and mobile tenant apps." },
      { step: "04", title: "Payment & CRM Integration", description: "Connecting payment gateways, lead routing engines, and property databases." },
      { step: "05", title: "Performance & Mobile Audit", description: "Auditing page load speeds, map responsiveness, and mobile usability." },
      { step: "06", title: "Platform Launch & SLA Support", description: "Launching on auto-scaling cloud infrastructure with continuous uptime monitoring." },
    ],
    deliverables: [
      "Production Property Search Portal / App Codebase",
      "Interactive 3D WebGL Floor Plan Component",
      "Automated Rent Billing & Payment Gateway Integration",
      "Tenant Maintenance Ticketing Portal",
      "Admin Operations & Analytics Dashboard",
      "Dedicated Technical SLA Support",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
      { category: "Backend", items: ["Node.js", "Express", "FastAPI", "Python"] },
      { category: "Database", items: ["PostgreSQL", "Supabase", "MongoDB"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
    ],
    businessOutcomes: [
      { title: "48% Higher Lead Inquiries", description: "Sub-second search speeds and map filters convert more visitors into active buyers." },
      { title: "98% On-Time Rent Collection", description: "Automated ACH recurring payments eliminate manual rent chasing." },
      { title: "24-Hour Repair Turnarounds", description: "Automated maintenance dispatch resolves tenant issues rapidly." },
      { title: "35% More Out-of-State Sales", description: "Interactive 3D virtual tours enable remote buyers to commit with confidence." },
    ],
    relatedServicesSlugs: ["website-web-app-development", "mobile-app-development", "saas-product-development", "business-automation"],
  },

  "artificial-intelligence": {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    eyebrow: "Enterprise AI & Autonomous Agent Systems",
    headline: "Custom RAG Pipelines, Deterministic AI Guardrails, and Autonomous Workflow Agents.",
    shortDescription:
      "We design, build, and deploy production-grade AI platforms, intelligent document parsers, multi-agent systems, and custom LLM integrations.",
    overview: {
      marketContext:
        "Artificial Intelligence engineering focuses on moving beyond basic chatbots to build production-ready RAG architectures, multi-agent systems, and deterministic AI backends.",
      challenges:
        "Companies struggle with non-deterministic LLM outputs, model hallucinations, high API costs, latency lag, and securing sensitive data against model leaks.",
      transformationUrgency:
        "To stay competitive, enterprises must integrate custom AI into internal workflows to search proprietary data, automate document analysis, and accelerate decision-making.",
      howAeriformHelps:
        "We build deterministic AI architectures with strict JSON schema validation, vector database indexing, hybrid model routing, and automated regression evaluation suites.",
    },
    solutions: [
      { title: "Custom RAG Knowledge Search Platforms", description: "Connects LLMs to internal company documents and databases for instant, accurate natural language search." },
      { title: "Intelligent Document Extraction Pipelines", description: "Parses, extracts, and structures data from PDF invoices, contracts, and medical records into SQL tables." },
      { title: "AI Multi-Agent Workflow Automation", description: "Autonomous AI agents executing complex multi-step research, draft generation, and approval routing." },
      { title: "LLM Fine-Tuning & Model Routing Layers", description: "Hybrid routing layer directing simple queries to fast models and complex queries to reasoning models." },
      { title: "AI Safety Enforcers & Evaluation Pipelines", description: "JSON schema guardrails and automated CI/CD evaluation test suites guaranteeing 99.9% accuracy." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "Enterprise Multi-Department RAG Search",
        problem: "Employees spent 45 minutes daily searching across Notion, Google Drive, and Slack for internal policies and technical docs.",
        solution: "Built a central vector search RAG platform indexing company knowledge bases with natural language answers.",
        impact: "Reduced internal search time to under 10 seconds, saving 150+ employee hours weekly.",
      },
      {
        id: "Use Case 02",
        title: "Automated Financial Document Extraction",
        problem: "Data entry teams spent 8 hours daily manually typing figures from PDF tax returns into underwriting software.",
        solution: "Engineered a high-precision document extraction pipeline using vision models and strict JSON schema validation.",
        impact: "Processed documents in 3 seconds with 99.4% accuracy, cutting labor costs by 80%.",
      },
      {
        id: "Use Case 03",
        title: "AI Contract Clause & Risk Analyzer",
        problem: "Legal teams struggled to review hundreds of incoming vendor contracts for non-standard liability terms.",
        solution: "Deployed a specialized contract analysis bot that flags non-compliant clauses and suggests standardized revisions.",
        impact: "Reduced contract review turnaround time by 70%.",
      },
      {
        id: "Use Case 04",
        title: "Hybrid Model Cost Optimization Router",
        problem: "Using GPT-4 for simple support queries resulted in an expensive $12,000 monthly OpenAI API bill.",
        solution: "Implemented an intelligent query router that sends simple queries to fast small models and complex tasks to larger models.",
        impact: "Slashed monthly API costs by 62% without sacrificing response quality.",
      },
    ],
    capabilities: [
      { title: "Custom RAG Vector Indexing", description: "High-speed semantic search using PGVector, Pinecone, and Supabase vector stores." },
      { title: "JSON Schema Output Enforcers", description: "Deterministic API guardrails preventing model hallucinations and formatting errors." },
      { title: "Hybrid LLM Routing Architecture", description: "Smart routing layer optimizing latency and API costs across OpenAI, Gemini, and Claude." },
      { title: "Automated Eval & Regression Testing", description: "CI/CD evaluation pipelines testing prompt changes against 200+ edge-case test datasets." },
    ],
    process: [
      { step: "01", title: "AI Opportunity & Data Audit", description: "Auditing data assets, identifying high-impact AI use cases, and defining accuracy metrics." },
      { step: "02", title: "Vector DB & RAG Architecture", description: "Designing document chunking strategies, vector embeddings, and fallback rules." },
      { step: "03", title: "Model Selection & Guardrail Setup", description: "Configuring LLM system prompts, JSON schema enforcers, and security policies." },
      { step: "04", title: "Integration & API Engineering", description: "Connecting AI microservices into your web, mobile, or enterprise backend systems." },
      { step: "05", title: "Automated Eval & Accuracy Testing", description: "Testing prompt variations against 200+ test scenarios to guarantee zero hallucinations." },
      { step: "06", title: "Production Deployment & Monitoring", description: "Deploying with token cost tracking, latency monitoring, and semantic drift alerts." },
    ],
    deliverables: [
      "Custom Production RAG Ingestion Pipeline",
      "AI Microservices & Vector Search Database",
      "Strict Schema Guardrails & Validation Layer",
      "Automated Regression Eval Test Suite",
      "Admin Analytics & Token Usage Dashboard",
      "Prompt Engineering & Handover Documentation",
    ],
    techStack: [
      { category: "AI", items: ["OpenAI", "Gemini", "LLM Systems", "RAG", "Prompt Engineering", "AI Automation"] },
      { category: "Backend", items: ["FastAPI", "Python", "Node.js", "Express"] },
      { category: "Database", items: ["Vector Search", "Supabase", "PostgreSQL", "MongoDB"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
    ],
    businessOutcomes: [
      { title: "80% Savings in Data Entry Costs", description: "Automated document parsing extracts fields in seconds with high accuracy." },
      { title: "62% Reduction in API Costs", description: "Hybrid model routing slashes LLM API spend while preserving quality." },
      { title: "Sub-10s Enterprise Knowledge Search", description: "Empower employees to query proprietary records instantly." },
      { title: "Zero Hallucination Guarantee", description: "Deterministic guardrails enforce strict, verified output formatting." },
    ],
    relatedServicesSlugs: ["ai-solutions-development", "business-automation", "backend-api-development", "cloud-devops-solutions"],
  },

  logistics: {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    eyebrow: "Supply Chain & Fleet Software Engineering",
    headline: "Real-Time Driver GPS Tracking, Warehouse Management, and Multi-Carrier Freight Dispatch.",
    shortDescription:
      "We design and build custom warehouse management systems, real-time fleet GPS tracking apps, automated freight dispatchers, and digital proof-of-delivery tools.",
    overview: {
      marketContext:
        "Logistics & Supply Chain software engineering focuses on warehouse inventory management (WMS), driver dispatch routing, real-time GPS tracking, and carrier rate optimization.",
      challenges:
        "Logistics companies struggle with inefficient warehouse picking routes, delayed shipment tracking, manual freight dispatcher calls, and paper proof of delivery.",
      transformationUrgency:
        "Modern supply chains demand real-time GPS visibility, automated route dispatching, offline mobile barcode scanning, and multi-carrier price comparison.",
      howAeriformHelps:
        "We build turn-by-turn driver navigation apps, digital proof-of-delivery signature capture, automated freight rate dispatchers, and warehouse bin tracking platforms.",
    },
    solutions: [
      { title: "Warehouse Bin Location Management (WMS)", description: "Optimizes picking routes and tracks stock location across multi-zone fulfillment centers." },
      { title: "Real-Time Driver GPS Route & Dispatch Apps", description: "Turn-by-turn navigation and automated dispatch updates for delivery drivers in real time." },
      { title: "Multi-Carrier Freight Rate Dispatcher", description: "Compares shipping rates across FedEx, DHL, and local couriers to assign optimal freight partners." },
      { title: "Digital Proof-of-Delivery Signature Tools", description: "Allows drivers to capture customer electronic signatures and photo proof offline." },
      { title: "Offline Barcode Inventory Scanners", description: "High-speed mobile barcode scanning app for warehouse package check-in and check-out." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "Real-Time Fleet GPS & Dispatch App",
        problem: "Dispatchers spent hours calling drivers individually to assign emergency delivery reroutes.",
        solution: "Built a real-time driver mobile app with live GPS tracking, automated route assignment, and turn-by-turn maps.",
        impact: "Reduced dispatch communication time by 85% and cut fleet fuel consumption by 14%.",
      },
      {
        id: "Use Case 02",
        title: "Digital Proof-of-Delivery Signature Capture",
        problem: "Paper delivery receipts were frequently lost or smudged, delaying customer invoicing by up to 2 weeks.",
        solution: "Deployed an offline mobile app allowing drivers to capture customer digital signatures and photo proof immediately upon delivery.",
        impact: "Accelerated billing cycle from 14 days to same-day automated invoice generation.",
      },
      {
        id: "Use Case 03",
        title: "Warehouse Picking Route Optimization WMS",
        problem: "Warehouse pickers walked an average of 12 miles per shift due to unorganized picking routes.",
        solution: "Engineered a bin location picking algorithm that calculates the shortest path through warehouse aisles.",
        impact: "Increased picking speed by 38% and reduced picker walking distance by 5 miles daily.",
      },
      {
        id: "Use Case 04",
        title: "Multi-Carrier Freight Price Aggregator",
        problem: "Shipping managers manually checked 6 courier websites to find the cheapest freight rate for large shipments.",
        solution: "Built an API aggregator that fetches live shipping rates from FedEx, DHL, and local carriers instantly.",
        impact: "Slashed monthly freight shipping costs by 18%.",
      },
    ],
    capabilities: [
      { title: "Real-Time GPS & Telemetry Ingestion", description: "High-speed WebSocket data processing tracking thousands of vehicle locations concurrently." },
      { title: "Offline Mobile Barcode & Signature Capture", description: "Local SQLite storage engines ensuring drivers can scan packages without cellular coverage." },
      { title: "Route Optimization Algorithms", description: "Spatial algorithms calculating optimal delivery paths considering traffic and package weight." },
      { title: "Multi-Carrier API Aggregation", description: "Unified API layer connecting FedEx, DHL, UPS, and local freight rate feeds." },
    ],
    process: [
      { step: "01", title: "Supply Chain & Dispatch Audit", description: "Auditing warehouse picking flows, driver dispatch methods, and carrier integrations." },
      { step: "02", title: "Architecture & Mobile UI Design", description: "Designing driver-friendly mobile apps and warehouse management dashboards." },
      { step: "03", title: "Core WMS & GPS App Engineering", description: "Building real-time tracking backends, mobile scanning apps, and dispatch engines." },
      { step: "04", title: "Carrier API & Hardware Integration", description: "Integrating barcode scanners, GPS feeds, and shipping partner APIs." },
      { step: "05", title: "Field & Offline Testing", description: "Testing mobile driver apps in poor cellular coverage areas and under high scanning loads." },
      { step: "06", title: "Fleet Rollout & SLA Support", description: "Staged deployment across vehicle fleets with 24/7 technical monitoring." },
    ],
    deliverables: [
      "Custom Warehouse & Fleet Software Platform",
      "Driver Mobile App (iOS & Android)",
      "Real-Time GPS Telemetry & Tracking Backend",
      "Multi-Carrier Freight Price Integration Middleware",
      "Digital Proof-of-Delivery Module",
      "Dedicated Technical SLA Support",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", items: ["Node.js", "Express", "FastAPI", "Python"] },
      { category: "Database", items: ["PostgreSQL", "Supabase", "MongoDB"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
    ],
    businessOutcomes: [
      { title: "14% Reduction in Fleet Fuel Costs", description: "Optimized route dispatching reduces unnecessary driver mileage." },
      { title: "Same-Day Invoicing Turnaround", description: "Digital proof-of-delivery signature capture eliminates billing delays." },
      { title: "38% Faster Warehouse Picking", description: "Shortest-path bin algorithms speed up order fulfillment." },
      { title: "18% Lower Freight Spend", description: "Automated multi-carrier rate comparison selects optimal shipping pricing." },
    ],
    relatedServicesSlugs: ["backend-api-development", "mobile-app-development", "business-automation", "cloud-devops-solutions"],
  },

  travel: {
    slug: "travel",
    name: "Travel & Hospitality",
    eyebrow: "Hospitality & Travel Software Engineering",
    headline: "Keyless Room Entry Apps, Dynamic Booking Engines, and Guests Self-Service.",
    shortDescription:
      "We design and build fast travel booking engines, keyless hotel room entry apps, guest concierge portals, and offline travel itinerary managers.",
    overview: {
      marketContext:
        "Travel & Hospitality engineering covers online booking engines (OTA), digital hotel room access, guest self-service portals, and itinerary management software.",
      challenges:
        "Hotels and travel operators face long front-desk check-in queues, high third-party OTA commission fees, rigid reservation engines, and poor guest mobile app engagement.",
      transformationUrgency:
        "Modern travelers demand frictionless mobile check-in, keyless room entry, direct booking perks, and instant digital concierge services.",
      howAeriformHelps:
        "We build keyless mobile door entry apps (NFC/Bluetooth), high-conversion direct booking engines, automated guest messaging, and offline itinerary managers.",
    },
    solutions: [
      { title: "Direct Hotel Booking Engines", description: "Fast, mobile-optimized reservation systems with direct payment capture and zero commission fees." },
      { title: "Keyless Digital Room Entry Apps", description: "NFC and Bluetooth mobile door unlocking app eliminating front-desk check-in queues." },
      { title: "Guest Concierge & In-Room Service Portals", description: "Allows hotel guests to order room service, book spa appointments, and request towels directly." },
      { title: "Offline Travel Itinerary Managers", description: "Stores flight tickets, hotel vouchers, and offline maps for access without roaming data." },
      { title: "Automated Guest Messaging & Alerts", description: "Instant WhatsApp & SMS booking confirmations, check-in instructions, and local guide triggers." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "Keyless Mobile Room Access System",
        problem: "Guests faced 30-minute front-desk check-in queues during peak afternoon arrival hours.",
        solution: "Deployed a mobile app allowing guests to complete check-in, verify ID, and unlock room doors via Bluetooth.",
        impact: "Bypassed front-desk queues for 65% of guests and improved guest satisfaction scores.",
      },
      {
        id: "Use Case 02",
        title: "High-Conversion Direct Booking Engine",
        problem: "The resort paid 18% commission fees to third-party travel agencies for web bookings.",
        solution: "Rebuilt the resort website direct booking engine with sub-second page speeds and dynamic rate calendar previews.",
        impact: "Increased direct web bookings by 40%, saving over $60,000 annually in OTA commission fees.",
      },
      {
        id: "Use Case 03",
        title: "In-App Room Service & Spa Ordering",
        problem: "Room service phone lines were constantly busy during breakfast hours, resulting in missed orders.",
        solution: "Built a digital room service portal accessible via QR codes in guest rooms, accepting Apple Pay payments.",
        impact: "Raised in-room food & beverage sales by 28%.",
      },
      {
        id: "Use Case 04",
        title: "Offline Mobile Itinerary Passbook",
        problem: "Travelers lost access to booking vouchers when roaming data failed in international destinations.",
        solution: "Created an offline mobile passbook syncing tickets and maps locally upon connection.",
        impact: "Eliminated ticket access complaints for international tour operators.",
      },
    ],
    capabilities: [
      { title: "NFC & Bluetooth Hardware Lock Integration", description: "Secure door lock API integrations for seamless keyless mobile room access." },
      { title: "High-Speed Reservation Engine Architecture", description: "Real-time room availability calendar syncing with property management systems (PMS)." },
      { title: "Multi-Currency & Multi-Language Support", description: "Localized checkout experiences supporting 20+ currencies and instant translation." },
      { title: "Offline Local Storage Sync", description: "Ensures travel passes and maps remain accessible without active cellular data." },
    ],
    process: [
      { step: "01", title: "Hospitality Journey Scoping", description: "Analyzing guest touchpoints, PMS software, and keyless hardware integration points." },
      { step: "02", title: "Mobile & Web UI Design", description: "Designing elegant touch-first interfaces for direct bookings and room controls." },
      { step: "03", title: "Booking Engine & Keyless Development", description: "Building high-speed booking backends, NFC door lock APIs, and concierge portals." },
      { step: "04", title: "PMS & Payment Integration", description: "Connecting Opera/PMS databases, Stripe payments, and WhatsApp messaging APIs." },
      { step: "05", title: "Security & Lock Hardware Testing", description: "Testing door lock Bluetooth reliability and PCI-compliant payment flows." },
      { step: "06", title: "Hotel Launch & SLA Support", description: "Rolling out across hotel properties with 24/7 technical monitoring." },
    ],
    deliverables: [
      "Custom Direct Booking Engine Codebase",
      "Keyless Mobile Access App (iOS & Android)",
      "In-Room QR Concierge Ordering Portal",
      "Property Management System (PMS) Integration Connectors",
      "Multi-Currency Payment Gateway Integration",
      "Dedicated Technical SLA Support",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", items: ["Node.js", "Express", "FastAPI", "Python"] },
      { category: "Database", items: ["PostgreSQL", "Supabase", "MongoDB"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
    ],
    businessOutcomes: [
      { title: "40% More Direct Web Bookings", description: "Fast, frictionless booking engines cut third-party OTA commission spend." },
      { title: "65% Keyless Mobile Check-ins", description: "Eliminate front-desk queues and elevate guest arrival experiences." },
      { title: "28% Higher In-Room Sales", description: "Frictionless QR ordering increases room service and spa revenue." },
      { title: "Zero Roaming Data Failures", description: "Offline itinerary passbooks keep guest vouchers accessible anywhere." },
    ],
    relatedServicesSlugs: ["website-web-app-development", "mobile-app-development", "application-performance-optimization", "backend-api-development"],
  },

  startups: {
    slug: "startups",
    name: "Startups & Scaleups",
    eyebrow: "Rapid MVP & High-Growth Product Engineering",
    headline: "Fast-Tracked MVP Builds, Scalable Foundations, and Senior Engineering Pods.",
    shortDescription:
      "We partner with ambitious founders to build production-ready MVPs in weeks, establish scalable technical foundations, and accelerate growth.",
    overview: {
      marketContext:
        "Startups & Scaleups product engineering focuses on rapid MVP development, multi-tenant SaaS architecture, scalable API backends, and iterative feature shipping.",
      challenges:
        "Early-stage startups struggle with limited engineering bandwidth, slow product iterations, technical debt from hasty prototypes, and scaling failures.",
      transformationUrgency:
        "To win market traction and secure funding, founders must launch polished MVPs quickly without sacrificing code quality or security.",
      howAeriformHelps:
        "We deploy senior engineering pods to ship production-ready web, mobile, and SaaS MVPs in weeks—built on clean, scalable architectures with zero technical debt.",
    },
    solutions: [
      { title: "Production-Ready MVP Engineering", description: "Full-stack web, mobile, or SaaS MVPs built and launched in 6 to 8 weeks with fixed milestones." },
      { title: "Multi-Tenant SaaS Foundation Setup", description: "PostgreSQL Row-Level Security, Stripe billing webhooks, team roles, and self-service onboarding." },
      { title: "Applied AI Feature Integration", description: "Enhance startup products with custom RAG knowledge search, AI assistants, and automated document parsing." },
      { title: "Scalable API & Database Architecture", description: "Clean microservices designed to scale from 100 to 100,000 active users effortlessly." },
      { title: "Automated CI/CD & Cloud Infrastructure", description: "Terraform IaC and GitHub Actions pipelines ensuring instant, zero-downtime code deployments." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "8-Week SaaS MVP Launch",
        problem: "A legaltech startup needed to launch its SaaS platform to secure its Seed funding round, but lacked an in-house engineering team.",
        solution: "Deployed a 3-person Aeriform pod to design, build, and deploy the entire multi-tenant SaaS platform with Stripe billing in 8 weeks.",
        impact: "Launched on schedule, acquired 25 paying pilot clients, and successfully closed a $1.8M Seed round.",
      },
      {
        id: "Use Case 02",
        title: "AI Feature Integration for Existing App",
        problem: "A B2B productivity startup was losing deals to competitors featuring AI search capabilities.",
        solution: "Integrated a custom RAG vector search engine into their existing web app in 3 weeks.",
        impact: "Won 12 enterprise pilot accounts within 30 days of launch.",
      },
      {
        id: "Use Case 03",
        title: "Scaleup Architecture Refactoring",
        problem: "A fast-growing fintech startup experienced database query locks during user spikes after a viral marketing campaign.",
        solution: "Refactored database queries, added Redis caching, and containerized backends with Docker/AWS.",
        impact: "Handled 10x user growth without a single crash or performance lag.",
      },
      {
        id: "Use Case 04",
        title: "Cross-Platform Mobile App Launch",
        problem: "A fitness startup needed simultaneous iOS and Android apps on a tight budget.",
        solution: "Engineered a React Native cross-platform app with offline sync and Apple/Google health kit integration.",
        impact: "Cut mobile development costs by 40% while launching on both app stores concurrently.",
      },
    ],
    capabilities: [
      { title: "Rapid 6 to 8 Week MVP Sprints", description: "Focused agile engineering delivering working production software fast." },
      { title: "Full IP & Source Code Ownership", description: "You own 100% of the codebase, repositories, and cloud accounts from commit #1." },
      { title: "Scalable Tech Stack Selection", description: "Modern React, Next.js, Node.js, and PostgreSQL stacks that scale predictably." },
      { title: "Senior Pod Embedding", description: "Dedicated pods of senior developers operating seamlessly as your internal engineering team." },
    ],
    process: [
      { step: "01", title: "Product Discovery & Scope Lockdown", description: "Refining core MVP requirements, defining user flows, and locking fixed milestones." },
      { step: "02", title: "Architecture & DB Setup", description: "Setting up database schemas, authentication, and cloud infrastructure." },
      { step: "03", title: "Agile 2-Week Engineering Sprints", description: "Iterative feature development with bi-weekly live demos and user testing." },
      { step: "04", title: "Third-Party API & Billing Integration", description: "Connecting Stripe, Auth0, email dispatchers, and analytics engines." },
      { step: "05", title: "Security Audit & Speed Tuning", description: "Executing vulnerability scans, performance optimization, and load checks." },
      { step: "06", title: "Production Launch & Scale Support", description: "Deploying to cloud infrastructure with continuous deployment and ongoing pod support." },
    ],
    deliverables: [
      "Production-Ready Software Codebase (Full IP Ownership)",
      "Multi-Tenant SaaS / Mobile / Web App Build",
      "Stripe Billing & User Management Engine",
      "Automated CI/CD Deployment Pipelines",
      "System Architecture & API Documentation",
      "Post-Launch Technical Support SLA",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", items: ["Node.js", "Express", "FastAPI", "Python"] },
      { category: "Database", items: ["PostgreSQL", "Supabase", "MongoDB"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
      { category: "AI", items: ["OpenAI", "Gemini", "RAG"] },
    ],
    businessOutcomes: [
      { title: "8-Week Time to Market", description: "Launch production-ready MVPs fast to capture early market feedback and revenue." },
      { title: "40% Lower Development Costs", description: "Cross-platform engineering and senior pods eliminate wasted engineering spend." },
      { title: "100% IP Ownership", description: "Complete ownership of codebases, repositories, and cloud setups from day one." },
      { title: "Scales to 100k+ Active Users", description: "Clean architecture foundations ready for rapid growth and investor diligence." },
    ],
    relatedServicesSlugs: ["saas-product-development", "website-web-app-development", "mobile-app-development", "ai-solutions-development"],
  },

  enterprise: {
    slug: "enterprise",
    name: "Enterprise & Global Operations",
    eyebrow: "Enterprise Software & Cloud Engineering",
    headline: "Bespoke Enterprise Systems, Legacy Modernization, and Bulletproof Reliability.",
    shortDescription:
      "We build custom enterprise operational systems, modernize legacy software, integrate complex APIs, and architect multi-region cloud infrastructure.",
    overview: {
      marketContext:
        "Enterprise engineering covers custom ERP modules, legacy mainframe modernization, cross-department approval engines, and high-availability cloud infrastructure.",
      challenges:
        "Enterprise organizations suffer from fragmented legacy systems, high operational drag, strict data security requirements, and slow release cycles.",
      transformationUrgency:
        "Global enterprises must modernize legacy codebases, automate complex approval workflows, and migrate to secure cloud environments to maintain market leadership.",
      howAeriformHelps:
        "We build custom enterprise management tools with granular role-based permissions, automated approval routing, legacy REST wrappers, and multi-region cloud failover.",
    },
    solutions: [
      { title: "Bespoke Enterprise Management Platforms", description: "Custom management systems built specifically around your internal operational rules and procedures." },
      { title: "Legacy System Modernization & REST Wrappers", description: "Wraps legacy COBOL, Oracle, or AS400 databases in modern RESTful endpoints for web apps." },
      { title: "Multi-Tier Corporate Approval Engines", description: "Automated routing for expense claims, vendor contracts, and capital expenditure sign-offs." },
      { title: "Multi-Region Cloud & Disaster Recovery", description: "Configures active-active cross-region database replication ensuring 99.99% system availability." },
      { title: "Central OAuth2 / SAML Single Sign-On (SSO)", description: "Unified identity service managing authentication across all enterprise internal applications." },
    ],
    useCases: [
      {
        id: "Use Case 01",
        title: "Legacy Mainframe REST Wrapper API",
        problem: "A global logistics firm couldn't build modern mobile apps because customer data was trapped in an AS400 mainframe.",
        solution: "Engineered a high-performance RESTful API middleware wrapper around the mainframe database.",
        impact: "Enabled rapid web and mobile app development while preserving legacy data integrity.",
      },
      {
        id: "Use Case 02",
        title: "Multi-Tier Corporate Expense Approval Engine",
        problem: "Paper-based expense approvals took 3 weeks to cycle through department heads, finance, and executive sign-offs.",
        solution: "Built a custom web workflow engine that routes expense requests automatically based on budget authorization tiers.",
        impact: "Reduced approval processing time from 21 days to 4 hours.",
      },
      {
        id: "Use Case 03",
        title: "Enterprise Multi-Region Active-Active Cloud",
        problem: "Server downtime during regional cloud outages cost the organization over $200,000 per hour in lost operational capacity.",
        solution: "Architected a multi-region active-active AWS environment with automated 10-second failover drills.",
        impact: "Achieved 99.99% system availability with zero outage downtime.",
      },
      {
        id: "Use Case 04",
        title: "Centralized Enterprise Audit Log Collector",
        problem: "Security auditors required a single immutable log repository recording all data modifications across 12 internal applications.",
        solution: "Deployed a high-throughput central logging pipeline storing encrypted event logs in read-only S3 buckets.",
        impact: "Passed 100% of corporate security and compliance audits.",
      },
    ],
    capabilities: [
      { title: "Granular Role-Based Access Control (RBAC)", description: "Multi-tier permissions ensuring employees access only authorized modules and records." },
      { title: "Legacy Infrastructure & Mainframe Integration", description: "Connecting modern web applications into legacy SQL Server, Oracle, or mainframe databases." },
      { title: "Multi-Region Cloud Failover & Disaster Recovery", description: "Architecting zero-downtime multi-region cloud infrastructure on AWS and GCP." },
      { title: "Enterprise Single Sign-On (SSO / SAML)", description: "Centralized identity authentication supporting Okta, Azure AD, and OAuth2." },
    ],
    process: [
      { step: "01", title: "Enterprise Architecture Audit", description: "Deep-dive workshops auditing legacy systems, security compliance, and departmental data flows." },
      { step: "02", title: "Target Architecture & Migration Specs", description: "Designing target microservices, database schemas, and API integration boundaries." },
      { step: "03", title: "Iterative Module Engineering", description: "Building enterprise features in 2-week sprints with strict code reviews and security testing." },
      { step: "04", title: "Legacy Data Migration & Connector Build", description: "Migrating historical databases and building legacy middleware connectors." },
      { step: "05", title: "Security Penetration & UAT Drills", description: "Executing penetration testing, UAT with operational teams, and failover drills." },
      { step: "06", title: "Staged Enterprise Rollout & SLA", description: "Phased rollout across divisions with staff training and 24/7 technical SLAs." },
    ],
    deliverables: [
      "Custom Enterprise Software Codebase (Full IP Ownership)",
      "Role-Based Access Control (RBAC) & SSO Identity Engine",
      "Legacy Infrastructure API Connectors & Middleware",
      "Multi-Region Cloud Infrastructure & Terraform Scripts",
      "Security Audit & Penetration Test Sign-off",
      "Comprehensive Admin & End-User SOP Documentation",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Ant Design", "Tailwind CSS"] },
      { category: "Backend", items: [".NET", "Java", "Node.js", "Express", "Python"] },
      { category: "Database", items: ["PostgreSQL", "MongoDB", "Supabase"] },
      { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
    ],
    businessOutcomes: [
      { title: "99.99% System Availability SLA", description: "Multi-region cloud architecture guarantees zero business interruption." },
      { title: "95% Faster Internal Approvals", description: "Automated routing cuts corporate sign-off times from weeks to hours." },
      { title: "Unlocked Legacy Mainframe Data", description: "REST wrappers allow modern web and mobile apps to consume legacy data safely." },
      { title: "Full Regulatory & Security Compliance", description: "Centralized audit logging ensures 100% pass rates on enterprise compliance audits." },
    ],
    relatedServicesSlugs: ["business-software-solutions", "cloud-devops-solutions", "backend-api-development", "business-automation"],
  },
};

// Helper mapping for slug normalization
export const INDUSTRY_SLUG_MAP: Record<string, string> = {
  healthcare: "healthcare",
  finance: "finance",
  education: "education",
  retail: "retail",
  manufacturing: "manufacturing",
  "real-estate": "real-estate",
  "artificial-intelligence": "artificial-intelligence",
  logistics: "logistics",
  travel: "travel",
  startups: "startups",
  enterprise: "enterprise",
};

export const INDUSTRY_NAME_TO_SLUG: Record<string, string> = {
  Healthcare: "healthcare",
  Finance: "finance",
  Education: "education",
  Retail: "retail",
  "Retail & E-Commerce": "retail",
  Manufacturing: "manufacturing",
  "Real Estate": "real-estate",
  "Artificial Intelligence": "artificial-intelligence",
  Logistics: "logistics",
  "Logistics & Supply Chain": "logistics",
  Travel: "travel",
  "Travel & Hospitality": "travel",
  Startups: "startups",
  "Startups & Scaleups": "startups",
  Enterprise: "enterprise",
  "Enterprise Operations": "enterprise",
};

export function getIndustrySlug(name: string): string {
  if (INDUSTRY_NAME_TO_SLUG[name]) return INDUSTRY_NAME_TO_SLUG[name];
  const cleaned = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return INDUSTRY_SLUG_MAP[cleaned] || cleaned;
}

export function getIndustryDetailBySlug(slug: string): IndustryDetail | undefined {
  const normalized = INDUSTRY_SLUG_MAP[slug] || INDUSTRY_SLUG_MAP[slug.toLowerCase()] || slug.toLowerCase();
  return INDUSTRY_DETAILS[normalized];
}
