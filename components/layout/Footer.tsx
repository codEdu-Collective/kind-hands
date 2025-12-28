import { FaFacebook, FaInstagram, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const involvedLinks = ["About", "Volunteer", "Causes", "Projects", "Team"];
  const utilityLinks = ["Style Guide", "Licenses", "FAQ", "Not Found"];

  return (
    <footer className="bg-dark text-white">
      <div className="w-full pt-16 lg:pt-28 pb-10">
        <section className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-12">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo.png"
                width={21}
                height={44}
                alt="Kind Hands Logo"
                className="w-auto h-10 md:h-11"
              />
              <span className="font-shippori font-extrabold text-3xl md:text-4xl">Kind Hands</span>
            </Link>

            <p className="font-work text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0">
              Care about people to transforming their lives and exudes a positives Impressiono
              believe. fundraising NGO organizations.
            </p>

            <div className="flex gap-4">
              {[FaInstagram, FaFacebook, FaSquareXTwitter, FaPinterest].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-steel hover:bg-primary transition-colors duration-300 p-3 md:p-4 rounded-full group"
                  aria-label="Social Media Link"
                >
                  <Icon size={24} className="text-white group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* --- SAĞ TARA (Linkler & İletişim - Gri Kutu) --- */}
          {/* - lg:w-8/12 -> Ekranın 3'te 2'si
            - bg-steel (Senin tema rengin)
            - Grid yapısı: Mobilde tek kolon, Tablette 2, Masaüstünde 3 kolon
          */}
          <div className="w-full lg:w-8/12 bg-steel rounded-2xl p-8 md:p-12 lg:p-14">
            <div className="grid grid-cols-1 sm:grid-cols-3  gap-8">
              {/* Kolon 1: Get Involved */}
              <div className="text-center sm:text-left">
                <h2 className="font-shippori font-bold text-2xl mb-6 text-white">Get Involved</h2>
                <ul className="space-y-4">
                  {involvedLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="font-work text-lg text-gray-300 hover:text-primary transition-colors inline-block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kolon 2: Utility */}
              <div className="text-center sm:text-left">
                <h2 className="font-shippori font-bold text-2xl mb-6 text-white">Utility</h2>
                <ul className="space-y-4">
                  {utilityLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="font-work text-lg text-gray-300 hover:text-primary transition-colors inline-block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kolon 3: Contact */}
              <div className="text-center sm:text-left">
                <h2 className="font-shippori font-bold text-2xl mb-6 text-white">Contact</h2>
                <div className="space-y-4 font-work text-lg text-gray-300">
                  <p>
                    660 Brooklyn Street, 88
                    <br />
                    New York, USA
                  </p>
                  <p>
                    <a
                      href="mailto:help@walfare.com"
                      className="hover:text-primary transition-colors block"
                    >
                      help@walfare.com
                    </a>
                    <a
                      href="tel:+12228880000"
                      className="hover:text-primary transition-colors block mt-1"
                    >
                      +1 222 888 0000
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-dark text-white font-inter text-sm md:text-base text-center border-t border-cool-slate/20">
        <p className="py-6">&copy; 2025 CodeEdu. All rights reserved.</p>
      </div>
    </footer>
  );
}
