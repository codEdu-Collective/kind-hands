import Image from "next/image";

const licenses = () => {
  return (
    <main className="w-full">
      <header className="relative h-96 md:h-205.5 flex items-center">
        <Image src="/licenses/license-banner.png" alt="hero" fill className="object-cover" />
        <div className="relative z-2 text-white ml-4 md:ml-90 max-w-full md:max-w-120 px-4 md:px-0">
          <h1 className="font-sue-ellen text-2xl md:text-5xl mb-1.5">Free Assets...</h1>
          <h2 className="font-shippori font-extrabold text-3xl md:text-[5.625rem] leading-tight">
            Licenses
          </h2>
        </div>
      </header>

      <div className="mx-auto w-full max-w-300 px-4 md:px-8 lg:px-0 my-8 md:my-37.5 flex flex-col gap-6 md:gap-12 min-h-[600px] ">
        <h1 className="font-shippori font-extrabold text-2xl md:text-4xl text-primary">
          Icons & Graphics
        </h1>
        <div className="flex flex-col gap-6 md:gap-12 ">
          <div>
            <p className="font-work text-neutral text-base md:text-xl">
              All graphical assets in this template are licensed for personal and commercial use. If
              you'd like to use a specific asset, please check the license below
            </p>
            <h2 className="font-shippori font-extrabold text-xl md:text-2xl my-3 text-dark">
              Phosphor Icons: licensed
            </h2>
          </div>
          <div>
            <h1 className="font-shippori font-extrabold text-2xl md:text-4xl my-5 leading-relaxed text-dark">
              Photography
            </h1>
            <h2 className="font-shippori font-extrabold text-2xl my-3 text-dark">
              Unsplash: licensed
            </h2>
            <p className="font-work text-neutral text-base md:text-xl">
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image
              10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18,
              Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25, Image 26, Image
              27, Image 28, Image 29, Image 30, Image 31, Image 32, Image 33, Image 34, Image 35,
              Image 36, Image 37, Image 38, Image 39, Image 40, Image 41, Image 42, Image 43
            </p>
            <h2 className="font-shippori font-extrabold text-2xl my-5 text-dark">
              Pexels: licensed
            </h2>
            <p className="font-work text-neutral text-base md:text-xl">
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image
              10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18,
              Image 19
            </p>
          </div>
          <div>
            <h1 className="font-shippori font-extrabold text-2xl md:text-4xl my-5 text-dark">
              Font
            </h1>
            <p className="font-work text-neutral text-base md:text-xl">
              Walfare template uses free licensed Google Fonts. Please check{" "}
              <a
                href="https://fonts.google.com/specimen/Shippori+Mincho"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline text-dark"
              >
                Shippori Mincho
              </a>
              ,{" "}
              <a
                href="https://fonts.google.com/specimen/Work+Sans"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline text-dark"
              >
                Work Sans
              </a>{" "}
              and{" "}
              <a
                href="https://fonts.google.com/specimen/Sue+Ellen+Francisco"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline text-dark"
              >
                Sue Ellen Francisco
              </a>
              {"."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default licenses;
