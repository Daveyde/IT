import { stats } from "@/lib/site";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MotionSection } from "@/components/ui/MotionSection";

export function StatsSection() {
  return (
    <MotionSection className="border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto grid max-w-7xl gap-px px-5 py-8 md:grid-cols-4 md:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-3 text-sm leading-6 text-white/58">{stat.label}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
