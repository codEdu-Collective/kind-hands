"use client";

import { useState } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import Link from "next/link";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

  const mobileLinkClass =
    "block font-work text-dark dark:text-gray-100 font-medium text-lg py-2 border-b border-gray-100 dark:border-gray-800";
  const mobileSubLinkClass =
    "block font-work text-gray-600 dark:text-white py-2 hover:text-primary text-base";

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="text-dark dark:text-white p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 absolute w-full left-0 top-20 shadow-lg px-4 py-6 flex flex-col space-y-4 h-[calc(100vh-5rem)] overflow-y-auto z-50">
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

          {/* Mobile Dropdown */}
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
                <Link
                  href="/volunteer"
                  className={mobileSubLinkClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Volunteer
                </Link>
                <Link
                  href="/blog"
                  className={mobileSubLinkClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/faq"
                  className={mobileSubLinkClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
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
            <button className="w-1/2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition duration-300 font-work">
              Donate
            </button>
          </div>
        </div>
      )}
    </>
  );
}
