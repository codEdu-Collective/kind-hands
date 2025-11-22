import Image from "next/image";

const Subscribe = () => {
  return (
    <section className="w-full h-100 grid grid-cols-2">
      <div className="h-full flex flex-col justify-center px-28 bg-primary text-white">
        <h3 className="font-sue-ellen text-4xl mb-0.5">Subscribe</h3>
        <h2 className="font-shippori font-extrabold text-[2.5rem] mb-4">Newsletter</h2>
        <p className="font-work text-xl">
          Sign up for our monthly newsletter to get the latest <br /> news, volunteer opportunities,
        </p>
        <div className="flex font-work text-lg gap-5 mt-7.5">
          <div className="bg-background text-neutral py-5 pl-6.5 pr-41.5 rounded-full">
            Enter Your Email Address
          </div>
          <button className="uppercase bg-dark py-5.5 px-9 rounded-full">Send</button>
        </div>
      </div>
      <div className="h-full relative bg-accent text-dark px-27 flex flex-col justify-center">
        <Image
          src={`/images/blog-background.jpg`}
          alt="kids"
          fill
          className="object-cover opacity-5"
        />
        <h3 className="font-sue-ellen text-4xl mb-0.5">Recent Blog</h3>
        <h2 className="font-shippori font-extrabold text-[2.5rem] mb-9">
          Take Look At Recent Blog <br /> Posts
        </h2>
        <button className="uppercase bg-dark w-50 h-16 rounded-full text-white z-2 font-work text-lg">
          See Our Blogs
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
