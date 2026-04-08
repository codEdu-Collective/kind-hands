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
  );
}
