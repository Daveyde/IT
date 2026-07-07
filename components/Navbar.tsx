"use client";

import Link from "next/link";
import { Menu, X, LifeBuoy } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-limitless-black/80 backdrop-blur-2xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Limitless Technology Solutions home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-limitless-blue/50 bg-limitless-blue/15 text-sm font-bold text-white shadow-glow">
            LT
          </span>
          <span className="max-w-44 text-sm font-semibold leading-tight text-white md:max-w-none">
            Limitless Technology Solutions
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/68 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/7 px-4 text-sm font-semibold text-white transition hover:border-limitless-blue/70 hover:bg-limitless-blue/12"
          >
            <LifeBuoy className="h-4 w-4" aria-hidden="true" />
            Request Support
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("border-t border-white/10 px-5 py-4 lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-white/78 hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
