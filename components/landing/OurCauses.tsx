import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

import { getManyCauses } from "@/utils/get/cause";

const OurCauses = async () => {
  const causes = await getManyCauses(4);
  return (
    <section className="w-full min-h-332 bg-beige flex flex-col items-center justify-center text-dark py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-300">
        <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-4">
          Our Causes
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] dark:text-white">
            You can help lots of people by <br className="hidden sm:block" />
            donating little.
          </h2>
          <button className="uppercase w-full sm:w-50 h-12 sm:h-14 md:h-16 bg-primary rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
            More Causes
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 mt-8 sm:mt-12 w-full max-w-300 px-4 sm:px-9">
        {causes.map(
          ({ id, percentage, raised, goal, imageUrl, title }, index) => (
            <div key={index} className="relative w-full flex flex-col">
              <Link href={`/causes/${id}`}>
                <div className="relative w-full h-64 sm:h-80 lg:h-96">
                  <Image
                    src={imageUrl}
                    fill
                    alt="kids"
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </Link>
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-background">
                <p className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl text-primary px-2 sm:px-3 py-1 sm:py-2">
                  {percentage}%
                </p>
              </div>
              <div className="bg-background dark:bg-gray-800 w-full p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                <h2 className="font-shippori text-lg sm:text-xl md:text-2xl font-extrabold mb-4 sm:mb-6 md:mb-8 dark:text-white line-clamp-2 min-h-12 sm:min-h-14 md:min-h-16">
                  {title}
                </h2>
                <div className="w-full h-1.5 bg-mist-gray rounded-3xl relative">
                  <div
                    className="h-1.5 bg-primary rounded-3xl"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex justify-between mt-4 sm:mt-5 mb-6 sm:mb-9 font-shippori font-extrabold text-base sm:text-lg md:text-xl">
                  <p className="dark:text-white">
                    Raised - {raised.split(",")[0]}M
                  </p>
                  <p className="text-primary">Goal - ${goal.split(",")[0]}M</p>
                </div>
                <button className="uppercase w-full sm:w-36 h-12 sm:h-14 md:h-16 bg-dark dark:bg-primary rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium mt-auto">
                  Donate
                </button>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex mt-8 sm:mt-12 gap-4 sm:gap-8 lg:gap-75">
        <MdOutlineKeyboardArrowLeft
          size={48}
          className="sm:w-[60px] sm:h-[60px] lg:w-[73px] lg:h-[73px] bg-background rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
          color="black"
          aria-label="previous causes"
        />
        <MdOutlineKeyboardArrowRight
          size={48}
          className="sm:w-[60px] sm:h-[60px] lg:w-[73px] lg:h-[73px] bg-background rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
          color="black"
          aria-label="next causes"
        />
      </div>
    </section>
  );
};

export default OurCauses;
