import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

import { getManyEvents } from "@/utils/get/event";

const OurEvents = async () => {
  const events = await getManyEvents(4);
  return (
    <section className="w-full h-295.5 flex flex-col justify-center items-center text-dark">
      <article className="w-300 flex justify-between items-center mb-12.5">
        <div>
          <h2 className="font-sue-ellen text-4xl text-primary">Our Events</h2>
          <h3 className="font-shippori font-extrabold text-[2.5rem]">
            Join Upcoming Events <br /> Replays & Webinars
          </h3>
        </div>
        <Link href="/event">
          <button className="uppercase w-50 h-16 bg-primary rounded-4xl text-white text-lg font-work font-medium cursor-pointer">
            More Events
          </button>
        </Link>
      </article>
      <div className="w-300 h-154 grid grid-cols-2">
        <div className="relative">
          <Link href={`/event/${events[0]?.id}`}>
            <Image
              src={`/images/event-${events[0]?.id}.jpg`}
              alt="kids"
              width={600}
              height={344}
              className="object-cover"
            />
          </Link>
          <div className="p-5 text-center font-shippori font-extrabold bg-primary text-white absolute top-0 left-0">
            <p className="text-6xl">{events[0]?.day}</p>
            <p className="text-2xl">{events[0]?.month}</p>
          </div>
          <div className="flex justify-between items-center font-work font-medium text-xl mt-5">
            <p>
              <span className="text-neutral font-normal">Organized By :</span>
              Nattasha
            </p>
            <MdOutlineWatchLater
              size={20}
              className="text-primary"
              aria-label="watch icon"
            />
            <p className="uppercase text-lg">
              {" "}
              {events[0]?.startTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}{" "}
              -{" "}
              {events[0]?.endTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
              , Everyday
            </p>
          </div>
          <div className="w-full bg-cloud-gray h-0.5 my-4" />
          <h4 className="font-shippori font-extrabold text-2xl mb-3">
            {events[0]?.title}
          </h4>
          <p className="font-work text-xl text-neutral line-clamp-2">
            {events[0]?.description}
          </p>
          <div className="flex items-center justify-evenly w-108.5 h-15 mt-7 bg-snow">
            <IoLocationOutline
              size={27}
              className="text-primary"
              aria-label="location icon"
            />
            <p className="font-work font-medium text-lg line-clamp-1">
              {events[0]?.venue}, {events[0]?.venueAddress}
            </p>
          </div>
        </div>
        <div className="ml-7.5">
          {events.map(
            ({ day, month, organizer, title, description, id }, index) =>
              index > 0 && (
                <div key={index}>
                  <article className="flex gap-5">
                    <div className="p-5 text-center font-shippori font-extrabold bg-dark text-white max-w-29 max-h-35">
                      <p className="text-6xl">{day}</p>
                      <p className="text-2xl">{month}</p>
                    </div>
                    <Link href={`/event/${id}`}>
                      <h3 className="font-work text-xl text-neutral">
                        Organized By :
                        <span className="font-medium text-primary">
                          {" "}
                          {organizer.name}
                        </span>
                      </h3>
                      <h2 className="font-shippori font-extrabold text-2xl mt-3 mb-6">
                        {title}
                      </h2>
                      <p className="font-work text-neutral text-xl line-clamp-2">
                        {description}
                      </p>
                    </Link>
                  </article>
                  <div className="w-full h-0.5 bg-cloud-gray my-6" />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
