import Image from "next/image";

export default function NotFound() {
  return (
    <main className="w-full">
      <header className="relative h-96 md:h-205.5 flex items-center">
        <Image src="/images/not-found-banner.png" alt="hero" fill className="object-cover" />
        <div className="relative z-2 text-white ml-4 md:mx-auto max-w-full md:max-w-200 px-4 md:px-0 text-center md:text-left">
          <h1 className="font-sue-ellen text-5xl md:text-9xl mb-1.5 text-primary">404</h1>
          <h2 className="font-shippori font-extrabold text-3xl md:text-[5.625rem] leading-tight">
            Page Not Found
          </h2>
          <p className="font-work my-4 text-lg md:text-xl mb-8 max-w-md">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
        </div>
      </header>
    </main>
  );
}
