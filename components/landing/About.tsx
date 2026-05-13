"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { CourthouseArtwork } from "./LegalArtwork";

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
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="aspect-[4/5] overflow-hidden rounded-2xl border border-judey-gold/25 bg-judey-navy shadow-card"
              >
                <CourthouseArtwork />
              </motion.div>
              <figcaption className="sr-only">
                Ilustración temática: fachada institucional con columnas y
                libros de derecho.
              </figcaption>
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pointer-events-none absolute -right-4 -bottom-4 -z-10 h-40 w-40 rounded-2xl border border-judey-gold/15 bg-judey-gold/5"
              />
              <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pointer-events-none absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-full border border-judey-gold/15 bg-judey-blue/30"
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
              Un despacho que habla claro y{" "}
              <span className="bg-gradient-to-r from-judey-gold to-[#EBD9B5] bg-clip-text text-transparent">
                camina contigo
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-judey-muted">
              En JUDEYCO acompañamos procesos de recuperación y asesoría con la
              seriedad que el derecho exige, y la calidez que las personas
              necesitan cuando el tema es sensible.
            </p>
            <p className="mt-4 text-base leading-relaxed text-judey-muted">
              Atendemos desde Cuautla, Morelos y entornos cercanos, con
              canales presenciales y remotos. Cada caso recibe atención
              directa, sin pasos innecesarios ni promesas vacías.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { number: "+10", label: "Años de experiencia jurídica" },
                { number: "100%", label: "Casos con plan estructurado" },
                { number: "24h", label: "Tiempo de respuesta hábil" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-judey-gold/15 bg-judey-navy/40 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-judey-gold/40 hover:bg-judey-navy/70 hover:shadow-glow sm:p-5"
                >
                  <p className="font-serif text-2xl text-judey-gold transition-colors group-hover:text-[#EBD9B5] sm:text-3xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-[0.7rem] leading-tight text-judey-muted sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

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
