import Image from "next/image";
const Project = () => {
  return (
    <main className="w-full">
      <header className="relative h-96 md:h-205.5 flex items-center">
        <Image
          src="/projects/project-banner.png"
          alt="hero"
          fill
          className="object-cover"
        />
        <div className="relative z-2 text-white ml-4 md:ml-90 max-w-full md:max-w-180 px-4 md:px-0">
          <h1 className="font-sue-ellen text-2xl md:text-5xl mb-1.5">
            Donation...
          </h1>
          <h2 className="font-shippori font-extrabold text-3xl md:text-[5.625rem] leading-tight ">
            Meet Charity Projects
          </h2>
        </div>
      </header>
      <section className=" mx-auto items-center px-4 md:px-0 my-8 md:my-37.5">
        <div className="w-full max-w-[948px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[9px] lg:gap-[24px] justify-items-center">
          {[...Array(9)].map((_, index) => {
            if (index === 5) {
              return (
                <div
                  key={index}
                  className="bg-primary relative flex flex-col items-center justify-center w-full md:w-[340px] md:h-[408px] lg:w-[300px] lg:h-[360px] h-[360px]"
                >
                  <p className="text-white absolute bottom-10 left-0 text-xl md:text-3xl font-semibold px-6 leading-tight font-shippori font-extrabold">
                    More than One Life Changed
                  </p>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="relative w-full md:w-[340px] md:h-[408px] lg:w-[300px] lg:h-[360px] h-[360px] overflow-hidden"
              >
                <Image
                  src={`/projects/project-${index + 1}.png`}
                  alt="project"
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Project;
