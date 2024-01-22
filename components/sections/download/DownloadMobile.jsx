'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import Container from "../../central/Container";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const DownloadMobile = ({
    
}) => {
    const scrollPosition = useScrollPosition();
    const [opacity, setOpacity] = useState('opacity-0');

    useEffect(() => {
        if (scrollPosition >= 92) setOpacity('opacity-50');
        else setOpacity('opacity-0');
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            // setIsVisible(true);
        }, 2200);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return ( 
       <div className="h-screen flex flex-col items-center justify-center overflow-x-hidden">
            <div className={`w-full h-[50%] flex items-start justify-center bg-gradient-to-b from-[#b13f60] to-black transition duration-1000 ${opacity}`}>
                <div className="h-[50%] w-[100%] flex items-end justify-center overflow-hidden">
                    <div className="bg-black h-[80vw] w-[80vw] rounded-full scale-[2.5] mb-[60%]">

                    </div>
                </div>
            </div>
            
            <div className=" w-full h-[80%] flex flex-col justify-start items-center gap-6">
                <div className="bg-[#c8c8c8] p-4 rounded-3xl aspect-square flex items-center justify-center">
                    <img src={'/images/logo_png.png'} alt="logo" height={48} width={48} />
                </div>
                <h1 className="text-3xl text-white">Get our app</h1>
                <div className="text-sm text-white bg-indigo-500 p-4 rounded-full">Visit store</div>
            </div>
       </div>
     );
}
 
export default DownloadMobile;