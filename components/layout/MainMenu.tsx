import { JSX } from "react/jsx-dev-runtime";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import logo from "../../images/Vector_1.png";

export default function MainMenu(): JSX.Element {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl text-blue-200 flex items-center space-x-2"
            style={{ fontFamily: "var(--font-shippori-mincho)" }}
          >
            <Image src={logo} alt="Logo" width={32} height={32} className="w-8 h-8" />
            <span>Kind Hands</span>
          </Link>

          <div className="flex items-center space-x-8">
            {/*MENU */}
            <div className="flex space-x-8">
              <Link
                href="/"
                className=" font-medium text-lg"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  color: "#2E4049",
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                className=" font-medium text-lg"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  color: "#2E4049",
                }}
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="font-medium text-lg flex items-center space-x-1"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  color: "#2E4049",
                }}
              >
                <p>Pages</p>
                <ChevronDown />
              </Link>

              <Link
                href="/contact"
                className=" font-medium text-lg"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  color: "#2E4049",
                }}
              >
                Event
              </Link>
              <Link
                href="/contact"
                className="font-medium text-lg"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  color: "#2E4049",
                }}
              >
                Contact
              </Link>
            </div>

            {/* Button */}
            <button
              className=" text-white px-6 py-2 rounded-[50px]  font-medium radius-full opacity-100 cursor-pointer transition duration-300"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                backgroundColor: "#FF6D6D",
              }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
