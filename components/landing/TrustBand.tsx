"use client";

import { HeartHandshake, ListChecks, Target, Users } from "lucide-react";
import { FadeIn } from "./FadeIn";

const items = [
  {
    icon: HeartHandshake,
    label: "Atención personalizada",
  },
  {
    icon: ListChecks,
    label: "Estrategia legal clara",
  },
  {
    icon: Users,
    label: "Acompañamiento profesional",
  },
  {
    icon: Target,
    label: "Enfoque en resultados",
  },
];

export function TrustBand() {
  return (
    <section
      className="border-b border-judey-gold/10 bg-judey-blue/35 py-8 backdrop-blur-sm"
      aria-label="Señales de confianza"
    >
      <FadeIn className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-col items-stretch gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-4 md:gap-y-5">
          {items.map((item) => (
            <li
              key={item.label}
              className="group flex items-center gap-3 rounded-xl px-2 py-1 transition-all duration-300 hover:bg-judey-navy/30 md:flex-1 md:min-w-[calc(50%-1rem)] lg:min-w-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-judey-gold/20 bg-judey-navy/30 text-judey-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:border-judey-gold/60 group-hover:bg-judey-gold/15 group-hover:text-[#EBD9B5] group-hover:shadow-[0_0_20px_-4px_rgba(215,194,154,0.5)]">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm font-medium tracking-wide text-judey-cream/95 transition-colors duration-300 group-hover:text-judey-gold">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
