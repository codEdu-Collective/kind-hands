import dynamic from "next/dynamic";

import VolunteerBanner from "@/components/volunteer/VolunteerBanner";
import VolunteerContent from "@/components/volunteer/VolunteerContent";
import VolunteerSteps from "@/components/volunteer/VolunteerSteps";

const VolunteerForm = dynamic(() => import("@/components/volunteer/VolunteerForm"), {
  loading: () => <div className="h-150 bg-gray-50 animate-pulse rounded-sm" />,
});

const VolunteerPage = () => {
  return (
    <div className="w-full font-sans">
      <VolunteerBanner />

      <VolunteerContent />

      <section className="w-full bg-beige dark:bg-dark-900 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16">
          <VolunteerSteps />

          <div className="w-full lg:w-1/2">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;
