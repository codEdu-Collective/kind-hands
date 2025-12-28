import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const Testimonal = () => {
  return (
    <section className="w-full min-h-328 flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-2">
        Testimonal
      </h1>
      <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] text-center mb-8 sm:mb-12 md:mb-16">
        What People Say About Us
      </h2>
      <div className="flex flex-col sm:flex-row mt-8 sm:mt-12 md:mt-16 gap-6 sm:gap-8 w-full max-w-300">
        {[
          { person: "Belli Smith", job: "Designer" },
          { person: "Sara Taylor", job: "Donator" },
        ].map(({ person, job }, index) => (
          <div
            key={index}
            className="w-full sm:w-146 min-h-76.5 p-4 sm:p-6 md:p-6.5 bg-light flex flex-col sm:flex-row gap-4 sm:gap-0"
          >
            <div className="relative w-full sm:w-40 md:w-164 h-64 sm:h-auto sm:flex-shrink-0">
              <Image
                src={`/images/people-${index + 1}.jpg`}
                alt="people"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 164px"
              />
            </div>
            <div className="ml-0 sm:ml-6 my-4 sm:my-10 flex-1">
              <div className="flex justify-between items-start mb-3 sm:mb-0">
                <div>
                  <h3 className="font-shippori font-bold text-xl sm:text-2xl">{person}</h3>
                  <p className="font-work text-neutral text-base sm:text-lg md:text-xl">{job}</p>
                </div>
                <Image
                  src={`/icons/7.png`}
                  alt="quote"
                  width={60}
                  height={45}
                  className="w-12 h-9 sm:w-16 sm:h-12 md:w-[77px] md:h-[57px]"
                />
              </div>
              <p className="font-work text-neutral text-base sm:text-lg md:text-xl mt-2 sm:mt-2.5">
                Centuries but also the leap into electronic typesetting,established fact that a
                reader will bdistracted the readable content.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-6 sm:mt-8 mb-12 sm:mb-16 md:mb-25 items-center gap-4 sm:gap-6">
        <MdOutlineKeyboardArrowLeft
          size={48}
          className="sm:w-[60px] sm:h-[60px] lg:w-[73px] lg:h-[73px] rounded-full overflow-hidden border border-soft-gray cursor-pointer hover:opacity-80 transition-opacity"
          color="black"
          aria-label="previous testimonial"
        />
        <div className="w-16 sm:w-24 md:w-48 lg:w-111 h-px bg-soft-gray" />
        <MdOutlineKeyboardArrowRight
          size={48}
          className="sm:w-[60px] sm:h-[60px] lg:w-[73px] lg:h-[73px] rounded-full overflow-hidden border border-soft-gray cursor-pointer hover:opacity-80 transition-opacity"
          color="black"
          aria-label="next testimonial"
        />
      </div>
      <div className="w-full max-w-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-20 px-4">
        {[
          { number: "200k", subtext: "Received Donations From Our People" },
          {
            number: "99K",
            subtext: " Projects Done With The Help Of Donators",
          },
          { number: "200k", subtext: "People We Helped on 2020" },
          {
            number: "10.7K",
            subtext: "With Our Volunteers We've Solved Many Causes",
          },
        ].map(({ number, subtext }, index) => (
          <article key={index} className="text-center">
            <p className="font-shippori font-extrabold text-4xl sm:text-5xl md:text-6xl">
              {number}
            </p>
            <p className="font-work text-base sm:text-lg md:text-xl text-neutral mt-2 sm:mt-2.5">
              {subtext}
            </p>
          </article>
        ))}
      </div>
      <div className="w-full max-w-300 bg-soft-gray h-px my-8 sm:my-10 md:my-12.5" />
      <div className="w-full max-w-300 h-auto sm:h-26.5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-30 px-4">
        {[...Array(5)].map((_, index) => (
          <section key={index} className="h-20 sm:h-26.5 w-full relative">
            <Image
              src={`/brands/${index + 1}.png`}
              alt="brand-logo"
              fill
              className="object-contain"
            />
          </section>
        ))}
      </div>
    </section>
  );
};

export default Testimonal;
