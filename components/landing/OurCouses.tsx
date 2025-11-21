import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const OurCouses = () => {
  return (
    <section className="w-full h-332 bg-beige flex flex-col items-center justify-center text-dark">
      <div className="w-300">
        <h3 className="font-sue-ellen text-4xl text-primary">Our Couses</h3>
        <div className="flex items-center justify-between ">
          <h2 className="font-shippori font-extrabold text-[2.5rem]">
            You can help lots of people by <br />
            donating little.
          </h2>
          <button className="uppercase w-50 h-16 bg-primary rounded-4xl text-white text-lg font-work font-medium">
            More Causes
          </button>
        </div>
      </div>
      <div className="flex px-9 gap-9 mt-12">
        {[
          { percent: 85, raised: 5, goal: 10 },
          { percent: 75, raised: 3, goal: 10 },
          { percent: 50, raised: 5, goal: 10 },
          { percent: 75, raised: 5, goal: 10 },
        ].map(({ percent, raised, goal }, index) => (
          <div key={index} className="relative">
            <Image
              src={`/images/causes-${index + 1}.jpg`}
              width={437}
              height={387}
              alt="kids"
              className="object-cover"
            />
            <div className="absolute top-6 left-6 bg-background">
              <p className="font-shippori font-extrabold text-2xl text-primary px-3 py-2">
                {percent}%
              </p>
            </div>
            <div className="bg-background w-full p-8">
              <h2 className="font-shippori text-2xl font-extrabold mb-8">
                Big charity: build school for poor children
              </h2>
              <div className="w-full h-1.5 bg-mist-gray rounded-3xl" />
              <div className="w-2/3 h-1.5 bg-primary relative -top-1.5 rounded-3xl z-2" />
              <div className="flex justify-between mt-5 mb-9 font-shippori font-extrabold text-xl">
                <p>Raised - {raised}M</p>
                <p className="text-primary">Goal - ${goal}M</p>
              </div>
              <button className="uppercase w-36 h-16 bg-dark rounded-4xl text-white text-lg font-work font-medium">
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-12 gap-75">
        <MdOutlineKeyboardArrowLeft
          size={73}
          color="black"
          className="bg-background rounded-full overflow-hidden"
          aria-label="previous causes"
        />
        <MdOutlineKeyboardArrowRight
          size={73}
          color="black"
          className="bg-background rounded-full overflow-hidden"
          aria-label="next causes"
        />
      </div>
    </section>
  );
};

export default OurCouses;
