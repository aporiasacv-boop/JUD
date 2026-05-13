"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Shield, Sparkles } from "lucide-react";
import { ScalesArtwork } from "./LegalArtwork";

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
      <motion.div
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-judey-gold/5 blur-3xl"
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-judey-blue/40 blur-3xl"
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-judey-gold/20 bg-judey-blue/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-judey-gold"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Despacho jurídico · México
          </motion.p>
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-judey-cream text-balance sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            Recuperamos lo que te pertenece con{" "}
            <span className="bg-gradient-to-r from-judey-gold via-[#EBD9B5] to-judey-gold bg-clip-text text-transparent">
              estrategia, claridad y respaldo legal
            </span>
            .
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-judey-muted sm:text-xl"
          >
            Acompañamos a personas, empresas y emprendedores en cobranza,
            recuperación de bienes y asesoría jurídica cercana, con un enfoque
            ordenado y orientado a resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="#contacto"
              className="group relative inline-flex min-h-[48px] min-w-[min(100%,200px)] items-center justify-center gap-2 overflow-hidden rounded-2xl bg-judey-gold px-8 py-3.5 text-center text-base font-semibold text-judey-navy shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#E8D4A8] hover:shadow-[0_0_40px_-6px_rgba(215,194,154,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judey-gold active:scale-[0.98]"
            >
              <span className="relative z-10">Agenda una consulta</span>
              <ArrowRight
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            </Link>
            <Link
              href="#servicios"
              className="group inline-flex min-h-[48px] min-w-[min(100%,200px)] items-center justify-center gap-2 rounded-2xl border border-judey-gold/30 bg-judey-blue/20 px-8 py-3.5 text-center text-base font-semibold text-judey-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-judey-gold hover:bg-judey-blue/55 hover:text-judey-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judey-gold/60"
            >
              Ver servicios
              <ArrowRight
                className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3"
          >
            <li className="group flex items-center gap-3 text-sm text-judey-muted">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-judey-gold/15 bg-judey-blue/25 text-judey-gold transition-all duration-300 group-hover:scale-110 group-hover:border-judey-gold/45 group-hover:bg-judey-gold/15 group-hover:text-judey-gold">
                <Shield className="h-5 w-5" aria-hidden />
              </span>
              <span className="max-w-[14rem] leading-snug text-judey-cream/90 transition-colors group-hover:text-judey-cream">
                Legitimidad y criterio técnico en cada etapa.
              </span>
            </li>
            <li className="group flex items-center gap-3 text-sm text-judey-muted">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-judey-gold/15 bg-judey-blue/25 text-judey-gold transition-all duration-300 group-hover:scale-110 group-hover:border-judey-gold/45 group-hover:bg-judey-gold/15">
                <BadgeCheck className="h-5 w-5" aria-hidden />
              </span>
              <span className="max-w-[14rem] leading-snug text-judey-cream/90 transition-colors group-hover:text-judey-cream">
                Comunicación clara: siempre sabes qué sigue.
              </span>
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative overflow-hidden rounded-2xl border border-judey-gold/20 bg-gradient-to-br from-judey-blue/80 to-judey-navy shadow-card"
            style={{ perspective: 1000 }}
          >
            <div className="aspect-[4/5] w-full">
              <ScalesArtwork />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8">
              <div className="rounded-2xl border border-judey-gold/25 bg-judey-navy/85 p-5 backdrop-blur-md">
                <p className="font-serif text-lg leading-snug text-judey-cream">
                  Iustitia · Equidad y orden
                </p>
                <p className="mt-2 text-xs leading-relaxed text-judey-muted">
                  Cada caso, una balanza distinta. Cada cliente, una historia
                  que merece ser escuchada con seriedad.
                </p>
                <div className="mt-3 h-px w-16 bg-judey-gold/50" />
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-judey-gold/90">
                  JUDEYCO
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border border-judey-gold/15 bg-judey-blue/25 backdrop-blur-sm"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pointer-events-none absolute -top-4 -right-4 h-16 w-16 rounded-full border border-judey-gold/20 bg-judey-gold/5"
          />
        </motion.div>
      </div>
    </section>
  );
}
