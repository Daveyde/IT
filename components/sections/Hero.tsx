import Image from "next/image";
import { Activity, ShieldCheck, Signal } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CircuitBackground } from "@/components/ui/CircuitBackground";
import { MotionSection } from "@/components/ui/MotionSection";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-limitless-black">
      <CircuitBackground />
      <div className="relative mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1fr_0.9fr]">
        <MotionSection className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-limitless-blue/35 bg-limitless-blue/10 px-4 py-2 text-xs font-semibold uppercase text-blue-100 shadow-glow">
            <Activity className="h-4 w-4 text-limitless-blue" aria-hidden="true" />
            Enterprise IT. Security-first execution.
          </div>
          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-normal text-white md:text-7xl">
            Technology Solutions Without Limits
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Limitless Technology Solutions delivers managed IT, cybersecurity, Microsoft 365, networking, cloud, and disaster recovery with the polish of an enterprise technology partner.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact" icon="support">Request Support</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Schedule Consultation</ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-white/68 sm:grid-cols-3">
            {["24/7 monitoring", "Certified technicians", "Security-first roadmaps"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                <ShieldCheck className="h-4 w-4 text-limitless-blue" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="relative min-h-[420px]">
          <div className="absolute -inset-6 rounded-[2rem] bg-limitless-blue/20 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 shadow-panel backdrop-blur-xl">
            <Image
              src="/images/enterprise-technology.png"
              alt="Modern server racks, network infrastructure, and cybersecurity operations with blue lighting"
              width={1800}
              height={1100}
              priority
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/16 bg-black/55 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase text-limitless-blue">Live operations</p>
                  <p className="mt-1 text-sm font-semibold text-white">Monitoring networks, cloud, devices, and threats.</p>
                </div>
                <Signal className="h-8 w-8 text-limitless-blue" aria-hidden="true" />
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
