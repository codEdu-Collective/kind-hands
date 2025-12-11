import { Suspense } from "react";
import { LuChevronDown } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "../ThemeToogle";

import MobileMenu from "./MobileMenu";

export default function MainMenu() {
  const navLinkClass =
    "font-work text-dark dark:text-gray-200 font-medium text-lg hover:text-primary transition-colors";

  return (
    <nav className="shadow-sm border-b bg-white dark:bg-gray-900 dark:border-gray-700 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-2xl text-dark dark:text-white font-extrabold flex items-center space-x-2 font-shippori shrink-0"
          >
            <Image src={`/images/logo.png`} alt="Logo" width={32} height={32} className="w-8 h-8" />
            <span>Kind Hands</span>
          </Link>

          {/* --- Desktop Menu --- */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link href="/" className={navLinkClass}>
                Home
              </Link>
              <Link href="/about" className={navLinkClass}>
                About Us
              </Link>

              {/* Desktop Dropdown ) */}
              <div
                className={`flex items-center space-x-1 relative group cursor-pointer ${navLinkClass}`}
              >
                <span>Our Work</span>
                <LuChevronDown
                  aria-label="dropdown icon"
                  className="group-hover:rotate-180 transition-transform"
                />

                <div className="absolute top-full left-0 hidden group-hover:block w-48 pt-4">
                  <div className="bg-white dark:bg-gray-800 shadow-xl rounded-md py-2 border dark:border-gray-700">
                    <Link
                      href="/causes"
                      className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-dark dark:text-gray-200 transition-colors"
                    >
                      Causes
                    </Link>
                    <Link
                      href="/projects"
                      className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-dark dark:text-gray-200 transition-colors"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/team"
                      className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-dark dark:text-gray-200 transition-colors"
                    >
                      Team
                    </Link>
                    <Link
                      href="/volunteer"
                      className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-dark dark:text-gray-200 transition-colors"
                    >
                      Volunteer
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-dark dark:text-gray-200 transition-colors"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/event" className={navLinkClass}>
                Event
              </Link>
              <Link href="/contact" className={navLinkClass}>
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition duration-300 font-work">
                Donate
              </button>

              <Suspense fallback={<div className="w-8 h-8" />}>
                <ThemeToggle />
              </Suspense>
            </div>
          </div>

          {/* --- Mobile Theme Toggle Buttons Menu --- */}
          <div className="flex items-center gap-4 lg:hidden">
            <Suspense fallback={<div className="w-8 h-8" />}>
              <ThemeToggle />
            </Suspense>

            {/* Mobile Menu */}
            <Suspense fallback={null}>
              <MobileMenu />
            </Suspense>
          </div>
        </div>
      </div>
    </nav>
  );
}
