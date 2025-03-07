import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";

const teamData = [
  {
    id: 1,
    name: "Tadeo Parmigiani",
    role: "Lider Tecnico",
    image: "/images/testimonials/tade.png",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "Ezequiel Martin",
    role: "Desarrollador Full Stack",
    image: "/images/testimonials/eze.jpg",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Agostino Scopetta",
    role: "Project Manager",
    image: "/images/testimonials/sco.png",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    id: 4,
    name: "Fabrizio Pelozzi",
    role: "Desarrollador Full Stack",
    image: "/images/testimonials/fabras.png",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
];

const TeamSection = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Conoce a Nuestro Equipo"
          paragraph="Somos un equipo apasionado por la tecnología y el desarrollo de soluciones innovadoras."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {teamData.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto rounded-full w-40 h-40 object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <div className="flex justify-center mt-2 space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-black dark:text-white text-xl hover:text-gray-900" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-pink-600 text-xl hover:text-pink-800" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
