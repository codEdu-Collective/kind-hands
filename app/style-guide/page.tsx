import {
  FaBaby,
  FaBowlFood,
  FaCapsules,
  FaGlobe,
  FaGraduationCap,
  FaHandHolding,
  FaQuoteLeft,
} from "react-icons/fa6";
import Image from "next/image";

const StyleGuidePage = () => {
  return (
    <main className="w-full">
      <header className="relative h-96 md:h-205.5 flex items-center">
        <Image
          src="/style-guide/style-guide-banner.png"
          alt="hero"
          fill
          className="object-cover"
        />
        <div className="z-10 text-white ml-4 md:ml-90 max-w-full md:max-w-180 px-4 md:px-0">
          <h1 className="font-sue-ellen text-2xl md:text-4xl lg:text-5xl mb-1.5">
            Humanity Assets...
          </h1>
          <h2 className="font-shippori font-extrabold text-3xl md:text-5xl lg:text-[5.625rem] leading-tight ">
            Style Guide
          </h2>
        </div>
      </header>
      <section className="container mx-auto px-4 md:px-6 lg:px-0 my-8 md:my-20 lg:my-37.5 flex flex-col gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-3xl lg:text-4xl text-primary mb-6">
            Color
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            <div className="flex flex-row items-center gap-3 md:gap-4 border border-gray-200 p-2 md:p-2.5 lg:p-2 w-full lg:w-88 h-auto lg:h-28">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-primary shadow-sm shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-semibold text-dark">
                  Primary - 01
                </p>
                <p className="text-[10px] md:text-xs text-neutral">#FF6D6D</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 md:gap-4 border border-gray-200 p-2 md:p-2.5 lg:p-2 w-full lg:w-88 h-auto lg:h-28">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-accent shadow-sm shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-semibold text-dark">
                  Color - Accent
                </p>
                <p className="text-[10px] md:text-xs text-neutral">#77D7D3</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 md:gap-4 border border-gray-200 p-2 md:p-2.5 lg:p-2 w-full lg:w-88 h-auto lg:h-28">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-dark shadow-sm shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-semibold text-dark">
                  Color - Dark
                </p>
                <p className="text-[10px] md:text-xs text-neutral">#2E4049</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 md:gap-4 border border-gray-200 p-2 md:p-2.5 lg:p-2 w-full lg:w-88 h-auto lg:h-28">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-neutral shadow-sm border border-gray-200 shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-semibold text-dark">
                  Color - Neutral
                </p>
                <p className="text-[10px] md:text-xs text-neutral">#727272</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 md:gap-4 border border-gray-200 p-2 md:p-2.5 lg:p-2 w-full lg:w-88 h-auto lg:h-28">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-light shadow-sm border border-gray-200 shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-semibold text-dark">
                  Color - Light
                </p>
                <p className="text-[10px] md:text-xs text-neutral">#ECF1F0</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 md:gap-4 border border-gray-200 p-2 md:p-2.5 lg:p-2 w-full lg:w-88 h-auto lg:h-28">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-beige shadow-sm border border-gray-200 shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-semibold text-dark">
                  Color - Beige
                </p>
                <p className="text-[10px] md:text-xs text-neutral">#F1EEEC</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 md:gap-4 border border-gray-200 p-2 md:p-2.5 lg:p-2 w-full lg:w-88 h-auto lg:h-28">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-navy shadow-sm shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-semibold text-dark">
                  Color - Navy
                </p>
                <p className="text-[10px] md:text-xs text-neutral">#1A2B3C</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 md:gap-4 border border-gray-200 p-2 md:p-2.5 lg:p-2 w-full lg:w-88 h-auto lg:h-28">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-white shadow-sm border border-gray-200 shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-semibold text-dark">
                  Color - White
                </p>
                <p className="text-[10px] md:text-xs text-neutral">#FFFFFF</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-3xl lg:text-4xl text-primary mb-6">
            Text
          </h1>
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-[70px]">
            <div>
              <h1 className="font-shippori font-extrabold text-4xl md:text-6xl lg:text-7xl text-dark">
                Heading Banner
              </h1>
            </div>

            <div>
              <h1 className="font-shippori font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark">
                Heading H1
              </h1>
            </div>

            <div>
              <h2 className="font-shippori font-bold text-2xl md:text-3xl lg:text-4xl text-dark">
                Heading H2
              </h2>
            </div>

            <div>
              <h3 className="font-shippori font-bold text-xl md:text-2xl lg:text-3xl text-dark">
                Heading H3
              </h3>
            </div>

            <div>
              <h4 className="font-shippori font-bold text-lg md:text-xl lg:text-2xl text-dark">
                Heading H4
              </h4>
            </div>

            <div>
              <h5 className="font-shippori font-bold text-base md:text-lg lg:text-xl text-dark">
                Heading H5
              </h5>
            </div>

            <div>
              <h6 className="font-shippori font-bold text-sm md:text-base lg:text-lg text-dark">
                Heading H6
              </h6>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-3xl lg:text-4xl text-primary mb-6">
            Paragraph
          </h1>
          <div className="flex flex-col gap-4">
            <p className="font-work text-lg font-semibold text-dark">
              Paragraph
            </p>
            <p className="font-work text-base text-neutral leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="font-work text-base text-neutral leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-3xl lg:text-4xl text-dark mb-6">
            Lists
          </h1>
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2 font-work text-base text-neutral">
                <li>Neque sodales ut etiam</li>
                <li>Neque sodales ut etiam</li>
                <li>Neque sodales ut etiam</li>
                <li>Neque sodales ut etiam</li>
              </ol>
            </div>

            <div className="flex-1">
              <ul className="list-disc list-inside space-y-2 font-work text-base text-neutral">
                <li>Efficiently myoscardinate</li>
                <li>Efficiently myoscardinate</li>
                <li>Efficiently myoscardinate</li>
                <li>Efficiently myoscardinate</li>
                <li>Efficiently myoscardinate</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-3xl lg:text-4xl text-dark mb-6">
            Quotes
          </h1>
          <div className="bg-primary p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center rounded-lg">
            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
              <FaQuoteLeft className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />
            </div>
            <p className="font-work italic text-base md:text-lg lg:text-2xl text-white max-w-full md:max-w-3xl lg:max-w-180 text-center leading-7 md:leading-8 lg:leading-10 px-4 md:px-6 lg:px-0">
              Veniam quae Nostrum facere repellendus minus quod aut aliquam
              neque reiciendis. Qui beatae vel magnam ipsum repudiandae.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-3xl lg:text-4xl text-primary mb-6">
            Button
          </h1>
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <button className="px-4 py-2.5 md:p-4 bg-primary text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                SMALL
              </button>
              <button className="px-5 py-2.5 md:p-4 bg-primary text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                BUTTON TEXT
              </button>
              <button className="px-5 py-2.5 md:p-4 bg-primary text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                BUTTON TEXT
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <button className="px-4 py-2.5 md:p-4 bg-dark text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                SMALL
              </button>
              <button className="px-5 py-2.5 md:p-4 bg-dark text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                BUTTON TEXT
              </button>
              <button className="px-5 py-2.5 md:p-4 bg-dark text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                BUTTON TEXT
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <button className="px-4 py-2.5 md:p-4 bg-white text-dark border-2 border-dark rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                SMALL
              </button>
              <button className="px-5 py-2.5 md:p-4 bg-white text-dark border-2 border-dark rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                BUTTON TEXT
              </button>
              <button className="px-5 py-2.5 md:p-4 bg-white text-dark border-2 border-dark rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                BUTTON TEXT
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray w-full h-auto md:h-91 py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-0 max-w-7xl">
          <h1 className="font-shippori font-extrabold text-2xl md:text-3xl lg:text-4xl text-dark mb-6">
            Icon
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[64px] lg:h-[64px] flex items-center justify-center text-primary">
              <FaCapsules className="w-full h-full" />
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[64px] lg:h-[64px] flex items-center justify-center text-primary">
              <FaHandHolding className="w-full h-full" />
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[64px] lg:h-[64px] flex items-center justify-center text-primary">
              <FaBaby className="w-full h-full" />
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[64px] lg:h-[64px] flex items-center justify-center text-primary">
              <FaBowlFood className="w-full h-full" />
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[64px] lg:h-[64px] flex items-center justify-center text-primary">
              <FaGlobe className="w-full h-full" />
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[64px] lg:h-[64px] flex items-center justify-center text-primary">
              <FaGraduationCap className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StyleGuidePage;
