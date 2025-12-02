import Image from "next/image";

const Volunteer = () => {
  const steps = [
    {
      id: "01",
      title: "Create a personal profile",
      desc: "Register with your details to join our global network of volunteers.",
    },
    {
      id: "02",
      title: "Join our community",
      desc: "Connect with like-minded individuals and choose your cause.",
    },
    {
      id: "03",
      title: "Find volunteer opportunities",
      desc: "Browse through available events and missions that match your skills.",
    },
    {
      id: "04",
      title: "Start making an impact!",
      desc: "Participate in projects and see the difference you make in real-time.",
    },
  ];

  return (
    <div className="w-full font-sans">
      <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] flex flex-col justify-center items-center overflow-hidden">
        <Image
          src="/images/volunteer/volunteer-banner.jpg"
          alt="Become a Volunteer Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-24">
          {/* left text */}
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

            <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/volunteer/help-together.jpg"
                alt="Helping together"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* right text */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/volunteer/more-people-impact.jpg"
                alt="More people more impact"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-5">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                More People More <br /> impact
              </h2>
              <p className="text-neutral leading-relaxed">
                Our strength lies in our unity. Every new volunteer brings a unique spark that
                amplifies our collective power. As our community grows, so does our ability to
                tackle complex challenges, reach remote areas, and create lasting change for those
                in need. Join us to multiply the good we can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f3f0eb] py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
          {/* --- left step --- */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-rose-400 italic text-xl font-sue-ellen block">
                Help The People With us
              </span>
              <h2 className="text-4xl font-serif font-bold text-gray-800">
                Need Your Heartful Help
              </h2>
              <p className="text-neutral leading-relaxed">
                We are constantly looking for dedicated individuals who want to contribute their
                time and skills to make the world a better place.
              </p>
            </div>

            {/* steps list (mapping through) */}
            <div className="space-y-6 pt-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-foreground">{step.title}</h4>
                    <p className="text-neutral text-sm mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-rose-500 px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm transition-all">
                Get Started
              </button>
            </div>
          </div>

          {/* --- right form --- */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 md:p-10 shadow-xl rounded-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-gray-800">Complete the Form</h3>
                <p className="text-rose-400 text-sm mt-2 font-bold">
                  Fill Form and Become Volunteer
                </p>
              </div>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Enter Your Name*"
                  className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm"
                />
                <input
                  type="text"
                  placeholder="Address*"
                  className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm"
                />
                <textarea
                  placeholder="About Occupation*"
                  rows={4}
                  className="w-full bg-gray-50 text-gray-700 px-4 py-4 outline-none focus:ring-1 focus:ring-rose-300 transition-all text-sm resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="bg-slate-700 hover:bg-slate-800 text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
