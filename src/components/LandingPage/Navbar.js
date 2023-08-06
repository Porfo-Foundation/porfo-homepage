import React, { useEffect, useState } from "react";

import navbarLinks from "@/constants/navbarLinks.json";
import Link from "next/link";
import styles from "./Navbar.module.css";
import UIModal from "@/common/UIModal";
import GetStartedModal from "./GetStartedModal";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const GetEarlyAccessButton = () => {
    return (
      <button onClick={() => window.open("https://porfo-waitlist.kickoffpages.com/", "_blank")} className="flex flex-col items-end">
        <p className="py-3">Get early access</p>
        <div className="h-px w-3/4 bg-white"></div>
      </button>
    );
  };
  return (
    <>
      <UIModal isOpen={isGetStartedModalOpen} onClose={() => setIsGetStartedModalOpen(false)}>
        <GetStartedModal />
      </UIModal>
      <div className="justify-between items-center max-w-[1740px] mx-auto px-12 py-4 hidden md:flex">
        <img src="/logo1.svg" />
        <div className="flex gap-x-6">
          {navbarLinks?.map((link, index) => (
            <Link
              key={index}
              href={link?.link}
              className={`pl-0.5 pr-1.5 pb-[3px] ${
                `#${activeSection}` == link?.link ? "border-b border-white font-bold opacity-100" : "border-b border-transparent font-light opacity-60"
              } hover:opacity-100 transition-all`}
            >
              {link?.name}
            </Link>
          ))}
        </div>
        <GetEarlyAccessButton />
      </div>
      <div className="flex md:hidden justify-between items-center px-4 sm:px-8">
        <img src="/logo1.svg" className="w-36 py-4" />
        <img src="/landing-page/hamburger-menu.svg" className="cursor-pointer" onClick={() => setIsOpen(true)} alt="hamburger icon" />
        {isOpen && (
          <>
            <div className="fixed top-0 left-0 h-full w-full z-40 bg-[rgba(0,0,0,0.6)]" onClick={() => setIsOpen(false)}></div>
            <div className={["bg-primary-100 flex flex-col items-end pr-4 z-50 relative", styles.navbar_mobile].join(" ")}>
              <img src="/landing-page/close-button.svg" className="my-5 cursor-pointer" onClick={() => setIsOpen(false)} alt="close button icon" />
              <div className="flex flex-col gap-8 text-white mt-4">
                <GetEarlyAccessButton />
                {navbarLinks.map((item, index) => (
                  <Link href={item?.link} className="text-end" key={index} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
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
