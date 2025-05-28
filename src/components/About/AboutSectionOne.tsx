"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useLanguage } from "@/../LanguageContext";

// Ícono de check
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

// Animaciones
const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const AboutSectionOne = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      sectionTitle: "Sobre Nosotros",
      sectionParagraph:
        "Somos un equipo apasionado por crear soluciones que impulsan negocios y mejoran la experiencia de nuestros clientes. Nos enfocamos en la innovación, la calidad y el trabajo en equipo para ofrecer los mejores resultados.",
      list1: ["Compromiso", "Enfoque en el cliente", "Innovación constante"],
      list2: ["Trabajo en equipo", "Resultados garantizados", "Crecimiento continuo"],
    },
    en: {
      sectionTitle: "About Us",
      sectionParagraph:
        "We are a passionate team focused on creating solutions that drive business growth and enhance customer experience. We emphasize innovation, quality, and teamwork to deliver the best results.",
      list1: ["Commitment", "Customer Focus", "Constant Innovation"],
      list2: ["Teamwork", "Guaranteed Results", "Continuous Growth"],
    },
  };

  const List = ({ text }: { text: string }) => (
    <motion.p
      className="mb-5 flex items-center text-xl font-extralight text-body-color"
      variants={fadeInLeft}
    >
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </motion.p>
  );

  return (
    <motion.section
      id="about"
      className="pt-16 z-20 md:pt-20 lg:pt-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 font-extralight dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Columna de texto */}
            <motion.div className="w-full px-4 lg:w-1/2" variants={fadeInLeft}>
              <SectionTitle
                title={content[language].sectionTitle}
                paragraph={content[language].sectionParagraph}
                mb="44px"
              />

              <motion.div
  className="mb-12 max-w-[570px] lg:mb-0"
  initial="visible"
  animate="visible"
  variants={fadeInLeft}
>
  <div className="mx-[-12px] flex flex-wrap">
    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
      {content[language].list1.map((text, index) => (
        <List key={`list1-${index}`} text={text} />
      ))}
    </div>
    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
      {content[language].list2.map((text, index) => (
        <List key={`list2-${index}`} text={text} />
      ))}
    </div>
  </div>
</motion.div>
            </motion.div>

{/* Columna de imagen */}
<motion.div className="w-full px-4 lg:w-1/2" variants={fadeInRight}>
  {/* Versión mobile: dos imágenes apiladas */}
  <div className="relative mx-auto max-w-md space-y-6 lg:hidden">
    <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
      <Image
        src="/images/about/image-3.jpg"
        alt="Team working"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
    <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
      <Image
        src="/images/about/image-2.jpg"
        alt="Developer screen"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
  </div>

  {/* Versión desktop: fondo + imagen superpuesta */}
  <div className="relative hidden lg:block mx-auto max-w-[600px] aspect-[25/24]">
    {/* Imagen de fondo */}
    <Image
      src="/images/about/image-3.jpg"
      alt="about-background"
      fill
      className="relative -z-10 scale-75 opacity-80 lg:ml-8 rounded-xl"
    />

    {/* Caja de fondo translúcida */}
    <motion.div
      className="absolute border-primary/10 bg-primary/5 -z-10 h-96 w-80 border backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10 rounded-xl"
      initial={{ opacity: 0, x: 120, y: 210 }}
      animate={{ opacity: 1, x: 20, y: 210 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />

    {/* Imagen frontal clara */}
    <Image
      src="/images/about/image-2.jpg"
      alt="about-image"
      width={300}
      height={400}
  className="absolute top-[240px] right-55 drop-shadow-three hidden dark:block rounded-xl"
      />
  </div>
</motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSectionOne;
