import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Home = () => {
  return (
    <main className="w-full">
      <header className="h-205.5 relative flex items-center">
        <Image
          src={`/teams/banner.jpg`}
          alt="hero image"
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // ToDO: Responsive sizes
          className="object-cover"
        />
        <div className="relative z-2 text-white ml-90">
          <h1 className="font-sue-ellen text-5xl mb-1.5">
            Humanity Peoples...
          </h1>
          <h2 className="font-shippori font-extrabold text-[5.625rem]">
            Team Member
          </h2>
        </div>
      </header>
      <section className="flex justify-center">
        <div className="grid grid-cols-3 gap-x-8 gap-y-11 mt-37.5 mb-25">
          {[
            "Martin Luther",
            "Keira Knightley",
            "Jack Sparrow",
            "Karen Allen",
            "Stephen Lang",
            "Michelle Ray",
          ].map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={`/images/team-${index + 1}.jpg`}
                alt="team members"
                width={283}
                height={382}
                className="object-cover"
              />
              <h4 className="my-4.5 font-shippori font-extrabold text-xl">
                {member}
              </h4>
              <div className="flex justify-center gap-4">
                <FaInstagram size={18} aria-label="Instagram icon" />
                <FaFacebook size={18} aria-label="Facebook icon" />
                <FaSquareXTwitter size={18} aria-label="Twitter icon" />
                <FaPinterest size={18} aria-label="Pinterest icon" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="h-137 relative flex justify-center items-center">
        <Image
          src={`/teams/Volunteer.jpg`}
          alt="hero image"
          fill
          className="object-cover"
        />
        <div className="relative z-2 text-white text-center w-193">
          <h1 className="font-sue-ellen text-4xl">Become Volunteer</h1>
          <h2 className="font-shippori font-extrabold text-[2.5rem] mt-0.5 mb-4">
            Join Our Organization
          </h2>
          <h3 className="font-work text-xl">
            Save the Children believes every child deserves a future. In the
            U.S. and around the world, we give children a healthy start in life.
          </h3>
          <button className="font-work text-lg bg-dark w-49 h-16 rounded-full mt-10">
            Join Us Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
