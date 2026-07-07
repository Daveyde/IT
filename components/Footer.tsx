import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { coreServices, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-limitless-blue/50 bg-limitless-blue/15 text-sm font-bold text-white">
              LT
            </span>
            <span className="font-semibold text-white">Limitless Technology Solutions</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            Premium managed IT, cybersecurity, cloud, and business networking for teams that expect fast response and clean execution.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="https://www.facebook.com" aria-label="Facebook" className="rounded-xl border border-white/12 p-3 text-white/70 hover:text-white">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="rounded-xl border border-white/12 p-3 text-white/70 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <div className="mt-5 grid gap-3">
            {coreServices.map((service) => (
              <Link key={service.href} href={service.href} className="text-sm text-white/58 hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/58 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Support</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/58">
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 018-2048</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> support@limitlesstech.example</span>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/45 md:px-8">
        Copyright 2026 Limitless Technology Solutions. All rights reserved.
      </div>
    </footer>
  );
}
