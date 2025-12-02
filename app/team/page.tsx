import { FaFacebook, FaInstagram, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

const teamMembers = [
  { name: "Martin Luther", image: "/images/team-1.jpg" },
  { name: "Keira Knightley", image: "/images/team-2.jpg" },
  { name: "Jack Sparrow", image: "/images/team-3.jpg" },
  { name: "Karen Allen", image: "/images/team-4.jpg" },
  { name: "Stephen Lang", image: "/images/team-5.jpg" },
  { name: "Michelle Ray", image: "/images/team-6.jpg" },
];

const Team = () => {
  return (
    <div className="w-full">
      <section className="relative w-full h-[500px] flex flex-col justify-center items-start px-8 md:px-16 text-white overflow-hidden">
        {/* 1. layer  */}
        <Image
          src="/teams/Banner.jpg"
          alt="Background"
          fill
          className="object-cover object-bottom"
          priority
        />

        {/* 2. layer:  */}
        <div className="relative z-10 flex flex-col">
          <span className="font-sue-ellen text-4xl md:text-5xl text-gray-200 tracking-wide mb-2 opacity-90">
            Humanity Peoples...
          </span>
          <h1 className="font-shippori font-extrabold text-6xl md:text-7xl text-white drop-shadow-lg">
            Team Member
          </h1>
        </div>
      </section>

      {/* --- 2. section --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative overflow-hidden w-full aspect-3/4 mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              <h4 className="font-shippori font-extrabold text-2xl text-dark mb-3">
                {member.name}
              </h4>

              <div className="flex gap-4 text-gray-900">
                <FaInstagram
                  size={18}
                  className="hover:text-primary transition-colors cursor-pointer"
                  aria-label="Instagram"
                />
                <FaFacebook
                  size={18}
                  className="hover:text-primary transition-colors cursor-pointer"
                  aria-label="Facebook"
                />
                <FaSquareXTwitter
                  size={18}
                  className="hover:text-primary transition-colors cursor-pointer"
                  aria-label="Twitter"
                />
                <FaPinterest
                  size={18}
                  className="hover:text-primary transition-colors cursor-pointer"
                  aria-label="Pinterest"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
