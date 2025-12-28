import Image from "next/image";

const HowWeHelp = () => {
  return (
    <section className="w-full min-h-247 bg-foreground dark:bg-gray-300 text-white dark:text-dark overflow-hidden relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <Image
        src={`/images/aboutUs-kids.jpg`}
        fill
        alt="kids"
        className="opacity-10 blur-xl object-center"
      />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 py-8 sm:py-12 md:py-20 lg:py-35.5 px-4 sm:px-8 md:px-10 lg:px-9 gap-8 sm:gap-10 md:gap-14">
        <div>
          <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl mb-3 dark:text-primary">
            How We Help
          </h3>
          <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-3 dark:text-white">
            Join The Community To Give Education For Children
          </h2>
          <p className="text-justify font-work text-base sm:text-lg md:text-xl mb-4 dark:text-gray-300">
            Lorem Ipsum is simply dummy text of the printin typesetting dummy
            text ever when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="w-full h-48 sm:h-64 md:h-80 relative mb-6 sm:mb-8">
            <Image
              src={`/images/howHelp-kids.jpg`}
              alt="kids"
              fill
              className="object-cover"
            />
          </div>
          <button className="uppercase w-full sm:w-50 h-12 sm:h-14 md:h-16 bg-primary rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
            Donate NOW
          </button>
        </div>
        <div className="border border-white dark:border-gray-400 dark:bg-gray-200 px-6 sm:px-10 md:px-14 lg:px-16 py-8 sm:py-10 md:py-12">
          <h2 className="font-shippori font-extrabold text-2xl sm:text-3xl md:text-4xl dark:text-dark mb-6">
            Become A Volunteer
          </h2>
          {["Full Name*", "Email Address*", "Phone Number*"].map(
            (item, index) => (
              <div
                key={index}
                className="w-full h-12 sm:h-14 md:h-16 border border-white dark:border-gray-400 dark:bg-white my-4 sm:my-6 md:my-8"
              >
                <p className="p-3 sm:p-4 font-work text-sm sm:text-base md:text-lg dark:text-gray-600">
                  {item}
                </p>
              </div>
            )
          )}
          <div className="w-full h-24 sm:h-32 md:h-39 border border-white dark:border-gray-400 dark:bg-white my-4 sm:my-6 md:my-8">
            <p className="p-4 sm:p-5 font-work text-sm sm:text-base md:text-lg dark:text-gray-600">
              Message*
            </p>
          </div>
          <button className="uppercase w-full sm:w-50 h-12 sm:h-14 md:h-16 bg-background dark:bg-primary rounded-4xl text-black dark:text-white text-sm sm:text-base md:text-lg font-work font-medium">
            Donate NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
