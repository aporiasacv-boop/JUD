"use client";

import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { FormEvent } from "react";
import { FadeIn } from "./FadeIn";

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(analytics): evento formulario contacto — submit (previo a integración backend)
    // TODO(backend): enviar datos a API / servicio de correo
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-judey-navy py-20 sm:py-24 lg:py-28"
      aria-labelledby="contacto-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-judey-gold">
            Contacto
          </p>
          <h2
            id="contacto-heading"
            className="mt-3 max-w-2xl font-serif text-3xl font-medium tracking-tight text-judey-cream sm:text-4xl"
          >
            Platiquemos de tu caso con tranquilidad
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-judey-muted">
            Elige el canal que prefieras. Respondemos con discreción y en
            horario hábil.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="https://wa.me/5255000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#128C7E] px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#1AA48E] hover:shadow-[0_18px_40px_-12px_rgba(18,140,126,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] active:scale-[0.98]"
                onClick={() => {
                  // TODO(analytics): CTA WhatsApp — click
                }}
              >
                <MessageCircle
                  className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:scale-110"
                  aria-hidden
                />
                <span className="relative z-10">Escribir por WhatsApp</span>
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
              </Link>
              <Link
                href="tel:+5255000000000"
                className="group inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-2xl border border-judey-gold/30 bg-judey-blue/30 px-6 py-3.5 text-base font-semibold text-judey-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-judey-gold hover:bg-judey-blue/55 hover:text-judey-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judey-gold/50 active:scale-[0.98]"
                onClick={() => {
                  // TODO(analytics): CTA llamada — click
                }}
              >
                <Phone
                  className="h-5 w-5 shrink-0 text-judey-gold transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                  aria-hidden
                />
                Llamar al despacho
              </Link>
            </div>

            <div className="mt-10 space-y-6 rounded-2xl border border-judey-gold/10 bg-judey-blue/20 p-6 transition-colors duration-300 hover:border-judey-gold/25 sm:p-8">
              {[
                {
                  Icon: MapPin,
                  title: "Oficina",
                  lines: [
                    "Col. Centro, Cuautla, Morelos",
                    "Calle y número — texto comercial por confirmar",
                  ],
                },
                {
                  Icon: Clock,
                  title: "Horario",
                  lines: [
                    "Lunes a viernes · 9:00 a 18:00 h",
                    "Cita previa recomendada",
                  ],
                },
                {
                  Icon: Mail,
                  title: "Correo",
                  lines: ["contacto@judeyco.ejemplo"],
                },
              ].map(({ Icon, title, lines }, idx) => (
                <div
                  key={title}
                  className={`group flex gap-4 ${
                    idx > 0 ? "border-t border-judey-gold/10 pt-6" : ""
                  }`}
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-judey-gold/15 bg-judey-navy/40 text-judey-gold transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:border-judey-gold/50 group-hover:bg-judey-gold/15">
                    <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-judey-cream transition-colors duration-300 group-hover:text-judey-gold">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-judey-muted">
                      {lines.map((line, i) => (
                        <span key={i}>
                          {i === 0 ? line : <span className="text-judey-muted/80">{line}</span>}
                          {i < lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-judey-gold/10 bg-judey-blue/15 p-6 shadow-card sm:p-8"
              noValidate
            >
              <p className="text-sm text-judey-muted">
                Formulario de primer contacto. Tus datos se usarán solo para
                responder a tu solicitud.
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-judey-cream"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    className="mt-2 w-full min-h-[48px] rounded-xl border border-judey-gold/15 bg-judey-navy/60 px-4 text-judey-cream placeholder:text-judey-muted/50 outline-none ring-judey-gold/30 transition focus:border-judey-gold/35 focus:ring-2"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-judey-cream"
                  >
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    className="mt-2 w-full min-h-[48px] rounded-xl border border-judey-gold/15 bg-judey-navy/60 px-4 text-judey-cream placeholder:text-judey-muted/50 outline-none ring-judey-gold/30 transition focus:border-judey-gold/35 focus:ring-2"
                    placeholder="Incluye lada"
                  />
                </div>
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-medium text-judey-cream"
                  >
                    Correo
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    autoComplete="email"
                    className="mt-2 w-full min-h-[48px] rounded-xl border border-judey-gold/15 bg-judey-navy/60 px-4 text-judey-cream placeholder:text-judey-muted/50 outline-none ring-judey-gold/30 transition focus:border-judey-gold/35 focus:ring-2"
                    placeholder="correo@dominio.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="caso"
                    className="block text-sm font-medium text-judey-cream"
                  >
                    Cuéntanos tu caso
                  </label>
                  <textarea
                    id="caso"
                    name="caso"
                    rows={4}
                    className="mt-2 w-full resize-y rounded-xl border border-judey-gold/15 bg-judey-navy/60 px-4 py-3 text-judey-cream placeholder:text-judey-muted/50 outline-none ring-judey-gold/30 transition focus:border-judey-gold/35 focus:ring-2"
                    placeholder="Breve descripción: montos aproximados, plazos y documentos relevantes (sin datos sensibles innecesarios)."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group relative mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-judey-gold px-6 py-3.5 text-base font-semibold text-judey-navy shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#E8D4A8] hover:shadow-[0_0_40px_-4px_rgba(215,194,154,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judey-gold active:scale-[0.99]"
              >
                <span className="relative z-10">Enviar mensaje</span>
                <span
                  aria-hidden
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
