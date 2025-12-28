import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[920px]">
      <Image src={`/images/hero.jpg`} alt="Hero Image" fill className="object-cover" priority />
      <div className="absolute top-1/4 sm:top-1/5 left-4 sm:left-8 md:left-16 lg:left-20 xl:left-1/5 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-8rem)] lg:w-auto max-w-[90%] sm:max-w-[80%] md:max-w-[600px] lg:max-w-190">
        <h1 className="text-white font-sue-ellen text-2xl sm:text-3xl md:text-4xl lg:text-[3.125rem] mb-2">
          Need Help...
        </h1>
        <h2 className="text-white font-shippori text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.625rem] leading-tight mb-4">
          Being Life Saver For Someone
        </h2>
        <div className="text-white text-sm sm:text-base md:text-lg flex items-center flex-wrap gap-2 mb-6">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white rounded-full" />
          <div className="w-16 sm:w-24 md:w-48 lg:w-76 h-0.5 bg-white" />
          <h3 className="uppercase text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 py-1 sm:py-1.5 border-2 rounded-xl sm:rounded-[1.125rem] font-work font-medium tracking-wide sm:tracking-widest">
            Below Poverty Line
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5">
          <button className="uppercase w-full sm:w-36 h-12 sm:h-14 md:h-16 bg-primary rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
            Donate
          </button>
          <button className="uppercase w-full sm:w-36 h-12 sm:h-14 md:h-16 bg-white rounded-4xl text-dark text-sm sm:text-base md:text-lg font-work font-medium">
            Discover
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
