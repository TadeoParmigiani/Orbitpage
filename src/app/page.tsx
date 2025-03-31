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
  title: "Orbit",
  description: "Transformamos ideas en soluciones",
  // other metadata
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