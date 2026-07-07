import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { PricingCards } from "@/components/sections/PricingCards";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { Newsletter } from "@/components/sections/Newsletter";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { additionalServices, coreServices } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <StatsSection />
      <MotionSection className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Enterprise-grade technology support for every layer of the business."
          text="From user support to firewalls, cloud, Microsoft 365, Wi-Fi, backup, and disaster recovery, Limitless keeps operations secure and moving."
        />
        <div className="mt-12">
          <ServicesGrid services={[...coreServices, ...additionalServices.slice(0, 6)]} />
        </div>
      </MotionSection>
      <MotionSection className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Support plans built for homes, teams, and enterprise environments."
          text="Start with practical support or scale into a fully managed technology program."
        />
        <div className="mt-12">
          <PricingCards />
        </div>
      </MotionSection>
      <MotionSection className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="Client outcomes" title="Calm, secure operations for teams that need technology to perform." />
        <div className="mt-12">
          <Testimonials />
        </div>
      </MotionSection>
      <MotionSection className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Straight answers before the first call."
            text="A quick look at support coverage, response options, Microsoft 365, and managed services."
          />
          <div className="mt-8">
            <Newsletter />
          </div>
        </div>
        <FAQAccordion />
      </MotionSection>
      <CTASection />
    </>
  );
}
