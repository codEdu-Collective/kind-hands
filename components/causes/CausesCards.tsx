import Image from "next/image";
import Link from "next/link";

import { getManyCauses } from "@/utils/get/cause";

const CausesCards = async () => {
  const causes = await getManyCauses(10);
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-cream dark:bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {causes.map(({ id, imageUrl, title, percentage, raised, goal }) => (
            <div
              key={id}
              className="flex flex-col bg-white dark:bg-gray-300 shadow-sm group rounded-lg overflow-hidden"
            >
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-75 w-full overflow-hidden">
                <Link href={`/causes/${id}`}>
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 bg-white dark:bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 min-w-10 sm:min-w-12.5 text-center rounded">
                  <span className="block text-rose-500 dark:text-primary font-bold text-xs sm:text-sm">
                    {percentage}%
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8 pb-6 sm:pb-8 md:pb-10">
                <Link href={`/causes/${id}`} className="cursor-pointer">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-slate-800 dark:text-dark mb-4 sm:mb-5 md:mb-6 leading-tight hover:text-rose-500 dark:hover:text-primary transition-colors">
                    {title}
                  </h3>
                </Link>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="bg-gray-100 dark:bg-gray-400 rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 w-full sm:w-auto text-center">
                    <span className="text-gray-600 dark:text-dark text-xs font-semibold tracking-wide">
                      Donation : ${raised} / ${goal}
                    </span>
                  </div>
                  <Link href={`/causes/${id}`} className="w-full sm:w-auto">
                    <button className="bg-navy dark:bg-dark-700 hover:bg-slate-800 dark:hover:bg-dark-600 text-white text-xs font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-colors w-full">
                      DONATE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesCards;
