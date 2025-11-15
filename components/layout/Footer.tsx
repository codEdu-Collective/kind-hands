import { JSX } from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="w-full h-141 text-white bg-dark pt-28">
        <section className="w-300 h-90 m-auto flex">
          <aside className="flex-1">
            <div className="pr-9">
              <Link href={""} className="flex items-center gap-1.5">
                <Image src={`/images/logo.png`} width={21} height={44} alt="logo" />
                <span className="font-shippori font-extrabold text-4xl">Kind Hands</span>
              </Link>
              <p className="font-work text-xl mt-6 mb-7.5">
                Care about people to transforming their lives and exudes a positives Impressiono
                believe. fundraising NGO organizations.
              </p>
              <div className="flex gap-4">
                <FaInstagram size={60} color="white" className="bg-steel p-5 rounded-full" />
                <FaFacebook size={60} color="white" className="bg-steel p-5 rounded-full" />
                <FaSquareXTwitter size={60} color="white" className="bg-steel p-5 rounded-full" />
                <FaPinterest size={60} color="white" className="bg-steel p-5 rounded-full" />
              </div>
            </div>
          </aside>
          <aside className="flex-2 bg-steel py-14 px-12.5 flex gap-17.5">
            <div className="flex-3">
              <h2 className="font-shippori font-bold text-2xl mb-6">Get Involved</h2>
              {["About Us", "Volunteer", "Causes", "Projects", "Team"].map((item, index) => (
                <h3
                  key={index}
                  className="font-work text-xl leading-[186%] hover:text-primary hover:cursor-pointer"
                >
                  {item}
                </h3>
              ))}
            </div>
            <div className="flex-3">
              <h2 className="font-shippori font-bold text-2xl mb-6">Utility</h2>
              {["Style Guide", "Licences", "Password", "404 Page", "Changelog"].map(
                (item, index) => (
                  <h3
                    key={index}
                    className="font-work text-xl leading-[186%] hover:text-primary hover:cursor-pointer"
                  >
                    {item}
                  </h3>
                ),
              )}
            </div>
            <div className="flex-5">
              <h2 className="font-shippori font-bold text-2xl mb-6">Contact</h2>
              <h3 className="font-work text-xl leading-[186%]">
                660 Broklyn Street, 88 <br /> New York
              </h3>
              <h3 className="font-work text-xl leading-[186%]">
                <br /> help Need@walfare.com 222 888 0000
              </h3>
            </div>
          </aside>
        </section>
      </div>
      {/*  Copyright */}
      <div className="w-full bg-dark text-white font-inter text-lg text-center">
        <div className="w-full bg-cool-slate h-0.5" />
        <p className="py-5">&copy; 2025 CodeEdu. All rights reserved.</p>
      </div>
    </footer>
  );
}
