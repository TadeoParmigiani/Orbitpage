"use client";

import { useLanguage } from "@/../LanguageContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { language } = useLanguage();

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  const texts = {
    es: {
      title1: "Donde las Ideas Giran en Soluciones",
      title2: "Innovación y Tecnología para tu Negocio",
      description:
        "En OrbitDev, combinamos creatividad y tecnología para ofrecer soluciones innovadoras que llevan tu negocio al siguiente nivel.",
      contactButton: "¡Contáctanos!",
    },
    en: {
      title1: "Where Ideas Turn into Solutions",
      title2: "Innovation and Technology for Your Business",
      description:
        "At OrbitDev, we combine creativity and technology to provide innovative solutions that take your business to the next level.",
      contactButton: "Contact Us!",
    },
  };

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Fondo con partículas */}
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

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center h-full">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 text-white"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h1 className="sr-only">OrbitDev - Desarrollo Web y Software en Argentina</h1>
              <h2 className="mb-5 font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl">
                <Typewriter
                  options={{
                    strings: [
                      texts[language].title1,
                      texts[language].title2,
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <p className="mb-8 text-gray-300 text-base sm:text-lg md:text-xl">
                {texts[language].description}
              </p>
              <motion.div>
                <Link
                  href="/#sobre-nosotros"
                  className="inline-block px-6 py-3 font-medium text-white transition-all duration-300 ease-out rounded-full shadow-md bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500"
                >
                  {texts[language].contactButton}
                </Link>
              </motion.div>
            </motion.div>

            {/* Animación de órbitas */}
            <motion.div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center">
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
                          d={`M ${size / 2}, 2 A ${size / 2 - 2} ${size / 2 - 2} 0 0 1 ${size / 2}, ${
                            size - 2
                          }`}
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
                          transform: `translate(-50%, -50%) translateY(${size / 2 - 4}px)`,
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
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-3xl" />
      </motion.div>
      {/* Schema markup invisible para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "OrbitDev",
            "alternateName": "Orbit",
            "description": texts[language].description,
            "url": "https://www.orbitdev.com.ar",
            "logo": "https://www.orbitdev.com.ar/images/about/orbit.png",
            "sameAs": [
              "https://www.orbitdev.com.ar"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "areaServed": "AR",
              "availableLanguage": ["Spanish", "English"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AR",
              "addressRegion": "Santa Fe"
            }
          })
        }}
      />
    </section>
  );
};

export default Hero;
