const Contacto = () => {
  return (
    <section id="contacto" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap lg:flex-nowrap items-center">
          {/* Sección de texto a la izquierda */}
          <div className="w-full px-4 lg:w-1/3">
            <h2 className="mb-4 text-6xl font-extralight text-black dark:text-primary sm:text-4xl">
              Hablemos sobre tu proyecto
            </h2>
            <p className="mb-6 text-xl font-extralight text-body-color">
              Cuéntanos qué necesitas y nuestro equipo se pondrá en contacto contigo lo antes posible.
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
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        Tu Correo Electrónico
                      </label>
                      <input
                        type="email"
                        placeholder="Ingresa tu correo"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        Tu Mensaje
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe tu consulta"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B]"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="w-full rounded-md bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90">
                      Enviar
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
