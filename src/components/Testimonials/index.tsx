"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import { useLanguage } from "@/../LanguageContext"; // Ajusta la ruta según tu estructura

const teamData = {
  es: [
    {
      id: 1,
      name: "Tadeo Parmigiani",
      role: "Estudiante de ingeniería",
      image: "/images/testimonials/tadeo.jpg",
      linkedin: "https://www.linkedin.com/in/tadeoparmigiani/",
      github: "https://github.com/TadeoParmigiani",
    },
    {
      id: 2,
      name: "Juan Cruz Bocadi",
      role: "Estudiante de ingeniería",
      image: "/images/testimonials/bocadi.jpg",
      linkedin: "#",
      github: "https://github.com/JuanBocadi",
    },
    //  {
    //    id: 3,
    //    name: "Ezequiel Martín",
    //    role: "Tecnico de software",
    //    image: "/images/testimonials/eze.jpeg",
    //    linkedin: "https://www.linkedin.com/in/ezequielnicolasmartin/",
    //    github: "https://github.com/EzequielMartin03",
    //  },
    // {
    //   id: 4,
    //   name: "Fabrizio Pelozzi",
    //   role: "Desarrollador Full Stack",
    //   image: "/images/testimonials/fabras.png",
    //   linkedin: "https://www.linkedin.com/in/fabriziopelozzi/",
    //   github: "#",
    // },
  ],
  en: [
    {
      id: 1,
      name: "Tadeo Parmigiani",
      role: "Engineering student",
      image: "/images/testimonials/tadeo.jpg",
      linkedin: "https://www.linkedin.com/in/tadeoparmigiani/",
      github: "https://github.com/TadeoParmigiani",
    },
    {
      id: 2,
      name: "Juan Cruz Bocadi",
      role: "Engineering student",
      image: "/images/testimonials/bocadi.jpg",
      linkedin: "#",
      github: "https://github.com/JuanBocadi",
    },
    //  {
    //    id: 3,
    //    name: "Ezequiel Martín",
    //    role: "software technician",
    //    image: "/images/testimonials/eze.jpeg",
    //    linkedin: "https://www.linkedin.com/in/ezequielnicolasmartin/",
    //    github: "https://github.com/EzequielMartin03",
    //  },
    // {
    //   id: 4,
    //   name: "Fabrizio Pelozzi",
    //   role: "Full Stack Developer",
    //   image: "/images/testimonials/fabras.png",
    //   linkedin: "https://www.linkedin.com/in/fabriziopelozzi/",
    //   github: "#",
    // },
  ],
};

// 🔥 Variantes de animación
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
      delay: i * 0.2, // Cascada más natural
    },
  }),
};

const TeamSection = () => {
  const { language } = useLanguage();

  // Traducciones para el título y párrafo de la sección
  const content = {
    es: {
      title: "Conoce a Nuestro Equipo",
      paragraph:
        "En OrbitDev, somos un grupo de desarrolladores y creativos apasionados que trabajamos juntos para dar vida a ideas innovadoras. Cada miembro aporta su talento y compromiso para crear soluciones con impacto positivo.",
    },
    en: {
      title: "Meet Our Team",
      paragraph:
        "At OrbitDev, we are a group of passionate developers and creatives working together to bring innovative ideas to life. Each member contributes their talent and commitment to creating solutions with a positive impact.",
    },
  };

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28 lg:pt-20">
      <div className="container">
        {/* 🔥 Animamos el título y el párrafo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScale}
          custom={0} // Sin delay para el título
          className="text-center"
        >
          <SectionTitle
            title={content[language].title}
            paragraph={content[language].paragraph}
            center
          />
        </motion.div>

        {/* 🔥 Animamos las tarjetas */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {teamData[language].map((member, index) => (
            <motion.div
              key={member.id}
              className="w-full max-w-sm mx-auto bg-white dark:bg-gray-dark rounded-2xl shadow-lg p-6 text-center transition-transform transform hover:scale-105"
              variants={fadeInScale}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: true }}
              custom={index + 1} // Delay en cascada después del título
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-gray-300 dark:border-gray-700"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-gray-500 dark:text-gray-400 text-xl hover:text-gray-700 dark:hover:text-white transition-colors" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-500 dark:text-gray-400 text-xl hover:text-gray-700 dark:hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
