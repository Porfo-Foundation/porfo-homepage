import React from "react";

function HeroSection() {
  const partners = [
    {
      image: "1",
    },
    {
      image: "2",
    },
    {
      image: "3",
    },
    {
      image: "4",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-6 min-h-[calc(100vh-81px)] flex flex-col justify-between pb-20">
      <div></div>
      <div>
        <p className="text-center font-semibold text-6xl pb-6">Simply your Crypto Journey with</p>
        <p className="text-center font-medium text-6xl text-primary-100">Porfo</p>
        <div className="w-1/2 mx-auto mt-16">
          <p className="text-slate-300 font-medium text-center text-lg">From seamless onboarding to efficient key management and deep dapp integration, we've got you covered.</p>
        </div>
        <div className="flex items-center w-full justify-center mt-10">
          <div className="w-40 h-10 relative flex items-center justify-center group">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#A33B6F] to-[#FF4D00] absolute right-1 top-0 rounded-full group-hover:w-40 transition-all duration-300"></div>
            <button className="flex items-center text-sm absolute top-0 left-0 w-full pl-5">
              <p className="group-hover:text-black transition-all duration-300">Get Started</p>
              <div className="h-10 w-10 flex items-center justify-center rounded-full ml-4">
                <img src="/landing-page/right-arrow.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-10">
          {partners?.map((partner, index) => (
            <img src={`/landing-page/partner-${partner.image}.png`} key={index} />
          ))}
        </div>
        <p className="from-[#F679B7] to-[#A33B6F] inline-block text-transparent bg-clip-text bg-gradient-radial mt-6">Our Partners</p>
      </div>
    </div>
  );
}

export default HeroSection;
