#!/usr/bin/env node
/**
 * generate-sitemap.mjs
 * Generates public/sitemap.xml at build time.
 * Run with: node scripts/generate-sitemap.mjs
 * Hooked to `prebuild` in package.json so it runs automatically before every build.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "public", "sitemap.xml");
const DOMAIN = "https://sumanixsolutions.com";
const TODAY = new Date().toISOString().split("T")[0];

// ---------------------------------------------------------------------------
// Static routes (manually defined)
// ---------------------------------------------------------------------------
const STATIC_ROUTES = [
  { url: "/",          changefreq: "weekly",  priority: "1.0" },
  { url: "/services",  changefreq: "weekly",  priority: "0.9" },
  { url: "/industries",changefreq: "weekly",  priority: "0.9" },
  { url: "/work",      changefreq: "monthly", priority: "0.8" },
  { url: "/studio",    changefreq: "monthly", priority: "0.8" },
  { url: "/blog",      changefreq: "weekly",  priority: "0.8" },
  { url: "/contact",   changefreq: "monthly", priority: "0.8" },
  { url: "/careers",   changefreq: "monthly", priority: "0.7" },
  { url: "/privacy",   changefreq: "yearly",  priority: "0.3" },
  { url: "/terms",     changefreq: "yearly",  priority: "0.3" },
];

// ---------------------------------------------------------------------------
// Dynamic: service slugs
// ---------------------------------------------------------------------------
const SERVICE_SLUGS = [
  "website-web-app-development",
  "ai-solutions-development",
  "mobile-app-development",
  "business-software-solutions",
  "saas-product-development",
  "business-automation",
  "backend-api-development",
  "cloud-devops-solutions",
  "application-performance-optimization",
];

// ---------------------------------------------------------------------------
// Dynamic: industry slugs
// ---------------------------------------------------------------------------
const INDUSTRY_SLUGS = [
  "healthcare",
  "finance",
  "education",
  "retail",
  "manufacturing",
  "real-estate",
  "artificial-intelligence",
  "logistics",
  "travel",
  "startups",
  "enterprise",
];

// ---------------------------------------------------------------------------
// Dynamic: blog post slugs (imported from site.ts content)
// ---------------------------------------------------------------------------
const BLOG_SLUGS = [
  "building-healthcare-software-compliance-first",
  "why-we-default-to-nextjs-for-saas",
  "manufacturing-workflows-businesses-automate-first",
  "building-custom-real-estate-platform-what-matters",
  "ai-chatbots-for-retail-ecommerce-practical-guide",
  "build-mvp-without-building-wrong-thing",
];

// ---------------------------------------------------------------------------
// Build all URLs
// ---------------------------------------------------------------------------
const allUrls = [
  ...STATIC_ROUTES.map((r) => ({
    loc: `${DOMAIN}${r.url}`,
    lastmod: TODAY,
    changefreq: r.changefreq,
    priority: r.priority,
  })),
  ...SERVICE_SLUGS.map((slug) => ({
    loc: `${DOMAIN}/services/${slug}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.8",
  })),
  ...INDUSTRY_SLUGS.map((slug) => ({
    loc: `${DOMAIN}/industries/${slug}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.8",
  })),
  ...BLOG_SLUGS.map((slug) => ({
    loc: `${DOMAIN}/blog/${slug}`,
    lastmod: TODAY,
    changefreq: "weekly",
    priority: "0.7",
  })),
];

// ---------------------------------------------------------------------------
// Render XML
// ---------------------------------------------------------------------------
const entries = allUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries}
</urlset>
`;

fs.writeFileSync(OUTPUT, xml, "utf8");
console.log(`✅ sitemap.xml generated (${allUrls.length} URLs) → ${OUTPUT}`);
