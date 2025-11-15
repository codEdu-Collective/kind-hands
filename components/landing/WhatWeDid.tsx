import { JSX } from "react";
import Image from "next/image";

const WhatWeDid = (): JSX.Element => {
  return (
    <section className="w-full h-221.5 bg-slate-ink text-white font-shippori">
      <div className="grid grid-cols-4">
        <div className="col-span-2 pt-21 px-25">
          <h3 className="font-sue-ellen text-4xl text-primary">What We Did</h3>
          <h2 className="font-extrabold text-[2.5rem]">Featured Projects</h2>
          <p className="text-xl mt-4 mb-8 font-work">
            Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an
            unknown printer took a galley of type and scrambled a type specimen book.
          </p>
          <button className="uppercase w-50 h-16 bg-primary rounded-4xl text-white text-lg font-work font-medium">
            More Project
          </button>
        </div>
        {[...Array(4)].map((_, index) => (
          <div key={index} className="w-full h-110.75 relative">
            <Image
              src={`/images/whatDid-kids-${index + 1}.jpg`}
              fill
              alt="kids"
              className="object-cover"
            />
          </div>
        ))}
        <div className="bg-primary flex flex-col justify-end items-start pl-10 pb-12">
          <div className="flex gap-2">
            {["Education", "Health"].map((item, index) => (
              <button
                key={index}
                className="h-9.5 px-5 bg-coral-red rounded-4xl text-white font-work font-medium text-xl"
              >
                {item}
              </button>
            ))}
          </div>
          <p className="font-extrabold text-3xl">
            More than One Life <br /> Changed
          </p>
        </div>
        <div className="w-full h-110.75 relative">
          <Image src={`/images/whatDid-kids-5.jpg`} fill alt="kids" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDid;
