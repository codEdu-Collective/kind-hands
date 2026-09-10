import { Head, HeroImage, Questions } from "@/components/faq";

const Page = () => {
  return (
    <main className="w-full">
      <Head />
      <section className="flex justify-center items-center bg-background dark:bg-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl my-8 sm:my-12 md:my-16 lg:my-24 xl:my-37.5 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-x-15">
          <aside className="w-full lg:flex-8 h-64 sm:h-80 md:h-96 lg:h-101 relative rounded-lg overflow-hidden">
            <HeroImage />
          </aside>
          <aside className="w-full lg:flex-11 h-full min-h-auto">
            <Questions />
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Page;
