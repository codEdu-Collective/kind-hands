import { JSX } from "react/jsx-dev-runtime";
import { FaFacebook, FaInstagram, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import { LuMail, LuPhone } from "react-icons/lu";

export default function TopHeader(): JSX.Element {
  return (
    <div className="text-[#126360] text-sm bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <span className="flex items-center space-x-1">
              <LuPhone size={16} />
              <span>+90 555 123 45 67</span>
            </span>
            <span className="flex items-center space-x-1">
              <LuMail size={16} />
              <span>info@kindhands.com</span>
            </span>
          </div>

          <div className="relative">
            <div className="flex space-x-3 items-center ml-4 border-l border-gray-300 pl-4 absolute right-0 top-1/2 transform -translate-y-1/2 h-full bg-accent-700">
              <a
                href="https://instagram.com"
                className="text-[#126360] hover:text-gray-200 transition"
              >
                {/* Instagram Icon */}
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                className="text-[#126360] hover:text-gray-200 transition"
              >
                {/* Facebook Icon */}
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-[#126360] hover:text-gray-200 transition"
              >
                {/* Twitter Icon */}
                <FaSquareXTwitter size={24} />
              </a>

              <a
                href="https://pinterest.com"
                className="text-[#126360] hover:text-gray-200 transition"
              >
                {/* Pinterest Icon */}
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
