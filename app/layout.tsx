import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JUDEYCO — Recuperación y asesoría jurídica",
  description:
    "Despacho jurídico en México especializado en recuperación de adeudos y bienes, asesoría legal y apoyo a pequeñas empresas y emprendedores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        {/*
          TODO(analytics): Google Tag Manager — insertar snippet GTM aquí cuando esté listo.
          TODO(analytics): Google Analytics (GA4) — vía GTM o gtag directo.
          TODO(analytics): Meta Pixel — base code + eventos estándar.
        */}
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
