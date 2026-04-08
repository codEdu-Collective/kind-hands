import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[920px]">
      <Image src={`/images/hero.jpg`} alt="Hero Image" fill className="object-cover" priority />
      <div className="absolute top-1/2 -translate-y-1/2 lg:top-20 lg:translate-y-0 left-4 sm:left-6 md:left-8 lg:left-20 xl:top-1/5 xl:left-1/5 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] xl:w-full xl:max-w-190">
        <h1 className="text-white font-sue-ellen text-2xl sm:text-3xl md:text-4xl lg:text-[3.125rem] text-left">
          Need Help...
        </h1>
        <h2 className="text-white font-shippori text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.625rem] leading-tight mt-2 sm:mt-3 text-left">
          Being Life Saver For Someone
        </h2>
        <div className="text-white text-sm sm:text-base md:text-lg flex items-center justify-start flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white rounded-full" />
          <div className="w-16 sm:w-20 md:w-32 lg:w-76 h-0.5 bg-white" />
          <h3 className="uppercase text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 border-2 rounded-xl sm:rounded-[1.125rem] font-work font-medium tracking-wide sm:tracking-widest">
            Below Poverty Line
          </h3>
        </div>
        <div className="flex flex-row justify-start gap-2 sm:gap-3 md:gap-3.5 mt-4 sm:mt-5 md:mt-6 lg:mt-7">
          <button className="uppercase w-24 sm:w-28 md:w-32 lg:w-36 px-4 sm:px-5 md:px-6 lg:px-6 h-9 sm:h-10 md:h-12 lg:h-16 bg-primary rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl text-white text-xs sm:text-sm md:text-sm lg:text-lg font-work font-medium">
            Donate
          </button>
          <button className="uppercase w-24 sm:w-28 md:w-32 lg:w-36 px-4 sm:px-5 md:px-6 lg:px-6 h-9 sm:h-10 md:h-12 lg:h-16 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl text-dark text-xs sm:text-sm md:text-sm lg:text-lg font-work font-medium">
            Discover
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
