import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, LifeBuoy } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: "arrow" | "support";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", icon = "arrow", className }: ButtonLinkProps) {
  const Icon = icon === "support" ? LifeBuoy : ArrowRight;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-limitless-blue focus:ring-offset-2 focus:ring-offset-limitless-black",
        variant === "primary"
          ? "bg-limitless-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-blue-400"
          : "border border-white/15 bg-white/7 text-white hover:-translate-y-0.5 hover:border-limitless-blue/70 hover:bg-limitless-blue/10",
        className,
      )}
    >
      <Icon className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      {children}
    </Link>
  );
}
