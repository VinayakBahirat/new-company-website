import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, MapPin, Clock, Users, Check } from "lucide-react";
import { MeshBackground } from "@/components/site/mesh-background";
import { Reveal } from "@/components/site/motion-primitives";
import { ClosingCta, GlassCard, Section, SectionHeading } from "@/components/site/primitives";
import { ROLES, VALUES } from "@/content/site";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/emailjs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TITLE = "Careers — Engineering, AI and Design Roles | Aeriform Systems";
const DESCRIPTION =
  "Open roles for senior product engineers, AI systems engineers, platform engineers, designers and delivery leads. Remote-friendly, senior-weighted teams.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: CareersPage,
});

const FIELD =
  "w-full rounded-xl border border-border bg-glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring";

function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const portfolio = formData.get("portfolio") as string;
    const notes = formData.get("notes") as string;

    try {
      await sendContactEmail({
        name,
        email,
        phone,
        company: "Careers Application",
        budget: `Portfolio: ${portfolio}`,
        scope: `Apply: ${selectedRole}`,
        message: notes || "No additional notes provided.",
      });
      toast.success("Application successfully submitted!");
      setSent(true);
    } catch (err) {
      toast.error("Failed to send application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsFormOpen(open);
    if (!open) {
      setTimeout(() => setSent(false), 200);
    }
  };

  return (
    <>
      <Section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <MeshBackground />
        <div className="relative">
          <SectionHeading
            eyebrow="Careers"
            title="Join Our Team"
            body="We're always interested in meeting talented developers who enjoy building high-quality software and solving real business problems."
          />
        </div>
      </Section>

      <Section className="pb-8">
        <div className="grid gap-3">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => {
                  setSelectedRole(role.title);
                  setIsFormOpen(true);
                }}
                className="focus-ring group flex w-full flex-col gap-4 rounded-2xl border border-border bg-surface/30 p-6 text-left transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface/60 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="font-display text-lg font-semibold sm:text-xl">{role.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-primary" /> {role.team}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary" /> {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" /> {role.type}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 self-start rounded-xl border border-border bg-glass px-4 py-2.5 text-sm font-semibold transition-colors group-hover:border-primary/40 group-hover:text-primary sm:self-auto">
                  Apply
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="values" className="py-24 sm:py-32">
        <SectionHeading eyebrow="How we work" title="Why You'll Love Working Here." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.04}>
              <GlassCard className="h-full rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-2xl bg-zinc-950 border-border p-7 sm:p-10 text-white rounded-[1.8rem]">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-semibold">Join Our Pod</DialogTitle>
          </DialogHeader>

          {sent ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Check className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold">Application successfully submitted</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thank you for applying. We will review your profile and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 mt-4">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow mb-2.5 block">Full name</label>
                  <input id="name" name="name" required className={FIELD} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow mb-2.5 block">Email address</label>
                  <input id="email" name="email" type="email" required className={FIELD} placeholder="jane@example.com" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="eyebrow mb-2.5 block">Phone number (Optional)</label>
                  <input id="phone" name="phone" type="tel" className={FIELD} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label htmlFor="role" className="eyebrow mb-2.5 block">Position</label>
                  <Select name="role" value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger id="role" className={`${FIELD} h-auto`}>
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((role) => (
                        <SelectItem key={role.title} value={role.title}>{role.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label htmlFor="portfolio" className="eyebrow mb-2.5 block">Resume / Portfolio Link</label>
                <input id="portfolio" name="portfolio" type="url" required className={FIELD} placeholder="https://github.com/..." />
              </div>
              <div>
                <label htmlFor="notes" className="eyebrow mb-2.5 block">Additional notes</label>
                <textarea id="notes" name="notes" rows={4} className={`${FIELD} resize-none`} placeholder="Tell us about yourself..." />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="focus-ring mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_40px_-6px_var(--ring)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <ClosingCta
        eyebrow="JOIN OUR TEAM"
        title="Ready to Build Great Software With Us?"
        body="If you're passionate about solving real problems and building high-quality software, we'd love to hear from you. Even if there's no current opening, feel free to introduce yourself."
      />
    </>
  );
}
