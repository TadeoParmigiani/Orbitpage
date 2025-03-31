"use client";
import { useLanguage } from '@/../LanguageContext';

const ThemeToggler = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      aria-label='language toggler'
      onClick={toggleLanguage}
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
    >
      {language === 'en' ? 'EN' : 'ES'}
    </button>
  );
};

export default ThemeToggler;
