import React from "react";

function Roadmap() {
  const timelines = [
    
    {
      time: "January 2024",
      description: "Complete non-custodial wallet with gas saving mechanism, with a base AI model trained for wallet txn.",
    },
    {
      time: "February 2024",
      description: "Token Generation @ $0.03/PFT",
    },
    {
      time: "March 2024",
      description: "Trade guidance and assistant alpha version to common publics, tax calculator, airdrops.",
    },
    {
      time: "October 2024",
      description: "Launchpads, pools, arbitrage tools, cross chain compatibility using XCM.",
    },
    {
      time: "March 2025",
      description: "Assistant V2 and automatic copy trading mechanism based on AI recommendation,a utomated airdrops.",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <p className="font-bold text-3xl 2xl:text-5xl mb-16">Our Roadmap</p>
      <div className="flex flex-row relative px-8">
        <div className="w-1.5 h-[500px] bg-[#533483] rounded-full"></div>
        <div className="absolute top-0 -left-[22px]">
          {timelines?.map((timeline, index) => (
            <div className="flex flex-row items-start" key={index}>
              <img src="/landing-page/calendar.svg" className="w-28 h-28 bg-gradient-radial from-black from-[40%] to-transparent to-[70%]" />
              <div className="w-full max-w-[500px] mt-2">
                <p className="pt-8 text-[#311F59] text-lg sm:text-2xl font-semibold">{timeline?.time}</p>
                <p className="text-[#C8C8C8] text-sm sm:text-lg mt-2">{timeline?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
