import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

import { getManyEvents } from "@/utils/get/event";

const OurEvents = async () => {
  const events = await getManyEvents(4);
  return (
    <section className="w-full min-h-295.5 flex flex-col justify-center items-center text-dark py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <article className="w-full max-w-300 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 md:mb-12.5 gap-4 sm:gap-0">
        <div>
          <h2 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-2">
            Our Events
          </h2>
          <h3 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] dark:text-white">
            Join Upcoming Events <br className="hidden sm:block" /> Replays & Webinars
          </h3>
        </div>
        <Link href="/event">
          <button className="uppercase w-full sm:w-50 h-12 sm:h-14 md:h-16 bg-primary rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium cursor-pointer">
            More Events
          </button>
        </Link>
      </article>
      <div className="w-full max-w-300 min-h-154 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-0">
        <div className="relative">
          <Link href={`/event/${events[0]?.id}`}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-auto">
              <Image
                src={`/images/event-${events[0]?.id}.jpg`}
                alt="kids"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Link>
          <div className="p-3 sm:p-4 md:p-5 text-center font-shippori font-extrabold bg-primary text-white absolute top-2 sm:top-4 left-2 sm:left-4">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{events[0]?.day}</p>
            <p className="text-lg sm:text-xl md:text-2xl">{events[0]?.month}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-work font-medium text-base sm:text-lg md:text-xl mt-4 sm:mt-5 gap-2 sm:gap-0">
            <p>
              <span className="text-neutral font-normal">Organized By :</span> Nattasha
            </p>
            <div className="flex items-center gap-2">
              <MdOutlineWatchLater size={20} className="text-primary" aria-label="watch icon" />
              <p className="uppercase text-sm sm:text-base md:text-lg">
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
          </div>
          <div className="w-full bg-cloud-gray h-0.5 my-3 sm:my-4" />
          <h4 className="font-shippori font-extrabold text-xl sm:text-2xl mb-2 sm:mb-3">
            {events[0]?.title}
          </h4>
          <p className="font-work text-base sm:text-lg md:text-xl text-neutral line-clamp-2">
            {events[0]?.description}
          </p>
          <div className="flex items-center justify-evenly w-full sm:w-108.5 h-12 sm:h-15 mt-4 sm:mt-7 bg-snow p-2 sm:p-0">
            <IoLocationOutline
              size={24}
              className="sm:w-7 sm:h-7 text-primary"
              aria-label="location icon"
            />
            <p className="font-work font-medium text-sm sm:text-base md:text-lg line-clamp-1">
              {events[0]?.venue}, {events[0]?.venueAddress}
            </p>
          </div>
        </div>
        <div className="ml-0 lg:ml-7.5">
          {events.map(
            ({ day, month, organizer, title, description, id }, index) =>
              index > 0 && (
                <div key={index} className="mb-6 sm:mb-8">
                  <article className="flex gap-3 sm:gap-4 md:gap-5">
                    <div className="p-3 sm:p-4 md:p-5 text-center font-shippori font-extrabold bg-dark text-white max-w-24 sm:max-w-26 md:max-w-29 max-h-28 sm:max-h-32 md:max-h-35 flex-shrink-0">
                      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{day}</p>
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl">{month}</p>
                    </div>
                    <Link href={`/event/${id}`} className="flex-1">
                      <h3 className="font-work text-base sm:text-lg md:text-xl text-neutral">
                        Organized By :
                        <span className="font-medium text-primary"> {organizer.name}</span>
                      </h3>
                      <h2 className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6">
                        {title}
                      </h2>
                      <p className="font-work text-neutral text-base sm:text-lg md:text-xl line-clamp-2">
                        {description}
                      </p>
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
