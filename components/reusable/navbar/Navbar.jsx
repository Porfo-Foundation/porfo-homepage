"use client"


import { useScrollPosition } from "@/hooks/useScrollPosition";
import Container from "../../central/Container";
import { useEffect, useState } from "react";

const Navbar = ({setWaitlistPage}) => {
    const scrollPosition = useScrollPosition();
    
    const [bgColor, setBgColor] = useState('bg-[#1f1f1f]');
    const [bgOpacity, setBgOpacity] = useState('bg-opacity-0');
    const [logoColor, setLogoColor] = useState('text-[#7a50bc]');
    const [textColor, setTextColor] = useState('text-neutral-500');
    const [buttonBg, setButtonBg] = useState('bg-[#7a50bc]');
    const [buttonText, setButtonText] = useState('text-white');


    useEffect(() => {

        if (scrollPosition >= 1) {
            setBgColor("bg-neutral-800");
            setBgOpacity("bg-opacity-40");
            setLogoColor("text-white");
            setTextColor("text-neutral-500");
            setButtonBg('bg-white');
            setButtonText('text-black');
        }
        
        else{
            setBgColor("bg-[#1f1f1f]");
            setLogoColor("text-[#7a50bc]");
            setTextColor("text-neutral-500");
            setBgOpacity("bg-opacity-0");
            setButtonBg('bg-[#7a50bc]');
            setButtonText('text-white');
        }
    }, [scrollPosition]);

    

    return ( 
        <div className="flex justify-center items-center fixed top-5 w-full z-[9999]">
            <div className={`w-[70vw] ${bgColor} ${bgOpacity} backdrop-filter backdrop-blur-lg p-3 rounded-full z-[9999] transition`}>
                <div className="flex justify-between items-center">
                    <div className={`ml-5 font-bold ${logoColor} flex items-center gap-2`}>
                        <img src={'/images/logo_png.png'} height={24} width={24} alt="logo"/>
                        PORFO
                    </div>
                    <div className={`flex gap-6 items-center ${textColor}`}>
                        <div className="cursor-pointer hover:text-neutral-200 transition">Home</div>
                        <div className="cursor-pointer hover:text-neutral-200 transition">Features</div>
                        <div className="cursor-pointer hover:text-neutral-200 transition"><a target="blank" href="https://docs.porfo.app">Docs</a></div>
                        {/* <div className="hover:opacity-80 cursor-pointer">
                            <div className={`${buttonBg} ${buttonText} p-1.5 rounded-full pl-5 pr-5 text-sm transition-colors`}>
                                Download App
                            </div>
                        </div> */}
                        <div className="hover:opacity-80 cursor-pointer" onClick={()=>{setWaitlistPage(true)}}>
                            <div className={`${buttonBg} ${buttonText} p-1.5 rounded-full pl-5 pr-5 text-sm transition-colors`}>
                                Join Waitlist
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;