import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY, SERVICES } from "@/content/site";

type LeadFormProps = {
  variant?: "full" | "compact";
  className?: string;
  heading?: string;
  subheading?: string;
};

export function LeadForm({
  variant = "full",
  className,
  heading = "Get a Free Project Proposal",
  subheading = "Tell us what you need — we'll send back a tailored proposal within 24 hours. No commitment required.",
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    budget: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const body = `
Name: ${fields.name}
Email: ${fields.email}
WhatsApp: ${fields.whatsapp}
Service: ${fields.service}
Budget: ${fields.budget}
Message: ${fields.message}
    `.trim();

    // Open mailto as the form action
    window.location.href = `mailto:${COMPANY.email}?subject=New Project Enquiry from ${encodeURIComponent(fields.name)}&body=${encodeURIComponent(body)}`;

    // Show success after brief delay
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center gap-4 py-16 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">We've got your message!</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Your email client should have opened with the details. We typically
              respond within a few hours during business hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            {/* Row 1 */}
            <div className={cn("grid gap-4", variant === "full" ? "sm:grid-cols-2" : "")}>
              <FormField
                id="lead-name"
                name="name"
                type="text"
                label="Your Name"
                placeholder="Ravi Mehta"
                value={fields.name}
                onChange={handleChange}
                required
              />
              <FormField
                id="lead-email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="ravi@company.com"
                value={fields.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Row 2 */}
            <div className={cn("grid gap-4", variant === "full" ? "sm:grid-cols-2" : "")}>
              <FormField
                id="lead-whatsapp"
                name="whatsapp"
                type="tel"
                label="WhatsApp Number"
                placeholder="+91 98765 43210"
                value={fields.whatsapp}
                onChange={handleChange}
              />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lead-service" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  What do you need?
                </label>
                <select
                  id="lead-service"
                  name="service"
                  value={fields.service}
                  onChange={handleChange}
                  required
                  className="h-11 rounded-xl border border-border bg-background/60 px-4 text-sm text-foreground outline-none ring-0 transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet — need advice</option>
                </select>
              </div>
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Budget Range
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Under ₹1L",
                  "₹1L – ₹3L",
                  "₹3L – ₹10L",
                  "₹10L+",
                  "Let's discuss",
                ].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setFields((f) => ({ ...f, budget: b }))}
                    className={cn(
                      "rounded-xl border px-4 py-2 text-xs font-semibold transition-all duration-200",
                      fields.budget === b
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border bg-glass text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Message — only in full variant */}
            {variant === "full" && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lead-message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Briefly describe your project
                </label>
                <textarea
                  id="lead-message"
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="We need a web app that does X, Y, Z…"
                  className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>
            )}

            {/* Submit */}
            <button
              id="lead-form-submit"
              type="submit"
              disabled={status === "sending"}
              className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_54px_-8px_var(--ring)] disabled:opacity-60"
            >
              {status === "sending" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Send My Enquiry
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </>
              )}
            </button>

            <p className="text-center text-[0.72rem] text-muted-foreground">
              We respond within 24 hrs · No spam · No commitment
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FormField({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  required,
}: {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-border bg-background/60 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
