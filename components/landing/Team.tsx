import { FaFacebook, FaInstagram, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Team = () => {
  return (
    <section className="w-full min-h-auto bg-beige flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <h2 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-2 sm:mb-4">
        Team
      </h2>
      <h3 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-6 sm:mb-8 md:mb-10">
        Meet Our Volunteers
      </h3>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 text-dark dark:text-white w-full max-w-7xl">
        {["Martin Luther", "Keira Knightley", "Jack Sparrow"].map((member, index) => (
          <div
            key={index}
            className="text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-auto flex-1 lg:flex-none"
          >
            <div className="relative w-full max-w-[283px] mx-auto h-64 sm:h-80 md:h-96 lg:h-[382px]">
              <Image
                src={`/images/team-${index + 1}.jpg`}
                alt="team members"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h4 className="my-3 sm:my-4 md:my-4.5 font-shippori font-extrabold text-lg sm:text-xl">
              {member}
            </h4>
            <div className="flex justify-center gap-3 sm:gap-4">
              <FaInstagram size={16} className="sm:w-5 sm:h-5" aria-label="Instagram icon" />
              <FaFacebook size={16} className="sm:w-5 sm:h-5" aria-label="Facebook icon" />
              <FaSquareXTwitter size={16} className="sm:w-5 sm:h-5" aria-label="Twitter icon" />
              <FaPinterest size={16} className="sm:w-5 sm:h-5" aria-label="Pinterest icon" />
            </div>
          </div>
        ))}
        <div className="bg-accent dark:bg-accent-400 w-full sm:w-[calc(50%-0.75rem)] lg:w-70.5 min-h-[300px] sm:min-h-[400px] lg:h-full flex flex-col justify-center items-center text-center px-4 sm:px-4.5 py-6 sm:py-8">
          <Image
            src={`/icons/8.png`}
            width={82}
            height={82}
            alt="hand icon"
            className="bg-dark dark:bg-dark-700 p-3 sm:p-4 md:p-4.5 rounded-full mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <h4 className="font-shippori font-extrabold text-xl sm:text-2xl dark:text-dark">
            Become a Volunteer
          </h4>
          <p className="font-work text-sm sm:text-base md:text-lg lg:text-xl my-3 sm:my-4 dark:text-dark-700">
            Centuries but also the leap electtypesetting, remaining{" "}
          </p>
          <button className="uppercase w-full sm:w-40 md:w-50 h-12 sm:h-14 md:h-16 bg-dark dark:bg-dark-700 rounded-3xl sm:rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
            Join Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
