import { Suspense } from "react";
import { LuChevronDown } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "../ThemeToogle";

export default function MainMenu() {
  return (
    <nav className="shadow-sm border-b bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl text-dark dark:text-white font-extrabold flex items-center space-x-2 font-shippori"
          >
            <Image src={`/images/logo.png`} alt="Logo" width={32} height={32} className="w-8 h-8" />
            <span>Kind Hands</span>
          </Link>

          <div className="flex items-center space-x-8">
            {/*MENU */}
            <div className="flex space-x-8">
              <Link href="/" className="font-work text-dark dark:text-gray-200 font-medium text-lg">
                Home
              </Link>
              <Link
                href="/about"
                className="font-work text-dark dark:text-gray-200 font-medium text-lg"
              >
                About Us
              </Link>

              <div className="font-work text-dark dark:text-gray-200 font-medium text-lg flex items-center space-x-1 relative group cursor-pointer">
                <p>Our Work</p>
                <LuChevronDown aria-label="dropdown icon" />

                <div className="absolute top-full left-0 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg z-10">
                  <Link
                    href="/causes"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-dark dark:text-gray-200"
                  >
                    Causes
                  </Link>
                  <Link
                    href="/projects"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-dark dark:text-gray-200"
                  >
                    Projects
                  </Link>
                </div>
              </div>
              <Link
                href="/event"
                className="font-work text-dark dark:text-gray-200 font-medium text-lg"
              >
                Event
              </Link>
              <Link
                href="/contact"
                className="font-work text-dark dark:text-gray-200 font-medium text-lg"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="font-work bg-primary text-white px-6 py-2 rounded-[3rem] font-medium radius-full opacity-100 cursor-pointer transition duration-300 hover:bg-primary-600">
                Donate
              </button>
              <Suspense>
                <ThemeToggle />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
