import Image from "next/image";

const Subscribe = () => {
  return (
    <section className="w-full min-h-100 grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full min-h-[300px] lg:min-h-100 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 bg-primary text-white py-12 lg:py-0">
        <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl mb-0.5">Subscribe</h3>
        <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-4">
          Newsletter
        </h2>
        <p className="font-work text-base sm:text-lg md:text-xl mb-6">
          Sign up for our monthly newsletter to get the latest <br className="hidden sm:block" />{" "}
          news, volunteer opportunities,
        </p>
        <div className="flex flex-col sm:flex-row font-work text-sm sm:text-base md:text-lg gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-7.5">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="bg-background text-neutral py-3 sm:py-4 md:py-5 pl-4 sm:pl-5 md:pl-6.5 pr-4 sm:pr-8 md:pr-41.5 rounded-full flex-1 outline-none"
          />
          <button className="uppercase bg-dark py-3 sm:py-4 md:py-5.5 px-6 sm:px-7 md:px-9 rounded-full whitespace-nowrap">
            Send
          </button>
        </div>
      </div>
      <div className="h-full min-h-[300px] lg:min-h-100 relative bg-accent text-dark px-6 sm:px-12 md:px-20 lg:px-27 flex flex-col justify-center py-12 lg:py-0">
        <Image
          src={`/images/blog-background.jpg`}
          alt="kids"
          fill
          className="object-cover opacity-5"
        />
        <div className="relative z-10">
          <h3 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl mb-0.5">Recent Blog</h3>
          <h2 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-6 sm:mb-8 md:mb-9">
            Take Look At Recent Blog <br className="hidden sm:block" /> Posts
          </h2>
          <button className="uppercase bg-dark w-full sm:w-50 h-12 sm:h-14 md:h-16 rounded-full text-white z-2 font-work text-sm sm:text-base md:text-lg">
            See Our Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
