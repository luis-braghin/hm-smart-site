"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");

          // Counter animation for stats
          if (e.target.classList.contains("stats-row")) {
            e.target
              .querySelectorAll<HTMLElement>("[data-counter]")
              .forEach((n) => {
                const target = Number(n.dataset.counter);
                const suffix = n.dataset.suffix || "";
                const dur = 1200;
                const t0 = performance.now();
                const tick = (now: number) => {
                  const p = Math.min(1, (now - t0) / dur);
                  const eased = 1 - Math.pow(1 - p, 3);
                  n.textContent = Math.round(target * eased) + suffix;
                  if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
              });
          }

          io.unobserve(e.target);
        });
      },
      { threshold: 0.18 }
    );

    document
      .querySelectorAll(".reveal, .stats-row")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
