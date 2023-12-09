'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import Container from "../../central/Container";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
const translateStatic = {
    initial: {
        y: "110%",
        opacity: 0
    },
    enter:{
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2}
    },
    exit:{
        y: "100%",
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}
const imageTranslateOpaque = {
    initial: {
        
        opacity: 0,
    },
    enter:{
        
        opacity: 1,
        transition: {duration: 2, ease: [0.76, 0, 0.24, 1.78], delay: 0.8}
    },
    exit:{
        
        opacity: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}
const imageTranslate = {
    initial: {
        scale: 1.8,
        opacity: 1,
    },
    enter:{
        scale: 1,
        opacity: 1,
        transition: {duration: 2, ease: [0.76, 0, 0.24, 1.78], delay: 0.2}
    },
    exit:{
        scale: "1",
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
        transition: {duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    },
    exit:{
        scale: "1",
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

const Hero = ({
    
}) => {
    const scrollPosition = useScrollPosition();
    const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
    const name = "Porfo".split("");
    const start = "Introducing".split("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 2200);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return ( 
        <div className = {`
            h-screen 
            flex 
            overflow-x-hidden
            items-center 
            justify-center 
            transition
            duration-400
            ease-in
            
        `}>
            <Container full={false}>
                
                <div className="flex flex-col items-center">
                    <div className="w-screen flex flex-col md:flex-row justify-between">
                        <div className="md:ml-20 md:text-[15vw] text-9xl flex items-center z-30 md:items-start flex-col ">
                                
                                    <div className="flex h-[11vw] md:h-[4vw] overflow-hidden md:ml-4">
                                        {start.map((letter, index) => {
                                            return( 
                                                    
                                                        <motion.div
                                                            custom={(index * 0.1)}
                                                            variants={translate}
                                                            initial='initial'
                                                            animate='enter'
                                                            exit='exit'
                                                            key={index}
                                                            className="font-thin text-5xl text-neutral-400"
                                                        >
                                                            {letter}
                                                        </motion.div>
                                                    
                                                
                                            )
                                        })}
                                    </div>
                                
                                
                                    <div className="flex overflow-hidden h-auto md:h-auto">
                                        {name.map((letter, index) => {
                                            return(
                                                   
                                                        <motion.div
                                                            custom={(index * 0.1)}
                                                            variants={translate}
                                                            initial='initial'
                                                            animate='enter'
                                                            exit='exit'
                                                            key={index}
                                                            className="font-bold text-[#dcd4f0]"
                                                            
                                                        >
                                                            {letter}
                                                        </motion.div>
                                                    
                                                
                                            )
                                        })}
                                    </div>
                                
                        </div>
                        
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 md:opacity-100 cursor-pointer z-[20]">
                                <motion.img variants={imageDivTranslate} initial='initial' animate='enter' exit='exit' 
                                     src={'/images/phone.png'}
                                     alt='Shape Image'
                                     height={450}
                                     width={380}
                                 />
                                
                            </div>
                        
                        
                            <div className="absolute top-1/2 left-[32vw] transform -translate-x-[1.5vw] translate-y-[2vw] opacity-50 md:opacity-100 cursor-pointer hover:scale-105 transition duration-700 mix-blend-screen">
                                <motion.img variants={imageTranslateOpaque} initial='initial' animate='enter' exit='exit' 
                                     src={'/images/circle.png'}
                                     alt='Shape Image'
                                     height={450}
                                     width={380}
                                     
                                 />
                                
                            </div>
                        
                        
                            <div className="absolute top-1/2 left-[30vw] transform translate-x-[13vw] -translate-y-[15vw] opacity-50 md:opacity-100 cursor-pointer hover:scale-105 transition duration-700 hidden md:block mix-blend-screen">
                                <motion.img variants={imageTranslateOpaque} initial='initial' animate='enter' exit='exit' 
                                     src={'/images/circle.png'}
                                     alt='Shape Image'
                                     height={450}
                                     width={380}
                                     
                                 />
                                
                            </div>
                        

                        
                            <div className="flex flex-col z-[30]">
                                <div className="md:mr-20 flex flex-col items-center mt-10 md:items-end z-10 text-white gap-2">
                                    <motion.div variants={translateStatic} initial='initial' animate='enter' exit='exit'>
                                        <div className="overflow-hidden font-light text-neutral-300">
                                            Streamline your crypto 
                                        </div>
                                    </motion.div>
                                    <motion.div variants={translateStatic} initial='initial' animate='enter' exit='exit'>
                                        <div className="overflow-hidden font-light text-neutral-300">
                                            Journey with
                                        </div> 
                                    </motion.div>
                                    <motion.div variants={translateStatic} initial='initial' animate='enter' exit='exit'>
                                        <div className="overflow-hidden text-2xl font-semibold text-white">
                                            The smart wallet
                                        </div>
                                    </motion.div>
                                    <motion.div variants={translateStatic} initial='initial' animate='enter' exit='exit' className="mt-10">
                                        <div className="overflow-hidden text-2xl font-semibold text-white">
                                            Incubated at <span className="text-[#7a50bc]" onClick={()=>open("https://thewasserstoff.com")}>The Wasserstoff</span>
                                        </div>
                                    </motion.div>
                                </div>
                                
                            </div>
                            
                        
                        
                        
                    </div>
                    
                    
                    
                </div>
                
            </Container>
        </div>
     );
}
 
export default Hero;