import Image from "next/image";

const HowWeHelp = () => {
  return (
    <section className="w-full h-247 bg-foreground dark:bg-gray-300 text-white dark:text-dark overflow-hidden relative">
      <Image
        src={`/images/aboutUs-kids.jpg`}
        width={1920}
        height={988}
        alt="kids"
        className="opacity-10 blur-xl object-center"
      />
      <div className="absolute top-0 left-0 grid grid-cols-2 py-35.5 px-90 gap-14">
        <div>
          <h3 className="font-sue-ellen text-4xl mb-3 dark:text-primary">How We Help</h3>
          <h2 className="font-shippori font-extrabold text-[2.5rem] mb-3 dark:text-white">
            Join The Community To Give Education For Children
          </h2>
          <p className="text-justify font-work text-xl mb-4 dark:text-gray-300">
            Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="w-full h-48 relative mb-8">
            <Image src={`/images/howHelp-kids.jpg`} alt="kids" fill className="object-cover" />
          </div>
          <button className="uppercase w-50 h-16 bg-primary rounded-4xl text-white text-lg font-work font-medium">
            Donate NOW
          </button>
        </div>
        <div className="border border-white dark:border-gray-400 dark:bg-gray-200 px-16 py-12">
          <h2 className="font-shippori font-extrabold text-4xl dark:text-dark">Become A Volunteer</h2>
          {["Full Name*", "Email Address*", "Phone Number*"].map((item, index) => (
            <div key={index} className="w-full h-16 border border-white dark:border-gray-400 dark:bg-white my-8">
              <p className="p-4 font-work text-lg dark:text-gray-600">{item}</p>
            </div>
          ))}
          <div className="w-full h-39 border border-white dark:border-gray-400 dark:bg-white my-8">
            <p className="p-5 font-work text-lg dark:text-gray-600">Message*</p>
          </div>
          <button className="uppercase w-50 h-16 bg-background dark:bg-primary rounded-4xl text-black dark:text-white text-lg font-work font-medium">
            Donate NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
