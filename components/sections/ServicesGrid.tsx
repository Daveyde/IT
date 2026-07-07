import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/site";
import { GlassCard } from "@/components/ui/GlassCard";

type ServicesGridProps = {
  services: Service[];
};

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <GlassCard key={service.title} className="group p-6">
            <div className="flex h-full flex-col">
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-limitless-blue/15 text-limitless-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <ArrowRight className="h-5 w-5 text-white/35 transition group-hover:translate-x-1 group-hover:text-limitless-blue" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-white/62">{service.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.details.slice(0, 3).map((detail) => (
                  <span key={detail} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/58">
                    {detail}
                  </span>
                ))}
              </div>
              <Link href={service.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-limitless-blue">
                Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}
