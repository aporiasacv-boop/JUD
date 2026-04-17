import Link from "next/link";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-judey-gold/10 bg-judey-blue/30 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-judey-cream">JUDEYCO</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-judey-muted">
              Recuperación, asesoría y acompañamiento jurídico con criterio y
              cercanía.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-judey-gold">
              Enlaces
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-judey-muted transition hover:text-judey-cream"
                  >
                    {l.label}
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
              <li>+52 55 0000 0000</li>
              <li>contacto@judeyco.ejemplo</li>
              <li>Ciudad de México</li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-judey-muted/90">
              <li>
                <Link
                  href="#"
                  className="underline-offset-2 hover:text-judey-cream hover:underline"
                >
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="underline-offset-2 hover:text-judey-cream hover:underline"
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
