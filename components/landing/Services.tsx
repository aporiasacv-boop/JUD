"use client";

import { ArrowUpRight, Briefcase, HandCoins, Landmark, Scale } from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    icon: HandCoins,
    title: "Recuperación de adeudos",
    description:
      "Estructuramos rutas de cobranza civil y mercantil con orden, plazos claros y seguimiento constante frente a contrapartes y instancias.",
    accent: "from-judey-gold/30 to-judey-gold/0",
  },
  {
    icon: Landmark,
    title: "Recuperación de bienes",
    description:
      "Analizamos títulos, gravámenes y posiciones procesales para diseñar acciones alineadas con tus objetivos patrimoniales.",
    accent: "from-[#EBD9B5]/30 to-judey-gold/0",
  },
  {
    icon: Scale,
    title: "Asesoría jurídica",
    description:
      "Respuestas puntuales sobre contratos, riesgos y cumplimiento normativo, con lenguaje accesible y criterio de negocio.",
    accent: "from-judey-gold/25 to-judey-blue/0",
  },
  {
    icon: Briefcase,
    title: "Apoyo a PyMEs y emprendedores",
    description:
      "Acompañamiento recurrente para operaciones cotidianas: condiciones generales, proveedores, socios y crecimiento ordenado.",
    accent: "from-[#EBD9B5]/25 to-judey-blue/0",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 border-b border-judey-gold/10 bg-judey-navy py-20 sm:py-24 lg:py-28"
      aria-labelledby="servicios-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-judey-gold">
            Servicios
          </p>
          <h2
            id="servicios-heading"
            className="mt-3 max-w-2xl font-serif text-3xl font-medium tracking-tight text-judey-cream sm:text-4xl lg:text-[2.5rem]"
          >
            Soluciones jurídicas con enfoque{" "}
            <span className="bg-gradient-to-r from-judey-gold to-[#EBD9B5] bg-clip-text text-transparent">
              práctico y cercano
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-judey-muted">
            Integramos experiencia en recuperación y una visión sensible al
            contexto de quienes impulsan negocios en México.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <article
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-judey-gold/10 bg-judey-blue/25 p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-judey-gold/45 hover:bg-judey-blue/45 hover:shadow-[0_28px_60px_-20px_rgba(215,194,154,0.25)]"
                tabIndex={0}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b ${s.accent} opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100`}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-judey-gold/0 blur-3xl transition-all duration-700 group-hover:bg-judey-gold/15"
                />

                <div className="relative flex items-start justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-judey-gold/25 bg-judey-navy/60 text-judey-gold shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:border-judey-gold/60 group-hover:bg-judey-gold/15 group-hover:text-[#EBD9B5] group-hover:shadow-[0_0_30px_-6px_rgba(215,194,154,0.5)]">
                    <s.icon className="h-7 w-7" aria-hidden />
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-5 w-5 -translate-y-1 translate-x-1 text-judey-gold/0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-judey-gold"
                  />
                </div>

                <h3 className="relative mt-6 font-serif text-xl text-judey-cream transition-colors duration-300 group-hover:text-[#EBD9B5] sm:text-[1.35rem]">
                  {s.title}
                </h3>
                <p className="relative mt-3 flex-1 text-base leading-relaxed text-judey-muted transition-colors duration-300 group-hover:text-judey-cream/95">
                  {s.description}
                </p>
                <div className="relative mt-6 h-px w-12 bg-judey-gold/30 transition-all duration-500 group-hover:w-24 group-hover:bg-judey-gold/80" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
