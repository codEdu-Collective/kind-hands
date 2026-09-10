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

const VolunteerSteps = () => {
  return (
    <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <span className="text-primary dark:text-primary-500 text-2xl sm:text-3xl md:text-4xl font-sue-ellen block">
          Help The People With us
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-shippori font-extrabold text-dark dark:text-white">
          Need Your Heartful Help
        </h2>
        <p className="text-neutral dark:text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
          We are constantly looking for dedicated individuals who want to contribute their time and
          skills to make the world a better place.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start gap-3 sm:gap-4 md:gap-5">
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-rose-400 dark:bg-primary flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md">
              {step.id}
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-foreground dark:text-white">
                {step.title}
              </h4>
              <p className="text-neutral dark:text-gray-300 text-sm mt-1 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 sm:pt-6">
        <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-rose-500 dark:hover:text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default VolunteerSteps;
