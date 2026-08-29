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
                  Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the {COMPANY.name} website (the "Service") operated by {COMPANY.name} ("us", "we", or "our").
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">2. Services</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {COMPANY.name} provides custom software development, AI solutions, web and mobile application development, and related consulting services. Detailed scope, deliverables, and timelines for specific projects will be outlined in separate Statements of Work (SOW) or Master Services Agreements (MSA) which take precedence over these general terms.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">3. Intellectual Property</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  The Service and its original content, features and functionality are and will remain the exclusive property of {COMPANY.name} and its licensors. Unless otherwise specified in a specific project agreement, all code, designs, and intellectual property developed during client engagements become the exclusive property of the client upon full payment of all related invoices.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">4. Links To Other Web Sites</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by {COMPANY.name}.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {COMPANY.name} has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that {COMPANY.name} shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">5. Limitation Of Liability</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  In no event shall {COMPANY.name}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">6. Disclaimer</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">7. Governing Law</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  These Terms shall be governed and construed in accordance with the laws of our jurisdiction, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">8. Changes</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground">9. Contact Us</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  If you have any questions about these Terms, please contact us at <a href={`mailto:${COMPANY.email}`} className="font-medium text-primary hover:underline">{COMPANY.email}</a>.
                </p>
              </section>
            </div>
          </GlassCard>
        </Reveal>
      </Section>
    </>
  );
}
