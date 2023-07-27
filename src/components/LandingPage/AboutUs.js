import React from "react";

function AboutUs() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 h-screen flex flex-col justify-center">
      <p className="font-bold text-center text-2xl xl:text-5xl leading-snug">We&apos;re a team of Traders, developers and crypto designers</p>
      <p className="font-medium text-[#C8C8C8] text-center text-sm sm:text-xl px-2 sm:px-12 pt-8 pb-12 sm:pb-28">
        Who have been in this space for multiple years and understand the problem of new users and the traders and are thus set out to build Porfo which will serve both.... something...
      </p>
      <div className="flex justify-center">
        <button className="text-center bg-gradient-to-r from-[#A33B6F] via-[#FF4D00] to-[#A33B6F] w-fit text-black px-12 py-3 rounded-full transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
