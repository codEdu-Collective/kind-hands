import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const About = () => {
  return (
    <main className="w-full">
      <header className="relative h-205.5 flex items-center">
        <Image
          src="/images/about/hero.png"
          alt="hero"
          fill
          className="object-cover"
        />
        <div className="relative z-2 text-white ml-90 max-w-120">
          <h1 className="font-sue-ellen text-5xl mb-1.5">What We Do...</h1>
          <h2 className="font-shippori font-extrabold text-[5.625rem] leading-tight">
            About Our Organization
          </h2>
        </div>
      </header>

      <section className="w-full flex justify-center">
        <div className="w-300 my-37.5 flex flex-col gap-12">
          <article className="flex items-start gap-12">
            <div className="shrink-0 flex flex-col">
              <Image
                src="/images/about/about-1.png"
                alt="Child giving thumbs up"
                width={560}
                height={502}
                className="object-cover"
              />
              <div className="relative not-last:mt-6 p-6 flex items-start gap-4">
                <Image
                  src="/images/about/quote.png"
                  alt="Quote icon"
                  width={454}
                  height={170}
                  className="shrink-0 absolute bottom-0 left-[-50px]"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="font-sue-ellen text-4xl mb-3 text-primary">
                About Us
              </h3>
              <h2 className="font-shippori font-extrabold text-[2.5rem] mb-4">
                Solutions to Help People in Need and Save the Planet
              </h2>
              <div className="text-xl flex flex-col gap-4 text-justify text-neutral mb-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printin typesetting
                  dummy text ever when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>

              <div className="bg-accent p-6 mb-6">
                <p className="text-white font-work text-xl">
                  Save the Children believes every child deserves a future.
                </p>
              </div>

              <button className="uppercase w-fit px-12 h-16 bg-dark rounded-4xl text-white text-lg font-work font-medium">
                More About
              </button>
            </div>
          </article>

          <aside
            aria-label="Our Partners"
            className="w-300 h-52.5 flex gap-30 my-30 border-y border-mist-gray py-5"
          >
            {[...Array(5)].map((_, index) => (
              <div key={index} className="h-full w-full relative">
                <Image
                  src={`/brands/${index + 1}.png`}
                  alt="brand logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </aside>

          <div className="flex gap-12">
            <article className="flex-1">
              <h2 className="font-shippori font-extrabold text-4xl mb-4">
                Our Goal
              </h2>
              <div className="text-xl flex flex-col gap-4 text-justify text-neutral mb-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printin typesetting
                  dummy text ever when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-4 mb-6">
                {[
                  "Make Donation",
                  "Donation Reached 10M",
                  "Education For All",
                  "Become A Volunteer",
                  "Food For Poor People dayle",
                ].map((item, index) => (
                  <li
                    key={index}
                    className=" flex gap-3 items-center bg-snow rounded-4xl p-3"
                  >
                    <FaCheck
                      color={"var(--color-primary)"}
                      size={27}
                      aria-label="check icon"
                      className="border border-primary overflow-hidden rounded-full p-1.5 shrink-0"
                    />
                    <span className="font-work text-xl text-neutral font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="text-xl flex flex-col gap-4 text-justify text-neutral">
                <p>
                  Lorem Ipsum is simply dummy text of the printin typesetting
                  dummy text ever when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </article>

            <article className="flex-1">
              <h2 className="font-shippori font-extrabold text-4xl mb-4">
                Our Mission
              </h2>
              <div className="text-xl flex flex-col gap-4 text-justify text-neutral mb-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis animi fugit officia illum perferendis dolorem, quos,
                  minus culpa fuga ut, laudantium tempore eligendi illo quis
                  doloribus distinctio nam aperiam laborum?
                </p>
              </div>

              <div className="relative">
                <Image
                  src="/images/about/about-2.png"
                  alt="Hands holding flower"
                  width={560}
                  height={502}
                  className="object-cover"
                />
                <div className="absolute bottom-[-20px] left-6 bg-accent p-10">
                  <p className="font-shippori font-extrabold text-6xl">
                    20000+
                  </p>
                  <p className="font-work text-xl">Thousand People Helped</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
