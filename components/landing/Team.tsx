import { FaFacebook, FaInstagram, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Team = () => {
  return (
    <section className="w-full h-217.5 bg-beige flex flex-col justify-center items-center">
      <h2 className="font-sue-ellen text-4xl text-primary">Team</h2>
      <h3 className="font-shippori font-extrabold text-[2.5rem]">Meet Our Volunteers</h3>
      <div className="flex gap-6 mt-10 text-dark dark:text-white">
        {["Martin Luther", "Keira Knightley", "Jack Sparrow"].map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={`/images/team-${index + 1}.jpg`}
              alt="team members"
              width={283}
              height={382}
              className="object-cover"
            />
            <h4 className="my-4.5 font-shippori font-extrabold text-xl dark:text-white">{member}</h4>
            <div className="flex justify-center gap-4 text-dark dark:text-white">
              <FaInstagram size={18} aria-label="Instagram icon" />
              <FaFacebook size={18} aria-label="Facebook icon" />
              <FaSquareXTwitter size={18} aria-label="Twitter icon" />
              <FaPinterest size={18} aria-label="Pinterest icon" />
            </div>
          </div>
        ))}
        <div className="bg-accent w-70.5 h-full flex flex-col justify-center items-center text-center px-4.5">
          <Image
            src={`/icons/8.png`}
            width={82}
            height={82}
            alt="hand icon"
            className="bg-dark p-4.5 rounded-full mb-4"
          />
          <h4 className="font-shippori font-extrabold text-2xl">Become a Volunteer</h4>
          <p className="font-work text-xl my-4">
            Centuries but also the leap electtypesetting, remaining{" "}
          </p>
          <button className="uppercase w-50 h-16 bg-dark rounded-4xl text-white text-lg font-work font-medium">
            Join Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
