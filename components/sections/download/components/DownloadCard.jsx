'use client';

import Image from "next/image";
import { useElementSize, useMouse } from "@mantine/hooks";
import { useState } from "react";

const DownloadCard = ({
  
}) => {
  const { ref: circleEl, width, height } = useElementSize();
  const { ref: cardEl, x, y } = useMouse();

  const [position, setPosition] = useState({ left: -1000, top: -1000});
  const [opacity, setOpacity] = useState(0);

  function handleMouseMove(){
    setOpacity(0.6);
    setPosition({
      left: x - width / 2,
      top: y - height / 2,
    })
  }
  function handleMouseLeave(){
    setOpacity(0);
  }

  return (
    <div
      ref = {cardEl}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        col-span-1 
        cursor-pointer 
        group 
        shadow-md 
        h-[30rem]
        w-full
        bg-neutral-800
        backdrop-filter
        backdrop-blur-lg 
        bg-opacity-60
        overflow-hidden
        border-[1.5px] 
        border-opacity-10
        border-white
        rounded-lg
        flex
        items-center
        justify-center
        transition
        duration-500
        mb-[5rem]
      "
    >
        
            <div 
                ref={circleEl} 
                className="bg-blue-700 absolute scale-[2] blur-3xl w-40 h-40 rounded-full -z-10 transition-opacity duration-300 hidden md:block"
                style={{
                    top: position.top,
                    left: position.left,
                    opacity
                }}
            ></div>

            <div 
                
                className="bg-[#7a50bc] absolute scale-[2.5] blur-3xl w-40 h-40 rounded-full -z-10 transition-opacity duration-300 hidden md:block"
                
            ></div>
        
        <div className="w-[85%] h-[100%] flex flex-col md:flex-row items-center">
            <div className="w-[50%] h-full flex items-center text-white">
                <div className="flex flex-col gap-6">
                    <div className="md:text-4xl lg:text-5xl">
                        Get our app
                    </div>
                    <div className="text-xl font-light">
                        Get our app on the Apple App Store and Google Play Store
                    </div>
                    <div className="w-[80%] flex gap-4">
                        <div className="text-xl font-light bg-neutral-700 rounded-full p-4 flex items-center justify-center">
                            Playstore
                        </div>
                        <div className="text-xl font-light bg-neutral-700 rounded-full p-4">
                            App store
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="w-[50%] h-full flex items-start justify-end py-20">
                <img src={'/images/phone.png'} height={100} width={350}/>
            </div>
        </div>
    </div>
  );
};

export default DownloadCard;
