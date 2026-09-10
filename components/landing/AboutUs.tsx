import { FaPlay } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative flex flex-col items-center text-dark px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-7xl h-auto relative -top-8 sm:-top-12 md:-top-16 lg:-top-25 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-accent px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-15">
          <h2 className="font-shippori text-2xl sm:text-3xl md:text-4xl">Education</h2>
          <h3 className="font-work font-normal text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-3 md:mt-3.5 mb-3 sm:mb-4 md:mb-5 text-charcoal">
            Below Poverty Line is enchmark used by the government of India economic disadvantage.
          </h3>
          <button className="bg-white w-full sm:w-32 md:w-36.5 h-12 sm:h-14 md:h-16.5 rounded-3xl sm:rounded-4xl uppercase font-work font-medium text-sm sm:text-base">
            Discover
          </button>
        </div>
        <div className="bg-dark text-white px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-15 md:py-19">
          <h2 className="font-shippori text-2xl sm:text-3xl md:text-4xl">Become a Volunteer</h2>
          <h3 className="font-work font-normal text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-3 md:mt-3.5 mb-3 sm:mb-4 md:mb-5">
            Below Poverty Line is enchmark used by the government
          </h3>
          <span className="uppercase underline font-work font-medium text-sm sm:text-base md:text-lg">
            Join organization
          </span>
        </div>
        <div className="bg-primary flex items-center justify-center relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
          <Image
            src={`/images/aboutUs-kids.jpg`}
            alt="Photo of two kids"
            fill
            className="object-cover object-bottom-right opacity-45"
          />
          <button
            id="button"
            aria-label="play button"
            className="bg-white z-2 aspect-square flex justify-center items-center rounded-full p-4 sm:p-5 md:p-6 lg:p-7"
          >
            <FaPlay size={20} className="sm:w-6 sm:h-6 md:w-6 md:h-6" aria-label="play icon" />
          </button>
        </div>
      </div>
      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-8 sm:mt-12">
        <div className="w-full lg:w-1/2 xl:w-150">
          <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-1">
            About US
          </h3>
          <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-3">
            Help People, <br />
            Our Main Goals
          </h2>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl flex flex-col gap-3 sm:gap-4 text-justify mb-4 text-neutral">
            <p>
              Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining when an unknown printer took a galley of type and scrambled it
              to make a type specimen book. essentially.
            </p>
          </div>
          <button className="uppercase w-full sm:w-40 md:w-50 h-12 sm:h-14 md:h-16 bg-primary rounded-3xl sm:rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
            More About
          </button>
        </div>
        <div className="w-full lg:w-1/2 xl:w-137.5 h-full bg-light py-6 sm:py-8 md:py-10 lg:py-13 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-5.5">
            {[
              "Food Donation",
              "Water Supply",
              "Money Donation",
              "Education Donation",
              "Dress Donation",
              "Toys Donation",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 mb-4.5">
                <FaCheck
                  color="black"
                  size={27}
                  aria-label="check icon"
                  className="bg-accent overflow-hidden rounded-full p-1.5"
                />
                <span className="font-work text-sm sm:text-base md:text-lg lg:text-xl text-neutral font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="relative font-shippori font-extrabold">
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-6">Total Donation</p>
            <div className="w-full h-1 sm:h-1.5 bg-mist-gray rounded-3xl" />
            <div className="w-2/3 h-1 sm:h-1.5 bg-primary relative -top-1 sm:-top-1.5 rounded-3xl z-2" />
            <div className="flex justify-between text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-5 md:mt-6 mb-6 sm:mb-8 md:mb-10">
              <p>Collection - $5M</p>
              <p>Goal - $10M</p>
            </div>
          </div>
          <button className="uppercase w-full sm:w-40 md:w-50 h-12 sm:h-14 md:h-16 bg-white rounded-3xl sm:rounded-4xl text-black text-sm sm:text-base md:text-lg font-work font-medium">
            Donate NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
