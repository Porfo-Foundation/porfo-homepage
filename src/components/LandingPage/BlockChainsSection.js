import IconCarousel from "./IconCarousel";
import React from "react";

function BlockChainsSection() {
  const images = [
    "/landing-page/coin-1.svg",
    "/landing-page/coin-2.svg",
    "/landing-page/coin-3.svg",
    "/landing-page/coin-4.svg",
    "/landing-page/coin-5.svg",
    "/landing-page/coin-1.svg",
    "/landing-page/coin-2.svg",
    "/landing-page/coin-3.svg",
    "/landing-page/coin-4.svg",
    "/landing-page/coin-5.svg",
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-6 h-screen flex flex-col justify-center mt-12">
      <p className="font-bold text-center text-3xl 2xl:text-5xl leading-snug">Over 5 Blockchains</p>
      <p className="font-bold text-center text-3xl 2xl:text-5xl leading-snug">supported and many more on the way</p>
      <div className="flex justify-around items-center mt-16">
        {/* {Array(5)
          .fill(" ")
          .map((_, index) => (
            <img src={`/landing-page/coin-${index + 1}.svg`} className="w-[6%] sm:w-full max-w-[40px]" key={index} />
          ))}
        {Array(5)
          .fill(" ")
          .map((_, index) => (
            <img src={`/landing-page/coin-${index + 1}-white.svg`} className="w-[6%] sm:w-full max-w-[40px]" key={index} />
          ))} */}
        <IconCarousel iconUrls={images} />
      </div>
    </div>
  );
}

export default BlockChainsSection;
