import { createFileRoute, Link } from "@tanstack/react-router";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal } from "@/components/site/motion-primitives";
import { ClosingCta, GlassCard, Section } from "@/components/site/primitives";
import { BLOG_POSTS } from "@/content/site";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    const title = post ? (post.metaTitle || `${post.title} — Blog | Sumanix Solutions`) : "Blog Post Not Found — Sumanix Solutions";
    const description = post ? (post.metaDescription || post.summary) : "Blog post details";
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
      {post && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.metaDescription || post.summary,
              author: {
                "@type": "Person",
                name: post.author,
              },
              datePublished: new Date(post.date).toISOString().split('T')[0],
              articleSection: post.category,
            }),
          }}
        />
      )}
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

      <Section className="pb-24 border-b border-border">
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal delay={0.2}>
            {post.image && (
              <div className="mb-12 overflow-hidden rounded-[2rem] border border-border">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[2/1] w-full object-cover"
                />
              </div>
            )}
            <GlassCard className="rounded-[2rem] p-8 sm:p-12 md:p-16">
              <article className="prose prose-invert max-w-none">
                <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {post.content ? (
                    (() => {
                      const elements = [];
                      let currentList: { type: 'ul' | 'ol', items: string[], start?: number } | null = null;

                      for (const text of post.content) {
                        if (!text) continue;
                        const ulMatch = text.match(/^- (.*)/);
                        const olMatch = text.match(/^(\d+)\.\s(.*)/);

                        if (ulMatch) {
                          if (currentList?.type !== 'ul') {
                            if (currentList) elements.push(currentList);
                            currentList = { type: 'ul', items: [] };
                          }
                          currentList.items.push(ulMatch[1] as string);
                          continue;
                        } else if (olMatch) {
                          if (currentList?.type !== 'ol') {
                            if (currentList) elements.push(currentList);
                            currentList = { type: 'ol', items: [], start: parseInt(olMatch[1] as string) };
                          }
                          currentList.items.push(olMatch[2] as string);
                          continue;
                        }

                        if (currentList) {
                          elements.push(currentList);
                          currentList = null;
                        }

                        if (text.startsWith("**") && text.endsWith("**")) {
                          elements.push({ type: 'h3', text: text.replace(/\*\*/g, "") });
                        } else {
                          elements.push({ type: 'p', text });
                        }
                      }
                      if (currentList) elements.push(currentList);

                      return elements.map((el: any, i) => {
                        if (el.type === 'h3') {
                          return <h3 key={i} className="mt-10 mb-4 font-display text-2xl font-semibold text-foreground">{el.text}</h3>;
                        }
                        if (el.type === 'p') {
                          const parsedText = el.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                          return <p key={i} dangerouslySetInnerHTML={{ __html: parsedText }} />;
                        }
                        if (el.type === 'ul') {
                          return (
                            <ul key={i} className="my-6 list-outside list-disc pl-6 space-y-2 marker:text-primary">
                              {el.items.map((item: string, j: number) => (
                                <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                              ))}
                            </ul>
                          );
                        }
                        if (el.type === 'ol') {
                          return (
                            <ol key={i} start={el.start} className="my-6 list-outside list-decimal pl-6 space-y-2 marker:text-primary">
                              {el.items.map((item: string, j: number) => (
                                <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                              ))}
                            </ol>
                          );
                        }
                        return null;
                      });
                    })()
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
