import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal, TiltCard } from "@/components/site/motion-primitives";
import { GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { LeadForm } from "@/components/site/lead-form";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { getServiceDetailBySlug, SERVICE_DETAILS } from "@/content/service-details";
import { getIndustrySlug } from "@/content/industry-details";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Building2,
  Briefcase,
  Workflow,
  Code2,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/services_/$slug")({
  head: ({ params }) => {
    const service = getServiceDetailBySlug(params.slug);
    const title = service
      ? `${service.title} — Services | Aeriform Systems`
      : "Service Not Found — Aeriform Systems";
    const description = service
      ? service.shortDescription
      : "Enterprise software, AI, SaaS, mobile, cloud and performance engineering services.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getServiceDetailBySlug(slug);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 text-4xl font-semibold text-gradient">Service Not Found</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            The service page you are looking for does not exist or has been updated.
          </p>
          <div className="mt-8">
            <Link
              to="/services"
              className="focus-ring inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Back to Services Overview
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const activeIndustry = service.industryUseCases[activeIndustryIndex] || service.industryUseCases[0];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <MeshBackground />
        <div className="relative">
          <Reveal>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              All Services
            </Link>
          </Reveal>

          <Reveal delay={0.04}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              {service.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl text-foreground">
              {service.title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-4 text-balance font-display text-xl font-medium text-primary sm:text-2xl">
              {service.headline}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.shortDescription}
            </p>
          </Reveal>

          {/* Primary & Secondary CTAs */}
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#service-enquiry"
                className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#service-overview"
                className="focus-ring inline-flex items-center gap-2 rounded-2xl border border-border bg-glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface/80"
              >
                Get a Free Consultation
              </a>
            </div>
          </Reveal>

          {/* Trust badges strip */}
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4 border-t border-border/60 pt-6">
              {[
                "Fixed Scope & Transparent Pricing",
                "Senior Engineers Only",
                "Strict Intellectual Property Ownership",
                "Post-Launch Technical Support SLA",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-surface/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 2. SERVICE OVERVIEW */}
      <Section id="service-overview" className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Service Overview"
          title="Solving Real Business Challenges With Modern Software Engineering."
          body="Clear answers to why your business needs this service and how Aeriform delivers tangible impact."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0.04}>
            <GlassCard className="h-full rounded-[1.6rem] p-7 transition-all hover:border-primary/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">What It Is</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.overview.whatItIs}
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="h-full rounded-[1.6rem] p-7 transition-all hover:border-primary/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">Business Problem Solved</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.overview.problemSolved}
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.12}>
            <GlassCard className="h-full rounded-[1.6rem] p-7 transition-all hover:border-primary/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">Why Businesses Need It</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.overview.whyNeeded}
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.16}>
            <GlassCard className="h-full rounded-[1.6rem] p-7 transition-all hover:border-primary/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">How We Help</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.overview.howWeHelp}
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* 3. KEY CAPABILITIES */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="What We Offer"
          title="Core Capabilities & Technical Engineering."
          body="Comprehensive solutions included under this service to power your digital operations."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((cap, index) => (
            <Reveal key={cap.title} delay={index * 0.05}>
              <TiltCard className="h-full">
                <GlassCard className="h-full rounded-[1.6rem] p-7 transition-all duration-300 hover:border-primary/30">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-primary">
                      Capability {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{cap.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </GlassCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. INDUSTRY USE CASES & REAL-WORLD SCENARIOS */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Industry Applications"
          title="Service → Industry → Real-World Use Cases."
          body="Select an industry to see practical business problems solved by this service."
        />

        {/* Industry Selector Tabs */}
        <div className="mt-10 flex flex-wrap gap-2.5 border-b border-border pb-4">
          {service.industryUseCases.map((ind, idx) => {
            const isActive = idx === activeIndustryIndex;
            return (
              <button
                key={ind.industry}
                onClick={() => setActiveIndustryIndex(idx)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border border-border/80 bg-surface/30 text-muted-foreground hover:bg-surface/80 hover:text-foreground"
                }`}
              >
                <Building2 className="h-3.5 w-3.5" />
                {ind.industry}
              </button>
            );
          })}
        </div>

        {/* Active Industry Content */}
        {activeIndustry && (
          <div className="mt-8 rounded-[1.8rem] border border-border bg-surface/30 p-6 sm:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="eyebrow flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Industry Context
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {activeIndustry.industry} Solutions
                </h3>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-0">
                {activeIndustry.context}
              </p>
            </div>

            {/* 4 Real-World Business Use Cases */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {activeIndustry.useCases.map((uc) => (
                <div
                  key={uc.id}
                  className="rounded-2xl border border-border/80 bg-background/60 p-6 transition-colors hover:border-primary/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-[0.7rem] font-semibold text-primary uppercase tracking-wider">
                      {uc.id}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-semibold text-foreground">
                    {uc.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {uc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* 5. HOW IT WORKS (PROCESS) */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Execution Roadmap"
          title="How It Works."
          body="A transparent, step-by-step engineering process tailored for predictability and speed."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface/30 p-6 transition-colors hover:border-primary/30">
                <span className="font-mono text-xs font-semibold text-primary">{p.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. DELIVERABLES */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Client Handover"
          title="What You Receive (Deliverables)."
          body="Clear, tangible assets and software artifacts handed over to your team upon project completion."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.deliverables.map((item, idx) => (
            <Reveal key={item} delay={idx * 0.04}>
              <GlassCard className="flex h-full items-start gap-3.5 rounded-2xl p-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground">
                  {item}
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. TECHNOLOGY STACK */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies Used for This Service."
          body="Proven frameworks and cloud tools specifically leveraged for this service."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.techStack.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface/30 p-6">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-lg border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8. BUSINESS OUTCOMES */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Business Impact"
          title="What This Enables for Your Business."
          body="Measurable outcomes that directly drive efficiency, revenue growth, and market speed."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.businessOutcomes.map((outcome, idx) => (
            <Reveal key={outcome.title} delay={idx * 0.05}>
              <GlassCard className="h-full rounded-[1.6rem] p-7 transition-colors hover:border-primary/30">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {outcome.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 9. RELATED INDUSTRIES */}
      <Section className="py-12 border-t border-border/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Industries We Serve for {service.title}:
          </span>
          <div className="flex flex-wrap gap-2">
            {service.relatedIndustries.map((ind) => (
              <Link
                key={ind}
                to="/industries/$slug"
                params={{ slug: getIndustrySlug(ind) }}
                className="rounded-lg border border-border/80 bg-surface/40 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {ind} →
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* 10. RELATED SERVICES */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Explore Further"
          title="Related Services."
          body="Discover complementary engineering services to accelerate your digital capabilities."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.relatedServicesSlugs.map((relSlug, i) => {
            const relService = getServiceDetailBySlug(relSlug);
            if (!relService) return null;
            return (
              <Reveal key={relSlug} delay={i * 0.06}>
                <Link to="/services/$slug" params={{ slug: relService.slug }}>
                  <GlassCard className="group h-full rounded-[1.6rem] p-6 transition-all duration-300 hover:border-primary/40 hover:scale-[1.02]">
                    <span className="font-mono text-[0.65rem] text-primary uppercase tracking-wider">
                      Related Service
                    </span>
                    <h3 className="mt-3 font-display text-base font-semibold group-hover:text-primary transition-colors">
                      {relService.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {relService.shortDescription}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </GlassCard>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 11. CTA & LEAD FORM */}
      <Section id="service-enquiry" className="py-20 sm:py-28 border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_2px_var(--ring)]" />
                Have a Project in Mind?
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Let's Build Your {service.title} Solution.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Let's discuss your requirements and identify the right technology solution for your business. We'll provide a free proposal with estimates and timelines within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3">
                {[
                  "Response sent within 24 hours",
                  "Free technical consultation with senior engineers",
                  "Fixed-scope proposal & clear milestones",
                  "No pushy follow-ups or lock-in contracts",
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
            <GlassCard className="rounded-[1.8rem] p-7 sm:p-10">
              <LeadForm heading={`Get a Free Quote for ${service.title}`} />
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <WhatsAppFab />
    </>
  );
}
