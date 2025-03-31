"use client";
import { useLanguage } from "@/../LanguageContext"; // Ajusta la ruta según tu estructura

const Contacto = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Hablemos sobre tu proyecto",
      paragraph:
        "Cuéntanos qué necesitas y nuestro equipo se pondrá en contacto contigo lo antes posible.",
      nameLabel: "Tu Nombre",
      namePlaceholder: "Ingresa tu nombre",
      emailLabel: "Tu Correo Electrónico",
      emailPlaceholder: "Ingresa tu correo",
      messageLabel: "Tu Mensaje",
      messagePlaceholder: "Describe tu consulta",
      buttonText: "Enviar",
    },
    en: {
      title: "Let's talk about your project",
      paragraph:
        "Tell us what you need and our team will get in touch with you as soon as possible.",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Your Email",
      emailPlaceholder: "Enter your email",
      messageLabel: "Your Message",
      messagePlaceholder: "Describe your inquiry",
      buttonText: "Send",
    },
  };

  return (
    <section id="contacto" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap lg:flex-nowrap items-center">
          {/* Sección de texto a la izquierda */}
          <div className="w-full px-4 lg:w-1/3">
            <h2 className="mb-4 text-6xl font-extralight text-black dark:text-primary sm:text-4xl">
              {content[language].title}
            </h2>
            <p className="mb-6 text-xl font-extralight text-body-color">
              {content[language].paragraph}
            </p>
          </div>

          {/* Sección del formulario a la derecha */}
          <div className="w-full px-4 lg:w-2/3">
            <div className="rounded-md bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px]">
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {content[language].nameLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={content[language].namePlaceholder}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {content[language].emailLabel}
                      </label>
                      <input
                        type="email"
                        placeholder={content[language].emailPlaceholder}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {content[language].messageLabel}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={content[language].messagePlaceholder}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B]"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="w-full rounded-md bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90">
                      {content[language].buttonText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
