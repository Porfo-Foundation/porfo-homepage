'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import Container from "../../central/Container";
import FeaturedSection from "./components/FeaturedSection";

import { motion } from "framer-motion";

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

const Features = () => {
    
    return ( 
        
            <div id="features" className="flex items-center justify-center">
            
                <div className = {`
                    w-[90%]
                    
                    flex
                    flex-col
                    items-center
                    justify-center
                    
                `}>
                    

                    
                    
                        <div className="opacity-100 z-[99]">
                            <FeaturedSection/>
                        </div>
                        {/* <div className="absolute top-1/2 left-[32vw] transform -translate-x-[1.5vw] translate-y-[360%] opacity-50 md:opacity-100 cursor-pointer hover:scale-105 transition duration-700 mix-blend-screen hidden md:block">
                            <img 
                                src={'/images/circle.png'}
                                alt='Shape Image'
                                height={450}
                                width={380}
                                    
                            />  
                        </div>
                        <div className="absolute top-1/2 left-[62vw] transform -translate-x-[1.5vw] translate-y-[470%] opacity-50 md:opacity-100 cursor-pointer hover:scale-105 transition duration-700 mix-blend-screen hidden md:block">
                            <img 
                                src={'/images/circle.png'}
                                alt='Shape Image'
                                height={450}
                                width={380}
                                    
                            />  
                        </div>
                        <div className="absolute top-1/2 left-[2vw] transform translate-x-[20%] translate-y-[370%] opacity-50 md:opacity-100 cursor-pointer hover:scale-105 transition duration-700 mix-blend-screen hidden md:block">
                            <img 
                                src={'/images/circle.png'}
                                alt='Shape Image'
                                height={550}
                                width={580}
                                    
                            />  
                        </div> */}
                    
                </div>
            
            </div>
     );
}
 
export default Features;