"use client";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

// Variantes para el título y el párrafo
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Variantes para los servicios (uno por uno)
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }, // Retraso entre elementos
};

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Animación para el título y el párrafo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle
              title="Nuestros servicios"
              paragraph="Ofrecemos soluciones innovadoras y eficientes para potenciar tu negocio con tecnología de vanguardia. Nuestro equipo está listo para brindarte herramientas modernas y personalizadas."
              center
            />
          </motion.div>
        </motion.div>

        {/* Contenedor animado de servicios */}
        <motion.div
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div key={feature.id} variants={fadeInUp}>
              <SingleFeature feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
