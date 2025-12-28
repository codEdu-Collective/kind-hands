import { FaFacebook, FaInstagram, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import { LuMail, LuPhone } from "react-icons/lu";

export default function TopHeader() {
  return (
    <div className="bg-accent dark:bg-accent-300 text-deep-teal dark:text-white text-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 font-work text-xs sm:text-sm md:text-base">
            <a
              href="tel:+905551234567"
              className="flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <LuPhone className="text-sm md:text-base" aria-label="phone icon" />
              <span>+90 555 123 45 67</span>
            </a>
            <a
              href="mailto:info@kindhands.com"
              className="flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <LuMail className="text-sm md:text-base" aria-label="mail icon" />
              <span>info@kindhands.com</span>
            </a>
          </div>

          <div className="flex items-center">
            <div className="flex space-x-4 items-center md:pl-6 md:border-l md:border-deep-teal/20 dark:border-white/30">
              <a
                href="https://instagram.com"
                className="text-deep-teal dark:text-white hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Instagram Profile"
              >
                <FaInstagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://facebook.com"
                className="text-deep-teal dark:text-white hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Facebook Profile"
              >
                <FaFacebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-deep-teal dark:text-white hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Twitter Profile"
              >
                <FaSquareXTwitter size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://pinterest.com"
                className="text-deep-teal dark:text-white hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Pinterest Profile"
              >
                <FaPinterest size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
