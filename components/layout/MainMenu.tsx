import { JSX } from "react";
import { LuChevronDown } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

export default function MainMenu(): JSX.Element {
  return (
    <nav className="shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl text-dark font-extrabold flex items-center space-x-2 font-shippori"
          >
            <Image src={`/images/logo.png`} alt="Logo" width={32} height={32} className="w-8 h-8" />
            <span>Kind Hands</span>
          </Link>

          <div className="flex items-center space-x-8">
            {/*MENU */}
            <div className="flex space-x-8">
              <Link href="/" className="font-work text-dark font-medium text-lg">
                Home
              </Link>
              <Link href="/about" className="font-work text-dark font-medium text-lg">
                About Us
              </Link>

              <Link
                href="/services"
                className="font-work text-dark font-medium text-lg flex items-center space-x-1"
              >
                <p>Pages</p>
                <LuChevronDown aria-label="dropdown icon" />
              </Link>

              <Link href="/event" className="font-work text-dark font-medium text-lg">
                Event
              </Link>
              <Link href="/contact" className="font-work text-dark font-medium text-lg">
                Contact
              </Link>
            </div>

            {/* Button */}
            <button className="font-work bg-primary text-white px-6 py-2 rounded-[3rem] font-medium radius-full opacity-100 cursor-pointer transition duration-300">
              Donate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
