import React, { useEffect, useRef, useState } from "react";
import styles from "./DescriptionSection.module.css";

function DescriptionSection() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const images = ["/landing-page/message.png", "/landing-page/message.png", "/landing-page/message.png", "/landing-page/message.png", "/landing-page/message.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevCount) => (prevCount >= 4 ? 0 : prevCount + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  const divStyle = {
    transform: `translateY(${scrollIndex * (height / 5)}px)`,
    transition: "transform 0.5s ease",
  };
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
          {scrollIndex == 0 && <img src="/landing-page/message.png" className={styles.slide_in} />}
          {scrollIndex == 1 && <img src="/landing-page/message.png" className={styles.slide_in} />}
          {scrollIndex == 2 && <img src="/landing-page/message.png" className={styles.slide_in} />}
          {scrollIndex == 3 && <img src="/landing-page/message.png" className={styles.slide_in} />}
          {scrollIndex == 4 && <img src="/landing-page/message.png" className={styles.slide_in} />}
        </div>
        <div className="flex flex-col items-center h-4/5">
          <p>0{scrollIndex + 1}</p>
          <div className="w-1.5 rounded-full bg-[#101010] flex-1 my-3" ref={ref}>
            <div className={`w-1.5 h-1/5 bg-gradient-to-t from-[#A33B6F] to-[#E54820] rounded-full translate-y-[100px]`} style={divStyle}></div>
          </div>
          <p>05</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
