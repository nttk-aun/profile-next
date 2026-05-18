"use client";

import { useEffect, useRef } from "react";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

export function RevealSection({
  children,
  className = "section reveal",
  id,
  "aria-labelledby": ariaLabelledby,
}: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -40px 0px", threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={className}
      id={id}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  );
}
