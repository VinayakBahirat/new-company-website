import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "@/lib/schema";
import { useState } from "react";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal, TiltCard } from "@/components/site/motion-primitives";
import { ClosingCta, GlassCard, Section, SectionHeading } from "@/components/site/primitives";
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

const DOMAIN = "https://sumanixsolutions.com";
const OG_IMAGE = `${DOMAIN}/og-image.png`;
const TITLE = "Engineering Blog — Software & AI Insights | Sumanix Solutions";
const DESCRIPTION =
  "Practical articles on software engineering, applied AI, SaaS architecture, and business automation from the Sumanix Solutions team in Sangli, India.";

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
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:url", content: `${DOMAIN}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${DOMAIN}/blog` },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const breadcrumb = JSON.stringify(breadcrumbSchema([
    { name: "Home", url: DOMAIN },
    { name: "Blog", url: `${DOMAIN}/blog` },
  ]));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumb }} />
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
                  <GlassCard className="group flex h-full flex-col justify-between rounded-[1.8rem] p-8 transition-colors duration-500 hover:border-primary/25">
                    <div>
                      {post.image && (
                        <div className="mb-6 -mx-8 -mt-8 overflow-hidden rounded-t-[1.8rem]">
                          <img
                            src={post.image}
                            alt={`Cover image for: ${post.title}`}
                            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            width={800}
                            height={450}
                          />
                        </div>
                      )}
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

      <ClosingCta />

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
            href={`mailto:${COMPANY.email}?subject=Free Guide Request — Tech Stack Checklist&body=Hi Sumanix! Please send me the free tech stack checklist.`}
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


