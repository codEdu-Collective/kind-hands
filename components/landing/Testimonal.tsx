import { JSX } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const Testimonal = (): JSX.Element => {
  return (
    <section className="w-full h-328 flex flex-col justify-center items-center">
      <h3 className="font-sue-ellen text-4xl text-primary">Testimonal</h3>
      <h2 className="font-shippori font-extrabold text-[2.5rem]">What People Say About Us</h2>
      <div className="flex mt-16 gap-8">
        {[
          { person: "Belli Smith", job: "Designer" },
          { person: "Sara Taylor", job: "Donator" },
        ].map(({ person, job }, index) => (
          <aside key={index} className="w-146 h-76.5 p-6.5 bg-light flex">
            <Image
              src={`/images/people-${index + 1}.jpg`}
              alt="people"
              width={164}
              height={257}
              className="object-cover"
            />
            <div className="ml-6 my-10">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-shippori font-bold text-2xl">{person}</h4>
                  <p className="font-work text-neutral text-xl">{job}</p>
                </div>
                <Image src={`/icons/7.png`} alt="quote" width={77} height={57} />
              </div>
              <p className="font-work text-neutral text-xl mt-2.5">
                Centuries but also the leap into electronic typesetting,established fact that a
                reader will bdistracted the readable content.
              </p>
            </div>
          </aside>
        ))}
      </div>
      <div className="flex mt-8 mb-25 items-center">
        <MdOutlineKeyboardArrowLeft
          size={73}
          color="black"
          className="rounded-full overflow-hidden border border-[#D0D0D0]"
        />
        <div className="w-111 h-px bg-[#D0D0D0]" />
        <MdOutlineKeyboardArrowRight
          size={73}
          color="black"
          className="rounded-full overflow-hidden border border-[#D0D0D0]"
        />
      </div>
      <div className="w-300 flex gap-20">
        {[
          { number: "200k", subtext: "Received Donations From Our People" },
          {
            number: "99K",
            subtext: " Projects Done With The Help Of Donators",
          },
          { number: "200k", subtext: "People We Helped on 2020" },
          {
            number: "10.7K",
            subtext: "With Our Volunteers We’ve Solved Many Causes",
          },
        ].map(({ number, subtext }, index) => (
          <article key={index} className="text-center">
            <p className="font-shippori font-extrabold text-6xl">{number}</p>
            <p className="font-work text-xl text-neutral mt-2.5">{subtext}</p>
          </article>
        ))}
      </div>
      <div className="w-300 bg-[#D0D0D0] h-px my-12.5" />
      <div className="w-300 h-26.5 flex gap-30">
        {[...Array(5)].map((_, index) => (
          <section key={index} className="h-full w-full relative">
            <Image
              src={`/brands/${index + 1}.png`}
              alt="brand-logo"
              fill
              className="object-contain"
            />
          </section>
        ))}
      </div>
    </section>
  );
};

export default Testimonal;
