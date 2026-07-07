import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Limitless Technology Solutions support, managed IT, Microsoft 365, cybersecurity, and response options.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Answers about support, security, cloud, and managed IT."
        text="A quick reference for how Limitless works with residential, business, managed, and enterprise clients."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading eyebrow="Common questions" title="Start here, then talk to a technician." />
        <FAQAccordion />
      </section>
      <CTASection />
    </>
  );
}
