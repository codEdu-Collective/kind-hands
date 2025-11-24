import Image from "next/image"


const About = () => {
  return (
   <main className="w-full">
<header className="relative h-205.5 flex items-center">
    <Image src="/images/about/hero.png" alt="hero" fill className="object-cover" />
    <div className="relative z-2 text-white ml-90 max-w-120">
        <h1 className="font-sue-ellen text-5xl mb-1.5">
What We Do...
        </h1>
        <h2 className="font-shippori font-extrabold text-[5.625rem] leading-tight">
About Our Organization
        </h2>
    </div>
</header>

   </main>
  )
}

export default About