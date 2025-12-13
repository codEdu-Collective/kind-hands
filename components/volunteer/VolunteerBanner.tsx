import Image from "next/image";

const VolunteerBanner = () => {
  return (
    <section className="relative w-full h-75 md:h-125 lg:h-150 flex flex-col justify-center items-center overflow-hidden">
      <Image
        src="/images/volunteer/volunteer-banner.jpg"
        alt="Become a Volunteer Banner"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
    </section>
  );
};

export default VolunteerBanner;
