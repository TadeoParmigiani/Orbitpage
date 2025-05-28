"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useLanguage } from "@/../LanguageContext"; // Ajusta la ruta según tu estructura

// Animaciones
const fadeInUp = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const ValuesSection = () => {
  const { language } = useLanguage();

  // Traducciones para la sección y textos del SVG (planetas)
  const content = {
    es: {
      title: "Nuestros Valores",
      paragraph1:
        "En nuestra empresa, nos guiamos por principios fundamentales que nos permiten alcanzar la excelencia en cada proyecto. Creemos en la innovación constante, en la calidad de lo que entregamos y en el trabajo colaborativo que fortalece a nuestro equipo. Estos valores son los cimientos que nos permiten desarrollar soluciones tecnológicas que generan un impacto positivo en nuestros clientes.",
      paragraph2:
        "Nos impulsa la pasión por transformar ideas en realidades, la transparencia en cada acción que tomamos y la búsqueda incansable de nuevas formas de aportar valor. Nuestro compromiso es ir más allá de lo esperado, superando desafíos con creatividad y determinación, siempre con la mirada puesta en un futuro sostenible y próspero para todos.",
      planets: [
        { text: "Innovación", x: 350, y: 250 },
        { text: "Compromiso", x: 150, y: 250 },
        { text: "Integridad", x: 250, y: 100 },
        { text: "Sostenibilidad", x: 250, y: 400 },
        { text: "Trabajo en equipo", x: 423, y: 350 },
      ],
    },
    en: {
      title: "Our Values",
      paragraph1:
        "At our company, we are guided by fundamental principles that enable us to achieve excellence in every project. We believe in constant innovation, the quality of our deliverables, and collaborative work that strengthens our team. These values are the foundation that allows us to develop technological solutions that make a positive impact on our clients.",
      paragraph2:
        "We are driven by the passion to turn ideas into realities, transparency in every action we take, and the relentless pursuit of new ways to add value. Our commitment is to exceed expectations, overcoming challenges with creativity and determination, always with an eye on a sustainable and prosperous future for all.",
      planets: [
        { text: "Innovation", x: 350, y: 250 },
        { text: "Commitment", x: 150, y: 250 },
        { text: "Integrity", x: 250, y: 100 },
        { text: "Sustainability", x: 250, y: 400 },
        { text: "Teamwork", x: 423, y: 350 },
      ],
    },
  };

  const { title, paragraph1, paragraph2, planets } = content[language];

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container text-center lg:text-left flex flex-col lg:flex-row justify-between items-center">
        {/* Sección de Texto con animación */}
        <motion.div
          className="text-left lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl text-gray-800 dark:text-primary font-extralight"
            variants={fadeInUp}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 mt-4 max-w-3xl font-extralight"
            variants={fadeInUp}
          >
            {paragraph1}
          </motion.p>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 mt-4 max-w-3xl font-extralight"
            variants={fadeInUp}
          >
            {paragraph2}
          </motion.p>
        </motion.div>

        {/* Sección de SVG con animación */}
        <motion.div
          className="relative lg:w-1/2 mt-12 lg:mt-0 w-full"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            className="relative w-full h-full"
            style={{ backgroundColor: "#171c28" }}
          >
            {/* Círculos base */}
            <circle
              cx="250"
              cy="250"
              r="100"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
            />
            <circle
              cx="250"
              cy="250"
              r="150"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
            />
            <circle
              cx="250"
              cy="250"
              r="200"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
            />

            {/* Imagen central */}
            <image
              xlinkHref="./images/about/orbit.png"
              x="230"
              y="230"
              width="40"
              height="40"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Planetas con textos (traducidos según idioma) */}
            <g className="planet-group">
              {planets.map((planet, index) => (
                <g
                  key={index}
                  className={`planet planet-${index + 1}`}
                  style={{ transformOrigin: "250px 250px" }}
                >
                  <circle cx={planet.x} cy={planet.y} r="10" fill="#ffffff" />
                  <text
                    x={planet.x}
                    y={planet.y}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12"
                    dy="-25"
                    className={`text-${index + 1}`}
                    style={{ transformOrigin: `${planet.x}px ${planet.y}px` }}
                  >
                    {planet.text}
                  </text>
                </g>
              ))}
            </g>

            {/* Animaciones CSS */}
            <style>
              {`
                .planet {
                  animation: spin 40s linear infinite;
                }
                .planet text {
                  animation: spin-reverse 40s linear infinite;
                }
                @keyframes spin {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                @keyframes spin-reverse {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(-360deg);
                  }
                }
              `}
            </style>
          </svg>
        </motion.div>
      </div>

      {/* Línea divisoria centrada con fade-in */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="border-t border-gray-700 w-3/4"></div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
