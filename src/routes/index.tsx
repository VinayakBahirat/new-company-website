import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta } from "@/components/site/primitives";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { localBusinessSchema, faqPageSchema } from "@/lib/schema";
import { FAQS } from "@/content/site";

// Import modular homepage components
import { Hero } from "@/components/site/home/hero";
import { StudioIntro } from "@/components/site/home/studio-intro";
import { StatsBand } from "@/components/site/home/stats-band";
import { CapabilityGrid } from "@/components/site/home/capability-grid";
import { ProblemsWeSolveSection } from "@/components/site/home/problems-we-solve";
import { WorkPreview } from "@/components/site/home/work-preview";
import { TechSection } from "@/components/site/home/tech-section";
import { MarqueeStrip } from "@/components/site/home/marquee-strip";
import { WhoWeWorkWithSection } from "@/components/site/home/who-we-work-with";
import { ProcessTimeline } from "@/components/site/home/process-timeline";
import { AgencyPartnershipSection } from "@/components/site/home/agency-partnership";
import { FaqSection } from "@/components/site/home/faq-section";
import { ClientTestimonials } from "@/components/site/home/client-testimonials";

const DOMAIN = "https://sumanixsolutions.com";
const OG_IMAGE = `${DOMAIN}/og-image.png`;
const TITLE = "Software & AI Development Company in Sangli | Sumanix Solutions";
const DESCRIPTION =
  "Sumanix Solutions builds custom web apps, AI systems, SaaS platforms, and mobile apps for businesses across India, US, and UK. Based in Sangli, Maharashtra. Get a free consultation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:url", content: DOMAIN },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: DOMAIN },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const localBizSchema = JSON.stringify(localBusinessSchema());
  const faqSchema = JSON.stringify(faqPageSchema(FAQS));

  return (
    <>
      {/* LocalBusiness JSON-LD — home page only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: localBizSchema }}
      />
      {/* FAQPage JSON-LD — matches the visible FAQ section below */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <Hero />
      <StudioIntro />
      <StatsBand />
      <CapabilityGrid />
      <MarqueeStrip />
      {/* <ProblemsWeSolveSection /> */}
      <WorkPreview />
      {/* <TechSection /> */}

      <WhoWeWorkWithSection />
      <ProcessTimeline />
      <ClientTestimonials />
      {/* <AgencyPartnershipSection /> */}
      <FaqSection />

      <ClosingCta />
      <WhatsAppFab />
    </>
  );
}
