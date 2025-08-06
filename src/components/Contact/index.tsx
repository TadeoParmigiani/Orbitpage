"use client";
import { useLanguage } from "@/../LanguageContext";
import { useState } from "react";

const Contacto = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

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
      sending: "Enviando...",
      success: "¡Mensaje enviado exitosamente!",
      error: "Error al enviar el mensaje. Intenta nuevamente."
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
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again."
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Importa EmailJS dinámicamente
      const emailjs = (await import('@emailjs/browser')).default;
      
      // Configura tus credenciales de EmailJS aquí
      const SERVICE_ID = 'service_123';
      const TEMPLATE_ID = 'template_3jedvqk';  
      const PUBLIC_KEY = 'SsWvzCrFq0iRkOFwR'; 

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'orbitdevrosario@gmail.com',
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
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
              
              {/* Mensajes de estado */}
              {status === 'success' && (
                <div className="mb-6 rounded-md bg-green-100 border border-green-400 text-green-700 px-4 py-3">
                  {content[language].success}
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-6 rounded-md bg-red-100 border border-red-400 text-red-700 px-4 py-3">
                  {content[language].error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        {content[language].nameLabel}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={content[language].namePlaceholder}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B]"
                        required
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
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={content[language].emailPlaceholder}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B]"
                        required
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
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={content[language].messagePlaceholder}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B]"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-md bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? content[language].sending : content[language].buttonText}
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