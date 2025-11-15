import { JSX } from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="text-white bg-dark">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#384C56]">
            <div className="space-y-4 bg-dark">
              <div className="flex items-center space-x-2">
                <Link
                  href="/"
                  className="text-2xl text-blue-200 flex items-center space-x-2 font-shippori"
                >
                  <Image
                    src={`/images/logo.png`}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span>Kind Hands</span>
                </Link>
              </div>
              <p className="text-white text-sm font-work">
                Care about people to transforming their lives and exudes a positives Impressiono
                believe. fundraising NGO organizations.
              </p>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://instagram.com/"
                  className="text-white hover:text-gray-200 transition"
                >
                  {/* Instagram Icon */}
                  <FaInstagram size={24} />
                </a>
                <a href="https://facebook.com" className="text-white hover:text-white transition">
                  {/* Facebook Icon */}
                  <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" className="text-white hover:text-white transition">
                  {/* Twitter Icon */}
                  <FaSquareXTwitter size={24} />
                </a>

                <a
                  href="https://pinterest.com"
                  className="text-white hover:text-gray-200 transition"
                >
                  {/* Pinterest Icon */}
                  <FaPinterest size={24} />
                </a>
              </div>
            </div>

            {/* Get Involved */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-shippori">Get Involved</h3>
              <ul className="space-y-2">
                {["About Us", "Volunteer", "Causes", "Projects", "Team"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white hover:text-primary transition font-work"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-shippori">Utility</h3>
              <ul className="space-y-2">
                {["Style Guide", "Licences", "Password", "404 Page", "Changelog"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white hover:text-primary transition font-work"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-shippori">Contact</h3>
              <ul className="space-y-2 text-white font-work">
                <li>1234 Street Name</li>
                <li>City, AA 99999</li>
                <li className="pt-2">Email: info@humanity.org</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Fax: +1 (555) 123-4568</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*  Copyright */}
      <div className="py-8 border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-work">&copy; 2025 CodeEdu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
