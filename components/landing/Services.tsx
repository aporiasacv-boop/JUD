"use client";

import {
  Briefcase,
  HandCoins,
  Landmark,
  Scale,
} from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    icon: HandCoins,
    title: "Recuperación de adeudos",
    description:
      "Estructuramos rutas de cobranza civil y mercantil con orden, plazos claros y seguimiento constante frente a contrapartes y instancias.",
  },
  {
    icon: Landmark,
    title: "Recuperación de bienes",
    description:
      "Analizamos títulos, gravámenes y posiciones procesales para diseñar acciones alineadas con tus objetivos patrimoniales.",
  },
  {
    icon: Scale,
    title: "Asesoría jurídica",
    description:
      "Respuestas puntuales sobre contratos, riesgos y cumplimiento normativo, con lenguaje accesible y criterio de negocio.",
  },
  {
    icon: Briefcase,
    title: "Apoyo a PyMEs y emprendedores",
    description:
      "Acompañamiento recurrente para operaciones cotidianas: condiciones generales, proveedores, socios y crecimiento ordenado.",
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
            Soluciones jurídicas con enfoque práctico y cercano
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-judey-muted">
            Integramos experiencia en recuperación y una visión sensible al
            contexto de quienes impulsan negocios en México.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-judey-gold/10 bg-judey-blue/25 p-8 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-judey-gold/25 hover:bg-judey-blue/40 hover:shadow-glow">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-judey-gold/20 bg-judey-navy/50 text-judey-gold transition group-hover:border-judey-gold/35 group-hover:text-judey-cream">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="font-serif text-xl text-judey-cream">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-judey-muted">
                  {s.description}
                </p>
                <div className="mt-6 h-px w-12 bg-judey-gold/25 transition group-hover:w-20 group-hover:bg-judey-gold/40" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
