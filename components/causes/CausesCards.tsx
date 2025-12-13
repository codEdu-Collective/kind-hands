import Image from "next/image";
import Link from "next/link";

import { getManyCauses } from "@/utils/get/cause";

const CausesCards = async () => {
  const causes = await getManyCauses(10);
  return (
    <section className="w-full py-16 bg-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {causes.map(({ id, imageUrl, title, percentage, raised, goal }) => (
            <div key={id} className="flex flex-col bg-white shadow-sm group">
              <div className="relative h-75 w-full overflow-hidden">
                <Link href={`/causes/${id}`}>
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="absolute top-6 left-6 bg-white px-3 py-2 min-w-12.5 text-center">
                  <span className="block text-rose-500 font-bold text-sm">{percentage}%</span>
                </div>
              </div>

              <div className="p-8 pb-10">
                <Link href={`/causes/${id}`} className="cursor-pointer">
                  <h3 className="text-2xl font-serif text-slate-800 mb-6 leading-tight hover:text-rose-500 transition-colors">
                    {title}
                  </h3>
                </Link>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="bg-gray-100 rounded-full px-6 py-3 w-full sm:w-auto text-center">
                    <span className="text-gray-600 text-xs font-semibold tracking-wide">
                      Donation : ${raised} / ${goal}
                    </span>
                  </div>
                  <Link href={`/causes/${id}`} className="w-full sm:w-auto">
                    <button className="bg-navy hover:bg-slate-800 text-white text-xs font-bold py-3 px-8 rounded-full transition-colors w-full">
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
