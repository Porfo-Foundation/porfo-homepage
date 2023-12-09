'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import Container from "../../central/Container";
import PricingCard from "./components/PricingCard";

import { motion } from "framer-motion";
import PricingSection from "./components/PricingSection";

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

const Pricing = () => {
    return ( 
        
            <div className={`
                    flex 
                    items-center 
                    justify-center 
                    
                    text-white
                    transition
                    duration-400
                    ease-in
                    md:h-[100rem]
                    lg:h-[50rem]
                    xl:h-[50rem]
                `}>
                <div className = {`
                    
    
                    flex
                    flex-col
                    items-start
                    justify-center
                    
                `}>
                    
                        <div className="opacity-100 z-[99]">
                            <PricingSection/>
                        </div>
                        <div className="absolute top-1/2 left-[32vw] transform -translate-x-[1.5vw] translate-y-[60rem] opacity-50 md:opacity-100 cursor-pointer hover:scale-105 transition duration-700">
                            <img 
                                src={'/images/circle.png'}
                                alt='Shape Image'
                                height={450}
                                width={380}
                                    
                            />  
                        </div>
                        <div className="absolute top-1/2 left-[62vw] transform -translate-x-[1.5vw] translate-y-[90rem] opacity-50 md:opacity-100 cursor-pointer hover:scale-105 transition duration-700">
                            <img 
                                src={'/images/circle.png'}
                                alt='Shape Image'
                                height={450}
                                width={380}
                                    
                            />  
                        </div>
                        <div className="absolute top-1/2 left-[2vw] transform -translate-x-[1.5vw] translate-y-[85rem] opacity-50 md:opacity-100 cursor-pointer hover:scale-105 transition duration-700">
                            <img 
                                src={'/images/circle.png'}
                                alt='Shape Image'
                                height={550}
                                width={580}
                                    
                            />  
                        </div>
            
                </div>
            </div>
        
        
     );
}
 
export default Pricing;