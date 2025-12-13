import Image from "next/image";

import CausesCards from "@/components/causes/CausesCards";

const Causes = () => {
  return (
    <>
      <section className="relative w-full h-125 lg:h-162.5lex items-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/causes-5.jpg"
            alt="Causes Image"
            fill
            className="object-cover brightness-90"
            priority
          />
        </div>
      </section>
      <div>
        <CausesCards />
      </div>
    </>
  );
};

export default Causes;
