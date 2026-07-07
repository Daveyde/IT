import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PricingCards } from "@/components/sections/PricingCards";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Professional IT support pricing for residential support, business support, managed IT plans, and enterprise custom quotes.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Professional support plans with a clear path to fully managed IT."
        text="Choose simple support, monthly business coverage, managed IT per user, or an enterprise program tailored to your environment."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <PricingCards />
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="Plan questions" title="Pricing depends on users, sites, systems, and risk." />
        <FAQAccordion />
      </section>
      <CTASection />
    </>
  );
}
