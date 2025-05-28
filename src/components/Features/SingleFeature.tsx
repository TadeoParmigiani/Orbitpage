import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full flex justify-center  h-full"> {/* Centra todo el contenido */}
      <div className="wow fadeInUp text-center" data-wow-delay=".15s"> {/* Centra el contenido dentro del div */}
        {/* Círculo con el ícono */}
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mx-auto">
          {icon}
        </div>
        
        {/* Título */}
       <h3 className="mb-5 text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-extralight text-black dark:text-white">
          {title}
        </h3>
        
        {/* Párrafo */}
        <p className="pr-[10px] text-xl font-extralight leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
