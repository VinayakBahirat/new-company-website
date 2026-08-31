import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "@/lib/schema";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal } from "@/components/site/motion-primitives";
import { ClosingCta, Section, SectionHeading } from "@/components/site/primitives";
import { LeadForm } from "@/components/site/lead-form";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { INDUSTRY_DETAILS } from "@/content/industry-details";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Lock,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const DOMAIN = "https://sumanixsolutions.com";
const OG_IMAGE = `${DOMAIN}/og-image.png`;
const TITLE = "Industry Software Solutions — Healthcare to Finance | Sumanix Solutions";
const DESCRIPTION =
  "Custom software, AI, and cloud solutions built for healthcare, finance, retail, manufacturing, logistics, real estate, and more. Sumanix Solutions, Pune, Maharashtra.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:url", content: `${DOMAIN}/industries` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${DOMAIN}/industries` },
    ],
  }),
  component: IndustriesOverviewPage,
});

function IndustriesOverviewPage() {
  const industriesList = Object.values(INDUSTRY_DETAILS);
  const breadcrumb = JSON.stringify(breadcrumbSchema([
    { name: "Home", url: DOMAIN },
    { name: "Industries", url: `${DOMAIN}/industries` },
  ]));

  const complianceBadges: Record<string, string> = {
    healthcare: "PATIENT DATA SECURITY FOCUSED",
    finance: "SECURITY-FIRST ARCHITECTURE",
    education: "SIS INTEGRATION READY",
    retail: "HEADLESS COMMERCE ARCHITECTURE",
    manufacturing: "Industrial IoT & MES Ready",
    "real-estate": "PropTech & WebGL Powered",
    "artificial-intelligence": "DETERMINISTIC RAG ARCHITECTURE",
    logistics: "Fleet Telemetry & WMS Ready",
    travel: "PMS Sync & Keyless Access",
    startups: "Multi-Tenant & Rapid MVP",
    enterprise: "Active-Active Multi-Region",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
      {/* HERO SECTION */}
      <Section className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              <Building2 className="h-3.5 w-3.5" />
              Domain Engineering Practice
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl text-foreground">
              Industry-Specific Software & AI Engineering.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Off-the-shelf software rarely fits complex industry workflows, compliance standards, and security demands. We engineer bespoke digital platforms built 100% around your domain operations.
            </p>
          </Reveal>

          {/* Compliance & Domain Bar */}
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: Lock, label: "100% IP & Source Code Ownership" },
                { icon: ShieldCheck, label: "Built With Compliance-Aware Practices" },
                { icon: Zap, label: "Senior Engineers Only" },
              ].map((badge) => {
                const Icon = badge.icon;
                return (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-glass px-4 py-2 text-xs font-medium text-muted-foreground"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {badge.label}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* NON-CARD FULL-WIDTH HORIZONTAL SHOWCASE ROWS */}
      <Section className="py-12">
        <SectionHeading
          eyebrow="Industry Sectors"
          title="Built for High-Stakes Domains."
          body="Explore our dedicated engineering practices across 11 key industries."
        />

        <div className="mt-12 space-y-0 divide-y divide-border/70 border-y border-border/70">
          {industriesList.map((ind, i) => {
            const badge = complianceBadges[ind.slug] || "Enterprise Compliant";
            const topOutcome = ind.businessOutcomes[0];

            return (
              <Reveal key={ind.slug} delay={i * 0.03}>
                <div className="group relative py-10 transition-colors duration-300 hover:bg-surface/30 px-4 sm:px-8 rounded-2xl">
                  <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                    {/* Left Column: Index, Title, Badge, Description */}
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-0.5 font-mono text-[0.7rem] font-semibold text-primary uppercase tracking-wider">
                          {badge}
                        </span>
                      </div>

                      <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl text-foreground group-hover:text-primary transition-colors">
                        {ind.name}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base max-w-2xl">
                        {ind.shortDescription}
                      </p>

                      {topOutcome && (
                        <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary">
                          <TrendingUp className="h-3.5 w-3.5" />
                          <span>Impact: {topOutcome.title}</span>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Key Solutions List & Direct Action Button */}
                    <div className="flex flex-col justify-between gap-6 lg:border-l lg:border-border/60 lg:pl-8">
                      <div>
                        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground block mb-3 font-semibold">
                          Core Solutions Engineered:
                        </span>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                          {ind.solutions.slice(0, 3).map((sol) => (
                            <li key={sol.title} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                              <span className="font-medium text-foreground">{sol.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <Link
                          to="/industries/$slug"
                          params={{ slug: ind.slug }}
                          className="inline-flex items-center gap-2 rounded-xl bg-surface/60 border border-border px-5 py-2.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        >
                          Explore {ind.name} Practice
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <ClosingCta />

      <WhatsAppFab />
    </>
  );
}
