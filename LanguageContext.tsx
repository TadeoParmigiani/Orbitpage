"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

// Definimos la interfaz para el contexto
interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

// Creamos el contexto
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Proveedor del contexto
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};
