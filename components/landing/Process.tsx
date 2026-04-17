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

        <ol className="relative mt-16 space-y-10 before:absolute before:left-[1.35rem] before:top-3 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-judey-gold/30 before:via-judey-gold/10 before:to-transparent sm:space-y-12 sm:before:left-6 lg:before:left-8">
          {steps.map((step, i) => (
            <li key={step.n} className="relative pl-16 sm:pl-20 lg:pl-24">
              <FadeIn delay={i * 0.08}>
                <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-2xl border border-judey-gold/25 bg-judey-navy font-serif text-sm font-semibold text-judey-gold sm:left-0.5 sm:h-12 sm:w-12 lg:left-1">
                  {step.n}
                </div>
                <div className="rounded-2xl border border-judey-gold/10 bg-judey-navy/50 p-6 sm:p-8 lg:flex lg:items-start lg:gap-8">
                  <span className="mb-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-judey-gold/15 text-judey-gold lg:mb-0">
                    <step.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-judey-cream sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-judey-muted">
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
