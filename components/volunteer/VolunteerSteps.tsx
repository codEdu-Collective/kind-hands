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
    <div className="w-full lg:w-1/2 space-y-8">
      <div className="space-y-4">
        <span className="text-primary text-4xl font-sue-ellen block">Help The People With us</span>
        <h2 className="text-[2.5rem] font-shippori font-extrabold text-dark">
          Need Your Heartful Help
        </h2>
        <p className="text-neutral leading-relaxed text-xl">
          We are constantly looking for dedicated individuals who want to contribute their time and
          skills to make the world a better place.
        </p>
      </div>

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
        <button className="bg-white border border-gray-200 hover:bg-gray-50 hover:text-rose-500 px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default VolunteerSteps;
