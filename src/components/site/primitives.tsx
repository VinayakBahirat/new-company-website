import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, Magnetic } from "./motion-primitives";

export function Section({
  children,
  className,
  id,
  bleed = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-28", className)}>
      <div className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8", bleed && "max-w-none px-0")}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <p
          className={cn(
            "eyebrow flex items-center gap-2.5",
            align === "center" && "justify-center",
          )}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_2px_var(--ring)]" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.05] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
          {title}
        </h2>
      </Reveal>
      {body ? (
        <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{body}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function GlassCard({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={cn("glass-panel relative overflow-hidden rounded-2xl", className)}>
      {children}
    </div>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-glass px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

type CtaProps = {
  to: "/" | "/services" | "/work" | "/studio" | "/careers" | "/contact";
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  hash?: string;
};

export function CtaLink({ to, children, variant = "primary", className, hash }: CtaProps) {
  return (
    <Magnetic strength={0.22}>
      <Link
        to={to}
        {...(hash ? { hash } : {})}
        className={cn(
          "focus-ring group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300",
          variant === "primary"
            ? "bg-primary text-primary-foreground hover:shadow-[0_0_54px_-8px_var(--ring)]"
            : "border border-border bg-glass text-foreground hover:border-primary/40 hover:bg-primary/8",
          className,
        )}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </Magnetic>
  );
}

export function ClosingCta({
  eyebrow = "Next step",
  title = "Let's scope the first milestone.",
  body = "Bring the problem, the constraints and the deadline. We will come back with an architecture, a plan and a fixed-scope first increment.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <Section className="py-24 sm:py-32">
      <GlassCard className="overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-14 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-1/2 h-[120%] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,color-mix(in_oklab,var(--primary)_13%,transparent),transparent_70%)]"
        />
        <div className="relative">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.05] sm:text-5xl md:text-[3.6rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{body}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <CtaLink to="/contact">Schedule a meeting</CtaLink>
              <CtaLink to="/work" variant="ghost">
                See selected work
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </GlassCard>
    </Section>
  );
}
