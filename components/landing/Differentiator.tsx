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
              {[
                "Claridad en cada etapa: sabrás qué esperar, en qué orden y con qué documentos.",
                "Enfoque en negocios locales: lenguaje y tiempos alineados con la realidad de PyMEs y emprendedores.",
                "Criterio en recuperación: priorizamos rutas eficientes sin perder de vista la tutela judicial adecuada.",
              ].map((text) => (
                <li
                  key={text}
                  className="group flex gap-3 rounded-lg p-2 transition-all duration-300 hover:bg-judey-blue/20"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-judey-gold/80 transition-all duration-300 group-hover:h-2 group-hover:w-2 group-hover:bg-judey-gold group-hover:shadow-[0_0_10px_rgba(215,194,154,0.8)]"
                    aria-hidden
                  />
                  <span className="transition-colors duration-300 group-hover:text-judey-cream">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="group relative overflow-hidden rounded-2xl border border-judey-gold/15 bg-gradient-to-br from-judey-blue/50 to-judey-navy p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-judey-gold/45 hover:shadow-[0_30px_60px_-20px_rgba(215,194,154,0.25)] sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-judey-gold/0 blur-3xl transition-all duration-700 group-hover:bg-judey-gold/15"
              />
              <Quote
                className="absolute right-6 top-6 h-16 w-16 text-judey-gold/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-judey-gold/30"
                aria-hidden
              />
              <blockquote className="relative">
                <p className="font-serif text-xl leading-relaxed text-judey-cream transition-colors duration-300 group-hover:text-white sm:text-2xl">
                  &ldquo;La confianza no se declara: se construye con respuestas
                  oportunas, trato respetuoso y estrategia sensata.&rdquo;
                </p>
                <footer className="mt-8 border-t border-judey-gold/20 pt-6">
                  <p className="text-sm font-medium text-judey-gold">
                    Línea de principios JUDEYCO
                  </p>
                  <p className="mt-1 text-sm text-judey-muted">
                    Cita institucional
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
