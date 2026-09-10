import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        src={`/faq/Question-kids.jpg`}
        alt="hero image"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
      <div className="relative z-2 text-dark dark:text-dark w-full h-full px-4 sm:px-6 md:px-8 lg:px-12.5 py-8 sm:py-12 md:py-14 lg:py-18 flex flex-col justify-center">
        <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem]">
          Any Question?
        </h2>
        <h3 className="font-work font-medium text-sm sm:text-base md:text-lg lg:text-2xl my-4 sm:my-5 md:my-6 lg:my-7 text-justify">
          We are always here to help the needy peoples any where in the world
        </h3>
        <button className="uppercase w-full sm:w-48 md:w-56 lg:w-64 h-12 sm:h-14 md:h-16 bg-dark dark:bg-dark-700 rounded-3xl sm:rounded-4xl text-background dark:text-white text-sm sm:text-base md:text-lg font-work font-medium">
          Mail your Question
        </button>
      </div>
    </>
  );
};

export default HeroImage;
