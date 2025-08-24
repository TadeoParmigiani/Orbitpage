import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import ValuesSection from "@/components/valores/valores";

export const metadata: Metadata = {
  title: "OrbitDev - Desarrollo Web y Software en Argentina",
  description: "OrbitDev es una empresa de desarrollo web y software. Transformamos ideas en soluciones digitales modernas y escalables.",
  icons: {
    icon: "/images/about/orbit.png",
  },
  openGraph: {
    title: "OrbitDev - Desarrollo Web y Software en Argentina",
    description: "En OrbitDev transformamos ideas en soluciones digitales innovadoras.",
    url: "https://www.orbitdev.com.ar",
    siteName: "OrbitDev",
    images: [
      {
        url: "/images/about/orbit.png",
        width: 800,
        height: 600,
        alt: "OrbitDev logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <section id="sobre-nosotros"   className="relative z-20 bg-[#121723] py-8">
        <AboutSectionOne />
      </section>
      <section id="nuestros-servicios" className="relative z-20 bg-[#121723] py-16">
        <Features />
      </section>
      <section id="nuestros-valores">
        <ValuesSection />
      </section>
      <section id="testimonios">
        <Testimonials />
      </section>
      <section id="contacto" className="relative z-20 bg-[#121723]">
        <Contact />
      </section>
    </>
  );
}