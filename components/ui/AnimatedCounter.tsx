"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 48;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.round(value * progress));
      if (frame >= total) window.clearInterval(timer);
    }, 20);

    return () => window.clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.span ref={ref} className="text-4xl font-semibold text-white md:text-5xl">
      {count}
      {suffix}
    </motion.span>
  );
}
