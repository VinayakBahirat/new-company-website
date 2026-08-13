import { createFileRoute, Link } from "@tanstack/react-router";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal } from "@/components/site/motion-primitives";
import { ClosingCta, GlassCard, Section } from "@/components/site/primitives";
import { BLOG_POSTS } from "@/content/site";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    const title = post ? `${post.title} — Blog | Aeriform Systems` : "Blog Post Not Found — Aeriform Systems";
    const description = post ? post.summary : "Blog post details";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 text-5xl font-semibold text-gradient">Post not found</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            The blog post you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              to="/blog"
              className="focus-ring inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Section className="relative overflow-hidden pb-12 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Back to articles
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl text-foreground font-display">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-6 border-b border-border pb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal delay={0.2}>
            <GlassCard className="rounded-[2rem] p-8 sm:p-12 md:p-16">
              <article className="prose prose-invert max-w-none">
                <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {post.content ? (
                    post.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{post.summary}</p>
                  )}
                </div>
              </article>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <ClosingCta
        eyebrow="STAY UPDATED"
        title="Subscribe to our technical newsletter"
        body="Get monthly technical engineering insights, software architecture deep dives, and applied AI tutorials delivered straight to your inbox."
      />
    </>
  );
}
