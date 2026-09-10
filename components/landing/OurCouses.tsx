import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

import { getManyCauses } from "@/utils/get/cause";

const OurCouses = async () => {
  const causes = await getManyCauses(4);
  return (
    <section className="w-full min-h-auto bg-beige flex flex-col items-center justify-center text-dark px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-7xl">
        <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-4 sm:mb-6">
          Our Causes
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] flex-1">
            You can help lots of people by <br />
            donating little.
          </h2>
          <button className="uppercase w-full sm:w-40 md:w-50 h-12 sm:h-14 md:h-16 bg-primary rounded-3xl sm:rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
            More Causes
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center px-4 sm:px-6 md:px-9 gap-4 sm:gap-6 md:gap-7 mt-8 sm:mt-10 md:mt-12 w-full max-w-7xl">
        {causes.map(({ id, percentage, raised, goal, imageUrl, title }, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
          >
            <Link href={`/causes/${id}`}>
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
                <Image src={imageUrl} fill alt="kids" className="object-cover rounded-t-lg" />
              </div>
            </Link>
            <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 bg-background rounded">
              <p className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl text-primary px-2 sm:px-3 py-1 sm:py-2">
                {percentage}%
              </p>
            </div>
            <div className="bg-background dark:bg-gray-800 w-full p-4 sm:p-6 md:p-8">
              <h2 className="font-shippori text-lg sm:text-xl md:text-2xl font-extrabold mb-4 sm:mb-6 md:mb-8 dark:text-white line-clamp-2">
                {title}
              </h2>
              <div className="w-full h-1 sm:h-1.5 bg-mist-gray rounded-3xl relative">
                <div
                  className="h-1 sm:h-1.5 bg-primary rounded-3xl"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 mt-3 sm:mt-4 md:mt-5 mb-4 sm:mb-6 md:mb-9 font-shippori font-extrabold text-sm sm:text-base md:text-lg lg:text-xl">
                <p className="dark:text-white">Raised - {raised.split(",")[0]}M</p>
                <p className="text-primary">Goal - ${goal.split(",")[0]}M</p>
              </div>
              <button className="uppercase w-full sm:w-32 md:w-36 h-12 sm:h-14 md:h-16 bg-dark rounded-3xl sm:rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-12 gap-75">
        <MdOutlineKeyboardArrowLeft
          size={40}
          className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-background rounded-full overflow-hidden text-black cursor-pointer hover:bg-gray-100 transition-colors"
          aria-label="previous causes"
        />
        <MdOutlineKeyboardArrowRight
          size={40}
          className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-background rounded-full overflow-hidden text-black cursor-pointer hover:bg-gray-100 transition-colors"
          aria-label="next causes"
        />
      </div>
    </section>
  );
};

export default OurCouses;
