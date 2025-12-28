import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="w-full min-h-auto flex justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-7xl text-center">
        <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-2 sm:mb-4">What we do</h3>
        <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-6 sm:mb-8 md:mb-10">We do it for People in Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-13 mt-8 sm:mt-10 md:mt-12 lg:mt-15">
          {[
            "Medicine Help",
            "Water Delivery",
            "We Care About",
            "Food Delivery",
            "Spread The World",
            "Learn Education",
          ].map((item, index) => (
            <div key={index} className="px-4">
              <Image
                src={`/icons/${index + 1}.png`}
                alt="icon"
                width={70}
                height={70}
                className="m-auto w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <h3 className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl my-3 sm:my-4">{item}</h3>
              <p className="font-work text-neutral text-sm sm:text-base md:text-lg lg:text-xl">
                Centuries but also the leap into electronic typesetting, remaining specimen book.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
