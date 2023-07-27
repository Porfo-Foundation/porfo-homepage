import React from "react";

function DescriptionSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 py-8">
      <div className="flex items-center justify-center">
        <p className="font-medium text-2xl leading-relaxed">
          Get a personal Assistant which work on intent based AI giving you users the ability to express objectives of executing complex trades or querying on chain data.
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-10">
        <div className="flex flex-col items-center justify-center bg-[#101010] rounded-3xl w-fit py-4 px-8">
          <p className="font-bold text-2xl leading-relaxed opacity-80 text-center mb-4">On Chain Intelligence</p>
          <img src="/landing-page/message.png" />
        </div>
        <div className="flex flex-col items-center h-4/5">
          <p>01</p>
          <div className="w-1.5 rounded-full bg-[#101010] flex-1 my-3">
            <div className="w-1.5 h-1/5 bg-gradient-to-t from-[#A33B6F] to-[#E54820] rounded-full"></div>
          </div>
          <p>05</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
