import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBand } from "@/components/landing/TrustBand";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Differentiator } from "@/components/landing/Differentiator";
import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-judey-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-judey-navy"
      >
        Ir al contenido principal
      </a>
      <Navbar />
      <main id="contenido-principal">
        <Hero />
        <TrustBand />
        <Services />
        <Process />
        <Differentiator />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
