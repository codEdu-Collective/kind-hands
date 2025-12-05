import { Head, HeroImage, Questions } from "@/components/faq";

const Page = () => {
  return (
    <main className="w-full">
      <Head />
      <section className="flex justify-center items-center bg-background ">
        <div className="w-300 my-37.5 flex gap-x-15">
          <aside className="flex-8 h-101 relative">
            <HeroImage />
          </aside>
          <aside className="flex-11 h-full min-h-162">
            <Questions />
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Page;
