import { CheckCircle2 } from "lucide-react";
import { pricingPlans } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-4">
      {pricingPlans.map((plan) => (
        <GlassCard key={plan.name} className={cn("p-6", plan.featured && "border-limitless-blue/70 bg-limitless-blue/12 shadow-glow")}>
          <p className="text-sm font-semibold text-limitless-blue">{plan.name}</p>
          <div className="mt-5 flex items-end gap-2">
            <span className="text-4xl font-semibold text-white">{plan.price}</span>
            <span className="pb-1 text-sm text-white/50">{plan.cadence}</span>
          </div>
          <p className="mt-5 min-h-20 text-sm leading-7 text-white/62">{plan.description}</p>
          <div className="mt-6 grid gap-3">
            {plan.features.map((feature) => (
              <span key={feature} className="inline-flex items-start gap-2 text-sm text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-limitless-blue" aria-hidden="true" />
                {feature}
              </span>
            ))}
          </div>
          <ButtonLink href="/contact" className="mt-8 w-full" variant={plan.featured ? "primary" : "secondary"}>
            Get started
          </ButtonLink>
        </GlassCard>
      ))}
    </div>
  );
}
