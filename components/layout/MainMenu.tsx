"use client";

import { Suspense, useState } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "../ThemeToogle";

export default function MainMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

  const navLinkClass =
    "font-work text-dark dark:text-gray-200 font-medium text-lg hover:text-primary transition-colors";
  const mobileLinkClass =
    "block font-work text-dark dark:text-gray-100 font-medium text-lg py-2 border-b border-gray-100 dark:border-gray-800";
  const mobileSubLinkClass =
    "block font-work text-gray-600 dark:text-gray-400 py-2 hover:text-primary text-base";

  return (
    <nav className="shadow-sm border-b bg-white dark:bg-gray-900 dark:border-gray-700 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* --- LOGO --- */}
          <Link
            href="/"
            className="text-2xl text-dark dark:text-white font-extrabold flex items-center space-x-2 font-shippori shrink-0"
          >
            <Image src={`/images/logo.png`} alt="Logo" width={32} height={32} className="w-8 h-8" />
            <span>Kind Hands</span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link href="/" className={navLinkClass}>
                Home
              </Link>
              <Link href="/about" className={navLinkClass}>
                About Us
              </Link>

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
              <Suspense>
                <ThemeToggle />
              </Suspense>
            </div>
          </div>

          {/* --- MOBILE TOGGLE BUTTONS --- */}
          <div className="flex items-center gap-4 lg:hidden">
            <Suspense>
              <ThemeToggle />
            </Suspense>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark dark:text-white p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 absolute w-full left-0 top-20 shadow-lg px-4 py-6 flex flex-col space-y-4 h-[calc(100vh-5rem)] overflow-y-auto">
          <Link href="/" className={mobileLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link
            href="/about"
            className={mobileLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Submenu */}
          <div>
            <button
              onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)}
              className={`${mobileLinkClass} flex justify-between items-center w-full focus:outline-none`}
            >
              <span>Our Work</span>
              <LuChevronDown
                className={`transition-transform duration-300 ${
                  isMobileSubMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileSubMenuOpen && (
              <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-gray-100 dark:border-gray-700 ml-2">
                <Link
                  href="/causes"
                  className={mobileSubLinkClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Causes
                </Link>
                <Link
                  href="/projects"
                  className={mobileSubLinkClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className={mobileSubLinkClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/event"
            className={mobileLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Event
          </Link>
          <Link
            href="/contact"
            className={mobileLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-4 pb-10">
            <button className="w-full bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition duration-300 font-work">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
