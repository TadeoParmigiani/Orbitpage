"use client";
import { motion } from "framer-motion";
import React from "react";

// Variantes para el título y los párrafos (fade in + subida)
const fadeInUp = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Variantes para el SVG (fade in)
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const ValuesSection = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container text-center lg:text-left flex flex-col lg:flex-row justify-between items-center">
        {/* Sección de Texto con animación */}
        <motion.div
          className="text-left lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            className="text-6xl text-gray-800 dark:text-primary font-extralight"
            variants={fadeInUp}
          >
            Nuestros Valores
          </motion.h2>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 mt-4 max-w-3xl font-extralight"
            variants={fadeInUp}
          >
            En nuestra empresa, nos guiamos por principios fundamentales que
            nos permiten alcanzar la excelencia en cada proyecto. Creemos en la
            innovación constante, en la calidad de lo que entregamos y en el
            trabajo colaborativo que fortalece a nuestro equipo. Estos valores
            son los cimientos que nos permiten desarrollar soluciones
            tecnológicas que generan un impacto positivo en nuestros clientes.
          </motion.p>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 mt-4 max-w-3xl font-extralight"
            variants={fadeInUp}
          >
            Nos impulsa la pasión por transformar ideas en realidades, la
            transparencia en cada acción que tomamos y la búsqueda incansable de
            nuevas formas de aportar valor. Nuestro compromiso es ir más allá de
            lo esperado, superando desafíos con creatividad y determinación,
            siempre con la mirada puesta en un futuro sostenible y próspero
            para todos.
          </motion.p>
        </motion.div>

        {/* Sección de SVG con animación */}
        <motion.div
          className="relative lg:w-1/2 mt-12 lg:mt-0 w-full"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.0 }}
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
            <circle
              cx="250"
              cy="250"
              r="20"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
            />

            {/* Planetas con textos */}
            <g className="planet-group">
              {[
                { text: "Innovación", x: 350, y: 250 },
                { text: "Compromiso", x: 150, y: 250 },
                { text: "Integridad", x: 250, y: 100 },
                { text: "Sostenibilidad", x: 250, y: 400 },
                { text: "Trabajo en equipo", x: 423, y: 350 },
              ].map((planet, index) => (
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
                    style={{
                      transformOrigin: `${planet.x}px ${planet.y}px`,
                    }}
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
