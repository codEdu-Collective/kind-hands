import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        src={`/faq/Question-kids.jpg`}
        alt="hero image"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
      <div className="relative z-2 text-dark w-full h-full px-12.5 py-18">
        <h2 className="font-shippori font-extrabold text-[2.5rem]">Any Question?</h2>
        <h3 className="font-work font-medium text-2xl my-7 text-justify">
          We are always here to help the needy peoples any where in the world
        </h3>
        <button className="uppercase w-64 h-16 bg-dark rounded-4xl text-background text-lg font-work font-medium">
          Mail your Question
        </button>
      </div>
    </>
  );
};

export default HeroImage;
