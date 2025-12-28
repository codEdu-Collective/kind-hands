import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

import { getManyCauses } from "@/utils/get/cause";

const OurCouses = async () => {
  const causes = await getManyCauses(4);
  return (
    <section className="w-full h-332 bg-beige flex flex-col items-center justify-center text-dark">
      <div className="w-300">
        <h3 className="font-sue-ellen text-4xl text-primary">Our Couses</h3>
        <div className="flex items-center justify-between ">
          <h2 className="font-shippori font-extrabold text-[2.5rem] dark:text-white">
            You can help lots of people by <br />
            donating little.
          </h2>
          <button className="uppercase w-50 h-16 bg-primary rounded-4xl text-white text-lg font-work font-medium">
            More Causes
          </button>
        </div>
      </div>
      <div className="flex px-9 gap-9 mt-12">
        {causes.map(({ id, percentage, raised, goal, imageUrl, title }, index) => (
          <div key={index} className="relative">
            <Link href={`/causes/${id}`}>
              <Image src={imageUrl} width={437} height={387} alt="kids" className="object-cover" />
            </Link>
            <div className="absolute top-6 left-6 bg-background">
              <p className="font-shippori font-extrabold text-2xl text-primary px-3 py-2">
                {percentage}%
              </p>
            </div>
            <div className="bg-background dark:bg-gray-800 w-full max-w-109 p-8">
              <h2 className="font-shippori text-2xl font-extrabold mb-8 dark:text-white">{title}</h2>
              <div className="w-full h-1.5 bg-mist-gray rounded-3xl relative">
                <div className="h-1.5 bg-primary rounded-3xl" style={{ width: `${percentage}%` }} />
              </div>

              <div className="flex justify-between mt-5 mb-9 font-shippori font-extrabold text-xl">
                <p className="dark:text-white">Raised - {raised.split(",")[0]}M</p>
                <p className="text-primary">Goal - ${goal.split(",")[0]}M</p>
              </div>
              <button className="uppercase w-36 h-16 bg-dark dark:bg-primary rounded-4xl text-white text-lg font-work font-medium">
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
