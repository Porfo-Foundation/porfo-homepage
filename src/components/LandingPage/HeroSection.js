import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import UIModal from "@/common/UIModal";
import GetStartedModal from "./GetStartedModal";

function HeroSection() {
  const partners = [
    {
      image: "partner-1",
    },
    {
      image: "uatu",
    },
    {
      image: "partner-3",
    },
    {
      image: "wstf",
    },
  ];
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto px-6 min-h-screen flex flex-col justify-between pb-20">
      <UIModal isOpen={isGetStartedModalOpen} onClose={() => setIsGetStartedModalOpen(false)}>
        <GetStartedModal />
      </UIModal>
      <div></div>
      <div>
        <p className="text-center font-semibold text-4xl 2xl:text-6xl pb-3 2xl:pb-6">Simply your Crypto Journey with</p>
        <p className={["text-center font-medium text-4xl 2xl:text-6xl text-primary-100 h-20 min-[453px]:h-full", styles.animate_text].join(" ")}></p>
        <div className="w-4/5 sm:w-1/2 mx-auto mt-6 2xl:mt-16">
          <p className="text-slate-300 font-medium text-center text-sm xl:text-lg">From seamless onboarding to efficient key management and deep dapp integration, we&apos;ve got you covered.</p>
        </div>
        <div className="flex items-center w-full justify-center mt-6 2xl:mt-10">
          <div className="w-40 h-10 relative flex items-center justify-center group">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#A33B6F] to-[#FF4D00] absolute right-1 top-0 rounded-full group-hover:w-40 transition-all duration-300"></div>
            <button onClick={() => setIsGetStartedModalOpen(true)} className="flex items-center text-sm absolute top-0 left-0 w-full pl-5">
              <p className="group-hover:text-black transition-all duration-300">Get Started</p>
              <div className="h-10 w-10 flex items-center justify-center rounded-full ml-4">
                <img src="/landing-page/right-arrow.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
      <p className="from-[#F679B7] to-[#A33B6F] inline-block text-transparent bg-clip-text bg-gradient-radial mt-6">In Collaboration With</p>
        <div className="flex gap-x-10">
          {partners?.map((partner, index) => (
            <img src={`/landing-page/${partner.image}.png`} className="w-12 h-12 2xl:w-14 2xl:h-14" key={index} />
          ))}
        </div>
        <p className="from-[#F679B7] to-[#A33B6F] inline-block text-transparent bg-clip-text bg-gradient-radial mt-6">Incubated @ <a href="https://thewasserstoff.com" style={{textDecoration : "none"}} target="_blank">The Wasserstoff</a></p>
      </div>
    </div>
  );
}

export default HeroSection;
