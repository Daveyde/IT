import { CircuitBackground } from "@/components/ui/CircuitBackground";
import { ButtonLink } from "@/components/ui/ButtonLink";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  text: string;
  cta?: boolean;
};

export function PageHeader({ eyebrow, title, text, cta = true }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-limitless-black px-5 py-20 md:px-8">
      <CircuitBackground />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase text-limitless-blue">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{text}</p>
        {cta ? (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" icon="support">Request Support</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">View Pricing</ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
