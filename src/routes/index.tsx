import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta } from "@/components/site/primitives";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

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

const TITLE = "Sumanix Solutions — Enterprise Software & AI Product Engineering";
const DESCRIPTION =
  "We help startups, SaaS companies, and agencies ship high-quality, production-ready web applications in record time by combining expert human engineering with advanced AI integration. We specialize in React & Next.js frontends, Node.js APIs, and practical AI features that solve real business problems.";
const OG_IMAGE = "https://vinayakbahiartwebsite.netlify.app/og-image.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
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
