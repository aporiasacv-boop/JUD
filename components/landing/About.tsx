"use client";

import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-24 border-b border-judey-gold/10 bg-judey-blue/25 py-20 sm:py-24 lg:py-28"
      aria-labelledby="nosotros-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <FadeIn>
            <figure className="relative mx-auto max-w-md lg:mx-0">
              <div
                className="aspect-[4/5] overflow-hidden rounded-2xl border border-judey-gold/20 bg-judey-navy shadow-card"
                aria-hidden
              >
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-judey-blue/60 to-judey-navy p-8 text-center">
                  <div className="h-28 w-28 rounded-full border border-judey-gold/25 bg-judey-blue/40" />
                  <p className="mt-6 font-serif text-lg text-judey-cream">
                    Retrato / oficina
                  </p>
                  <p className="mt-2 text-sm text-judey-muted">
                    Área reservada para fotografía cálida y sobria del equipo o
                    del consultorio.
                  </p>
                </div>
              </div>
              <figcaption className="sr-only">
                Imagen de retrato u oficina en preparación para la sección
                nosotros.
              </figcaption>
              <div
                className="pointer-events-none absolute -right-4 -bottom-4 -z-10 h-40 w-40 rounded-2xl border border-judey-gold/10 bg-judey-gold/5"
                aria-hidden
              />
            </figure>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-judey-gold">
              Nosotros
            </p>
            <h2
              id="nosotros-heading"
              className="mt-3 font-serif text-3xl font-medium tracking-tight text-judey-cream sm:text-4xl"
            >
              Un despacho que habla claro y camina contigo
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-judey-muted">
              En JUDEYCO acompañamos procesos de recuperación y asesoría con la
              seriedad que el derecho exige, y la calidez que las personas
              necesitan cuando el tema es sensible.
            </p>
            <p className="mt-4 text-base leading-relaxed text-judey-muted">
              Atendemos desde la ciudad de México y entornos cercanos, con
              canales presenciales y remotos. Cada caso recibe atención
              directa, sin pasos innecesarios ni promesas vacías.
            </p>
            <p className="mt-10 font-serif text-lg italic text-judey-cream/90">
              — Con rigor, con tiempo, contigo.
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-judey-gold/80">
              JUDEYCO · Firma y valores
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
