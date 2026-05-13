import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const socials = [
  { href: "#", label: "Facebook", Icon: Facebook },
  { href: "#", label: "Instagram", Icon: Instagram },
  { href: "#", label: "LinkedIn", Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-judey-gold/10 bg-judey-blue/30 py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-judey-gold/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-judey-blue/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="bg-gradient-to-r from-judey-cream to-judey-gold bg-clip-text font-serif text-2xl text-transparent">
              JUDEYCO
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-judey-muted">
              Recuperación, asesoría y acompañamiento jurídico con criterio y
              cercanía.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-judey-gold/15 bg-judey-navy/40 text-judey-gold transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-judey-gold/60 hover:bg-judey-gold/15 hover:text-[#EBD9B5] hover:shadow-[0_8px_20px_-8px_rgba(215,194,154,0.5)]"
                  >
                    <Icon
                      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg]"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-judey-gold">
              Enlaces
            </p>
            <ul className="mt-4 space-y-1">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 rounded-md py-1 text-sm text-judey-muted transition-all duration-300 hover:translate-x-1 hover:text-judey-gold"
                  >
                    {l.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-judey-gold">
              Contacto
            </p>
            <ul className="mt-4 space-y-2 text-sm text-judey-muted">
              <li className="transition-colors duration-300 hover:text-judey-cream">
                +52 735 116 2329
              </li>
              <li className="transition-colors duration-300 hover:text-judey-cream">
                contacto@judeyco.ejemplo
              </li>
              <li className="transition-colors duration-300 hover:text-judey-cream">
                Cuautla, Morelos
              </li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-judey-muted/90">
              <li>
                <Link
                  href="#"
                  className="underline-offset-4 transition-colors duration-300 hover:text-judey-gold hover:underline"
                >
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="underline-offset-4 transition-colors duration-300 hover:text-judey-gold hover:underline"
                >
                  Términos de uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-judey-gold/10 pt-8 text-center text-xs text-judey-muted">
          <p>
            © {new Date().getFullYear()} JUDEYCO. Todos los derechos reservados.
            La información de este sitio es informativa y no sustituye asesoría
            legal particular.
          </p>
        </div>
      </div>
    </footer>
  );
}
