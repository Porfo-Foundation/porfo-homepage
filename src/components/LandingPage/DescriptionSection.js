import React, { useEffect, useRef, useState } from "react";
import styles from "./DescriptionSection.module.css";

function DescriptionSection() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const slideshow = [
    {
      title: "On Chain Intelligence",
      description: "Get a personal Assistant which work on intent based AI giving you users the ability to express objectives of executing complex trades or querying on chain data.",
      image: "/landing-page/message-1.svg",
    },
    {
      title: "Portfolio manager",
      description: "Manage your portfolio across multiple chains, dexes, and tokens. Get an idea about all your on-chain and off-chain positions including staking, farming, and lending across",
      image: "/landing-page/message-2.svg",
    },
    {
      title: "Trade Recommendation",
      description:
        "Our Trading Recommendation and Copy Trading feature empowers you to maximize your profits by strategically switching between the most optimal pairs based on your portfolio and preferences.",
      image: "/landing-page/message-3.svg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevCount) => (prevCount >= slideshow.length - 1 ? 0 : prevCount + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [ref]);
  const divStyle = {
    // transform: `translateY(${scrollIndex * (height / 5)}px)`,
    height: `${(height / slideshow.length) * (scrollIndex + 1)}px`,
  };
  return (
    <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 gap-6 py-8">
      <div className="flex items-center justify-center col-span-2 lg:col-span-1">
        {slideshow?.map((slide, index) => (
          <>
            {scrollIndex == index && <p className={["font-medium text-lg md:text-2xl leading-relaxed text-center sm:text-start h-[176px] xs:h-fit", styles.slide_in].join(" ")}>{slide.description}</p>}
          </>
        ))}
      </div>
      <div className="flex justify-center items-center gap-x-2 sm:gap-x-10 col-span-2 lg:col-span-1">
        <div className="flex flex-col items-center justify-center bg-[#101010] rounded-3xl w-fit py-4 px-4 sm:px-8">
          {slideshow?.map((slide, index) => (
            <>{scrollIndex == index && <p className={["font-bold text-2xl leading-relaxed opacity-80 text-center -mb-4 xs:mb-4 h-20 xs:h-fit", styles.fade].join(" ")}>{slide.title}</p>}</>
          ))}
          {slideshow?.map((slide, index) => (
            <>{scrollIndex == index && <img src={slide.image} className={["w-96 h-72", styles.slide_in].join(" ")} />}</>
          ))}
        </div>
        <div className="flex flex-col items-center h-4/5">
          <p>0{scrollIndex + 1}</p>
          <div className="w-1.5 rounded-full bg-[#101010] flex-1 my-3" ref={ref}>
            <div className={`w-1.5 bg-gradient-to-t from-[#A33B6F] to-[#E54820] rounded-full transition-all duration-300`} style={divStyle}></div>
          </div>
          <p>0{slideshow.length}</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
