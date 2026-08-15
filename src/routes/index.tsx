import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getIndustrySlug } from "@/content/industry-details";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Gauge,
  Smartphone,
  Workflow,
  Globe,
  Briefcase,
  Server,
  Zap,
} from "lucide-react";
import { MeshBackground } from "@/components/site/mesh-background";
import { NodeField } from "@/components/site/node-field";
import { StudioArchitecture } from "@/components/site/studio-architecture";
import { HeroDashboard } from "@/components/site/hero-dashboard";
import {
  Counter,
  Parallax,
  Reveal,
  SplitHeading,
  TiltCard,
} from "@/components/site/motion-primitives";
import {
  ClosingCta,
  CtaLink,
  GlassCard,
  Pill,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { MockUi } from "@/components/site/mock-ui";
import { LeadForm } from "@/components/site/lead-form";
import { TestimonialsSection } from "@/components/site/testimonials";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import {
  COMPANY,
  DIFFERENTIATORS,
  INDUSTRIES,
  METRICS,
  PROCESS,
  PROJECTS,
  SERVICES,
  TECH_GROUPS,
  VALUES,
} from "@/content/site";

const TITLE = "Aeriform Systems — Enterprise Software & AI Product Engineering";
const DESCRIPTION =
  "We help startups, SaaS companies, and agencies ship high-quality, production-ready web applications in record time by combining expert human engineering with advanced AI integration. We specialize in React & Next.js frontends, Node.js APIs, and practical AI features that solve real business problems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: HomePage,
});

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

function HomePage() {
  return (
    <>
      <Hero />
      <StudioIntro />
      <StatsBand />
      <CapabilityGrid />
      <IndustriesSection />
      <ProcessTimeline />
      <TechSection />
      <WorkPreview />
      <MarqueeStrip />
      <WhyUs />
      <ClientTestimonials />

      <ClosingCta />
      <WhatsAppFab />
    </>
  );
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  return (
    <Section className="relative min-h-[100svh] overflow-hidden pb-20 pt-36 sm:pt-44">
      <MeshBackground />
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
        <div className="absolute right-[-10%] top-[6%] h-[92vh] w-[70vw] max-w-[900px]">
          <NodeField density={68} />
        </div>
      </div>

      <div className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Pill>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Available for new projects
            </Pill>
          </motion.div>

          <h1 className="mt-8 text-[2.6rem] font-semibold leading-[0.96] tracking-[-0.04em] sm:text-6xl lg:text-[5.1rem]">
            <span className="text-gradient block">
              <SplitHeading text="We Build Products That" delay={0.1} />
            </span>
            <span className="block text-amber-gradient">
              <SplitHeading text="Real Businesses Depend On." delay={0.28} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We help businesses turn ideas into fast, reliable, and scalable software. From custom web applications and SaaS platforms to AI-powered solutions, we build products that solve real business problems and support long-term growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <CtaLink to="/contact">Get Free Proposal</CtaLink>
            <CtaLink to="/services" variant="ghost">
              Explore Services
            </CtaLink>
          </motion.div>


          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-4 hidden"
          >
            {METRICS.map((m) => (
              <div key={m.label} className="bg-background/70 px-5 py-6 backdrop-blur-sm">
                <dt className="font-display text-2xl font-semibold sm:text-3xl">
                  <Counter to={m.value} suffix={m.suffix} />
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-muted-foreground">{m.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative hidden lg:block">
          <HeroDashboard />
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Marquee */

function MarqueeStrip() {
  const items = TECH_GROUPS.flatMap((g) => g.items);
  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-10">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/70"
          >
            <span className="h-1 w-1 rounded-full bg-primary/70" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- Capabilities */

function CapabilityGrid() {
  return (
    <Section id="capabilities" className="py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Everything You Need.
              <br className="hidden sm:block" /> One Reliable Team.
            </>
          }
          body="Every engagement draws from the same senior bench product engineering, applied AI, infrastructure and design working against a single roadmap."
        />
        <Reveal delay={0.1}>
          <CtaLink to="/services" variant="ghost">
            All services
          </CtaLink>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = SERVICE_ICONS[service.slug] || Code2;
          return (
            <Reveal key={service.slug} delay={i * 0.04}>
              <Link to="/services/$slug" params={{ slug: service.slug }} className="block h-full">
                <TiltCard className="h-full">
                  <GlassCard className="group h-full rounded-[1.4rem] p-6 transition-all duration-300 hover:border-primary/40 hover:scale-[1.01]">
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-glass text-primary transition-transform duration-500 group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-1">
                      {service.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary">
                      <span>Explore Service</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </GlassCard>
                </TiltCard>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- Studio intro */

function StudioIntro() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Parallax distance={34} className="w-full">
          <StudioArchitecture />
        </Parallax>

        <div>
          <SectionHeading
            eyebrow="The studio"
            // title="We take the parts of a product that are hard to undo."
            title="We build software that makes your business easier to run."
            body="A successful product starts with the right foundation. We take time to understand your business, plan the best solution, and build software that is reliable, scalable, and ready for the future."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full bg-background/70 p-6">
                  <h3 className="font-display text-base font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
            <div className="hidden bg-background/70 p-6 sm:block">
              <p className=" text-primary font-display text-base font-semibold">Mission</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Helping businesses grow with reliable, high-quality software built for long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- Process */

function ProcessTimeline() {
  const leftColumn = PROCESS.filter((_, idx) => idx % 2 === 0);
  const rightColumn = PROCESS.filter((_, idx) => idx % 2 === 1);

  return (
    <Section id="process" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Delivery process"
        title="A Simple Process. Clear at Every Step."
        body="We keep the process simple and transparent, so you always know what we're working on and what comes next."
      />
      <div className="relative mt-16">
        <div className="grid gap-4 md:grid-cols-2 md:gap-x-14">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((stage, i) => (
              <Reveal key={stage.step} delay={0.06}>
                <div className="group relative rounded-2xl border border-border bg-surface/30 p-6 transition-colors duration-400 hover:border-primary/30 hover:bg-surface/60">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-primary">{stage.step}</span>
                    <h3 className="font-display text-lg font-semibold">{stage.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((stage, i) => (
              <Reveal key={stage.step} delay={0.06}>
                <div className="group relative rounded-2xl border border-border bg-surface/30 p-6 transition-colors duration-400 hover:border-primary/30 hover:bg-surface/60">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-primary">{stage.step}</span>
                    <h3 className="font-display text-lg font-semibold">{stage.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------- Tech */

function TechSection() {
  return (
    <Section id="technology" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Technology"
        title="Modern Tech For Modern Problems."
        body="We choose proven technologies that help us build secure, fast, and reliable software for every project."
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
  );
}

/* ----------------------------------------------------------- Work preview */

function WorkPreview() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects That Deliver Real Results"
          body="A selection of projects that showcase the types of solutions we build for businesses across different industries."
        />
        <Reveal delay={0.1}>
          <CtaLink to="/work" variant="ghost">
            View all work
          </CtaLink>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.07}>
            <TiltCard intensity={6} className="h-full">
              <GlassCard className="group h-full rounded-[1.6rem] p-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                      <div className="absolute inset-0 bg-[oklch(0.1_0_0_/_0.72)]" />
                      <div className="absolute inset-0 grid-lines opacity-30" />
                      <MockUi name={p.name} />
                    </>
                  )}
                </div>
                <div className="p-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">{p.category}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.goal}</p>
                  {/* <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{p.metric}</span>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div> */}
                </div>
              </GlassCard>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- Industries */

function IndustriesSection() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for Businesses Across Industries"
          body="Every business is unique, so every solution is tailored to your goals, industry, and challenges."
        />
        <div className="flex flex-wrap gap-2.5">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry} delay={i * 0.03}>
              <Link
                to="/industries/$slug"
                params={{ slug: getIndustrySlug(industry) }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-glass px-4 py-3 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                {industry}
                <ArrowRight className="h-3.5 w-3.5 opacity-60" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- Why us */

function WhyUs() {
  return (
    <Section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Why teams choose us"
        title="Why Clients Choose Us."
        align="center"
      />
      <div className="mt-16 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
        {DIFFERENTIATORS.map((d, i) => (
          <Reveal key={d.title} delay={(i % 5) * 0.05}>
            <div className="group h-full bg-background/70 p-6 transition-colors duration-400 hover:bg-surface/60">
              <span className="font-mono text-[0.65rem] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ Stats */

function StatsBand() {
  return (
    <Section className="py-24 sm:py-32">
      <GlassCard className="rounded-[2rem] p-8 sm:p-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">OUR IMPACT</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Results That Speak for Themselves.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Real numbers that reflect our experience, successful projects, and commitment to quality.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: INDUSTRIES.length, suffix: "+", label: "Industries served" },
            { value: 54, suffix: "+", label: "Projects delivered" },
            { value: 97, decimals: 1, suffix: "%", label: "Client Focus" },
            { value: 95.98, decimals: 2, suffix: "%", label: "Long-Term Support" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div>
                <p className="font-display text-4xl font-semibold tracking-tight text-amber-gradient sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </GlassCard>
    </Section>
  );
}

/* ----------------------------------------------------------- Testimonials */

function ClientTestimonials() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          body="A few words from the people we've had the opportunity to work with."
        />
      </div>
      <TestimonialsSection />
    </Section>
  );
}

/* --------------------------------------------------------- Lead capture */

function LeadCaptureSection() {
  return (
    <Section id="get-a-quote" className="py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* Left: Copy */}
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-2.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_2px_var(--ring)]" />
              Free Project Proposal
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.05] sm:text-4xl md:text-5xl">
              Let's Talk About
              <br />
              <span className="text-gradient">Your Project.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Fill in the form and we'll send a tailored proposal with timelines
              and cost estimates — within 24 hours. No pushy sales calls.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-8 space-y-3">
              {[
                "Free 30-minute strategy call included",
                "Detailed proposal within 24 hours",
                "No lock-in contracts",
                "Direct access to senior engineers",
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

        {/* Right: Form */}
        <Reveal delay={0.1}>
          <GlassCard className="rounded-[1.8rem] p-7 sm:p-10">
            <LeadForm />
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
