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
        <div className=" relative z-2 text-white ml-4 md:ml-90 max-w-full md:max-w-180 px-4 md:px-0">
          <h1 className="font-sue-ellen text-2xl md:text-5xl mb-1.5">
            Humanity Assets
          </h1>
          <h2 className="font-shippori font-extrabold text-3xl md:text-[5.625rem] leading-tight ">
            Style Guide
          </h2>
        </div>
      </header>
      <section className="container mx-auto px-4 md:px-0 my-8 md:my-37.5 flex flex-col gap-8 md:gap-16 w-full max-w-7xl">
        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-4xl text-primary mb-6">
            Color
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="w-24 h-24 bg-primary rounded-lg shadow-sm shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-dark">Primary - 01</p>
                <p className="text-xs text-neutral">#FF6D6D</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="w-24 h-24 bg-accent rounded-lg shadow-sm shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-dark">Primary - 01</p>
                <p className="text-xs text-neutral">#77D7D3</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="w-24 h-24 bg-dark rounded-lg shadow-sm shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-dark">Primary - 01</p>
                <p className="text-xs text-neutral">#2E4049</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="w-24 h-24 bg-beige rounded-lg shadow-sm border border-gray-200 shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-dark">Primary - 01</p>
                <p className="text-xs text-neutral">#F1EEEC</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="w-24 h-24 bg-light rounded-lg shadow-sm border border-gray-200 shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-dark">Primary - 01</p>
                <p className="text-xs text-neutral">#ECF1F0</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="w-24 h-24 bg-gray rounded-lg shadow-sm border border-gray-200 shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-dark">Primary - 01</p>
                <p className="text-xs text-neutral">#F2F2F2</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="w-24 h-24 bg-neutral rounded-lg shadow-sm shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-dark">Primary - 01</p>
                <p className="text-xs text-neutral">#727272</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm border border-gray-200 shrink-0"></div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-dark">Primary - 01</p>
                <p className="text-xs text-neutral">#FFFFFF</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-4xl text-primary mb-6">
            Text
          </h1>
          <div className="flex flex-col gap-6">
            <div>

              <h1 className="font-shippori font-extrabold text-5xl md:text-7xl text-dark">
                Heading Banner
              </h1>
            </div>

            <div>

              <h1 className="font-shippori font-extrabold text-4xl md:text-5xl text-dark">
                Heading H1
              </h1>
            </div>

            <div>

              <h2 className="font-shippori font-bold text-3xl md:text-4xl text-dark">
                Heading H2
              </h2>
            </div>

            <div>

              <h3 className="font-shippori font-bold text-2xl md:text-3xl text-dark">
                Heading H3
              </h3>
            </div>

            <div>

              <h4 className="font-shippori font-bold text-xl md:text-2xl text-dark">
                Heading H4
              </h4>
            </div>

            <div>
     
              <h5 className="font-shippori font-bold text-lg md:text-xl text-dark">
                Heading H5
              </h5>
            </div>

            <div>

              <h6 className="font-shippori font-bold text-base md:text-lg text-dark">
                Heading H6
              </h6>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-4xl text-primary mb-6">
            Paragraph
          </h1>
          <div className="flex flex-col gap-4">
            <p className="font-work text-lg font-semibold text-dark">Para</p>
            <p className="font-work text-base text-dark leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="font-work text-base text-dark leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-4xl text-dark mb-6">
            Lists
          </h1>
          <div className="flex flex-col gap-8">
            <div className="flex-1">
              <ol className="list-decimal list-inside space-y-2 font-work text-base text-dark">
                <li>Neque sodales ut etiam</li>
                <li>Neque sodales ut etiam</li>
                <li>Neque sodales ut etiam</li>
                <li>Neque sodales ut etiam</li>
              </ol>
            </div>

            <div className="flex-1">
              <ul className="list-disc list-inside space-y-2 font-work text-base text-dark">
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
          <h1 className="font-shippori font-extrabold text-2xl md:text-4xl text-dark mb-6">
            Quotes
          </h1>
          <div className="bg-primary rounded-lg p-8 md:p-12 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
              <span className="text-black text-4xl md:text-5xl font-bold">
                "
              </span>
            </div>
            <p className="font-work text-lg md:text-xl text-white max-w-3xl text-left leading-relaxed">
              Veniam quae Nostrum facere repellendus minus quod aut aliquam
              neque reiciendis. Qui beatae vel magnam ipsum repudiandae.
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-shippori font-extrabold text-2xl md:text-4xl text-dark mb-6">
            Button
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                SMALL
              </button>
              <button className="px-8 py-3 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                BUTTON TEXT
              </button>
              <button className="px-8 py-3 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                BUTTON TEXT
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-4 py-2 bg-dark text-white rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                SMALL
              </button>
              <button className="px-8 py-3 bg-dark text-white rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                BUTTON TEXT
              </button>
              <button className="px-8 py-3 bg-dark text-white rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                BUTTON TEXT
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-4 py-2 bg-white text-dark border-2 border-neutral rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                SMALL
              </button>
              <button className="px-8 py-3 bg-white text-dark border-2 border-neutral rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                BUTTON TEXT
              </button>
              <button className="px-8 py-3 bg-white text-dark border-2 border-neutral rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                BUTTON TEXT
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-neutral-100 w-full h-auto md:h-91 py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="font-shippori font-extrabold text-2xl md:text-4xl text-primary">
            Icon
          </h1>
        </div>
      </div>
    </main>
  );
};

export default StyleGuidePage;
