import { JSX, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { causesData } from "@/components/causes/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

//Content
const CauseContent = ({ id }: { id: string }): JSX.Element => {
  const cause = causesData.find((c) => c.id === Number(id));

  if (!cause) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* --- left  --- */}
      <div className="lg:col-span-2">
        <Link
          href="/causes"
          className="inline-flex items-center text-gray-500 hover:text-[#1A2B3C] transition-colors mb-6 group"
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
          <span className="font-medium">Back to Causes</span>
        </Link>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-sm mb-8">
          <Image src={cause.image} alt={cause.title} fill className="object-cover" priority />
          <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
            {cause.category}
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif text-slate-800 mb-4 leading-tight">
          {cause.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-200 pb-6">
          <span>
            By <span className="text-slate-800 font-semibold">{cause.organizer}</span>
          </span>
          <span>{cause.date}</span>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <h3 className="text-xl font-serif text-slate-800 mb-3">Description</h3>
          <p className="whitespace-pre-line leading-relaxed">{cause.description}</p>
        </div>
      </div>

      {/* --- right--- */}
      <div className="lg:col-span-1">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-8">
          <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-3xl font-bold text-slate-800">${cause.raised}</span>
              <span className="text-gray-500 text-sm mb-1">of ${cause.goal} goal</span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden">
              <div
                className="bg-rose-500 h-3 rounded-full"
                style={{ width: `${cause.percentage}%` }}
              ></div>
            </div>
            <div className="text-right text-sm font-bold text-rose-500">
              {cause.percentage}% Raised
            </div>
          </div>

          <button className="w-full bg-[#1A2B3C] hover:bg-slate-800 text-white font-bold py-4 rounded-full transition-colors">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

// LOADING
const LoadingState = (): JSX.Element => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="text-rose-500 font-bold text-xl animate-pulse">Loading details...</div>
  </div>
);

//  MAIN PAGE
export default async function CauseDetailsPage({ params }: PageProps): Promise<JSX.Element> {
  const { id } = await params;

  return (
    <section className="w-full py-16 bg-[#F7F5F2] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <Suspense fallback={<LoadingState />}>
          <CauseContent id={id} />
        </Suspense>
      </div>
    </section>
  );
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return causesData.map((cause) => ({
    id: cause.id.toString(),
  }));
}
