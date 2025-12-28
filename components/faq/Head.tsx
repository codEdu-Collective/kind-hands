import Image from "next/image";

const Head = () => {
  return (
    <header className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-205.5 relative flex items-center">
      <Image
        src={`/faq/Banner.jpg`}
        alt="hero image"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        className="object-cover"
      />
      <div className="relative z-2 text-white ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-90 px-4 sm:px-6">
        <h1 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-1.5">Faq</h1>
        <h2 className="font-shippori font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.625rem] leading-tight">
          General <br /> Questions
        </h2>
      </div>
    </header>
  );
};

export default Head;
