import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { CursorGlow, ScrollProgress } from "@/components/site/motion-primitives";
import { organizationSchema } from "@/lib/schema";

const DOMAIN = "https://sumanixsolutions.com";
const OG_IMAGE = `${DOMAIN}/og-image.png`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-5xl font-semibold text-gradient">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This route doesn't exist. It may have moved, or the link is out of date.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="focus-ring inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="focus-ring inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="focus-ring inline-flex items-center justify-center rounded-xl border border-border bg-glass px-4 py-2 text-sm font-medium text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#e8f0fe" },
      { name: "author", content: "Sumanix Solutions" },
      // -----------------------------------------------------------------------
      // Google Search Console verification
      // Replace the content value with your actual verification code from
      // Search Console → Settings → Ownership verification → HTML tag method.
      // -----------------------------------------------------------------------
      // { name: "google-site-verification", content: "YOUR_VERIFICATION_CODE_HERE" },
      // -----------------------------------------------------------------------
      // Default global title & description (overridden by each route's head())
      { title: "Software & AI Development Company in Pune | Sumanix Solutions" },
      { name: "description", content: "Sumanix Solutions builds custom web apps, AI systems, SaaS platforms, and mobile apps for businesses across India, US, and UK. Based in Pune, Maharashtra. Get a free consultation." },
      // Open Graph — global defaults (overridden per route)
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sumanix Solutions" },
      { property: "og:title", content: "Software & AI Development Company in Pune | Sumanix Solutions" },
      { property: "og:description", content: "Sumanix Solutions builds custom web apps, AI systems, SaaS platforms, and mobile apps for businesses across India, US, and UK. Based in Pune, Maharashtra." },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: DOMAIN },
      // Twitter Card — global defaults
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Software & AI Development Company in Pune | Sumanix Solutions" },
      { name: "twitter:description", content: "Sumanix Solutions builds custom web apps, AI systems, SaaS platforms, and mobile apps for businesses across India, US, and UK." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png?v=2", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png?v=2" },
      { rel: "shortcut icon", href: "/favicon.ico?v=2" },
      // Preconnect for Google Fonts (performance)
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/*
          -----------------------------------------------------------------------
          Google Analytics 4
          Replace G-XXXXXXXXXX with your actual GA4 Measurement ID.
          To set up: https://analytics.google.com → Admin → Create Property.
          The script is loaded async and deferred so it does NOT block LCP.
          -----------------------------------------------------------------------
        */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', { send_page_view: true });
        `}} /> */}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Organization schema — injected on every page
  const orgSchema = JSON.stringify(organizationSchema());

  return (
    <QueryClientProvider client={queryClient}>
      {/* Organization JSON-LD — global structured data on every page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgSchema }}
      />
      <ScrollProgress />
      <CursorGlow />
      <a
        href="#main"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main" className="relative">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
