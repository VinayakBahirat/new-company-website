import { Section, SectionHeading } from "@/components/site/primitives";
import { TestimonialsSection } from "@/components/site/testimonials";

export function ClientTestimonials() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          body="A few words from the people we've had the opportunity to work with."
        />
      </div>
      <TestimonialsSection />
    </Section>
  );
}
