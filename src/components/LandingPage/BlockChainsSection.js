import React from "react";

function BlockChainsSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 h-screen flex flex-col justify-center mt-12">
      <p className="font-bold text-center text-3xl 2xl:text-5xl leading-snug">Over 5 Blockchains</p>
      <p className="font-bold text-center text-3xl 2xl:text-5xl leading-snug">supported and many more on the way</p>
      <div className="flex justify-around items-center mt-16">
        {Array(11)
          .fill(" ")
          .map((_, index) => (
            <img src={`/landing-page/coin-${index + 1}.svg`} className="w-[6%] sm:w-full max-w-[40px]" key={index} />
          ))}
      </div>
    </div>
  );
}

export default BlockChainsSection;
