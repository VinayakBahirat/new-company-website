import { createFileRoute, Link } from "@tanstack/react-router";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal } from "@/components/site/motion-primitives";
import { Section, SectionHeading } from "@/components/site/primitives";
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

const TITLE = "Industries We Serve — Enterprise, Fintech, Healthcare & AI Solutions | Aeriform Systems";
const DESCRIPTION =
  "We build custom software, AI systems, SaaS platforms, and mobile apps tailored for Healthcare, Finance, Education, Retail, Logistics, Manufacturing, Real Estate, and Enterprise operations.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: IndustriesOverviewPage,
});

function IndustriesOverviewPage() {
  const industriesList = Object.values(INDUSTRY_DETAILS);

  const complianceBadges: Record<string, string> = {
    healthcare: "HIPAA & HITECH Compliant",
    finance: "SOC2 & PCI-DSS Hardened",
    education: "WCAG 2.1 & SIS Integrated",
    retail: "PCI-DSS & Headless Commerce",
    manufacturing: "Industrial IoT & MES Ready",
    "real-estate": "PropTech & WebGL Powered",
    "artificial-intelligence": "Deterministic RAG & Zero-Hallucination",
    logistics: "Fleet Telemetry & WMS Ready",
    travel: "PMS Sync & Keyless Access",
    startups: "Multi-Tenant & Rapid MVP",
    enterprise: "Active-Active Multi-Region",
  };

  return (
    <>
      {/* HERO SECTION */}
      <Section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <MeshBackground />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              <Building2 className="h-3.5 w-3.5" />
              Domain Engineering Practice
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-foreground">
              Industry-Specific Software & AI Engineering.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Off-the-shelf software rarely fits complex industry workflows, compliance standards, and security demands. We engineer bespoke digital platforms built 100% around your domain operations.
            </p>
          </Reveal>

          {/* Compliance & Domain Bar */}
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-6 border-y border-border/80 py-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">HIPAA · SOC2 · PCI-DSS · ISO27001 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">100% IP & Source Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">99.99% Infrastructure Uptime SLA</span>
              </div>
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

      {/* LEAD FORM SECTION */}
      <Section id="industry-enquiry" className="py-20 sm:py-28 border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_2px_var(--ring)]" />
                Industry Consultation
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Discuss Your Industry Software Strategy.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Tell us which industry you operate in and what software challenges you are facing. We will put together a custom industry solution proposal sent within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3">
                {[
                  "Response sent within 24 hours",
                  "Domain-expert technical consultation",
                  "Compliance & security evaluation included",
                  "Work directly with senior engineers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Zap className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-[1.8rem] border border-border bg-surface/30 p-7 sm:p-10">
              <LeadForm heading="Get an Industry Solution Proposal" />
            </div>
          </Reveal>
        </div>
      </Section>

      <WhatsAppFab />
    </>
  );
}
