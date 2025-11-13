import { JSX } from "react";

import AboutUs from "@/components/landing/AboutUs";
import Hero from "@/components/landing/Hero";
import HowWeHelp from "@/components/landing/HowWeHelp";
import OurCouses from "@/components/landing/OurCouses";
import OurEvents from "@/components/landing/OurEvents";
import Subscribe from "@/components/landing/Subscribe";
import Team from "@/components/landing/Team";
import Testimonal from "@/components/landing/Testimonal";
import WhatWeDid from "@/components/landing/WhatWeDid";
import WhatWeDo from "@/components/landing/WhatWeDo";

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="">
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
