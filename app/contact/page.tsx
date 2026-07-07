import type { Metadata } from "next";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { contactMethods } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Limitless Technology Solutions for support, consultation, business hours, phone, email, and live chat.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get support, schedule a consultation, or plan your next IT move."
        text="Tell us what is happening and we will route your request to the right technical path."
        cta={false}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold text-white">Contact details</h2>
            <div className="mt-6 grid gap-4">
              {contactMethods.map((method) => (
                <div key={method.label} className="rounded-xl border border-white/10 bg-black/25 p-4">
                  <p className="text-xs uppercase text-limitless-blue">{method.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{method.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com" aria-label="Facebook" className="rounded-xl border border-white/12 p-3 text-white/70 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="rounded-xl border border-white/12 p-3 text-white/70 hover:text-white"><Linkedin className="h-5 w-5" /></a>
              <span className="inline-flex items-center gap-2 rounded-xl border border-limitless-blue/35 bg-limitless-blue/10 px-4 text-sm font-semibold text-white">
                <MessageCircle className="h-4 w-4" /> Live chat soon
              </span>
            </div>
          </GlassCard>
          <GlassCard className="min-h-80 overflow-hidden p-0">
            <div className="relative h-80 bg-[radial-gradient(circle_at_50%_45%,rgba(10,132,255,0.36),transparent_28%),linear-gradient(135deg,#07111f,#050505)]">
              <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
              <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-limitless-blue/70 bg-limitless-blue/20 text-sm font-semibold text-white shadow-glow">
                LTS
              </div>
            </div>
          </GlassCard>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
