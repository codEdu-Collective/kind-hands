import Image from "next/image";
const Project = () => {
  return (
    <main className="w-full">
      <header className="relative h-96 md:h-205.5 flex items-center">
        <Image src="/projects/project-banner.png" alt="hero" fill className="object-cover" />
        <div className="relative z-2 text-white ml-4 md:ml-90 max-w-full md:max-w-180 px-4 md:px-0">
          <h1 className="font-sue-ellen text-2xl md:text-5xl mb-1.5">Donation</h1>
          <h2 className="font-shippori font-extrabold text-3xl md:text-[5.625rem] leading-tight ">
            Meet Charity Projects
          </h2>
        </div>
      </header>
      <section className="container mx-auto items-center w-full max-w-200 px-4 md:px-0 my-8 md:my-37.5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {[...Array(9)].map((_, index) => {
            if (index === 5) {
              return (
                <div
                  key={index}
                  className="relative bg-primary flex flex-col items-center justify-center w-50 h-57.5 min-h-57.5"
                >
                  <p className="text-white text-center text-lg md:text-xl font-semibold px-3 leading-tight">
                    More than One Life Changed
                  </p>
                </div>
              );
            }

            return (
              <div key={index} className="relative w-50 h-57.5 min-h-57.5">
                <Image
                  src={`/projects/project-${index + 1}.png`}
                  alt="project"
                  width={200}
                  height={230}
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
