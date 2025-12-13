import Image from "next/image";

const VolunteerContent = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-24">
        {/* --- left text right image --- */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 space-y-5">
            <span className="text-primary text-4xl font-sue-ellen">Help First</span>
            <h2 className="text-[2.5rem] md:text-4xl font-shippori font-extrabold text-dark">
              Let’s help together
            </h2>
            <p className="text-neutral leading-relaxed text-xl">
              We believe that meaningful change starts with a single act of kindness. By joining
              forces, we can uplift vulnerable communities, provide essential support to those who
              need it most, and restore hope where it has been lost.
            </p>
            <p className="text-neutral leading-relaxed text-xl">
              Together, we are not just providing temporary relief; we are building pathways to a
              sustainable future.
            </p>

            <button className="bg-slate-700 hover:bg-slate-800 text-white px-11 py-5.5 rounded-full text-sm font-bold tracking-wider transition-all mt-4">
              CALL : +000 365 698
            </button>
          </div>

          <div className="w-full md:w-1/2 relative h-75 md:h-100 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/volunteer/help-together.jpg"
              alt="Helping together"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* --- left picture right text --- */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 relative h-75 md:h-100 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/volunteer/more-people-impact.jpg"
              alt="More people more impact"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-[2.5rem] md:text-4xl font-shippori font-extrabold text-dark">
              More People More <br /> impact
            </h2>
            <p className="text-neutral leading-relaxed text-xl">
              Our strength lies in our unity. Every new volunteer brings a unique spark that
              amplifies our collective power. As our community grows, so does our ability to tackle
              complex challenges, reach remote areas, and create lasting change for those in need.
              Join us to multiply the good we can do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerContent;
