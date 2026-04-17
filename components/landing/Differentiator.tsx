"use client";

import { Quote } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Differentiator() {
  return (
    <section
      className="border-b border-judey-gold/10 bg-judey-navy py-20 sm:py-24 lg:py-28"
      aria-labelledby="diferenciador-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-judey-gold">
              Por qué JUDEYCO
            </p>
            <h2
              id="diferenciador-heading"
              className="mt-3 font-serif text-3xl font-medium tracking-tight text-judey-cream sm:text-4xl"
            >
              Cercanía con rigor: el equilibrio que mereces
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-judey-muted">
              Sabemos que detrás de cada expediente hay personas, flujos de
              efectivo y decisiones cotidianas. Por eso combinamos experiencia
              en cobranza y recuperación con un trato humano, sin dramatizar ni
              minimizar lo que está en juego.
            </p>
            <ul className="mt-8 space-y-4 text-judey-muted">
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-judey-gold/80"
                  aria-hidden
                />
                <span>
                  Claridad en cada etapa: sabrás qué esperar, en qué orden y con
                  qué documentos.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-judey-gold/80"
                  aria-hidden
                />
                <span>
                  Enfoque en negocios locales: lenguaje y tiempos alineados con
                  la realidad de PyMEs y emprendedores.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-judey-gold/80"
                  aria-hidden
                />
                <span>
                  Criterio en recuperación: priorizamos rutas eficientes sin
                  perder de vista la tutela judicial adecuada.
                </span>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-judey-gold/15 bg-gradient-to-br from-judey-blue/50 to-judey-navy p-8 shadow-card sm:p-10">
              <Quote
                className="absolute right-6 top-6 h-16 w-16 text-judey-gold/10"
                aria-hidden
              />
              <blockquote className="relative">
                <p className="font-serif text-xl leading-relaxed text-judey-cream sm:text-2xl">
                  “La confianza no se declara: se construye con respuestas
                  oportunas, trato respetuoso y estrategia sensata.”
                </p>
                <footer className="mt-8 border-t border-judey-gold/15 pt-6">
                  <p className="text-sm font-medium text-judey-gold">
                    Línea de principios JUDEYCO
                  </p>
                  <p className="mt-1 text-sm text-judey-muted">
                    Cita
                    institucional
                  </p>
                </footer>
              </blockquote>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-judey-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem “cita de Judeyco o alguna legal que quieras usar”
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
