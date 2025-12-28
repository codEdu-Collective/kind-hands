import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

import { getManyEvents } from "@/utils/get/event";

const OurEvents = async () => {
  const events = await getManyEvents(4);
  return (
    <section className="w-full min-h-auto flex flex-col justify-center items-center text-dark px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <article className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12.5">
        <div className="flex-1">
          <h2 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-2 sm:mb-4">Our Events</h2>
          <h3 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] dark:text-white">
            Join Upcoming Events <br /> Replays & Webinars
          </h3>
        </div>
        <Link href="/event">
          <button className="uppercase w-full sm:w-40 md:w-50 h-12 sm:h-14 md:h-16 bg-primary rounded-3xl sm:rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium cursor-pointer">
            More Events
          </button>
        </Link>
      </article>
      <div className="w-full max-w-7xl min-h-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="relative">
          <Link href={`/event/${events[0]?.id}`}>
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
              <Image
                src={`/images/event-${events[0]?.id}.jpg`}
                fill
                alt="kids"
                className="object-cover rounded-lg"
              />
            </div>
          </Link>
          <div className="p-3 sm:p-4 md:p-5 text-center font-shippori font-extrabold bg-primary text-white absolute top-2 sm:top-4 left-2 sm:left-4 rounded">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{events[0]?.day}</p>
            <p className="text-lg sm:text-xl md:text-2xl">{events[0]?.month}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 font-work font-medium text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-5">
            <p>
              <span className="text-neutral font-normal">Organized By :</span>
              Nattasha
            </p>
            <MdOutlineWatchLater size={18} className="sm:w-5 sm:h-5 text-primary" aria-label="watch icon" />
            <p className="uppercase text-sm sm:text-base md:text-lg">
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
          <div className="w-full bg-cloud-gray h-0.5 my-3 sm:my-4" />
          <h4 className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">{events[0]?.title}</h4>
          <p className="font-work text-sm sm:text-base md:text-lg lg:text-xl text-neutral line-clamp-2">{events[0]?.description}</p>
          <div className="flex items-center justify-evenly w-full sm:w-108.5 h-12 sm:h-15 mt-4 sm:mt-6 md:mt-7 bg-snow rounded px-2 sm:px-4">
            <IoLocationOutline size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary shrink-0" aria-label="location icon" />
            <p className="font-work font-medium text-xs sm:text-sm md:text-base lg:text-lg line-clamp-1">
              {events[0]?.venue}, {events[0]?.venueAddress}
            </p>
          </div>
        </div>
        <div className="mt-6 sm:mt-0 sm:ml-4 md:ml-7.5 space-y-4 sm:space-y-6">
          {events.map(
            ({ day, month, organizer, title, description, id }, index) =>
              index > 0 && (
                <div key={index}>
                  <article className="flex gap-3 sm:gap-4 md:gap-5">
                    <div className="p-3 sm:p-4 md:p-5 text-center font-shippori font-extrabold bg-dark dark:bg-dark-700 text-white max-w-24 sm:max-w-26 md:max-w-29 h-20 sm:h-24 md:h-28 lg:max-h-35 shrink-0 rounded">
                      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{day}</p>
                      <p className="text-sm sm:text-base md:text-lg lg:text-2xl">{month}</p>
                    </div>
                    <Link href={`/event/${id}`} className="flex-1">
                      <h3 className="font-work text-sm sm:text-base md:text-lg lg:text-xl text-neutral">
                        Organized By :
                        <span className="font-medium text-primary"> {organizer.name}</span>
                      </h3>
                      <h2 className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6">{title}</h2>
                      <p className="font-work text-neutral text-sm sm:text-base md:text-lg lg:text-xl line-clamp-2">{description}</p>
                    </Link>
                  </article>
                  <div className="w-full h-0.5 bg-cloud-gray my-4 sm:my-5 md:my-6" />
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
