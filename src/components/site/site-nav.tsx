import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/content/site";
import { Magnetic } from "./motion-primitives";
import { cn } from "@/lib/utils";

export function Logotype({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-8 w-8 place-items-center">
        <span className="absolute inset-0 rounded-[10px] bg-[conic-gradient(from_140deg,color-mix(in_oklab,var(--primary)_90%,transparent),transparent_55%,color-mix(in_oklab,var(--primary)_70%,transparent))] opacity-80 blur-[6px]" />
        <svg viewBox="0 0 32 32" className="relative h-8 w-8" aria-hidden>
          <rect x="1" y="1" width="30" height="30" rx="9" fill="oklch(0.14 0 0)" stroke="oklch(1 0 0 / 0.14)" />
          <path d="M16 7.5 24.5 24h-4.9L16 16.2 12.4 24H7.5L16 7.5Z" fill="var(--primary)" />
          <circle cx="16" cy="21" r="1.9" fill="oklch(0.14 0 0)" />
        </svg>
      </span>
      <span className="font-display text-[0.95rem] font-semibold tracking-tight">
        {COMPANY.short}
        <span className="text-muted-foreground">.systems</span>
      </span>
    </span>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500",
            scrolled ? "glass-panel" : "border border-transparent",
          )}
        >
          <Link to="/" className="focus-ring rounded-lg" aria-label={`${COMPANY.name} home`}>
            <Logotype />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="focus-ring relative rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.25} className="hidden sm:inline-flex">
              <Link
                to="/contact"
                className="focus-ring group inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_40px_-6px_var(--ring)]"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-border bg-glass text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mx-5 rounded-2xl glass-panel p-3 lg:hidden"
          >
            {[...NAV_LINKS, { label: "Contact", to: "/contact" as const }].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="focus-ring flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-foreground/85 transition-colors hover:bg-glass"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
