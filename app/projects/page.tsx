import Image from "next/image";
const Project = () => {
  return (
    <main className="w-full">
      <header className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-205.5 flex items-center">
        <Image src="/projects/project-banner.png" alt="hero" fill className="object-cover" />
        <div className="relative z-2 text-white ml-4 sm:ml-8 md:ml-16 lg:ml-90 max-w-full md:max-w-lg lg:max-w-180 px-4 md:px-0">
          <h1 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1.5">
            Donation
          </h1>
          <h2 className="font-shippori font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.625rem] leading-tight">
            Meet Charity Projects
          </h2>
        </div>
      </header>
      <section className="container max-w-7xl mx-auto items-center px-4 sm:px-6 lg:px-8 my-8 sm:my-12 md:my-16 lg:my-24 xl:my-37.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 justify-items-center">
          {[...Array(9)].map((_, index) => {
            if (index === 5) {
              return (
                <div
                  key={index}
                  className="relative bg-primary dark:bg-primary-600 flex flex-col items-center justify-center w-full max-w-[240px] sm:max-w-[280px] md:max-w-[240px] h-[275px] min-h-[275px] rounded-lg"
                >
                  <p className="text-white text-center text-base sm:text-lg md:text-xl font-semibold px-3 leading-tight">
                    More than One Life Changed
                  </p>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[240px] h-[275px] min-h-[275px] rounded-lg overflow-hidden"
              >
                <Image
                  src={`/projects/project-${index + 1}.png`}
                  alt="project"
                  width={240}
                  height={275}
                  className="object-cover w-full h-full"
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
