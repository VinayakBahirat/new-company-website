import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "@/lib/schema";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal } from "@/components/site/motion-primitives";
import { ClosingCta, Section, SectionHeading } from "@/components/site/primitives";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { getIndustryDetailBySlug } from "@/content/industry-details";
import { getServiceDetailBySlug } from "@/content/service-details";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const DOMAIN = "https://sumanixsolutions.com";
const OG_IMAGE = `${DOMAIN}/og-image.png`;

export const Route = createFileRoute("/industries_/$slug")({
  head: ({ params }) => {
    const ind = getIndustryDetailBySlug(params.slug);
    const title = ind
      ? `${ind.name} Software Solutions | Sumanix Solutions`
      : "Industry Not Found | Sumanix Solutions";
    const description = ind
      ? ind.shortDescription.slice(0, 160)
      : "Custom software engineering, AI solutions, and cloud systems built for industry leaders.";
    const canonical = ind
      ? `${DOMAIN}/industries/${params.slug}`
      : `${DOMAIN}/industries`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: OG_IMAGE },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [
        { rel: "canonical", href: canonical },
      ],
    };
  },
  component: IndustryDetailPage,
});

function IndustryDetailPage() {
  const { slug } = Route.useParams();
  const industry = getIndustryDetailBySlug(slug);

  if (!industry) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 text-4xl font-semibold text-gradient">Industry Not Found</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            The industry page you are looking for does not exist or has been updated.
          </p>
          <div className="mt-8">
            <Link
              to="/industries"
              className="focus-ring inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Back to Industries Overview
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [activeUseCaseIndex, setActiveUseCaseIndex] = useState(0);
  const activeUseCase = industry.useCases[activeUseCaseIndex] || industry.useCases[0];

  const breadcrumb = JSON.stringify(breadcrumbSchema([
    { name: "Home", url: DOMAIN },
    { name: "Industries", url: `${DOMAIN}/industries` },
    { name: industry.name, url: `${DOMAIN}/industries/${slug}` },
  ]));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
      {/* 1. HERO SECTION (EDITORIAL SPLIT - NO CARDS) */}
      <Section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <MeshBackground />
        <div className="relative border-b border-border/80 pb-16">
          <Reveal>
            <Link
              to="/industries"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              All Industries Overview
            </Link>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <Reveal delay={0.04}>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                  <Building2 className="h-3.5 w-3.5" />
                  {industry.eyebrow}
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl text-foreground">
                  {industry.name} Software & AI Engineering
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-4 text-balance font-display text-xl font-medium text-primary sm:text-2xl">
                  {industry.headline}
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {industry.shortDescription}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#industry-enquiry"
                    className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Start an Industry Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#industry-solutions"
                    className="focus-ring inline-flex items-center gap-2 rounded-2xl border border-border bg-glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface/80"
                  >
                    View Solutions Portfolio
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Editorial Specs List (No Card Border) */}
            <Reveal delay={0.12}>
              <div className="space-y-4 rounded-2xl bg-surface/30 p-6 border border-border/80 lg:border-l-2 lg:border-l-primary">
                <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                  <Lock className="h-4 w-4 text-primary" />
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">
                    Domain Enclave Specifications
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Key Business Outcome</span>
                    <span className="font-semibold text-primary">{industry.businessOutcomes[0]?.title || "High Impact"}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 pt-2.5">
                    <span className="text-muted-foreground">Architecture Paradigm</span>
                    <span className="font-semibold text-foreground">Zero-Trust · Multi-Tenant</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 pt-2.5">
                    <span className="text-muted-foreground">Codebase IP Ownership</span>
                    <span className="font-semibold text-foreground">100% Client Owned</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 pt-2.5">
                    <span className="text-muted-foreground">Engineering Staffing</span>
                    <span className="font-semibold text-foreground">Senior Pods (3-7 Engineers)</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 pt-2.5">
                    <span className="text-muted-foreground">Infrastructure Uptime</span>
                    <span className="font-semibold text-primary">99.99% Availability SLA</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 2. DUAL-COLUMN EDITORIAL MATRIX (CHALLENGES VS ADVANTAGE - NO CARDS) */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Market Dynamics"
          title={`Addressing Core Obstacles in ${industry.name}.`}
          body="A strategic overview of market friction and Sumanix's engineered response."
        />

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:divide-x md:divide-border/80">
          {/* Left Column: Industry Challenges */}
          <Reveal delay={0.05}>
            <div className="space-y-6 md:pr-8">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  Industry Bottlenecks & Friction
                </h3>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
                  Market Context
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {industry.overview.marketContext}
                </p>
              </div>

              <div className="border-t border-border/40 pt-4">
                <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
                  Operational Challenges
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {industry.overview.challenges}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Sumanix Advantage */}
          <Reveal delay={0.1}>
            <div className="space-y-6 md:pl-8">
              <div className="flex items-center gap-3 border-b border-primary/20 pb-4">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  The Sumanix Strategic Edge
                </h3>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-primary uppercase tracking-wider">
                  Transformation Urgency
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {industry.overview.transformationUrgency}
                </p>
              </div>

              <div className="border-t border-border/40 pt-4">
                <h4 className="font-display text-sm font-semibold text-primary uppercase tracking-wider">
                  How We Deliver Value
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {industry.overview.howSumanixHelps}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. SOLUTIONS PORTFOLIO (FULL-WIDTH NUMBERED ROWS - NO CARDS) */}
      <Section id="industry-solutions" className="py-16 sm:py-24 border-t border-border/80">
        <SectionHeading
          eyebrow="Solutions Portfolio"
          title={`Custom Software Solutions Built for ${industry.name}.`}
          body="Proven digital platforms and software modules built specifically for this industry."
        />

        <div className="mt-12 divide-y divide-border/70 border-y border-border/70">
          {industry.solutions.map((sol, index) => (
            <Reveal key={sol.title} delay={index * 0.04}>
              <div className="group py-8 transition-colors duration-300 hover:bg-surface/30 px-4 sm:px-6 rounded-xl">
                <div className="grid gap-6 sm:grid-cols-[80px_1fr_auto] sm:items-center">
                  <span className="font-mono text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {sol.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-3xl">
                      {sol.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a
                      href="#industry-enquiry"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      Request module quote →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. CASE STUDY SPOTLIGHT (FULL-WIDTH BANNER & SIDE-BY-SIDE COLUMNS) */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Case Study Spotlight"
          title="Real-World Business Impact."
          body="Select a case study to inspect the technical problem, engineered solution, and measured outcome."
        />

        {/* Case Study Tab Bar */}
        <div className="mt-10 flex flex-wrap gap-2.5 border-b border-border pb-4">
          {industry.useCases.map((uc, idx) => {
            const isActive = idx === activeUseCaseIndex;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveUseCaseIndex(idx)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border border-border/80 bg-surface/30 text-muted-foreground hover:bg-surface/80 hover:text-foreground"
                }`}
              >
                <Target className="h-3.5 w-3.5" />
                {uc.id}: {uc.title.split(" ").slice(0, 3).join(" ")}...
              </button>
            );
          })}
        </div>

        {/* Spotlight Details */}
        {activeUseCase && (
          <div className="mt-8 border-y border-border/80 py-10">
            {/* Case Study Title */}
            <div>
              <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                {activeUseCase.id} Case Study
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl lg:text-4xl text-foreground">
                {activeUseCase.title}
              </h3>
            </div>

            {/* Problem, Solution & Impact Grid */}
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-3">
                <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                  The Problem
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {activeUseCase.problem}
                </p>
              </div>

              <div className="space-y-3 md:border-l md:border-border/80 md:pl-8">
                <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block">
                  The Sumanix Engineering Solution
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {activeUseCase.solution}
                </p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 space-y-3 md:col-span-2 lg:col-span-1 lg:border-l-0">
                <span className="font-mono text-[0.65rem] font-semibold text-primary uppercase tracking-wider block">
                  Measured Business Impact
                </span>
                <p className="font-display text-base font-bold text-foreground leading-snug sm:text-lg lg:text-base">
                  {activeUseCase.impact}
                </p>
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* 5. CAPABILITIES (CLEAN HORIZONTAL TEXT LIST - NO CARDS) */}
      <Section className="py-16 sm:py-24 border-t border-border/80">
        <SectionHeading
          eyebrow="Specialized Capabilities"
          title={`Technical Capabilities for ${industry.name}.`}
          body="Domain-specific security, data isolation, and compliance standards we enforce."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {industry.capabilities.map((cap) => (
            <div key={cap.title} className="flex items-start gap-4 border-b border-border/50 pb-6">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-1" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. TIMELINE PROCESS ROADMAP (STEPPER BAR) */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Execution Roadmap"
          title={`How We Deliver ${industry.name} Projects.`}
          body="A structured 6-step engineering process tailored for domain compliance and rapid execution."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industry.process.map((p) => (
            <div key={p.step} className="rounded-xl border border-border/70 bg-surface/30 p-6">
              <span className="font-mono text-xs font-bold text-primary">{p.step}</span>
              <h3 className="mt-3 font-display text-base font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. DELIVERABLES (CLEAN CHECKLIST) */}
      <Section className="py-16 sm:py-24 border-t border-border/80">
        <SectionHeading
          eyebrow="Client Handover"
          title="What You Receive (Deliverables)."
          body="Tangible assets, codebases, and compliance documentation handed over to your team."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.deliverables.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface/20 p-4">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-xs font-semibold text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. TECH STACK */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Tech Stack"
          title={`Technologies Leveraged for ${industry.name}.`}
          body="Modern, proven frameworks selected for performance, security, and scalability."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industry.techStack.map((group) => (
            <div key={group.category} className="rounded-xl border border-border/70 bg-surface/30 p-5">
              <div className="flex items-center gap-2 border-b border-border/50 pb-3">
                <Code2 className="h-4 w-4 text-primary" />
                <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.category}
                </h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-border/80 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. BUSINESS OUTCOMES */}
      <Section className="py-16 sm:py-24 border-t border-border/80">
        <SectionHeading
          eyebrow="Business Impact"
          title="What This Enables for Your Organization."
          body="Quantifiable operational improvements achieved through targeted software engineering."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industry.businessOutcomes.map((outcome) => (
            <div key={outcome.title} className="rounded-xl border border-border/70 bg-surface/30 p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TrendingUp className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. RELATED SERVICES */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Relevant Capabilities"
          title="Related Services for This Industry."
          body="Explore complementary engineering capabilities tailored for your domain."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industry.relatedServicesSlugs.map((relSlug) => {
            const relService = getServiceDetailBySlug(relSlug);
            if (!relService) return null;
            return (
              <Link
                key={relSlug}
                to="/services/$slug"
                params={{ slug: relService.slug }}
                className="group rounded-xl border border-border/70 bg-surface/30 p-6 transition-all hover:border-primary/40"
              >
                <span className="font-mono text-[0.65rem] text-primary uppercase tracking-wider">
                  Engineering Service
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {relService.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {relService.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                  View Service breakdown
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* 11. CLOSING CTA */}
      <ClosingCta
        eyebrow="Start Your Project"
        title={`Ready to Build Your ${industry.name} Solution?`}
        body="Let's discuss your requirements and identify the right technology solution for your organization. We will provide a free proposal with estimates and timelines within 24 hours."
      />

      <WhatsAppFab />
    </>
  );
}
