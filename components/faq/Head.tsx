import Image from "next/image";

const Head = () => {
  return (
    <header className="h-205.5 relative flex items-center">
      <Image
        src={`/faq/Banner.jpg`}
        alt="hero image"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        className="object-cover"
      />
      <div className="relative z-2 text-white ml-90">
        <h1 className="font-sue-ellen text-5xl mb-1.5">Faq</h1>
        <h2 className="font-shippori font-extrabold text-[5.625rem]">
          General <br /> Questions
        </h2>
      </div>
    </header>
  );
};

export default Head;
