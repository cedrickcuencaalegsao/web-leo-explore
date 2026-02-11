"use client";

import React, { useRef, useEffect, useState } from "react";
import "./AnimatedSection.css";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Fraction of section visible to trigger (0–1). Default 0.12 */
  threshold?: number;
  /** Root margin so animation starts slightly before fully in view */
  rootMargin?: string;
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -5% 0px",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin, root: null }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`animated-section ${visible ? "animated-section--visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
