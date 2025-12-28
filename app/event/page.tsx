import Image from "next/image";
import Link from "next/link";

import { getManyEvents } from "@/utils/get/event";

const Home = async () => {
  const events = await getManyEvents(6);
  return (
    <main className="w-full">
      <header className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-205.5 relative flex items-center">
        <Image
          src={`/events/events-background.jpg`}
          alt="hero image"
          fill
          className="object-cover"
        />
        <div className="relative z-2 text-white ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-90 px-4 sm:px-6">
          <h1 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-1.5">
            Donation
          </h1>
          <h2 className="font-shippori font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.625rem]">
            Our Events
          </h2>
        </div>
      </header>
      <section className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="my-8 sm:my-12 md:my-16 lg:my-24 xl:my-37.5 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-x-12 lg:gap-x-20 gap-y-8 sm:gap-y-10 md:gap-y-12.5">
          {events.map(({ day, month, title, organizer, description, imageUrl, id }, index) => (
            <div key={index} className="w-full relative">
              <Link href={`/event/${id}`}>
                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
                  <Image
                    src={imageUrl}
                    alt="event sample"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Link>
              <div
                className={`w-20 sm:w-24 md:w-26 lg:w-29 h-24 sm:h-28 md:h-32 lg:h-35 flex flex-col justify-center items-center font-shippori font-extrabold ${
                  index == 0 ? "bg-primary" : "bg-dark dark:bg-dark-700"
                } text-white absolute top-2 sm:top-4 left-2 sm:left-4 rounded`}
              >
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{day}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-2xl">{month}</p>
              </div>
              <div className="font-work text-sm sm:text-base md:text-lg lg:text-xl text-neutral dark:text-gray-300 mt-4 sm:mt-5">
                Organized By :
                <span className="font-medium text-dark dark:text-white"> {organizer.name}</span>
              </div>
              <div className="w-full h-0.5 bg-cloud-gray dark:bg-gray-600 mt-4 sm:mt-6 md:mt-7 mb-3 sm:mb-4" />
              <div>
                <h3
                  className={`font-shippori font-extrabold ${
                    index == 0 ? "text-primary" : "text-dark dark:text-white"
                  } text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3`}
                >
                  {title}
                </h3>
                <h4 className="font-work text-sm sm:text-base md:text-lg lg:text-xl text-neutral dark:text-gray-300 line-clamp-2">
                  {description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
