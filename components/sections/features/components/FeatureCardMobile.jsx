'use client';

import Image from "next/image";
import { useElementSize, useMouse } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const FeatureCardMobile = ({
  title,
  description,
  image,
  color,
  downscaled,
  bgColor,
  zooming,
  scale,
  transparency
}) => {
  const { ref: circleEl, width, height } = useElementSize();
  const { ref: cardEl, x, y } = useMouse();

  const [position, setPosition] = useState({ left: -1000, top: -1000});
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {margin: '10% 0px -0.005% 0px'});
  
  

  // setBgColor('bg-gradient-to-br from-[#533482] to-transparent via-transparent')

  // useEffect(() => {
  //   if (downscaled == true) setScale('scale-[0.6]');
    
  // })

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
      ref = {ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        col-span-1 
        cursor-pointer 
        group 
        shadow-md 
        h-[25rem]
        w-[23rem]
        ${bgColor}
        bg-opacity-40
        p-3 
        border-[2.5px] 
        border-opacity-10
        border-white
        rounded-3xl
        md:rounded-lg
        md:hover:scale-105
        transition
        duration-500
        overflow-hidden
        md:overflow-visible
        ${isInView ? 'scale-[1] opacity-100' : 'scale-[0.2] opacity-0'}
      
    `}>
      <div className="flex flex-col gap-6 w-full h-full">
        <div className=" 
                rounded-lg 
                h-[65%] 
                w-full
                relative
                overflow-hidden
                flex
                items-center
                justify-center
               
            ">
            <Image alt='img' src={`/images/cards/${image}`} height={800} width={800} className={`object-fit ${scale} ${transparency}`}/>
        </div>
        
        <div 
          
          className={`${color} opacity-50 absolute scale-[2] blur-3xl w-40 h-40 rounded-full -z-10 transition-opacity duration-300 hidden md:hidden`}
          
        ></div>
        
        

        <div className="flex justify-between -mt-2">
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="font-semibold text-2xl justify-center text-center text-white">{title}</div>
            <div className="text-md w-[90%] dark:text-[#adadad] justify-center text-center text-neutral-400">{description}</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardMobile;
