"use client";

import { useState } from "react";

const AboutMore = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      {showMore && (
        <>
          <p className="text-base md:text-xl text-justify text-neutral mb-6">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className="text-base md:text-xl text-justify text-neutral mb-6">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from de
            Finibus Bonorum et Malorum by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </>
      )}
      <button
        onClick={() => setShowMore(!showMore)}
        className="uppercase w-50 mx-auto md:w-fit px-8 md:px-12 h-14 md:h-16 bg-dark rounded-4xl text-white text-base md:text-lg font-work font-medium cursor-pointer my-3"
      >
        {showMore ? "Show Less" : "More About"}
      </button>
    </div>
  );
};

export default AboutMore;
