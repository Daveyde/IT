import { CheckCircle2 } from "lucide-react";
import { Service } from "@/lib/site";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServiceDetailProps = {
  service: Service;
};

const outcomes = [
  "Reduced operational noise",
  "Clear documentation",
  "Faster user response",
  "Security-aware implementation",
  "Practical reporting",
  "Scalable roadmap",
];

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <>
      <PageHeader eyebrow="Service" title={service.title} text={service.summary} />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="p-8">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-limitless-blue/15 text-limitless-blue">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="mt-8 text-3xl font-semibold text-white">Built for secure, uninterrupted operations.</h2>
          <p className="mt-5 text-base leading-8 text-white/64">
            We design each engagement around business continuity, user experience, security posture, and measurable next steps.
          </p>
        </GlassCard>
        <div>
          <SectionHeading eyebrow="What is included" title="Focused execution with enterprise discipline." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.details.concat(outcomes).slice(0, 10).map((item) => (
              <div key={item} className="inline-flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-limitless-blue" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={`Need help with ${service.title}?`} text="Tell us what is slowing the business down and we will map a clean support path." />
    </>
  );
}
