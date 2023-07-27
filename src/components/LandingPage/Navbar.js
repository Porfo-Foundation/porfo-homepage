import React from "react";

import navbarLinks from "@/constants/navbarLinks.json";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center max-w-[1740px] mx-auto px-12 py-4">
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
      <div className="flex flex-col items-end">
        <button className="py-3">Get early access</button>
        <div className="h-px w-3/4 bg-white"></div>
      </div>
    </div>
  );
}

export default Navbar;
