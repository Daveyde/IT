import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="rounded-2xl border border-white/12 bg-white/[0.055] p-6 backdrop-blur-xl md:p-8">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-limitless-blue/15 text-limitless-blue">
          <Mail className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-semibold text-white">Executive IT brief</h2>
          <p className="mt-2 text-sm leading-7 text-white/58">Monthly security, Microsoft, cloud, and networking guidance.</p>
        </div>
      </div>
      <form className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@company.com"
          className="min-h-12 flex-1 rounded-xl border border-white/12 bg-black/35 px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-limitless-blue"
        />
        <button type="submit" className="min-h-12 rounded-xl bg-limitless-blue px-5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400">
          Subscribe
        </button>
      </form>
    </section>
  );
}
