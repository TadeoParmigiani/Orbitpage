const SectionTitle = ({
  title,
  paragraph,
  width = "800px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 font-extralight !leading-tight text-black dark:text-primary sm:text-6xl text-6xl">
          {title}
        </h2>
        <p className="font-extralight !leading-relaxed text-body-color md:text-xl">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
