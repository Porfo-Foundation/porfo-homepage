'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import dynamic from 'next/dynamic';
import Skillset from '../../skils'
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";


const data = [
    {
        title: "100+ Cryptocurrencies",
        description: "",
        speed: 0.9
    },
    {
        title: "5 Blockchains",
        description: "",
        speed: 0.95
    },
    {
        title: "30+ Dapps",
        description: "",
        speed: 1.0
    },
    {
        title: "15k+ community Members",
        description: "",
        speed: 1.5
    },
]

const Earth = dynamic(() => import('../../reusable/earth'), {
    ssr: false,
    loading: () => <img src="/assets/placeholder.png"></img>
  })

const Skills = () => {
    const scrollPosition = useScrollPosition();
    const ref = useRef(null);
    const inView = useInView(ref, {margin: '-10% 0px -30% 0px'});
    const [opacity, setOpacity] = useState('opacity-0');
    
    console.log(inView, 'Visible')

    return ( 
        <div className = {`
            h-[80%]
            md:h-screen
            flex 
            items-center 
            justify-center 
            text-3xl 
            transition
            duration-400
            ease-in
            relative
            
        `}>
            <div ref = {ref} className="h-[600px] w-[600px] md:h-[700px] md:w-[700px] block">
                <Earth/>
                <div 
                    
                     className={`
                             bg-purple-700 
                             absolute 
                             scale-[3.5] 
                             blur-3xl 
                             w-40 
                             h-40 
                             rounded-full 
                             mix-blend-screen
                             transition-opacity 
                             duration-300 
                             
                             top-1/2 
                             transform 
                             translate-x-[260%] 
                             -translate-y-[150%]
                             ${inView ? 'opacity-60' : 'opacity-0'}
                         `}

                 ></div>
            </div>
            
            
            <Skillset data={data} heading='Our Milestones'/>
        </div>
     );
}
 
export default Skills;