import { FaPlay } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative flex flex-col items-center text-dark">
      <div className="w-300 h-88 relative -top-25 grid grid-cols-3">
        <div className="bg-accent dark:bg-accent-400 px-10 py-15">
          <h2 className="font-shippori text-4xl dark:text-dark">Education</h2>
          <h3 className="font-work font-normal text-xl mt-3.5 mb-5 text-charcoal dark:text-dark-700">
            Below Poverty Line is enchmark used by the government of India economic disadvantage.
          </h3>
          <button className="bg-white dark:bg-gray-100 w-36.5 h-16.5 rounded-4xl uppercase font-work font-medium dark:text-white">
            Discover
          </button>
        </div>
        <div className="bg-dark dark:bg-dark-700 text-white dark:text-white px-10 py-19">
          <h2 className="font-shippori text-4xl">Become a Volunteer</h2>
          <h3 className="font-work font-normal text-xl mt-3.5 mb-5">
            Below Poverty Line is enchmark used by the government
          </h3>
          <span className="uppercase underline font-work font-medium text-lg">
            Join organization
          </span>
        </div>
        <div className="bg-primary flex items-center justify-center relative">
          <Image
            src={`/images/aboutUs-kids.jpg`}
            alt="Photo of two kids"
            fill
            className="object-cover object-bottom-right opacity-45"
          />
          <button
            id="button"
            aria-label="play button"
            className="bg-white z-2 aspect-square flex justify-center items-center rounded-full p-7"
          >
            <FaPlay size={24} aria-label="play icon" />
          </button>
        </div>
      </div>
      <div className="w-300 h-full flex gap-12">
        <div className="w-150">
          <h3 className="font-sue-ellen text-4xl text-primary mb-1">About US</h3>
          <h2 className="font-shippori font-extrabold text-[2.5rem] mb-3 dark:text-white">
            Help People, <br />
            Our Main Goals
          </h2>
          <div className="text-xl flex flex-col gap-4 text-justify mb-4 text-neutral">
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
          <button className="uppercase w-50 h-16 bg-primary rounded-4xl text-white text-lg font-work font-medium">
            More About
          </button>
        </div>
        <div className="w-137.5 h-full bg-light py-13 px-10">
          <div className="grid grid-cols-2 mb-5.5">
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
                <span className="font-work text-xl text-neutral font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="relative font-shippori font-extrabold">
            <p className="text-2xl mb-6 ">Total Donation</p>
            <div className="w-full h-1.5 bg-mist-gray rounded-3xl" />
            <div className="w-2/3 h-1.5 bg-primary relative -top-1.5 rounded-3xl z-2" />
            <div className="flex justify-between text-xl mt-6 mb-10">
              <p>Collection - $5M</p>
              <p>Goal - $10M</p>
            </div>
          </div>
          <button className="uppercase w-50 h-16 bg-white rounded-4xl text-black text-lg font-work font-medium">
            Donate NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
