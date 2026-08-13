import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal, TiltCard } from "@/components/site/motion-primitives";
import { GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { BLOG_POSTS, COMPANY } from "@/content/site";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Mail,
  CheckCircle,
  Sparkles,
  Download,
} from "lucide-react";

const TITLE = "Blog & Insights — Software & AI Engineering | Aeriform Systems";
const DESCRIPTION =
  "Expert insights, technical analysis, and best practices for building scalable enterprise software, practical AI applications, and high-performance SaaS platforms.";

/** Map blog categories → related service slugs for cross-links */
const CATEGORY_SERVICE_MAP: Record<string, { label: string; slug: string }> = {
  "Applied AI": { label: "AI Solutions & Development", slug: "AI" },
  Architecture: { label: "SaaS Product Development", slug: "SaaS Product Development" },
  Performance: {
    label: "Application Performance Optimization",
    slug: "Application Performance Optimization",
  },
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative">
          <SectionHeading
            eyebrow="Insights & Articles"
            title="Ideas, engineering, and product building."
            body="Our team's thoughts on building reliable software systems, applied AI integration, and the realities of modern product engineering."
          />
        </div>
      </Section>

      {/* Lead magnet banner */}
      <Section className="pb-10">
        <LeadMagnetBanner />
      </Section>

      {/* Blog posts */}
      <Section className="pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => {
            const relatedService = CATEGORY_SERVICE_MAP[post.category];
            return (
              <Reveal key={post.slug} delay={i * 0.05}>
                <TiltCard intensity={5} className="h-full">
                  <GlassCard className="flex h-full flex-col justify-between rounded-[1.8rem] p-8 transition-colors duration-500 hover:border-primary/25">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                          {post.category}
                        </span>
                      </div>

                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="group/title block"
                      >
                        <h2 className="mt-5 cursor-pointer font-display text-xl font-semibold leading-snug line-clamp-2 transition-colors group-hover/title:text-primary">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.summary}
                      </p>

                      {/* Related service cross-link */}
                      {relatedService && (
                        <Link
                          to="/services"
                          hash={relatedService.slug}
                          className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/8 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/15"
                        >
                          <Sparkles className="h-3 w-3" />
                          We build: {relatedService.label}
                        </Link>
                      )}
                    </div>

                    <div className="mt-8 border-t border-border pt-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <User className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-xs font-medium text-muted-foreground">
                            {post.author}
                          </span>
                        </div>
                        <Link
                          to="/blog/$slug"
                          params={{ slug: post.slug }}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                        >
                          Read post <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </GlassCard>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Newsletter signup */}
      <NewsletterSection />

      <WhatsAppFab />
    </>
  );
}

/* -------------------------------------------------------- Lead magnet */

function LeadMagnetBanner() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/30 bg-primary/5 px-7 py-7 sm:px-10 sm:py-8">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_70%_80%_at_80%_50%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent)]"
        />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Download className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Free Resource
              </p>
              <h3 className="mt-1 text-lg font-semibold sm:text-xl">
                How to Choose the Right Tech Stack for Your Product
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                A practical checklist used by our engineers — helps you avoid costly mistakes before development starts.
              </p>
            </div>
          </div>
          <a
            id="lead-magnet-cta"
            href={`mailto:${COMPANY.email}?subject=Free Guide Request — Tech Stack Checklist&body=Hi Aeriform! Please send me the free tech stack checklist.`}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--ring)]"
          >
            Get Free Guide
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

/* -------------------------------------------------------- Newsletter */

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\nPlease add me to your engineering newsletter.`;
    window.location.href = `mailto:${COMPANY.email}?subject=Newsletter Subscription from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => setSubmitted(true), 500);
  }

  return (
    <Section className="py-24 sm:py-32">
      <GlassCard className="overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-1/2 h-[120%] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Mail className="h-7 w-7" />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 text-balance text-3xl font-semibold sm:text-4xl md:text-5xl">
              Get our weekly engineering insights — free.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Monthly deep dives on software architecture, AI integration, performance engineering, and product building — straight to your inbox.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            {submitted ? (
              <div className="mt-10 flex flex-col items-center gap-3">
                <CheckCircle className="h-10 w-10 text-primary" />
                <p className="text-lg font-semibold">You're on the list!</p>
                <p className="text-sm text-muted-foreground">
                  Check your email — we've sent a confirmation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col items-center gap-4"
              >
                <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                  <input
                    id="newsletter-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="h-12 flex-1 rounded-xl border border-border bg-background/60 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="h-12 flex-1 rounded-xl border border-border bg-background/60 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  id="newsletter-submit"
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--ring)]"
                >
                  Subscribe — It's Free
                  <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                </button>
                <p className="text-xs text-muted-foreground">
                  No spam · Unsubscribe anytime · Read by 1,200+ engineers
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </GlassCard>
    </Section>
  );
}
