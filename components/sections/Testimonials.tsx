import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { GlassCard } from "@/components/ui/GlassCard";

export function Testimonials() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {testimonials.map((item) => (
        <GlassCard key={item.name} className="p-6">
          <Quote className="h-7 w-7 text-limitless-blue" aria-hidden="true" />
          <p className="mt-6 text-base leading-8 text-white/72">&quot;{item.quote}&quot;</p>
          <div className="mt-8">
            <p className="font-semibold text-white">{item.name}</p>
            <p className="mt-1 text-sm text-white/45">{item.role}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
