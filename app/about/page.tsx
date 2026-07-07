import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Limitless Technology Solutions, our mission, values, team, and enterprise IT approach.",
};

const team = [
  { name: "Jordan Reed", role: "Principal Consultant", initials: "JR" },
  { name: "Avery Chen", role: "Cybersecurity Lead", initials: "AC" },
  { name: "Morgan Ellis", role: "Cloud & Microsoft Architect", initials: "ME" },
  { name: "Taylor Brooks", role: "Network Engineer", initials: "TB" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Senior technology leadership for organizations that expect more."
        text="Limitless Technology Solutions was built for businesses that need enterprise-grade execution without enterprise complexity."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Company story"
            title="We help teams replace reactive IT with a secure operating model."
            text="Our work starts with listening: what breaks, what slows people down, what keeps leadership awake, and what the business needs technology to do next."
          />
        </div>
        <GlassCard className="p-8">
          <h2 className="text-2xl font-semibold text-white">Mission</h2>
          <p className="mt-4 text-base leading-8 text-white/64">
            Deliver clear, fast, security-aware technology support that gives every client the confidence of a mature IT department.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-white">Values</h2>
          <p className="mt-4 text-base leading-8 text-white/64">
            We value calm execution, documented decisions, respectful support, practical security, and infrastructure that can be trusted under pressure.
          </p>
        </GlassCard>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <SectionHeading eyebrow="Why choose us" title="A support partner with enterprise habits." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <GlassCard key={value.title} className="p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-limitless-blue/15 text-limitless-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-7 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{value.text}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <SectionHeading eyebrow="Meet the team" title="Specialists for support, security, cloud, and infrastructure." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <GlassCard key={person.name} className="p-6">
              <div className="grid h-20 w-20 place-items-center rounded-2xl border border-limitless-blue/40 bg-limitless-blue/15 text-xl font-semibold text-white shadow-glow">
                {person.initials}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{person.name}</h3>
              <p className="mt-2 text-sm text-white/55">{person.role}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <Testimonials />
      </section>
      <CTASection />
    </>
  );
}
