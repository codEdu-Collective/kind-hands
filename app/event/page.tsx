import Image from "next/image";
import Link from "next/link";

import { getManyEvents } from "@/utils/get/event";

const Home = async () => {
  const events = await getManyEvents(6);
  return (
    <main className="w-full">
      <header className="h-205.5 relative flex items-center">
        <Image
          src={`/events/events-background.jpg`}
          alt="hero image"
          fill
          className="object-cover"
        />
        <div className="relative z-2 text-white ml-90">
          <h1 className="font-sue-ellen text-5xl mb-1.5">Donation</h1>
          <h2 className="font-shippori font-extrabold text-[5.625rem]">
            Our Events
          </h2>
        </div>
      </header>
      <section className="flex justify-center">
        <div className="my-37.5 w-300 grid grid-cols-2 gap-x-20 gap-y-12.5">
          {events.map(
            (
              { day, month, title, organizer, description, imageUrl, id },
              index
            ) => (
              <div key={index} className="w-139.5 relative">
                <Link href={`/event/${id}`}>
                  <Image
                    src={imageUrl}
                    alt="event sample"
                    width={558}
                    height={344}
                    className="object-cover"
                  />
                </Link>
                <div
                  className={`w-29 h-35 flex flex-col justify-center items-center font-shippori font-extrabold ${
                    index == 0 ? "bg-primary" : "bg-dark"
                  } text-white max-w-29 max-h-35 absolute top-0 left-0`}
                >
                  <p className="text-6xl">{day}</p>
                  <p className="text-2xl">{month}</p>
                </div>
                <div className="font-work text-xl text-neutral mt-5">
                  Organized By :
                  <span className="font-medium text-dark">
                    {" "}
                    {organizer.name}
                  </span>
                </div>
                <div className="w-full h-0.5 bg-cloud-gray mt-7 mb-4" />
                <div>
                  <h3
                    className={`font-shippori font-extrabold ${
                      index == 0 ? "text-primary" : "text-dark"
                    } text-2xl mb-3`}
                  >
                    {title}
                  </h3>
                  <h4 className="font-work text-xl text-neutral line-clamp-2">
                    {description}
                  </h4>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
