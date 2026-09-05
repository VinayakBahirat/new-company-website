import { createFileRoute } from "@tanstack/react-router";
import { MeshBackground } from "@/components/site/mesh-background";
import { GlassCard, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";
import { COMPANY } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sumanix Solutions" },
      { name: "description", content: "Read the privacy policy for Sumanix Solutions. We are committed to protecting your personal information and your right to privacy." },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://sumanixsolutions.com/privacy" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
        <MeshBackground />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Reveal delay={0.1}>
          <GlassCard className="mx-auto max-w-4xl rounded-[2rem] p-8 sm:p-12 md:p-16">
            <div className="flex flex-col gap-10">
              <section className="border-b border-border/60 pb-10">
                <p className="text-lg leading-relaxed text-foreground">
                  {COMPANY.name} ("Company," "we," "us," or "our"), based in Pune, Maharashtra, India, provides software development, white-label engineering, AI integration, e-commerce (Shopify), CRM (Salesforce), and healthcare-technology-adjacent development services ("Services"). This Privacy Policy explains how we collect, use, store, and share information in connection with our Services, our website, and our engagements with clients and their end users.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  By using our website, engaging us as a service provider, or otherwise interacting with us, you agree to the terms of this Privacy Policy.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We may collect the following categories of information:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li><strong>Contact & Business Information:</strong> Name, email, phone number, company name, billing/shipping address, and project requirements submitted via forms, email, or proposals.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device identifiers, cookies, log data, and usage analytics collected through our website and tools.</li>
                  <li><strong>Client Project Data:</strong> Any data, content, credentials, or materials shared with us by clients for the purpose of delivering Services, including data processed on behalf of clients within applications we build or maintain (e.g., healthcare-technology platforms, e-commerce stores, CRM systems).</li>
                  <li><strong>Communications:</strong> Records of correspondence, support tickets, and feedback.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">2. How We Use Information</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We use collected information to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>Deliver, maintain, and improve our Services;</li>
                  <li>Communicate with clients and prospects regarding projects, invoices, and support;</li>
                  <li>Develop, train, and improve internal tools, processes, and AI-assisted workflows, including the use of aggregated or de-identified data for internal analytics and service improvement;</li>
                  <li>Market our Services, including showcasing anonymized or client-approved project outcomes, case studies, and testimonials;</li>
                  <li>Comply with legal obligations and enforce our agreements;</li>
                  <li>Protect against fraud, misuse, or security incidents.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">3. Data Ownership & License</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Unless otherwise agreed in a signed Statement of Work or contract:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>All source code, frameworks, internal tools, templates, and reusable components developed by {COMPANY.name}, including those built during a client engagement, remain the intellectual property of {COMPANY.name} except for the specific client-facing deliverable licensed to the client upon full payment.</li>
                  <li>We retain a perpetual, royalty-free right to reuse general know-how, non-confidential methodologies, and non-identifiable code patterns developed during any engagement for future projects.</li>
                  <li>We may use anonymized or aggregated data derived from client projects for internal benchmarking, AI model improvement, and service enhancement.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">4. Sharing of Information</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We may share information with:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li><strong>Sub-contractors/Team Members:</strong> Our internal team and vetted sub-contractors working under confidentiality obligations.</li>
                  <li><strong>Third-Party Service Providers:</strong> Cloud infrastructure (AWS), analytics, payment processors, and other vendors necessary to operate our Services.</li>
                  <li><strong>Legal & Compliance:</strong> Government authorities, regulators, or courts where required by law, or to protect our legal rights.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, restructuring, or sale of assets.</li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We do not sell personal information to third parties for their independent marketing purposes.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">5. Data Retention</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We retain client and project data for as long as reasonably necessary to fulfill the purposes outlined in this policy, including for ongoing support, legal, accounting, or dispute-resolution purposes, even after a project or engagement concludes, unless a client's contract specifies a shorter retention period in writing.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">6. Client Responsibility for End-User Data</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Where {COMPANY.name} builds or maintains an application, platform, or system on behalf of a client (e.g., healthcare, ride-hailing, e-commerce, or CRM platforms), the client is solely responsible for:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>Obtaining necessary consents from their own end users/patients/customers;</li>
                  <li>Ensuring their use of the platform complies with applicable data protection laws (e.g., India's Digital Personal Data Protection Act 2023, HIPAA if applicable in the US, GDPR if applicable in the EU);</li>
                  <li>Configuring the application appropriately for their regulatory environment.</li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {COMPANY.name} acts as a technology development vendor and, unless expressly agreed in writing, is not a data controller/fiduciary or data processor with independent compliance obligations toward the client's end users.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  To the maximum extent permitted by law, {COMPANY.name} shall not be liable for any indirect, incidental, special, or consequential damages, or any loss of data, revenue, or business, arising from:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>Use or inability to use our Services or any application we develop;</li>
                  <li>Unauthorized access to data by third parties, except where caused by our gross negligence or willful misconduct;</li>
                  <li>Client's failure to implement recommended security practices or compliance measures.</li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Our total liability for any claim arising from our Services shall not exceed the total fees paid by the client for the specific engagement giving rise to the claim.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">8. Cookies & Analytics</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Our website may use cookies and similar tracking technologies to improve user experience and gather analytics. Continued use of our website constitutes consent to our use of cookies.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">9. Security</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We implement reasonable technical and organizational measures to protect information; however, no method of transmission or storage is 100% secure, and we do not guarantee absolute security.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">10. Your Rights</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Subject to applicable law, individuals may request access to, correction of, or deletion of their personal information by contacting us at <a href={`mailto:${COMPANY.email}`} className="font-medium text-primary hover:underline">{COMPANY.email}</a>. We will respond as required by applicable law, but reserve the right to retain information necessary for legitimate business, legal, or contractual purposes.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">11. Changes to This Policy</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We may update this Privacy Policy at any time at our sole discretion. Continued use of our Services or website after changes are posted constitutes acceptance of the updated policy. We are not obligated to individually notify clients or users of changes unless required by law.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">12. Governing Law</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  This Privacy Policy shall be governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground">13. Contact Us</h2>
                <div className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
                  <p>{COMPANY.name}</p>
                  <p>Pune, Maharashtra, India</p>
                  <p>Email: <a href={`mailto:${COMPANY.email}`} className="font-medium text-primary hover:underline">{COMPANY.email}</a></p>
                  <p>Phone: <a href={`tel:${COMPANY.phone}`} className="font-medium text-primary hover:underline">{COMPANY.phone}</a></p>
                </div>
              </section>
            </div>
          </GlassCard>
        </Reveal>
      </Section>
    </>
  );
}
