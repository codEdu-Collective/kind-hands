import Image from "next/image";
import { notFound } from "next/navigation";

import { getEvents, getOneEvent } from "@/utils/get/event";

export async function generateStaticParams() {
  const events = await getEvents();

  return events.map((event) => ({
    eventID: event.id.toString(),
  }));
}

type Props = {
  params: { eventID: string };
};

const Home = async ({ params }: Props) => {
  const { eventID } = await params;
  const event = await getOneEvent(Number(eventID));
  if (event)
    return (
      <main className="w-full">
        <header className="h-205.5 relative flex items-center">
          <Image
            src={`/events/events-single-background.jpg`}
            alt="hero image"
            fill
            className="object-cover"
          />
          <div className="relative z-2 text-white ml-90 w-220">
            <h1 className="font-sue-ellen text-5xl mb-1.5">Event</h1>
            <h2 className="font-shippori font-extrabold text-[5.625rem]">{event.title}</h2>
          </div>
        </header>
        <section className="w-full flex justify-center relative">
          <div className="w-300 my-30 flex flex-col items-center">
            <Image
              src={`/events/event-${event.id}.jpg`}
              alt="Events Image"
              width={1200}
              height={617}
              className="object-cover"
            />
            <div className="grid grid-cols-3 w-220.5 h-53 text-white relative -top-16">
              <div className="bg-primary px-6 py-9">
                <h3 className="font-shippori font-extrabold text-2xl mb-4">Start</h3>
                <p className="font-work font-medium text-lg">
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
              <div className="bg-dark px-6 py-9">
                <h3 className="font-shippori font-extrabold text-2xl mb-4">Organizer</h3>
                <p className="font-work font-medium text-lg">{event.organizer.name}</p>
                <p className="font-work font-medium text-lg">{event.organizer.email}</p>
              </div>
              <div className="bg-accent text-dark px-6 py-9">
                <h3 className="font-shippori font-extrabold text-2xl mb-4">Venue</h3>
                <p className="font-work font-medium text-lg">{event.venue},</p>
                <p className="font-work font-medium text-lg">{event.venueAddress}</p>
              </div>
            </div>
            <article className="w-220.5 text-justify">
              <div>
                <h1 className="font-shippori font-extrabold text-4xl mb-3">Event Description</h1>
                <p className="font-work text-xl text-neutral">{event.description}</p>
                <h2 className="font-shippori font-extrabold text-2xl mt-10 mb-4">Event Content</h2>
                <p className="font-work text-xl text-neutral">{event.content}</p>
                <h3 className="font-shippori font-extrabold text-2xl mt-10 mb-4">
                  Details about the Event
                </h3>
                <p className="font-work text-xl text-neutral">{event.details}</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    );
  else notFound();
};

export default Home;
