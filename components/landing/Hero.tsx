"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BadgeCheck, Shield, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-judey-gold/10 bg-judey-navy pt-[4.25rem]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-hero-mesh bg-grain-soft"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-judey-gold/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-judey-blue/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-judey-gold/20 bg-judey-blue/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-judey-gold">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Despacho jurídico · México
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-judey-cream text-balance sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            Recuperamos lo que te pertenece con estrategia, claridad y respaldo
            legal.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-judey-muted sm:text-xl">
            Acompañamos a personas, empresas y emprendedores en cobranza,
            recuperación de bienes y asesoría jurídica cercana, con un enfoque
            ordenado y orientado a resultados.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contacto"
              className="inline-flex min-h-[48px] min-w-[min(100%,200px)] items-center justify-center rounded-2xl bg-judey-gold px-8 py-3.5 text-center text-base font-semibold text-judey-navy shadow-glow transition hover:scale-[1.02] hover:shadow-[0_0_40px_-6px_rgba(215,194,154,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judey-gold"
              onClick={() => {
                // TODO(analytics): CTA primario hero — Agenda / contacto
              }}
            >
              Agenda una consulta
            </Link>
            <Link
              href="#servicios"
              className="inline-flex min-h-[48px] min-w-[min(100%,200px)] items-center justify-center rounded-2xl border border-judey-gold/25 bg-judey-blue/20 px-8 py-3.5 text-center text-base font-semibold text-judey-cream transition hover:border-judey-gold/45 hover:bg-judey-blue/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judey-gold/60"
              onClick={() => {
                // TODO(analytics): CTA secundario hero — Servicios
              }}
            >
              Ver servicios
            </Link>
          </div>

          <ul className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
            <li className="flex items-center gap-3 text-sm text-judey-muted">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-judey-gold/15 bg-judey-blue/25 text-judey-gold">
                <Shield className="h-5 w-5" aria-hidden />
              </span>
              <span className="max-w-[14rem] leading-snug text-judey-cream/90">
                Legitimidad y criterio técnico en cada etapa.
              </span>
            </li>
            <li className="flex items-center gap-3 text-sm text-judey-muted">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-judey-gold/15 bg-judey-blue/25 text-judey-gold">
                <BadgeCheck className="h-5 w-5" aria-hidden />
              </span>
              <span className="max-w-[14rem] leading-snug text-judey-cream/90">
                Comunicación clara: siempre sabes qué sigue.
              </span>
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-judey-gold/15 bg-gradient-to-br from-judey-blue/80 to-judey-navy shadow-card">
            <div className="absolute inset-0 opacity-[0.35]">
              <svg
                className="h-full w-full"
                viewBox="0 0 400 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient
                    id="heroStroke"
                    x1="0"
                    y1="0"
                    x2="400"
                    y2="480"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D7C29A" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#D7C29A" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <line
                    key={i}
                    x1={40 + i * 56}
                    y1="0"
                    x2={120 + i * 48}
                    y2="480"
                    stroke="url(#heroStroke)"
                    strokeWidth="0.5"
                  />
                ))}
                <rect
                  x="48"
                  y="64"
                  width="304"
                  height="200"
                  rx="16"
                  stroke="#D7C29A"
                  strokeOpacity="0.12"
                  fill="#062C43"
                  fillOpacity="0.4"
                />
              </svg>
            </div>
            <div className="relative flex aspect-[4/5] flex-col justify-end p-8 sm:p-10">
              <div className="max-w-sm rounded-2xl border border-judey-gold/20 bg-judey-navy/75 p-6 backdrop-blur-md">
                <p className="font-serif text-lg text-judey-cream">
                  Espacio para imagen editorial
                </p>
                <p className="mt-2 text-sm leading-relaxed text-judey-muted">
                  Aquí irá fotografía de consultorio o retrato profesional con
                  tono cálido. Por ahora, composición abstracta para mantener
                  la elegancia del layout.
                </p>
                <div className="mt-4 h-px w-16 bg-judey-gold/40" />
                <p className="mt-4 text-xs uppercase tracking-widest text-judey-gold/90">
                  JUDEYCO
                </p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border border-judey-gold/10 bg-judey-blue/20" />
        </motion.div>
      </div>
    </section>
  );
}
