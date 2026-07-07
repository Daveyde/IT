import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Limitless Technology Solutions.",
};

const terms = [
  ["Website Use", "This website is provided for general information and service inquiry purposes. Content may change without notice."],
  ["Service Engagements", "Professional services are governed by a separate written agreement, statement of work, or managed services agreement."],
  ["No Guarantee", "Website content does not guarantee a particular technical outcome, response time, or service level unless stated in a signed agreement."],
  ["Intellectual Property", "Branding, copy, design, and website materials are owned by or licensed to Limitless Technology Solutions."],
  ["Contact", "Questions about these terms can be sent to support@limitlesstech.example."],
];

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Terms" title="Terms of Use" text="The basic terms for using the Limitless Technology Solutions website." cta={false} />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <GlassCard className="space-y-8 p-8">
          {terms.map(([title, text]) => (
            <div key={title}>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/62">{text}</p>
            </div>
          ))}
        </GlassCard>
      </section>
    </>
  );
}
