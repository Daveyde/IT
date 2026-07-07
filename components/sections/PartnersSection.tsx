import { partners } from "@/lib/site";

export function PartnersSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
      <p className="text-center text-xs font-semibold uppercase text-white/40">Technology ecosystems we support</p>
      <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-6">
        {partners.map((partner) => (
          <div key={partner} className="rounded-xl border border-white/10 bg-white/[0.045] px-4 py-4 text-center text-sm font-semibold text-white/62">
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}
