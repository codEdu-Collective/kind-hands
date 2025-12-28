import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const Testimonal = () => {
  return (
    <section className="w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:h-328 flex flex-col justify-center items-center text-dark dark:text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-dark-900">
      <h1 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-2">Testimonal</h1>
      <h2 className="font-shippori font-extrabold text-3xl sm:text-4xl md:text-[2.5rem] mb-8">What People Say About Us</h2>
      <div className="flex flex-col lg:flex-row mt-8 sm:mt-10 md:mt-16 gap-6 sm:gap-8 w-full max-w-7xl justify-center">
        {[
          { person: "Belli Smith", job: "Designer" },
          { person: "Sara Taylor", job: "Donator" },
        ].map(({ person, job }, index) => (
          <div key={index} className="w-full lg:w-1/2 h-auto p-4 sm:p-6 bg-light dark:bg-dark-800 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left rounded-lg shadow-md">
            <Image
              src={`/images/people-${index + 1}.jpg`}
              alt="people"
              width={120}
              height={180}
              className="object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6 w-24 h-auto sm:w-auto sm:h-40"
            />
            <div className="flex-1 my-4 sm:my-10">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
                <div>
                  <h3 className="font-shippori font-bold text-xl sm:text-2xl dark:text-white">{person}</h3>
                  <p className="font-work text-sm sm:text-xl text-neutral dark:text-gray-300">{job}</p>
                </div>
                <Image src={`/icons/7.png`} alt="quote" width={60} height={45} className="mt-4 sm:mt-0" />
              </div>
              <p className="font-work text-sm sm:text-xl text-neutral dark:text-gray-300 mt-2.5">
                Centuries but also the leap into electronic typesetting,established fact that a
                reader will bdistracted the readable content.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-8 mb-12 sm:mb-16 md:mb-25 items-center w-full max-w-7xl justify-center">
        <MdOutlineKeyboardArrowLeft
          size={40}
          className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border border-soft-gray dark:border-gray-700 text-black dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
          aria-label="previous testimonial"
        />
        <div className="flex-1 h-px bg-soft-gray dark:bg-gray-700 mx-4 sm:mx-6 md:mx-8" />
        <MdOutlineKeyboardArrowRight
          size={40}
          className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border border-soft-gray dark:border-gray-700 text-black dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
          aria-label="next testimonial"
        />
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-20 text-center">
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
          <article key={index} className="flex flex-col items-center">
            <p className="font-shippori font-extrabold text-4xl sm:text-5xl md:text-6xl dark:text-white">{number}</p>
            <p className="font-work text-base sm:text-lg md:text-xl text-neutral dark:text-gray-300 mt-2.5">{subtext}</p>
          </article>
        ))}
      </div>
      <div className="w-full max-w-7xl bg-soft-gray dark:bg-gray-700 h-px my-8 sm:my-10 md:my-12.5" />
      <div className="w-full max-w-7xl h-16 sm:h-20 md:h-24 lg:h-26.5 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-30">
        {[...Array(5)].map((_, index) => (
          <section key={index} className="h-full w-24 sm:w-28 md:w-32 lg:w-auto relative flex-shrink-0">
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
