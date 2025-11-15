import { JSX } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";

const OurEvents = (): JSX.Element => {
  return (
    <section className="w-full h-295.5 flex flex-col justify-center items-center text-dark">
      <article className="w-300 flex justify-between items-center mb-12.5">
        <div>
          <h2 className="font-sue-ellen text-4xl text-primary">Our Events</h2>
          <h3 className="font-shippori font-extrabold text-[2.5rem]">
            Join Upcoming Events <br /> Replays & Webinars
          </h3>
        </div>
        <button className="uppercase w-50 h-16 bg-primary rounded-4xl text-white text-lg font-work font-medium">
          More Events
        </button>
      </article>
      <div className="w-300 h-154 grid grid-cols-2">
        <div className="relative">
          <Image
            src={`/images/event-1.jpg`}
            alt="kids"
            width={600}
            height={344}
            className="object-cover"
          />
          <div className="p-5 text-center font-shippori font-extrabold bg-primary text-white absolute top-0 left-0">
            <p className="text-6xl">18</p>
            <p className="text-2xl">June</p>
          </div>
          <div className="flex justify-between items-center font-work font-medium text-xl mt-5">
            <p>
              <span className="text-neutral font-normal">Organized By :</span>
              Nattasha
            </p>
            <MdOutlineWatchLater size={20} className="text-primary" aria-label="watch icon" />
            <p className="uppercase text-lg">10:00 AM - 18:00 PM, Everyday</p>
          </div>
          <div className="w-full bg-cloud-gray h-0.5 my-4" />
          <h4 className="font-shippori font-extrabold text-2xl mb-3">
            Education for Poor Children
          </h4>
          <p className="font-work text-xl text-neutral">
            There are many varieations of passages of injected Lorem Ipsum available,but the
            majority have.
          </p>
          <div className="flex items-center justify-evenly w-108.5 h-15 mt-7 bg-snow">
            <IoLocationOutline size={27} className="text-primary" aria-label="location icon" />
            <p className="uppercase font-work font-medium text-lg">
              Dark Spurt, San Francisco, CA 94528
            </p>
          </div>
        </div>
        <div className="ml-7.5">
          {[
            {
              day: "18",
              month: "June",
              organized: "Nattasha",
              title: "Healthy Food for Growing",
            },
            {
              day: "21",
              month: "August",
              organized: "Michel Sudan",
              title: "Cloth Comming",
            },
            {
              day: "14",
              month: "July",
              organized: "Jogn Doue",
              title: "Teachers Presentation",
            },
          ].map(({ day, month, organized, title }, index) => (
            <div key={index}>
              <article className="flex gap-5">
                <div className="p-5 text-center font-shippori font-extrabold bg-dark text-white max-w-29 max-h-35">
                  <p className="text-6xl">{day}</p>
                  <p className="text-2xl">{month}</p>
                </div>
                <div className="">
                  <h3 className="font-work text-xl text-neutral">
                    Organized By :<span className="font-medium text-primary"> {organized}</span>
                  </h3>
                  <h2 className="font-shippori font-extrabold text-2xl mt-3 mb-6">{title}</h2>
                  <p className="font-work text-neutral text-xl">
                    There are many varieations of passages of injected Lorem Ipsum available.
                  </p>
                </div>
              </article>
              <div className="w-full h-0.5 bg-cloud-gray my-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
