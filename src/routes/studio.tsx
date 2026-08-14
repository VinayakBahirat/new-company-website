import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MeshBackground } from "@/components/site/mesh-background";
import { NodeField } from "@/components/site/node-field";
import { StudioArchitecture } from "@/components/site/studio-architecture";
import { Counter, Reveal } from "@/components/site/motion-primitives";
import { ClosingCta, GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { COMPANY, DIFFERENTIATORS, INDUSTRIES, STATS, VALUES } from "@/content/site";
import { getIndustrySlug } from "@/content/industry-details";

const TITLE = "Studio — Story, Mission and Values | Aeriform Systems";
const DESCRIPTION =
  "An independent engineering studio of 68 product, AI, infrastructure and design specialists building long-lived software systems across 19 countries.";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="The studio"
            title="Built on Experience. Focused on Results."
            body={`We help businesses turn ideas into reliable software with a focus on quality, performance, and long-term success. Every project is built with care, clear communication, and a commitment to delivering real business value.`}
          />
          <StudioArchitecture />
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full rounded-[1.6rem] p-8">
              <h2 className="eyebrow">Mission</h2>
              <p className="mt-4 text-lg leading-relaxed sm:text-xl">
                Build software that helps businesses grow, work smarter, and deliver better experiences.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.06}>
            <GlassCard className="h-full rounded-[1.6rem] p-8">
              <h2 className="eyebrow">Vision</h2>
              <p className="mt-4 text-lg leading-relaxed sm:text-xl">
                To become a trusted technology partner for businesses by building software that drives growth, innovation, and long-term success.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section className="py-20">
        <SectionHeading eyebrow="Core values" title="The Values That Guide Every Project." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="h-full bg-background/70 p-6">
                <span className="font-mono text-[0.65rem] text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* <Section className="py-20">
        <SectionHeading eyebrow="Statistics" title="Eleven years, measured." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface/30 p-6">
                <p className="font-display text-3xl font-semibold tracking-tight text-amber-gradient sm:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-3 text-sm font-medium">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section> */}


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

      <ClosingCta eyebrow="LET'S BUILD TOGETHER" title="Let's Build Something Great Together." />
    </>
  );
}
