import { Link } from "@tanstack/react-router";
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
} from "lucide-react";
import { Reveal, TiltCard } from "@/components/site/motion-primitives";
import {
  GlassCard,
  Section,
  SectionHeading,
  CtaLink,
} from "@/components/site/primitives";
import { SERVICES } from "@/content/site";

const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
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

export function CapabilityGrid() {
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
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="block h-full"
              >
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

      <div className="mt-16 flex justify-center">
        <Reveal delay={0.1}>
          <CtaLink to="/contact">Get Free Proposal</CtaLink>
        </Reveal>
      </div>
    </Section>
  );
}
