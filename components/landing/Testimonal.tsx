import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const Testimonal = () => {
  return (
    <section className="w-full min-h-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <h1 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-2 sm:mb-4">Testimonal</h1>
      <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-8 sm:mb-12 md:mb-16 text-center">What People Say About Us</h2>
      <div className="flex flex-col sm:flex-row justify-center mt-8 sm:mt-12 md:mt-16 gap-6 sm:gap-8 w-full max-w-7xl">
        {[
          { person: "Belli Smith", job: "Designer" },
          { person: "Sara Taylor", job: "Donator" },
        ].map(({ person, job }, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-146 min-h-auto p-4 sm:p-5 md:p-6.5 bg-light dark:bg-gray-200 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="relative w-full sm:w-32 md:w-40 lg:w-164 h-48 sm:h-64 md:h-80 lg:h-257 shrink-0">
              <Image
                src={`/images/people-${index + 1}.jpg`}
                alt="people"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="ml-0 sm:ml-4 md:ml-6 my-4 sm:my-6 md:my-10 flex-1">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div>
                  <h3 className="font-shippori font-bold text-lg sm:text-xl md:text-2xl">{person}</h3>
                  <p className="font-work text-neutral text-sm sm:text-base md:text-lg lg:text-xl">{job}</p>
                </div>
                <Image src={`/icons/7.png`} alt="quote" width={50} height={37} className="sm:w-16 sm:h-12 md:w-20 md:h-15 lg:w-77 lg:h-57 shrink-0" />
              </div>
              <p className="font-work text-neutral text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-2.5">
                Centuries but also the leap into electronic typesetting,established fact that a
                reader will bdistracted the readable content.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-6 sm:mt-8 mb-12 sm:mb-16 md:mb-20 lg:mb-25 items-center gap-4 sm:gap-6">
        <MdOutlineKeyboardArrowLeft
          size={40}
          className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border border-soft-gray cursor-pointer hover:bg-gray-100 transition-colors"
          aria-label="previous testimonial"
        />
        <div className="w-16 sm:w-24 md:w-48 lg:w-111 h-px bg-soft-gray" />
        <MdOutlineKeyboardArrowRight
          size={40}
          className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border border-soft-gray cursor-pointer hover:bg-gray-100 transition-colors"
          aria-label="next testimonial"
        />
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
        {[
          { number: "200k", subtext: "Received Donations From Our People" },
          {
            number: "99K",
            subtext: " Projects Done With The Help Of Donators",
          },
          { number: "200k", subtext: "People We Helped on 2020" },
          {
            number: "10.7K",
            subtext: "With Our Volunteers We’ve Solved Many Causes",
          },
        ].map(({ number, subtext }, index) => (
          <article key={index} className="text-center">
            <p className="font-shippori font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{number}</p>
            <p className="font-work text-sm sm:text-base md:text-lg lg:text-xl text-neutral mt-2 sm:mt-2.5">{subtext}</p>
          </article>
        ))}
      </div>
      <div className="w-full max-w-7xl bg-soft-gray h-px my-8 sm:my-10 md:my-12.5" />
      <div className="w-full max-w-7xl h-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-30">
        {[...Array(5)].map((_, index) => (
          <section key={index} className="h-16 sm:h-20 md:h-24 lg:h-26.5 w-full relative">
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
