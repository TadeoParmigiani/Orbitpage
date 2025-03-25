"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState } from "react";

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Solo se ejecuta en cliente
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Contenedor de partículas con fondo transparente */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: "transparent" },
            particles: {
              number: { value: 50 },
              size: { value: 3 },
              move: { enable: true, speed: 1 },
              color: { value: "#ffffff" },
              opacity: { value: 0.5 },
            },
          }}
          className="w-full h-full"
        />
      </div>

      {/* Contenido principal del Hero */}
      <div className="relative z-10 flex items-center h-full">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto px-6 text-white"
        >
          <div className="flex flex-wrap items-center">
            {/* Columna de Texto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full md:w-1/2 text-left"
            >
              <h2 className="mb-5 font-semibold leading-tight sm:text-4xl md:text-5xl">
                <Typewriter
                  options={{
                    strings: [
                      "Donde las Ideas Giran en Soluciones",
                      "Innovación y Tecnología para tu Negocio",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <p className="mb-8 text-gray-300 sm:text-lg md:text-xl">
                En Orbit, combinamos creatividad y tecnología para ofrecer soluciones innovadoras que llevan tu negocio al siguiente nivel.
              </p>
              <motion.div >
                <Link
                  href="/#sobre-nosotros"
                  className="relative inline-flex items-center justify-center p-4 px-8 py-3 font-medium text-white transition-all duration-300 ease-out rounded-full shadow-md bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500"
                >
                  ¡Contáctanos!
                </Link>
              </motion.div>
            </motion.div>

            {/* Columna de Animación de Órbitas*/}
            <motion.div className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0">
              <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                {[...Array(5)].map((_, i) => {
                  const size = 100 + i * 50;
                  const duration = 7 - i;
                  return (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{ width: size, height: size }}
                      animate={{ rotate: 360 }}
                      transition={{ duration, ease: "linear", repeat: Infinity }}
                    >
                      <svg
                        width={size}
                        height={size}
                        className="absolute top-0 left-0"
                      >
                        <path
                          d={`M ${size / 2}, 2 A ${
                            size / 2 - 2
                          } ${size / 2 - 2} 0 0 1 ${size / 2}, ${size - 2}`}
                          fill="none"
                          stroke="#ffffff50"
                          strokeWidth="2"
                        />
                      </svg>
                      <div
                        className="absolute w-4 h-4 bg-white rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `translate(-50%, -50%) translateY(${
                            size / 2 - 4
                          }px)`,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Flecha animada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce relative z-10"
      >
        <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-3xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
