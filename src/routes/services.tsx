import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal, TiltCard } from "@/components/site/motion-primitives";
import {
  ClosingCta,
  GlassCard,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { LeadForm } from "@/components/site/lead-form";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { PROCESS, SERVICES, TECH_GROUPS } from "@/content/site";
import {
  ArrowRight,
  Code2,
  Globe,
  BrainCircuit,
  Smartphone,
  Briefcase,
  Boxes,
  Workflow,
  Server,
  Cloud,
  Gauge,
  Zap,
} from "lucide-react";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "website-web-app-development": Globe,
  "ai-solutions-development": BrainCircuit,
  "mobile-app-development": Smartphone,
  "business-software-solutions": Briefcase,
  "saas-product-development": Boxes,
  "business-automation": Workflow,
  "backend-api-development": Server,
  "cloud-devops-solutions": Cloud,
  "application-performance-optimization": Gauge,
};

const TITLE = "Services — Enterprise, AI, SaaS & Cloud Engineering | Aeriform Systems";
const DESCRIPTION =
  "Enterprise software, AI product development, SaaS platforms, mobile, cloud operations, automation and performance engineering delivered by senior pods.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative">
          <SectionHeading
            eyebrow="Capabilities"
            title="Software That Solves Real Business Problems."
            body="Everything you need to build, launch, and grow your software — all in one team."
          />
          {/* Hero trust strip */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              "Free 30-min consultation",
              "Proposal in 24 hrs",
              "Senior engineers only",
              "No lock-in contracts",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-glass px-4 py-2 text-xs font-medium text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Services grid */}
      <Section className="pb-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.slug] || Code2;
            return (
              <Reveal key={service.slug} delay={(i % 2) * 0.06}>
                <GlassCard
                  id={service.slug}
                  className="group h-full scroll-mt-32 rounded-[1.6rem] p-8 transition-colors duration-500 hover:border-primary/20"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <Icon className="h-7 w-7 text-primary" />
                      <h2 className="font-display text-xl font-semibold sm:text-2xl">
                        {service.title}
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-primary self-start mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.summary}
                  </p>
                  <ul className="mt-7 grid gap-2.5 border-t border-border pt-6 sm:grid-cols-3">
                    {service.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                {/* Per-service CTA */}
                <div className="mt-6 flex flex-wrap items-center justify-between border-t border-border pt-5 gap-3">
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    id={`service-detail-${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:gap-2.5"
                  >
                    View detailed service breakdown
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                  >
                    Explore Service →
                  </Link>
                </div>
              </GlassCard>
            </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Process section */}
      <Section className="py-24 sm:py-32">
        <SectionHeading eyebrow="How it runs" title="From discovery to long-horizon ownership." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((s, i) => (
            <Reveal key={s.step} delay={(i % 5) * 0.05}>
              <div className="h-full bg-background/70 p-6 transition-colors hover:bg-surface/60">
                <span className="font-mono text-[0.65rem] text-primary">{s.step}</span>
                <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Technology */}
      <Section className="pb-8">
        <SectionHeading
          eyebrow="Technology"
          title="Technologies We Trust."
          body="We use modern, proven technologies to build fast, secure, and scalable software that grows with your business."
        />
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {TECH_GROUPS.map((group, gi) => {
            const isWide = group.group === "Frontend" || group.group === "Backend" || group.group === "AI";

            return (
              <Reveal
                key={group.group}
                delay={gi * 0.08}
                className={cn(
                  "h-full",
                  isWide ? "md:col-span-2" : "md:col-span-1"
                )}
              >
                <GlassCard className="group flex h-full flex-col rounded-[1.8rem] p-7 transition-all duration-500 hover:border-primary/30 hover:bg-surface/60">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-semibold tracking-wide group-hover:text-primary transition-colors">
                      {group.group}
                    </h3>
                    <span className="font-mono text-[0.65rem] text-muted-foreground">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-border bg-glass px-3.5 py-1.5 text-[0.75rem] font-medium text-muted-foreground shadow-sm transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary/50" />
                        {item}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Inline Lead Form */}
      <Section id="services-enquiry" className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_2px_var(--ring)]" />
                Start Your Project
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.05] sm:text-4xl md:text-5xl">
                Ready to Build Something?
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Tell us which service you need and what you're building. We'll put together a free proposal with estimates and timelines — sent to you within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3">
                {[
                  "Response in under 24 hours",
                  "Free technical consultation",
                  "No pushy follow-ups",
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
            <GlassCard className="rounded-[1.8rem] p-7 sm:p-10">
              <LeadForm heading="Get a Free Proposal" />
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <WhatsAppFab />
    </>
  );
}
