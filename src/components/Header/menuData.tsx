"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import { useLanguage } from "@/../LanguageContext"; // Ajusta la ruta según tu estructura

const menuData = {
  es: [
    { id: 1, title: "Inicio", path: "/", newTab: false },
    { id: 2, title: "Sobre Nosotros", path: "/#sobre-nosotros", newTab: false },
    { id: 3, title: "Nuestros Servicios", path: "/#nuestros-servicios", newTab: false },
    { id: 4, title: "Nuestros valores", path: "/#nuestros-valores", newTab: false },
    { id: 5, title: "Equipo", path: "/#testimonios", newTab: false },
    { id: 6, title: "Contacto", path: "/#contacto", newTab: false },
  ],
  en: [
    { id: 1, title: "Home", path: "/", newTab: false },
    { id: 2, title: "About Us", path: "/#sobre-nosotros", newTab: false },
    { id: 3, title: "Our Services", path: "/#nuestros-servicios", newTab: false },
    { id: 4, title: "Our Values", path: "/#nuestros-valores", newTab: false },
    { id: 5, title: "Team", path: "/#testimonios", newTab: false },
    { id: 6, title: "Contact", path: "/#contacto", newTab: false },
  ],
};

export default menuData;