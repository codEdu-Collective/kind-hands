import Image from "next/image";

const HowWeHelp = () => {
  return (
    <section className="w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:h-247 bg-foreground dark:bg-gray-300 text-white dark:text-dark overflow-hidden relative">
      <Image
        src={`/images/aboutUs-kids.jpg`}
        fill
        alt="kids"
        className="opacity-10 blur-xl object-center"
      />
      <div className="absolute top-0 left-0 w-full grid grid-cols-1 lg:grid-cols-2 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-35.5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-90 gap-6 sm:gap-8 md:gap-10 lg:gap-14">
        <div>
          <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl mb-3 dark:text-primary">
            How We Help
          </h3>
          <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-3 dark:text-white leading-tight">
            Join The Community To Give Education For Children
          </h2>
          <p className="text-justify font-work text-sm sm:text-base md:text-lg lg:text-xl mb-4 dark:text-gray-300">
            Lorem Ipsum is simply dummy text of the printin typesetting dummy
            text ever when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="w-full h-32 sm:h-40 md:h-48 relative mb-6 sm:mb-8">
            <Image
              src={`/images/howHelp-kids.jpg`}
              alt="kids"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <button className="uppercase w-full sm:w-40 md:w-50 h-12 sm:h-14 md:h-16 bg-primary rounded-3xl sm:rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
            Donate NOW
          </button>
        </div>
        <div className="border border-white dark:border-gray-400 dark:bg-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12">
          <h2 className="font-shippori font-extrabold text-2xl sm:text-3xl md:text-4xl dark:text-dark mb-4 sm:mb-6">
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
            <p className="p-3 sm:p-4 md:p-5 font-work text-sm sm:text-base md:text-lg dark:text-gray-600">
              Message*
            </p>
          </div>
          <button className="uppercase w-full sm:w-40 md:w-50 h-12 sm:h-14 md:h-16 bg-background dark:bg-primary rounded-3xl sm:rounded-4xl text-black dark:text-white text-sm sm:text-base md:text-lg font-work font-medium">
            Donate NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
