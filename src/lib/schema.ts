/**
 * schema.ts — Centralized JSON-LD Schema.org builder functions
 *
 * Usage: JSON.stringify(organizationSchema()) inside
 * <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ... }} />
 */

const DOMAIN = "https://sumanixsolutions.com";
const LOGO = `${DOMAIN}/favicon.png`;
const OG_IMAGE = `${DOMAIN}/og-image.png`;

// ---------------------------------------------------------------------------
// Organization — injected on every page via __root.tsx
// ---------------------------------------------------------------------------
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sumanix Solutions",
    url: DOMAIN,
    logo: LOGO,
    email: "hello@sumanixsolutions.com",
    telephone: "+91-7709044575",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    // Add real social / profile URLs here once available:
    sameAs: [],
  };
}

// ---------------------------------------------------------------------------
// LocalBusiness — home page only (extends Organization)
// ---------------------------------------------------------------------------
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sumanix Solutions",
    url: DOMAIN,
    logo: LOGO,
    image: OG_IMAGE,
    email: "hello@sumanixsolutions.com",
    telephone: "+91-7709044575",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pune",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "416416",
      addressCountry: "IN",
    },
    areaServed: ["India", "United States", "United Kingdom", "Australia", "Canada"],
    priceRange: "₹₹",
    description:
      "Sumanix Solutions builds custom web apps, AI systems, SaaS platforms, mobile apps, and enterprise software for businesses across India and globally.",
    knowsAbout: [
      "Web Application Development",
      "AI Solutions Development",
      "SaaS Product Development",
      "Mobile App Development",
      "Business Software Solutions",
      "Cloud & DevOps",
      "Business Automation",
      "Backend & API Development",
      "Application Performance Optimization",
    ],
    sameAs: [],
  };
}

// ---------------------------------------------------------------------------
// Service — individual service detail pages
// ---------------------------------------------------------------------------
export function serviceSchema(service: {
  title: string;
  shortDescription: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.shortDescription,
    url: `${DOMAIN}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Sumanix Solutions",
      url: DOMAIN,
    },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${DOMAIN}/contact`,
    },
  };
}

// ---------------------------------------------------------------------------
// BreadcrumbList — all non-home pages
// ---------------------------------------------------------------------------
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// BlogPosting — individual blog post pages
// ---------------------------------------------------------------------------
export function blogPostingSchema(post: {
  title: string;
  slug: string;
  summary: string;
  metaDescription?: string;
  date: string;
  author: string;
  image?: string;
  category: string;
}) {
  const dateIso = new Date(post.date).toISOString().split("T")[0];
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.summary,
    url: `${DOMAIN}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DOMAIN}/blog/${post.slug}`,
    },
    image: post.image
      ? post.image.startsWith("http")
        ? post.image
        : `${DOMAIN}${post.image}`
      : OG_IMAGE,
    datePublished: dateIso,
    dateModified: dateIso,
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Sumanix Solutions",
      url: DOMAIN,
      logo: {
        "@type": "ImageObject",
        url: LOGO,
      },
    },
  };
}

// ---------------------------------------------------------------------------
// FAQPage — home page FAQ section (and any page with a FAQ block)
// The visible FAQ text and the schema text MUST match exactly.
// ---------------------------------------------------------------------------
export function faqPageSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
