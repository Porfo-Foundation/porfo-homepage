'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import Container from "../../central/Container";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

const translate = {
    initial: {
        y: "110%",
        opacity: 1
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: i + 1}
    }),
    exit: (i) => ({
        y: "100%",
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    })
}

const glowShock = {
    initial: {
        opacity: 0
    },
    enter:{
        opacity: 1,
        transition: {duration: 0.2, ease: [0.76, 0, 0.24, 1], delay: 1}
    },
    exit:{  
        opacity: 0,
        transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 1.5}
    }
}

const translateStatic = {
    initial: {
        y: "110%",
        opacity: 1
    },
    enter:{
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit:{
        y: "100%",
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    }
}
const imageTranslateOpaque = {
    initial: {
        
        opacity: 0,
    },
    enter:{
        
        opacity: 1,
        transition: {duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.8}
    },
    exit:{
        
        opacity: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}
const imageTranslate = {
    initial: {
        y: 500,
        opacity: 1,
    },
    enter:{
        y: 0,
        opacity: 1,
        transition: {duration: 2, ease: [0.76, 0, 0.24, 1.78], delay: 0.2}
    },
    exit:{
        x: -100,
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}
const imageDivTranslate = {
    initial: {
        scale: 1.8,
        opacity: 1,
    },
    enter:{
        scale: 0.7,
        opacity: 1,
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    },
    exit:{
        scale: "1",
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    }
}

const HeroMobile = ({
    
}) => {
    const scrollPosition = useScrollPosition();
    const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
    const name = "Porfa".split("");
    const start = "Introducing".split("");
    const [isLoading, setIsLoading] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    



    useEffect(() => {
        setTimeout( () => {
            setIsLoading(true);
            console.log(isLoading);
          }, 1000)
    }, []); // Th

    

    return ( 
       <div className="h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full h-[50%] flex items-end justify-center">
                <div className="h-[80%] w-[90%] flex items-end">
                    <div className=" w-full h-[80%] flex flex-col justify-end items-center -gap-6">
                        <motion.div variants={translateStatic} initial='initial' animate='enter' className="font-light text-3xl text-white overflow-hidden">
                            Introducing
                        </motion.div>
                        <motion.div variants={translateStatic} initial='initial' animate='enter' className="font-bold text-[20vw] text-[#7a50bc] overflow-hidden mt-[-2vw]">
                            Porfo
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[60%] flex justify-center items-center">
                <div className="relative">
                   
                    <div  
                        className={classNames(
                                        "absolute top-[32.5%] left-0 w-full h-full py-[8%] rounded-[5%] bg-hero-glow blur-3xl opacity-0",
                                        isLoading && 'animate-image-glow'
                                )} />
                    <div className="z-[9999]">
                        <motion.img 
                            variants={translateStatic} 
                            initial='initial' 
                            animate='enter' 
                            src={'/images/phone.png'} 
                            height={100} 
                            width={350} 
                            className="py-[10%] mt-[90%] " 
                        />
                    </div>
                </div>
            </div>
       </div>
     );
}
 
export default HeroMobile;