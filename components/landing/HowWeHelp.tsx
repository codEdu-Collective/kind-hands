import Image from "next/image";

const HowWeHelp = () => {
  return (
    <section className="w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:h-247 bg-foreground dark:bg-gray-300 text-white dark:text-dark overflow-hidden relative">
      <Image
        src={`/images/aboutUs-kids.jpg`}
        fill
        alt="kids"
        className="opacity-10 blur-xl object-center"
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 2xl:py-35.5">
        <div>
          <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4 dark:text-primary">
            How We Help
          </h3>
          <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] mb-3 sm:mb-4 md:mb-5 dark:text-white leading-tight">
            Join The Community To Give Education For Children
          </h2>
          <p className="text-justify font-work text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 dark:text-gray-300">
            Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 relative mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <Image
              src={`/images/howHelp-kids.jpg`}
              alt="kids"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <button className="uppercase w-full sm:w-40 md:w-50 lg:w-60 xl:w-70 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 bg-primary rounded-3xl sm:rounded-4xl text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-work font-medium">
            Donate NOW
          </button>
        </div>
        <div className="border border-white dark:border-gray-400 dark:bg-gray-200 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 rounded-lg mt-4 sm:mt-6 lg:mt-0">
          <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-dark mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            Become A Volunteer
          </h2>
          {["Full Name*", "Email Address*", "Phone Number*"].map((item, index) => (
            <div
              key={index}
              className="w-full h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 border border-white dark:border-gray-400 dark:bg-white my-3 sm:my-4 md:my-6 lg:my-8 rounded-md"
            >
              <p className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 font-work text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl dark:text-gray-600">
                {item}
              </p>
            </div>
          ))}
          <div className="w-full h-20 sm:h-24 md:h-32 lg:h-39 xl:h-44 border border-white dark:border-gray-400 dark:bg-white my-3 sm:my-4 md:my-6 lg:my-8 rounded-md">
            <p className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 font-work text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl dark:text-gray-600">
              Message*
            </p>
          </div>
          <button className="uppercase w-full sm:w-40 md:w-50 lg:w-60 xl:w-70 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 bg-background dark:bg-primary rounded-3xl sm:rounded-4xl text-black dark:text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-work font-medium mt-2 sm:mt-4 md:mt-6">
            Donate NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
