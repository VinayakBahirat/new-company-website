export const COMPANY = {
  name: "Aeriform Systems",
  short: "Aeriform",
  tagline: "Engineering studio for enterprise software, AI products and platforms.",
  email: "studio@aeriform.systems",
  phone: "+1 (415) 555-0182",
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
  { value: 11, suffix: "+", label: "Years engineering" },
  { value: 240, suffix: "+", label: "Platforms delivered" },
  { value: 68, suffix: "", label: "Engineers on staff" },
  { value: 19, suffix: "", label: "Countries served" },
];

export const STATS = [
  { value: 11, suffix: "+", label: "Years of engineering", note: "Compounded platform experience" },
  { value: 240, suffix: "+", label: "Projects delivered", note: "From zero-to-one to re-platforms" },
  { value: 68, suffix: "", label: "Engineers", note: "Product, AI, infra and design" },
  { value: 19, suffix: "", label: "Countries served", note: "Distributed delivery pods" },
  { value: 42, suffix: "", label: "Technologies mastered", note: "Depth over breadth, always" },
  { value: 98.4, decimals: 1, suffix: "%", label: "Partner satisfaction", note: "Rolling twelve-month average" },
  { value: 99.98, decimals: 2, suffix: "%", label: "Deployment success", note: "Across production pipelines" },
  { value: 98, suffix: "/100", label: "Median performance score", note: "Measured on shipped builds" },
];

export const SERVICES = [
  {
    slug: "enterprise",
    title: "Enterprise Software",
    summary:
      "Mission-critical systems engineered for scale, auditability and decade-long lifespans.",
    points: ["Domain-driven architecture", "Role-based access control", "Zero-downtime migrations"],
  },
  {
    slug: "ai",
    title: "AI Product Development",
    summary:
      "LLM applications, retrieval pipelines and agents that survive contact with real production data.",
    points: ["RAG and vector search", "Evaluation harnesses", "Guardrails and observability"],
  },
  {
    slug: "saas",
    title: "SaaS Platform Engineering",
    summary:
      "Multi-tenant products with billing, entitlements and analytics designed in from day one.",
    points: ["Tenant isolation", "Usage metering", "Self-serve onboarding"],
  },
  {
    slug: "web",
    title: "Custom Web Applications",
    summary:
      "Interfaces with the responsiveness of native software and the reach of the browser.",
    points: ["React and Next.js", "Design systems", "Sub-second interactions"],
  },
  {
    slug: "mobile",
    title: "Mobile Applications",
    summary: "Cross-platform apps that share a codebase without sharing compromises.",
    points: ["Offline-first sync", "Native module bridges", "Release automation"],
  },
  {
    slug: "cloud",
    title: "Cloud & Platform Ops",
    summary: "Infrastructure as a product: reproducible, observable and cost-aware.",
    points: ["AWS and containers", "CI/CD pipelines", "Cost and capacity modelling"],
  },
  {
    slug: "automation",
    title: "Automation Systems",
    summary: "Workflow engines that remove manual steps from operations without hiding them.",
    points: ["Event-driven orchestration", "Human-in-the-loop review", "Audit trails"],
  },
  {
    slug: "api",
    title: "API & Backend Engineering",
    summary: "Contracts, throughput and data models that hold up under a decade of change.",
    points: ["Typed API contracts", "Queueing and workers", "Schema evolution"],
  },
  {
    slug: "performance",
    title: "Performance Optimization",
    summary: "Profiling and rebuilding the paths that decide whether software feels expensive.",
    points: ["Render and query budgets", "Edge caching", "Continuous regression checks"],
  },
];

export const PROCESS = [
  { step: "01", title: "Discovery", body: "Constraints, stakeholders and the real problem behind the brief." },
  { step: "02", title: "Planning", body: "Scope shaped into milestones with explicit trade-offs and budgets." },
  { step: "03", title: "UX Research", body: "Interviews and task analysis with the people who use the system daily." },
  { step: "04", title: "Wireframe", body: "Low-fidelity flows pressure-tested before a pixel is committed." },
  { step: "05", title: "Design", body: "Systemised interfaces: tokens, components, states, motion." },
  { step: "06", title: "Architecture", body: "Data models, service boundaries and failure modes decided up front." },
  { step: "07", title: "Development", body: "Two-week increments, trunk-based, always deployable." },
  { step: "08", title: "Testing", body: "Unit, integration, load and adversarial passes on every release." },
  { step: "09", title: "Deployment", body: "Progressive rollout with instant rollback and live telemetry." },
  { step: "10", title: "Maintenance", body: "Long-horizon ownership: upgrades, tuning and roadmap support." },
];

export const TECH_GROUPS = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "React Three Fiber", "Framer Motion"],
  },
  { group: "Backend", items: ["Node.js", "Express", "FastAPI"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Vector Search"] },
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
  { title: "Innovation", body: "We prototype the uncertain part first, before it becomes expensive." },
  { title: "Quality", body: "Reviewed, typed, tested. Craft is a delivery strategy, not a luxury." },
  { title: "Transparency", body: "Live boards, honest estimates, and bad news delivered early." },
  { title: "Ownership", body: "We carry the pager for what we ship until it is stable." },
  { title: "Partnership", body: "Embedded pods that work inside your rituals, not around them." },
];

export const DIFFERENTIATORS = [
  { title: "Fast delivery", body: "First production increment inside six weeks, not six months." },
  { title: "Scalable architecture", body: "Systems sized for the traffic after the growth curve bends." },
  { title: "Modern technologies", body: "Current, boring-where-it-counts stacks with a clear upgrade path." },
  { title: "Experienced engineers", body: "Senior-weighted pods. No hidden juniors billed as leads." },
  { title: "Transparent process", body: "Shared backlog, shared metrics, shared definition of done." },
  { title: "Long-term partnership", body: "Most engagements renew because the system keeps compounding." },
  { title: "Performance first", body: "Budgets enforced in CI, not audited after launch." },
  { title: "Clean code", body: "Readable, typed, documented. Handover is a feature." },
  { title: "Security", body: "Threat modelling, least privilege and dependency hygiene by default." },
  { title: "Maintainability", body: "Low-ceremony systems your own team can extend confidently." },
];

export const PROJECTS = [
  {
    slug: "atlas-grid",
    name: "Atlas Grid",
    category: "Enterprise Platform",
    goal: "Unify fragmented operational tooling into one governed control plane.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    features: ["Role-aware workspaces", "Live operational telemetry", "Policy-driven approvals"],
    metric: "3.4× faster operational cycle time",
    accent: "from-[oklch(0.803_0.1567_74.5)] to-[oklch(0.62_0.14_45)]",
  },
  {
    slug: "helio-reason",
    name: "Helio Reason",
    category: "AI Product",
    goal: "Turn a decade of unstructured internal documents into an answerable knowledge surface.",
    tech: ["FastAPI", "RAG", "Vector Search", "LLM"],
    features: ["Grounded citations", "Evaluation harness", "Human review queue"],
    metric: "91% answer-grounding accuracy",
    accent: "from-[oklch(0.7_0.15_255)] to-[oklch(0.55_0.16_300)]",
  },
  {
    slug: "meridian-ledger",
    name: "Meridian Ledger",
    category: "SaaS Platform",
    goal: "Launch a multi-tenant financial operations product with usage-based billing.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    features: ["Tenant isolation", "Metered billing", "Immutable audit log"],
    metric: "Zero-downtime across 14 releases",
    accent: "from-[oklch(0.72_0.14_165)] to-[oklch(0.55_0.12_200)]",
  },
  {
    slug: "northline-flow",
    name: "Northline Flow",
    category: "Automation System",
    goal: "Replace manual coordination across a distributed logistics network.",
    tech: ["Node.js", "MongoDB", "AWS", "CI/CD"],
    features: ["Event-driven orchestration", "Exception dashboards", "Predictive routing"],
    metric: "62% fewer manual interventions",
    accent: "from-[oklch(0.78_0.12_95)] to-[oklch(0.6_0.13_60)]",
  },
  {
    slug: "vantage-mobile",
    name: "Vantage Field",
    category: "Mobile Application",
    goal: "Give field teams a fully offline workflow with conflict-free sync.",
    tech: ["React Native", "TypeScript", "GraphQL"],
    features: ["Offline-first sync", "Signature capture", "Background upload"],
    metric: "Sub-2s cold start on mid-tier devices",
    accent: "from-[oklch(0.75_0.13_20)] to-[oklch(0.55_0.15_350)]",
  },
  {
    slug: "orbital-mesh",
    name: "Orbital Mesh",
    category: "Cloud Infrastructure",
    goal: "Consolidate ad-hoc environments into a reproducible platform layer.",
    tech: ["Docker", "AWS", "CI/CD", "Terraform"],
    features: ["Ephemeral environments", "Cost attribution", "Golden pipelines"],
    metric: "38% reduction in cloud spend",
    accent: "from-[oklch(0.68_0.11_230)] to-[oklch(0.5_0.1_265)]",
  },
];

export const ROLES = [
  { title: "Senior Product Engineer", team: "Product", location: "Remote · EU / US", type: "Full-time" },
  { title: "AI Systems Engineer", team: "Applied AI", location: "San Francisco / Remote", type: "Full-time" },
  { title: "Platform & Cloud Engineer", team: "Infrastructure", location: "Amsterdam / Remote", type: "Full-time" },
  { title: "Senior Product Designer", team: "Design", location: "Remote · Global", type: "Full-time" },
  { title: "Engineering Manager", team: "Delivery", location: "Singapore / Remote", type: "Full-time" },
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
