"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

// Animación desde los lados
const fadeInLeft = {
  hidden: { opacity: 0, x: -100 }, // Desde la izquierda
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 }, // Desde la derecha
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
};

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <motion.p
      className="mb-5 flex items-center text-xl font-extralight text-body-color"
      variants={fadeInLeft} // Aparece desde la izquierda
    >
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </motion.p>
  );

  return (
    <motion.div
      id="about"
      className="pt-16 md:pt-20 lg:pt-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Solo se ejecuta la primera vez
     
    >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 font-extralight dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <motion.div className="w-full px-4 lg:w-1/2" variants={fadeInLeft}>
              <SectionTitle
                title="Sobre Nosotros"
                paragraph="Somos un equipo apasionado por crear soluciones que impulsan negocios y mejoran la experiencia de nuestros clientes. Nos enfocamos en la innovación, la calidad y el trabajo en equipo para ofrecer los mejores resultados."
                mb="44px"
              />

              <motion.div className="mb-12 max-w-[570px] lg:mb-0" variants={fadeInLeft}>
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Compromiso" />
                    <List text="Enfoque en el cliente" />
                    <List text="Innovación constante" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Trabajo en equipo" />
                    <List text="Resultados garantizados" />
                    <List text="Crecimiento continuo" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="w-full px-4 lg:w-1/2" variants={fadeInRight}>
              <div className="relative mx-auto aspect-[25/24] max-w-[600px]">
                <motion.div variants={fadeInRight}>
                  <Image
                    src="/images/about/image-3.jpg"
                    alt="about-background"
                    fill
                    className="relative -z-10 scale-75 lg:ml-8 opacity-80"
                  />
                </motion.div>
                <motion.div
                  className="relative border-primary/10 bg-primary/5 -z-10 h-96 w-80 border backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10"
                  initial={{ opacity: 0, x: 120, y: 210 }} // Empieza desplazado a la derecha y abajo
                  animate={{ opacity: 1, x: 20, y: 210 }} // Mantiene la posición vertical pero entra desde la derecha
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.div variants={fadeInRight}>
                  <Image
                    src="/images/about/image-2.jpg"
                    alt="about-image"
                    fill
                    className="relative mx-auto max-h-80 max-w-80 drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-80"
                  />
                </motion.div>
                <motion.div variants={fadeInRight}>
                  <Image
                    src="/images/about/image-2.jpg"
                    alt="about-image"
                    fill
                    className="relative mx-auto hidden max-h-96 max-w-80 drop-shadow-three dark:block dark:drop-shadow-none translate-y-[230px] lg:mr-72"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSectionOne;
