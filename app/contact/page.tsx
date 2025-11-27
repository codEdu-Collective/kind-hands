import { BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section className="relative h-64 md:h-80 lg:h-96 w-full bg-light">
        <Image
          src="/images/contact-us-banner.jpg"
          alt="Causes Image"
          fill
          className="object-cover"
        />
      </section>

      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24">
          {/* --- LEFT SIDE (Contact Information) --- */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="text-primary font-medium text-lg mb-2 font-sue-ellen">Contact</span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem] font-shippori font-extrabold text-dark mb-6 leading-tight">
              Get in Touch With Us
            </h2>

            <p className="text-dark-800 mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting dummy text ever since
              the 1500s, when an unknown printer took a galley of type.
            </p>

            {/* Contact Boxes */}
            <div className="space-y-6 mb-10 flex flex-col items-center lg:items-start">
              <div className="flex items-center lg:items-start gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-light flex items-center justify-center text-primary shrink-0 rounded-md transition-transform hover:scale-105">
                  <BsMailbox className="text-xl md:text-2xl" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-dark text-lg">Message</h4>
                  <p className="text-neutral-500 text-sm md:text-base">support@walfare.com</p>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-center lg:items-start gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-light flex items-center justify-center text-primary shrink-0 rounded-md transition-transform hover:scale-105">
                  <BiPhone className="text-xl md:text-2xl" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-dark text-lg">Contact Us</h4>
                  <p className="text-neutral-500 text-sm md:text-base">+01 (000) 265 458</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="font-shippori font-bold text-xl md:text-2xl text-dark mb-4">
                Follow us on social media
              </h3>
              <p className="text-neutral-500 mb-6 text-sm md:text-base text-center lg:text-left max-w-md lg:max-w-none">
                Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
              </p>
              <div className="flex gap-6 text-dark-600">
                <a
                  href="https://instagram.com"
                  className="hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  className="hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"
                >
                  <FaSquareXTwitter size={24} />
                </a>
                <a
                  href="https://pinterest.com"
                  className="hover:text-primary transition-colors transform hover:-translate-y-1 duration-300"
                >
                  <FaPinterest size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE (FORM) --- */}
          <div className="bg-white p-6 md:p-8 lg:p-10 border border-light-200 shadow-lg rounded-2xl h-fit">
            <form className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name*"
                  className="w-full bg-light-50 px-4 py-3 md:px-6 md:py-4 rounded-lg outline-none border border-transparent focus:border-primary/20 focus:ring-1 focus:ring-primary placeholder-neutral-400 text-dark text-sm md:text-base transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full bg-light-50 px-4 py-3 md:px-6 md:py-4 rounded-lg outline-none border border-transparent focus:border-primary/20 focus:ring-1 focus:ring-primary placeholder-neutral-400 text-dark text-sm md:text-base transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full bg-light-50 px-4 py-3 md:px-6 md:py-4 rounded-lg outline-none border border-transparent focus:border-primary/20 focus:ring-1 focus:ring-primary placeholder-neutral-400 text-dark text-sm md:text-base transition-all"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message*"
                  className="w-full bg-light-50 px-4 py-3 md:px-6 md:py-4 rounded-lg outline-none border border-transparent focus:border-primary/20 focus:ring-1 focus:ring-primary placeholder-neutral-400 text-dark text-sm md:text-base resize-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-dark text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-dark-800 transition-colors shadow-lg hover:shadow-xl active:scale-95 duration-200"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
