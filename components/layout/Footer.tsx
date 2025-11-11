import { JSX } from "react/jsx-dev-runtime";
import Image from "next/image";
import Link from "next/link";

import logo from "../../images/Vector_1.png";

export default function Footer(): JSX.Element {
  return (
    <footer className="text-white" style={{ backgroundColor: "#384C56" }}>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Link
                  href="/"
                  className="text-2xl text-blue-200 flex items-center space-x-2"
                  style={{ fontFamily: "var(--font-shippori-mincho)" }}
                >
                  <Image src={logo} alt="Logo" width={32} height={32} className="w-8 h-8" />
                  <span>Kind Hands</span>
                </Link>
              </div>
              <p className="text-gray-300 text-sm" style={{ fontFamily: "Work Sans, sans-serif" }}>
                Care about people to transforming their lives and exudes a positives Impressiono
                believe. fundraising NGO organizations.
              </p>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://instagram.com/"
                  className="text-white hover:text-gray-200 transition"
                >
                  {/* Instagram Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  {/* Facebook Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="text-gray-300 hover:text-white transition">
                  {/* Twitter Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>

                <a
                  href="https://pinterest.com"
                  className="text-white hover:text-gray-200 transition"
                >
                  {/* Pinterest Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Get Involved */}
            <div className="space-y-4">
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                Get Involved
              </h3>
              <ul className="space-y-2">
                {["About Us", "Volunteer", "Causes", "Projects", "Team"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-[#FF6D6D] transition"
                      style={{ fontFamily: "Work Sans, sans-serif" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility */}
            <div className="space-y-4">
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                Utility
              </h3>
              <ul className="space-y-2">
                {["Style Guide", "Licences", "Password", "404 Page", "Changelog"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-[#FF6D6D] transition"
                      style={{ fontFamily: "Work Sans, sans-serif" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                Contact
              </h3>
              <ul
                className="space-y-2 text-gray-300"
                style={{ fontFamily: "Work Sans, sans-serif" }}
              >
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
      <div className="py-8" style={{ borderTop: "1px solid #2E4049" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300" style={{ fontFamily: "Work Sans, sans-serif" }}>
            &copy; 2025 CodeEdu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
