import React, { useState } from "react";

import navbarLinks from "@/constants/navbarLinks.json";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const GetEarlyAccessButton = () => {
    return (
      <Link href="/get-started" className="flex flex-col items-end">
        <button className="py-3">Get early access</button>
        <div className="h-px w-3/4 bg-white"></div>
      </Link>
    );
  };
  return (
    <>
      <div className="justify-between items-center max-w-[1740px] mx-auto px-12 py-4 hidden md:flex">
        <img src="/logo.svg" />
        <div className="flex gap-x-6">
          {navbarLinks?.map((link, index) => (
            <Link
              key={index}
              href={link?.link}
              className={`pl-0.5 pr-1.5 pb-[3px] ${
                router.asPath == link?.link ? "border-b border-white font-bold opacity-100" : "border-b border-transparent font-light opacity-60"
              } hover:opacity-100 transition-all`}
            >
              {link?.name}
            </Link>
          ))}
        </div>
        <GetEarlyAccessButton />
      </div>
      <div className="flex md:hidden justify-between items-center px-4 sm:px-8">
        <img src="/logo.svg" className="w-32 py-4" />
        <img src="/landing-page/hamburger-menu.svg" className="cursor-pointer" onClick={() => setIsOpen(true)} alt="hamburger icon" />
        {isOpen && (
          <>
            <div className="fixed top-0 left-0 h-full w-full z-40 bg-[rgba(0,0,0,0.6)]" onClick={() => setIsOpen(false)}></div>
            <div className={["bg-primary-100 flex flex-col items-end pr-4 z-50 relative", styles.navbar_mobile].join(" ")}>
              <img src="/landing-page/close-button.svg" className="my-5 cursor-pointer" onClick={() => setIsOpen(false)} alt="close button icon" />
              <div className="flex flex-col gap-8 text-white mt-4">
                <GetEarlyAccessButton />
                {navbarLinks.map((item, index) => (
                  <button className="text-end" key={index}>
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;