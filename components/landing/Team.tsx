import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Image from "next/image";

const Team = () => {
  return (
    <section className="w-full min-h-217.5 bg-beige flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="font-sue-ellen text-2xl sm:text-3xl md:text-4xl text-primary mb-2">
        Team
      </h2>
      <h3 className="font-shippori font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] text-center mb-6 sm:mb-8 md:mb-10">
        Meet Our Volunteers
      </h3>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-6 sm:mt-8 md:mt-10 text-dark dark:text-white w-full max-w-300">
        {["Martin Luther", "Keira Knightley", "Jack Sparrow"].map(
          (member, index) => (
            <div
              key={index}
              className="text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-auto"
            >
              <div className="relative w-full sm:w-auto mx-auto max-w-[283px]">
                <Image
                  src={`/images/team-${index + 1}.jpg`}
                  alt="team members"
                  width={283}
                  height={382}
                  className="object-cover w-full h-auto"
                />
              </div>
              <h4 className="my-3 sm:my-4 md:my-4.5 font-shippori font-extrabold text-base sm:text-lg md:text-xl dark:text-white">
                {member}
              </h4>
              <div className="flex justify-center gap-3 sm:gap-4 text-dark dark:text-white">
                <FaInstagram size={18} aria-label="Instagram icon" />
                <FaFacebook size={18} aria-label="Facebook icon" />
                <FaSquareXTwitter size={18} aria-label="Twitter icon" />
                <FaPinterest size={18} aria-label="Pinterest icon" />
              </div>
            </div>
          )
        )}
        <div className="bg-accent w-full sm:w-[calc(50%-0.75rem)] lg:w-70.5 min-h-[300px] sm:min-h-0 sm:h-full flex flex-col justify-center items-center text-center px-4 sm:px-4.5 py-8 sm:py-0">
          <Image
            src={`/icons/8.png`}
            width={82}
            height={82}
            alt="hand icon"
            className="bg-dark p-3 sm:p-4 md:p-4.5 rounded-full mb-4"
          />
          <h4 className="font-shippori font-extrabold text-lg sm:text-xl md:text-2xl">
            Become a Volunteer
          </h4>
          <p className="font-work text-sm sm:text-base md:text-lg lg:text-xl my-3 sm:my-4">
            Centuries but also the leap electtypesetting, remaining{" "}
          </p>
          <button className="uppercase w-full sm:w-50 h-12 sm:h-14 md:h-16 bg-dark rounded-4xl text-white text-sm sm:text-base md:text-lg font-work font-medium">
            Join Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
