import {
  AboutUs,
  Hero,
  HowWeHelp,
  OurCouses,
  OurEvents,
  Subscribe,
  Team,
  Testimonal,
  WhatWeDid,
  WhatWeDo,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <main className="w-full">
        <Hero />
        <AboutUs />
        <OurCouses />
        <HowWeHelp />
        <WhatWeDo />
        <WhatWeDid />
        <Testimonal />
        <Team />
        <OurEvents />
        <Subscribe />
      </main>
    </div>
  );
}
