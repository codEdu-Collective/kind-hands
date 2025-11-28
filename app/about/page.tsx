import { Suspense } from "react";
import {
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaQuoteLeft,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

import AboutMore from "@/components/about/AboutMore";

const About = () => {
  return (
    <main className="w-full">
      <header className="relative h-96 md:h-205.5 flex items-center">
        <Image src="/images/about/hero.png" alt="hero" fill className="object-cover" />
        <div className="relative z-2 text-white ml-4 md:ml-90 max-w-full md:max-w-120 px-4 md:px-0">
          <h1 className="font-sue-ellen text-2xl md:text-5xl mb-1.5">What We Do...</h1>
          <h2 className="font-shippori font-extrabold text-3xl md:text-[5.625rem] leading-tight">
            About Our Organization
          </h2>
        </div>
      </header>

      <section className="w-full flex flex-col items-center">
        <div className="w-full max-w-300 px-4 md:px-0 my-8 md:my-37.5 flex flex-col gap-6 md:gap-12">
          <article className="flex flex-col-reverse md:flex-row items-start gap-4 md:gap-12">
            <div className="relative w-full md:w-auto shrink-0 flex flex-col">
              <Image
                src="/images/about/about-1.png"
                alt="Child giving thumbs up"
                width={560}
                height={502}
                className="object-cover w-full"
              />
              <div className="bg-dark md:mt-6 p-3 md:p-4 w-full md:w-auto md:max-w-112.5 flex items-start gap-2 md:gap-3 relative md:absolute md:bottom-[-30px] md:right-[50px]">
                <div className="shrink-0">
                  <FaQuoteLeft size={40} color="white" aria-label="Quote icon" />
                </div>
                <p className="font-work text-base md:text-xl text-white">
                  He is truly great who hath a great charity.
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col w-full md:w-auto">
              <h3 className="font-sue-ellen text-2xl md:text-4xl m-5 md:mb-3 text-primary">
                About Us
              </h3>
              <h2 className="font-shippori font-extrabold text-xl md:text-[2.5rem] mb-4">
                Solutions to Help People in Need and Save the Planet
              </h2>
              <div className="text-base md:text-xl flex flex-col gap-4 text-justify text-neutral mb-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>

              <div className="bg-light-100 p-4 md:p-6 mb-6">
                <p className="text-light-950 font-work text-base md:text-xl">
                  Save the Children believes every child deserves a future.
                </p>
              </div>
              <Suspense>
                <AboutMore />
              </Suspense>
            </div>
          </article>

          <aside
            aria-label="Our Partners"
            className="w-full max-w-300 h-auto md:h-52.5 flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-3 md:gap-30 my-8 md:my-30 border-y border-mist-gray py-4 md:py-5 px-4 md:px-0"
          >
            {[...Array(5)].map((_, index) => (
              <div key={index} className="h-16 md:h-full w-20 md:w-full relative">
                <Image
                  src={`/brands/${index + 1}.png`}
                  alt="brand logo"
                  fill
                  sizes="(max-width: 768px) 80px, 240px"
                  className="object-contain"
                />
              </div>
            ))}
          </aside>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
            <article className="flex-1 w-full">
              <h2 className="font-shippori font-extrabold text-2xl md:text-4xl mb-4">Our Goal</h2>
              <div className="text-base md:text-xl flex flex-col gap-4 text-justify text-neutral mb-6">
                <p>
                  Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "Make Donation",
                  "Donation Reached 10M",
                  "Education For All",
                  "Become A Volunteer",
                  "Food For Poor People dayle",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-center bg-snow rounded-4xl p-3">
                    <FaCheck
                      color={"var(--color-primary)"}
                      size={24}
                      aria-label="check icon"
                      className="border border-primary overflow-hidden rounded-full p-1.5 shrink-0 md:size-[27px]"
                    />
                    <span className="font-work text-base md:text-xl text-neutral font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="text-base md:text-xl flex flex-col gap-4 text-justify text-neutral">
                <p>
                  Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </article>

            <article className="flex-1 w-full">
              <h2 className="font-shippori font-extrabold text-2xl md:text-4xl mb-4">
                Our Mission
              </h2>
              <div className="text-base md:text-xl flex flex-col gap-4 text-justify text-neutral mb-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis animi fugit
                  officia illum perferendis dolorem, quos, minus culpa fuga ut, laudantium tempore
                  eligendi illo quis doloribus distinctio nam aperiam laborum?
                </p>
              </div>

              <div className="relative">
                <Image
                  src="/images/about/about-2.png"
                  alt="Hands holding flower"
                  width={560}
                  height={502}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-[-10px] md:bottom-[-20px] left-4 md:left-6 bg-accent p-4 md:p-10">
                  <p className="font-shippori font-extrabold text-3xl md:text-6xl">20000+</p>
                  <p className="font-work text-base md:text-xl">Thousand People Helped</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="w-full bg-beige h-auto md:h-200 flex flex-col justify-center items-center py-8 md:py-0">
          <div className="w-full max-w-300 px-4 md:px-0">
            <h1 className="font-sue-ellen text-2xl md:text-4xl text-primary text-center mb-1">
              Team
            </h1>
            <h2 className="font-shippori font-extrabold text-xl md:text-[2.5rem] text-center mb-4 md:mb-10">
              Meet Our Volunteers
            </h2>
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-3 md:gap-4">
              {["Jack Sparrow", "Keira Knightley", "Martin Luther"].map((member, index) => (
                <div
                  key={index}
                  className="text-center w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] md:w-70.5 md:h-115"
                >
                  <Image
                    src={`/images/about/team-${index + 1}.png`}
                    alt="team members"
                    width={282}
                    height={382}
                    className="object-cover w-full h-auto"
                  />
                  <h3 className="my-3 md:my-4.5 font-shippori font-extrabold text-base md:text-xl">
                    {member}
                  </h3>
                  <div className="flex justify-center gap-3 md:gap-4">
                    <FaInstagram
                      size={18}
                      aria-label="Instagram icon"
                      className="w-4 h-4 md:w-[18px] md:h-[18px]"
                    />
                    <FaFacebook
                      size={18}
                      aria-label="Facebook icon"
                      className="w-4 h-4 md:w-[18px] md:h-[18px]"
                    />
                    <FaSquareXTwitter
                      size={18}
                      aria-label="Twitter icon"
                      className="w-4 h-4 md:w-[18px] md:h-[18px]"
                    />
                    <FaPinterest
                      size={18}
                      aria-label="Pinterest icon"
                      className="w-4 h-4 md:w-[18px] md:h-[18px]"
                    />
                  </div>
                </div>
              ))}
              <div className="bg-accent w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] md:w-70.5 md:h-115 flex flex-col justify-center items-center text-center px-3 md:px-4.5 py-6 md:py-0">
                <Image
                  src={`/images/about/icon.png`}
                  width={82}
                  height={82}
                  alt="hand icon"
                  className="p-4.5 rounded-full mb-4"
                />
                <h4 className="font-shippori font-extrabold text-xl md:text-2xl mb-4">
                  Become a Volunteer
                </h4>
                <p className="font-work text-base md:text-xl mb-6">
                  Centuries but also the leap electtypesetting, remaining
                </p>
                <Link href="/volunteer">
                  <button className="uppercase w-full md:w-50 h-14 md:h-16 bg-dark rounded-4xl text-white text-base md:text-lg font-work font-medium cursor-pointer">
                    JOIN US TODAY
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full relative h-auto md:h-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/about/footer.png"
              alt="Newsletter background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0" />
          </div>
          <div className="relative z-2 w-full max-w-300 px-4 md:px-0 flex flex-col items-center justify-center text-center text-white py-12 md:py-16">
            <h3 className="font-sue-ellen text-2xl md:text-4xl mb-0.5">Subscribe</h3>
            <h2 className="font-shippori font-extrabold text-xl md:text-[2.5rem] mb-4">
              Newsletter
            </h2>
            <p className="font-work text-base md:text-xl mb-6 max-w-2xl px-4">
              Save the Children believes every child deserves a future. In the U.S. and around the
              world, we give children a healthy start in life.
            </p>
            <form className="flex flex-col md:flex-row gap-3 md:gap-5 w-full max-w-2xl px-4 md:px-0">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 bg-white text-neutral py-3 md:py-5 pl-4 md:pl-6.5 pr-4 rounded-full font-work text-sm md:text-lg outline-none w-full"
              />
              <button
                type="submit"
                className="uppercase bg-dark text-white py-3 md:py-5.5 px-6 md:px-9 rounded-full font-work text-sm md:text-lg font-medium cursor-pointer w-full md:w-auto whitespace-nowrap"
              >
                SEND
              </button>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
import { FaPlay } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative flex flex-col items-center text-dark">
      <div className="w-300 h-88 relative -top-25 grid grid-cols-3">
        <div className="bg-accent px-10 py-15">
          <h2 className="font-shippori text-4xl">Education</h2>
          <h3 className="font-work font-normal text-xl mt-3.5 mb-5 text-charcoal">
            Below Poverty Line is enchmark used by the government of India economic disadvantage.
          </h3>
          <button className="bg-white w-36.5 h-16.5 rounded-4xl uppercase font-work font-medium">
            Discover
          </button>
        </div>
        <div className="bg-dark text-white px-10 py-19">
          <h2 className="font-shippori text-4xl">Become a Volunteer</h2>
          <h3 className="font-work font-normal text-xl mt-3.5 mb-5">
            Below Poverty Line is enchmark used by the government
          </h3>
          <span className="uppercase underline font-work font-medium text-lg">
            Join organization
          </span>
        </div>
        <div className="bg-primary flex items-center justify-center relative">
          <Image
            src={`/images/aboutUs-kids.jpg`}
            alt="Photo of two kids"
            fill
            className="object-cover object-bottom-right opacity-45"
          />
          <button
            id="button"
            aria-label="play button"
            className="bg-white z-2 aspect-square flex justify-center items-center rounded-full p-7"
          >
            <FaPlay size={24} aria-label="play icon" />
          </button>
        </div>
      </div>
      <div className="w-300 h-full flex gap-12">
        <div className="w-150">
          <h3 className="font-sue-ellen text-4xl text-primary mb-1">About US</h3>
          <h2 className="font-shippori font-extrabold text-[2.5rem] mb-3">
            Help People, <br />
            Our Main Goals
          </h2>
          <div className="text-xl flex flex-col gap-4 text-justify mb-4 text-neutral">
            <p>
              Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining when an unknown printer took a galley of type and scrambled it
              to make a type specimen book. essentially.
            </p>
          </div>
          <button className="uppercase w-50 h-16 bg-primary rounded-4xl text-white text-lg font-work font-medium">
            More About
          </button>
        </div>
        <div className="w-137.5 h-full bg-light py-13 px-10">
          <div className="grid grid-cols-2 mb-5.5">
            {[
              "Food Donation",
              "Water Supply",
              "Money Donation",
              "Education Donation",
              "Dress Donation",
              "Toys Donation",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 mb-4.5">
                <FaCheck
                  color="black"
                  size={27}
                  aria-label="check icon"
                  className="bg-accent overflow-hidden rounded-full p-1.5"
                />
                <span className="font-work text-xl text-neutral font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="relative font-shippori font-extrabold">
            <p className="text-2xl mb-6 ">Total Donation</p>
            <div className="w-full h-1.5 bg-mist-gray rounded-3xl" />
            <div className="w-2/3 h-1.5 bg-primary relative -top-1.5 rounded-3xl z-2" />
            <div className="flex justify-between text-xl mt-6 mb-10">
              <p>Collection - $5M</p>
              <p>Goal - $10M</p>
            </div>
          </div>
          <button className="uppercase w-50 h-16 bg-white rounded-4xl text-black text-lg font-work font-medium">
            Donate NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
