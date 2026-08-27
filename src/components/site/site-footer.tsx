import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/content/site";
import { Logotype } from "./site-nav";
import { Hairline } from "./mesh-background";

const SOCIALS = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "GitHub", Icon: Github },
  { label: "X", Icon: Twitter },
  { label: "Dribbble", Icon: Dribbble },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      <Hairline />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/2 left-1/2 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_62%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logotype />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{COMPANY.tagline}</p>
            {/* <p className="mt-4 font-mono text-xs tracking-wider text-muted-foreground/80">{COMPANY.hq}</p> */}
            <div className="mt-6 flex gap-2">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-border bg-glass text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="footer-link focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </FooterColumn>

          <FooterColumn title="Capabilities">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.title}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <a href={`mailto:${COMPANY.email}`} className="focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {COMPANY.email}
            </a>
            <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="focus-ring block py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="focus-ring mt-4 inline-flex items-center gap-1.5 rounded-xl border border-primary/35 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/16"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow mb-4">{title}</h3>
      {children}
    </div>
  );
}
