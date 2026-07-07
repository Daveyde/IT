import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/12 bg-white/[0.065] shadow-panel backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-limitless-blue/60 hover:shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
