"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 32);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-judey-gold/10 bg-judey-navy/95 shadow-card backdrop-blur-xl"
          : "border-b border-transparent bg-judey-navy/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="font-serif text-xl tracking-tight text-judey-cream transition-colors hover:text-judey-gold sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          JUDEYCO
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-judey-muted transition-colors hover:text-judey-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contacto"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl bg-judey-gold px-5 py-2.5 text-sm font-semibold text-judey-navy shadow-glow transition hover:scale-[1.02] hover:shadow-[0_0_32px_-4px_rgba(215,194,154,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judey-gold"
            onClick={() => {
              // TODO(analytics): evento CTA navbar — Contáctanos
            }}
          >
            Contáctanos
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-judey-gold/20 text-judey-cream transition hover:border-judey-gold/40 hover:bg-judey-blue/30 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-judey-gold/10 bg-judey-navy/98 backdrop-blur-xl md:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 py-4"
              aria-label="Móvil"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-judey-cream transition hover:bg-judey-blue/40"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-judey-gold px-4 py-3 text-center text-base font-semibold text-judey-navy"
                onClick={() => {
                  setOpen(false);
                  // TODO(analytics): evento CTA móvil — Contáctanos
                }}
              >
                Contáctanos
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
