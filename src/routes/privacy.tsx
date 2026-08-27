import { createFileRoute } from "@tanstack/react-router";
import { MeshBackground } from "@/components/site/mesh-background";
import { GlassCard, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";
import { COMPANY } from "@/content/site";

export const Route = createFileRoute("/privacy")({
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
                  {COMPANY.name} ("us", "we", or "our") operates the {COMPANY.name} website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">1. Information Collection and Use</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                
                <h3 className="mt-8 font-display text-lg font-semibold text-foreground">Personal Data</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Cookies and Usage Data</li>
                </ul>

                <h3 className="mt-8 font-display text-lg font-semibold text-foreground">Usage Data</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">2. Use of Data</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {COMPANY.name} uses the collected data for various purposes:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>To provide and maintain the Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                  <li>To provide customer care and support</li>
                  <li>To provide analysis or valuable information so that we can improve the Service</li>
                  <li>To monitor the usage of the Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">3. Transfer of Data</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                </p>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">4. Disclosure of Data</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {COMPANY.name} may disclose your Personal Data in the good faith belief that such action is necessary to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                  <li>To comply with a legal obligation</li>
                  <li>To protect and defend the rights or property of {COMPANY.name}</li>
                  <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                  <li>To protect the personal safety of users of the Service or the public</li>
                  <li>To protect against legal liability</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground">5. Security of Data</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground">6. Contact Us</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${COMPANY.email}`} className="font-medium text-primary hover:underline">{COMPANY.email}</a>.
                </p>
              </section>
            </div>
          </GlassCard>
        </Reveal>
      </Section>
    </>
  );
}
