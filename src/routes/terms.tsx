import { createFileRoute } from "@tanstack/react-router";
import { MeshBackground } from "@/components/site/mesh-background";
import { GlassCard, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";
import { COMPANY } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Sumanix Solutions" },
      { name: "description", content: "Read the terms of service for Sumanix Solutions. These terms govern your use of our website and services." },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://sumanixsolutions.com/terms" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
        <MeshBackground />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Terms of Service
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
                  These Terms of Service govern the relationship between {COMPANY.name}, based in Pune, Maharashtra, India, and any client, business, or individual engaging our software development, white-label engineering, AI integration, e-commerce, CRM, or related technology Services.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  By engaging {COMPANY.name}, signing a proposal/Statement of Work (SOW), making payment, or using our website, you agree to be bound by these Terms.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">1. Scope of Services</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We provide custom software development, white-label development for agencies, AI/RAG integrations, and platform development (web, mobile, e-commerce, CRM, healthcare-technology-adjacent systems). Exact scope, deliverables, timelines, and fees for any engagement are set out in a separate proposal, SOW, or invoice, which forms part of these Terms. In case of conflict, the SOW governs only the specific items it expressly covers; these Terms govern everything else.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">2. Fees & Payment</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>Fees are as quoted in the applicable proposal/invoice and are non-refundable once work has commenced, except at our sole discretion.</li>
                  <li>Payment milestones (e.g., advance, mid-project, final) must be paid as scheduled. We reserve the right to pause or halt all work, including withholding source code, credentials, and deliverables, for any payment delay, without liability for resulting delays or damages to the Client.</li>
                  <li>Late payments may accrue interest at 18% per annum or the maximum permitted by law, whichever is lower.</li>
                  <li>All fees are exclusive of applicable taxes (GST, etc.), which shall be borne by the Client.</li>
                  <li>We reserve the right to revise pricing for ongoing retainer/maintenance engagements with reasonable notice.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">3. Intellectual Property</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>Upon full and final payment, the Client receives ownership/license to the specific deliverable built for them.</li>
                  <li>{COMPANY.name} retains all rights to: pre-existing tools, frameworks, internal libraries, reusable components, methodologies, and any general know-how developed during the engagement, and may reuse them freely in future projects for other clients.</li>
                  <li>Until full payment is received, all deliverables, code, and materials remain the exclusive property of {COMPANY.name}, and the Client has no license to use, deploy, or distribute them.</li>
                  <li>We may, unless the Client explicitly opts out in writing, reference the completed project (name, screenshots, non-confidential details) in our portfolio, case studies, and marketing materials.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">4. Client Obligations</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  The Client agrees to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>Provide timely feedback, approvals, access, and content/materials required for us to perform the Services;</li>
                  <li>Ensure that any data, content, or materials provided to us do not infringe third-party rights and comply with applicable law;</li>
                  <li>Be solely responsible for obtaining end-user consents and ensuring regulatory compliance (e.g., healthcare, financial, or data-protection laws) for any platform we build on the Client's behalf;</li>
                  <li>Bear responsibility for any delay caused by the Client's failure to provide timely inputs — such delays do not extend our obligations or entitle the Client to refunds/penalties.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">5. Warranties & Disclaimers</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>Services are provided on an "as is" and "as available" basis. Except as expressly stated in an SOW, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</li>
                  <li>We do not guarantee that the software will be error-free, uninterrupted, or fully compatible with every third-party system or future regulatory requirement.</li>
                  <li>Bug fixes/support beyond the agreed warranty period (if any) specified in the SOW will be billed separately at our then-current rates.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  To the maximum extent permitted by law:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>{COMPANY.name}'s total aggregate liability for any and all claims arising out of or relating to an engagement shall not exceed the total fees actually paid by the Client for that specific engagement in the preceding three (3) months.</li>
                  <li>We shall not be liable for indirect, incidental, special, punitive, or consequential damages, including loss of profits, revenue, data, or business opportunity, even if advised of the possibility of such damages.</li>
                  <li>We are not liable for delays or failures caused by events beyond our reasonable control (force majeure), third-party service outages (e.g., AWS, OpenAI, Shopify, Salesforce), or Client-side misconfiguration.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">7. Indemnification</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  The Client agrees to indemnify, defend, and hold harmless {COMPANY.name}, its partners, employees, and sub-contractors from any claims, damages, liabilities, and expenses (including legal fees) arising from: (a) the Client's use of the deliverables; (b) Client-provided content or data; (c) the Client's non-compliance with applicable laws (including data protection/healthcare regulations); or (d) any third-party claim relating to the Client's business or end users.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">8. Confidentiality</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Both parties agree to keep confidential information disclosed during the engagement private, except that {COMPANY.name} may use general knowledge, techniques, and non-identifiable insights gained during the engagement for other projects without restriction.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">9. Termination</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>We may terminate or suspend any engagement immediately, without liability, if the Client breaches these Terms, fails to pay on time, or provides content/instructions we deem unlawful or reputationally harmful.</li>
                  <li>If the Client terminates an engagement early, fees already paid are non-refundable, and any outstanding milestone fees for work in progress become immediately due.</li>
                  <li>Upon termination, we are not obligated to deliver source code or incomplete work product until all outstanding invoices are settled in full.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">10. Independent Contractor Relationship</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {COMPANY.name} operates as an independent contractor/vendor. Nothing in these Terms creates an employment, partnership, joint venture, or agency relationship between the Company and the Client, or between the Company and any of the Client's customers/end users.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">11. Sub-contracting & White-Label Engagements</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We reserve the right to use internal team members or vetted sub-contractors to deliver Services. For white-label/agency engagements, the reselling agency remains fully responsible for its own end-client relationship, billing, and representations; {COMPANY.name}'s obligations run only to the direct Client that contracted with us.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">12. Changes to These Terms</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We may update these Terms at any time at our sole discretion by posting the revised version on our website or sending notice. Continued engagement of our Services after changes are posted constitutes acceptance.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">13. Governing Law & Dispute Resolution</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  These Terms are governed by the laws of India. Any disputes shall be subject to arbitration in Pune, Maharashtra, under the Arbitration and Conciliation Act, 1996, with the arbitration seat and venue in Pune, and the arbitrator's decision being final and binding. Subject to the above, courts in Pune, Maharashtra shall have exclusive jurisdiction.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">14. Entire Agreement</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  These Terms, together with the applicable proposal/SOW/invoice, constitute the entire agreement between the parties and supersede all prior discussions, negotiations, or agreements, whether written or oral.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground">15. Contact Us</h2>
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
