import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="w-full h-223 flex justify-center items-center">
      <div className="w-287 text-center">
        <h3 className="font-sue-ellen text-4xl text-primary">What we do</h3>
        <h2 className="font-shippori font-extrabold text-[2.5rem]">We do it for People in Need</h2>
        <div className="grid grid-cols-3 gap-13 mt-15">
          {[
            "Medicine Help",
            "Water Delivery",
            "We Care About",
            "Food Delivery",
            "Spread The World",
            "Learn Education",
          ].map((item, index) => (
            <div key={index}>
              <Image
                src={`/icons/${index + 1}.png`}
                alt="icon"
                width={70}
                height={70}
                className="m-auto"
              />
              <h3 className="font-shippori font-extrabold text-2xl my-4">{item}</h3>
              <p className="font-work text-neutral text-xl">
                Centuries but also the leap into electronic typesetting, remaining specimen book.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
