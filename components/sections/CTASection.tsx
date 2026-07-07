import { ButtonLink } from "@/components/ui/ButtonLink";
import { CircuitBackground } from "@/components/ui/CircuitBackground";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Ready for IT that scales without friction?",
  text = "Schedule a consultation and get a practical plan for support, security, cloud, and continuity.",
}: CTASectionProps) {
  return (
    <section className="px-5 py-20 md:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-limitless-blue/30 bg-white/[0.065] p-8 shadow-glow backdrop-blur-xl md:p-12">
        <CircuitBackground />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase text-limitless-blue">Talk to an expert</p>
            <h2 className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/contact" icon="support">Request Support</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">View Plans</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
