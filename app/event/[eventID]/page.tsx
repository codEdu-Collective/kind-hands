import Image from "next/image";
import { notFound } from "next/navigation";

import { EventParams } from "@/types/types";
import { getAllEventsID, getOneEvent } from "@/utils/get/event";

export async function generateStaticParams() {
  const events = await getAllEventsID();

  return events.map((event) => ({
    eventID: event.id.toString(),
  }));
}

const Home = async ({ params }: EventParams) => {
  const { eventID } = await params;
  const event = await getOneEvent(Number(eventID));
  if (event)
    return (
      <main className="w-full">
        <header className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-205.5 relative flex items-center">
          <Image
            src={`/events/events-single-background.jpg`}
            alt="hero image"
            fill
            className="object-cover"
          />
          <div className="relative z-2 text-white ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-90 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-1.5">Event</h1>
            <h2 className="font-shippori font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[5.625rem] leading-tight">{event.title}</h2>
          </div>
        </header>
        <section className="w-full flex justify-center relative px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl my-8 sm:my-12 md:my-16 lg:my-24 xl:my-30 flex flex-col items-center">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[617px] mb-8 sm:mb-12 md:mb-16">
              <Image
                src={`/events/event-${event.id}.jpg`}
                alt="Events Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-7xl min-h-auto text-white relative -top-8 sm:-top-12 md:-top-16 gap-4 sm:gap-0 mb-8 sm:mb-12">
              <div className="bg-primary dark:bg-primary px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-9 rounded-lg sm:rounded-none">
                <h3 className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">Start</h3>
                <p className="font-work font-medium text-sm sm:text-base md:text-lg">
                  {event.startTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}{" "}
                  -{" "}
                  {event.endTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                  , Everyday
                </p>
              </div>
              <div className="bg-dark dark:bg-dark-700 px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-9 rounded-lg sm:rounded-none">
                <h3 className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">Organizer</h3>
                <p className="font-work font-medium text-sm sm:text-base md:text-lg">{event.organizer.name}</p>
                <p className="font-work font-medium text-sm sm:text-base md:text-lg">{event.organizer.email}</p>
              </div>
              <div className="bg-accent dark:bg-accent-400 text-dark dark:text-dark px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-9 rounded-lg sm:rounded-none">
                <h3 className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 dark:text-dark">Venue</h3>
                <p className="font-work font-medium text-sm sm:text-base md:text-lg dark:text-dark">{event.venue},</p>
                <p className="font-work font-medium text-sm sm:text-base md:text-lg dark:text-dark">{event.venueAddress}</p>
              </div>
            </div>
            <article className="w-full max-w-7xl text-justify px-4 sm:px-6">
              <div>
                <h1 className="font-shippori font-extrabold text-2xl sm:text-3xl md:text-4xl mb-3 dark:text-white">Event Description</h1>
                <p className="font-work text-sm sm:text-base md:text-lg lg:text-xl text-neutral dark:text-gray-300">{event.description}</p>
                <h2 className="font-shippori font-extrabold text-xl sm:text-2xl mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4 dark:text-white">Event Content</h2>
                <p className="font-work text-sm sm:text-base md:text-lg lg:text-xl text-neutral dark:text-gray-300">{event.content}</p>
                <h3 className="font-shippori font-extrabold text-xl sm:text-2xl mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4 dark:text-white">
                  Details about the Event
                </h3>
                <p className="font-work text-sm sm:text-base md:text-lg lg:text-xl text-neutral dark:text-gray-300">{event.details}</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    );
  else notFound();
};

export default Home;
