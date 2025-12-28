import Image from "next/image";

const WhatWeDid = () => {
  return (
    <section className="w-full min-h-auto bg-slate-ink dark:bg-gray-200 text-white dark:text-dark font-shippori">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 sm:col-span-2 pt-8 sm:pt-12 md:pt-16 lg:pt-21 px-4 sm:px-6 md:px-12 lg:px-25 mb-3">
          <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary dark:text-primary">What We Did</h3>
          <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] dark:text-white">Featured Projects</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 mb-6 sm:mb-8 font-work dark:text-dark">
            Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an
            unknown printer took a galley of type and scrambled a type specimen book.
          </p>
          <button className="uppercase w-full sm:w-40 md:w-50 h-12 sm:h-14 md:h-16 bg-primary rounded-3xl sm:rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
            More Project
          </button>
        </div>
        {[...Array(4)].map((_, index) => (
          <div key={index} className="w-full h-48 sm:h-64 md:h-80 lg:h-110.75 relative">
            <Image
              src={`/images/whatDid-kids-${index + 1}.jpg`}
              fill
              alt="kids"
              className="object-cover"
            />
          </div>
        ))}
        <div className="bg-primary dark:bg-gray-300 flex flex-col justify-end items-start px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:pb-12">
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {["Education", "Health"].map((item, index) => (
              <button
                key={index}
                className="h-8 sm:h-9 md:h-9.5 px-3 sm:px-4 md:px-5 bg-coral-red dark:bg-primary rounded-3xl sm:rounded-4xl text-white font-work font-medium text-sm sm:text-base md:text-lg lg:text-xl"
              >
                {item}
              </button>
            ))}
          </div>
          <p className="font-extrabold text-xl sm:text-2xl md:text-3xl dark:text-white">
            More than One Life <br /> Changed
          </p>
        </div>
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-110.75 relative">
          <Image src={`/images/whatDid-kids-5.jpg`} fill alt="kids" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDid;
