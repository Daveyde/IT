import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { additionalServices, coreServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Managed IT, cybersecurity, Microsoft 365, networking, cloud services, backup, disaster recovery, remote support, and consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Complete IT services for modern business operations."
        text="Limitless supports the full technology stack, from help desk and endpoints to networking, cloud, Microsoft 365, cybersecurity, backup, and disaster recovery."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="Core services" title="The foundation of secure, reliable technology." />
        <div className="mt-12">
          <ServicesGrid services={coreServices} />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <SectionHeading eyebrow="Specialized support" title="Targeted services for the work that cannot wait." />
        <div className="mt-12">
          <ServicesGrid services={additionalServices} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
