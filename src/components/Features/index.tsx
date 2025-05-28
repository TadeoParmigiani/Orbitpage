"use client";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { useLanguage } from "@/../LanguageContext"; // Ajusta la ruta según tu estructura

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

// Traducciones para cada servicio (basado en el id)
const featureTranslations = {
  1: {
    en: {
      title: "Custom Web Apps",
      paragraph:
        "We develop custom web applications tailored to your business needs, ensuring functionality, security, and scalability.",
    },
  },
  2: {
    en: {
      title: "Landing Pages",
      paragraph:
        "We create landing pages optimized to capture clients, improve conversions, and strengthen your brand's digital presence.",
    },
  },
  3: {
    en: {
      title: "Personalized Technical Support",
      paragraph:
        "We provide specialized support, resolving technical issues and ensuring optimal system performance.",
    },
  },
  4: {
    en: {
      title: "SaaS Development",
      paragraph:
        "We design and develop scalable SaaS platforms, enabling you to offer cloud services with cutting-edge technology.",
    },
  },
  5: {
    en: {
      title: "Optimization and Maintenance",
      paragraph:
        "We handle continuous maintenance and optimization of your platforms to improve performance and security.",
    },
  },
  6: {
    en: {
      title: "Technology Consulting",
      paragraph:
        "We advise you on technologies, methodologies, and digital strategies to maximize your business potential.",
    },
  },
};

const Features = () => {
  const { language } = useLanguage();

  // Textos generales para el título y párrafo de la sección
  const content = {
    es: {
      title: "Nuestros servicios",
      paragraph:
        "Ofrecemos soluciones innovadoras y eficientes para potenciar tu negocio con tecnología de vanguardia. Nuestro equipo está listo para brindarte herramientas modernas y personalizadas.",
    },
    en: {
      title: "Our Services",
      paragraph:
        "We offer innovative and efficient solutions to boost your business with cutting-edge technology. Our team is ready to provide you with modern and customized tools.",
    },
  };

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Animación para el título y el párrafo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle
              title={content[language].title}
              paragraph={content[language].paragraph}
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
          viewport={{ once: true }}
        >
          {featuresData.map((feature) => {
            // Si el idioma es inglés y existe traducción para este feature, se sobreescriben los textos
            const translated =
              language === "en" &&
              featureTranslations[feature.id] &&
              featureTranslations[feature.id].en;
            const featureProps = translated
              ? { ...feature, title: translated.title, paragraph: translated.paragraph }
              : feature;

            return (
              <motion.div key={feature.id} variants={fadeInUp}>
                <SingleFeature feature={featureProps} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
