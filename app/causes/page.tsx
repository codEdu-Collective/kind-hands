import { JSX } from "react";
import Image from "next/image";

import CausesCards from "@/components/causes/CausesCards";

const Causes = (): JSX.Element => {
  return (
    <>
      {" "}
      <section className="relative h-96 w-full bg-gray-100">
        <Image
          src="/images/causes-5.jpg"
          alt="Causes Image"
          fill
          className="object-cover"
          priority
        />
      </section>
      <div>
        <CausesCards />
      </div>
    </>
  );
};

export default Causes;
