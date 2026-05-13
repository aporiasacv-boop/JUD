"use client";

import {
  ClipboardList,
  Gavel,
  LineChart,
  MessageSquareText,
} from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Evaluamos tu caso",
    text: "Escuchamos los hechos, revisamos documentación inicial y delimitamos opciones realistas.",
    icon: ClipboardList,
  },
  {
    n: "02",
    title: "Diseñamos la estrategia",
    text: "Definimos pasos, tiempos y escenarios con transparencia sobre costos y probabilidades.",
    icon: LineChart,
  },
  {
    n: "03",
    title: "Damos seguimiento legal",
    text: "Actuamos ante instancias y contrapartes con comunicación periódica y registros claros.",
    icon: Gavel,
  },
  {
    n: "04",
    title: "Buscamos una solución efectiva",
    text: "Priorizamos acuerdos cuando conviene y litigio cuando es necesario, siempre con criterio.",
    icon: MessageSquareText,
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="scroll-mt-24 border-b border-judey-gold/10 bg-judey-blue/20 py-20 sm:py-24 lg:py-28"
      aria-labelledby="proceso-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-judey-gold">
            Proceso
          </p>
          <h2
            id="proceso-heading"
            className="mt-3 max-w-2xl font-serif text-3xl font-medium tracking-tight text-judey-cream sm:text-4xl"
          >
            Un camino claro, sin sorpresas
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-judey-muted">
            Así trabajamos contigo para reducir incertidumbre y avanzar con
            orden.
          </p>
        </FadeIn>

        <ol className="relative mt-16 space-y-10 before:absolute before:left-[1.35rem] before:top-3 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-judey-gold/40 before:via-judey-gold/15 before:to-transparent sm:space-y-12 sm:before:left-6 lg:before:left-8">
          {steps.map((step, i) => (
            <li key={step.n} className="group relative pl-16 sm:pl-20 lg:pl-24">
              <FadeIn delay={i * 0.08}>
                <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-2xl border border-judey-gold/30 bg-judey-navy font-serif text-sm font-semibold text-judey-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:border-judey-gold group-hover:bg-judey-gold group-hover:text-judey-navy group-hover:shadow-[0_0_30px_-4px_rgba(215,194,154,0.6)] sm:left-0.5 sm:h-12 sm:w-12 lg:left-1">
                  {step.n}
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-judey-gold/10 bg-judey-navy/50 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-judey-gold/40 group-hover:bg-judey-navy/85 group-hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)] sm:p-8 lg:flex lg:items-start lg:gap-8">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-gradient-to-t from-judey-gold via-judey-gold/60 to-transparent transition-transform duration-500 group-hover:scale-y-100"
                  />
                  <span className="mb-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-judey-gold/20 bg-judey-blue/20 text-judey-gold transition-all duration-500 group-hover:scale-110 group-hover:border-judey-gold/55 group-hover:bg-judey-gold/15 group-hover:text-[#EBD9B5] lg:mb-0">
                    <step.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-judey-cream transition-colors duration-300 group-hover:text-[#EBD9B5] sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-judey-muted transition-colors duration-300 group-hover:text-judey-cream/95">
                      {step.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
