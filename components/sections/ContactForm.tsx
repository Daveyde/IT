"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4 rounded-2xl border border-white/12 bg-white/[0.065] p-6 shadow-panel backdrop-blur-xl"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white">
          Name
          <input required className="field" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white">
          Email
          <input required type="email" className="field" placeholder="you@company.com" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-white">
        Service
        <select className="field" defaultValue="Managed IT">
          <option>Managed IT</option>
          <option>Cybersecurity</option>
          <option>Microsoft 365</option>
          <option>Networking</option>
          <option>Cloud Services</option>
          <option>Backup & Disaster Recovery</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-white">
        Message
        <textarea className="field min-h-36 resize-y" placeholder="Tell us what you need help with" />
      </label>
      <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-limitless-blue px-5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-400">
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </button>
      <p className="min-h-6 text-sm font-semibold text-limitless-blue" aria-live="polite">
        {sent ? "Thanks. Your request is ready for the Limitless team." : ""}
      </p>
    </form>
  );
}
