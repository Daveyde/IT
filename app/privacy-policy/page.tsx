import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Limitless Technology Solutions.",
};

const sections = [
  ["Information We Collect", "We collect contact details, support request information, service preferences, and technical details needed to respond to inquiries or provide services."],
  ["How We Use Information", "Information is used to deliver support, schedule consultations, secure client environments, communicate updates, and improve service quality."],
  ["Security", "We use reasonable administrative, technical, and organizational safeguards to protect information handled through our website and service workflows."],
  ["Sharing", "We do not sell personal information. Limited information may be shared with trusted vendors when required to deliver requested services."],
  ["Contact", "Questions about privacy can be sent to support@limitlesstech.example."],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="Privacy Policy" text="How Limitless Technology Solutions handles website and service inquiry information." cta={false} />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <GlassCard className="space-y-8 p-8">
          {sections.map(([title, text]) => (
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
