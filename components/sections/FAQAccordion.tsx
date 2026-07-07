"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="rounded-2xl border border-white/12 bg-white/[0.055] backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-white"
            aria-expanded={open === index}
          >
            {faq.question}
            <ChevronDown className={cn("h-5 w-5 shrink-0 text-limitless-blue transition", open === index && "rotate-180")} aria-hidden="true" />
          </button>
          <div className={cn("grid transition-all duration-300", open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-sm leading-7 text-white/62">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
