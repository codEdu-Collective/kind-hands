import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CauseParams } from "@/types/types";
import { getAllCausesID, getOneCause } from "@/utils/get/cause";

export async function generateStaticParams() {
  const causes = await getAllCausesID();

  return causes.map((cause) => ({
    id: cause.id.toString(),
  }));
}

const Home = async ({ params }: CauseParams) => {
  const { id } = await params;
  const cause = await getOneCause(Number(id));

  if (cause)
    return (
      <section className="w-full py-8 sm:py-12 md:py-16 bg-cream dark:bg-gray-200 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* --- left  --- */}
            <div className="lg:col-span-2">
              <Link
                href="/causes"
                className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-primary transition-colors mb-4 sm:mb-6 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 group-hover:-translate-x-1 transition-transform"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="font-medium text-sm sm:text-base">Back to Causes Demos</span>
              </Link>

              <div className="relative h-48 sm:h-64 md:h-80 lg:h-100 w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-sm mb-6 sm:mb-8">
                <Image
                  src={cause.imageUrl}
                  alt={cause.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-rose-500 dark:bg-primary text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-md uppercase tracking-wider">
                  {cause.category}
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-800 dark:text-dark mb-3 sm:mb-4 leading-tight">
                {cause.title}
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 border-b border-gray-200 dark:border-gray-600 pb-4 sm:pb-6">
                <span>
                  By{" "}
                  <span className="text-slate-800 dark:text-dark font-semibold">
                    {cause.organizer}
                  </span>
                </span>
                <span>{new Date(cause.date).toLocaleDateString()}</span>
              </div>

              <div className="prose prose-sm sm:prose-base md:prose-lg text-gray-600 dark:text-gray-300 max-w-none">
                <h3 className="text-lg sm:text-xl font-serif text-slate-800 dark:text-dark mb-2 sm:mb-3">
                  Description
                </h3>
                <p className="whitespace-pre-line leading-relaxed text-sm sm:text-base">
                  {cause.description}
                </p>
              </div>
            </div>

            {/* --- right--- */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-300 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-400 sticky top-4 sm:top-8">
                <div className="mb-4 sm:mb-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-dark">
                      ${cause.raised}
                    </span>
                    <span className="text-gray-500 dark:text-gray-600 text-xs sm:text-sm mb-1">
                      of ${cause.goal} goal
                    </span>
                  </div>

                  <div className="w-full bg-gray-100 dark:bg-gray-500 rounded-full h-2 sm:h-3 mb-2 overflow-hidden">
                    <div
                      className="bg-rose-500 dark:bg-primary h-2 sm:h-3 rounded-full"
                      style={{ width: `${cause.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs sm:text-sm font-bold text-rose-500 dark:text-primary">
                    {cause.percentage}% Raised
                  </div>
                </div>

                <button className="w-full bg-navy dark:bg-dark-700 hover:bg-slate-800 dark:hover:bg-dark-600 text-white font-bold py-3 sm:py-4 rounded-full transition-colors text-sm sm:text-base">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  else notFound();
};

export default Home;
