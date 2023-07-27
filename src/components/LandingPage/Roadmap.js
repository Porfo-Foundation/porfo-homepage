import React from "react";

function Roadmap() {
  const timelines = [
    {
      time: "June 2023",
      description: "Complete non-custodial wallet with gas saving mechanism, with a base AI model trained for wallet txn.",
    },
    {
      time: "September 2023",
      description: "Trade guidance and assistant alpha version to common publics, tax calculator, airdrops.",
    },
    {
      time: "December 2023",
      description: "Launchpads, pools, arbitrage tools, cross chain compatibility using XCM.",
    },
    {
      time: "March 2023",
      description: "Assistant V2 and automatic copy trading mechanism based on AI recommendation,a utomated airdrops.",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <p className="font-bold text-5xl mb-16">Built-in features</p>
      <div className="flex flex-row relative">
        <div className="w-1.5 h-[500px] bg-[#533483] rounded-full"></div>
        <div className="absolute top-0 -left-[54px]">
          {timelines?.map((timeline, index) => (
            <div className="flex flex-row items-start" key={index}>
              <img src="/landing-page/calendar.svg" className="w-28 h-28 bg-gradient-radial from-black from-[40%] to-transparent to-[70%]" />
              <div className="w-1/2 mt-2">
                <p className="pt-8 text-[#311F59] text-2xl font-semibold">{timeline?.time}</p>
                <p className="text-[#C8C8C8] text-lg mt-2">{timeline?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
