import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative">
      <Image
        src={`/images/hero.jpg`}
        alt="Hero Image"
        width={1920}
        height={920}
        className="object-cover"
      />
      <div className="absolute top-1/5 left-1/5 w-full max-w-190">
        <h1 className="text-white font-sue-ellen text-[3.125rem]">Need Help...</h1>
        <h2 className="text-white font-shippori text-[5.625rem]">Being Life Saver For Someone</h2>
        <div className="text-white text-lg flex items-center">
          <div className="w-6 h-6 bg-white rounded-full" />
          <div className="w-76 h-0.5 bg-white" />
          <h3 className="uppercase text-lg px-4 py-1.5 border-2 rounded-[1.125rem] font-work font-medium tracking-widest">
            Below Poverty Line
          </h3>
        </div>
        <div className="flex gap-3.5 mt-7">
          <button className="uppercase w-36 h-16 bg-primary rounded-4xl text-white text-lg font-work font-medium">
            Donate
          </button>
          <button className="uppercase w-36 h-16 bg-white rounded-4xl text-dark text-lg font-work font-medium">
            Discover
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
