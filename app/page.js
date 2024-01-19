"use client"

import { useScrollPosition } from '@/hooks/useScrollPosition';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import Hero from '../components/sections/hero/Hero'
import Loader from '@/components/reusable/loader/Loader';
import Navbar from '@/components/reusable/navbar/Navbar';
import Description from '@/components/sections/description/Description';
import Features from '@/components/sections/features/Features';
import Pricing from '@/components/sections/pricing/Pricing';

import Paragraph from '@/components/reusable/paragraph/Paragraph';
import HighlightMain from '@/components/sections/highlights/HighlightMain';
import Key from '@/components/sections/key/components/Key';
import KeyFeatures from '@/components/sections/key/KeyFeatures';
import Skills from '@/components/sections/milestones/Skills';
import Slideshow from '@/components/reusable/slideshow/Slideshow';
import Download from '@/components/sections/download/Download';
import DownloadCard from '@/components/sections/download/components/DownloadCard';
import HeroMobile from '@/components/sections/hero/HeroMobile';
import FeaturesMobile from '@/components/sections/features/mobile/FeaturesMobile';
import DownloadMobile from '@/components/sections/download/DownloadMobile';
import KeyFeaturesMobile from '@/components/sections/key/KeyFeaturesMobile';
import SlideshowMobile from '@/components/reusable/slideshow/SlideshowMobile';
import NavbarMobile from '@/components/reusable/navbar/NavbarMobile';
import Waitlist from '@/components/reusable/waitlist/waitlist';
// import Milestones from '@/components/sections/milestones/Milestones';

const imageDivTranslate = {
  initial: {
      y: -100,
      opacity: 1,
      zIndex: 999,
  },
  enter:{
      y: 0,
      opacity: 1,
      zIndex: 999,
      transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.2}
  },
  exit:{
      scale: "1",
      opacity: 1,
      transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2}
  }
}

export default function Home() {
  const scrollPosition = useScrollPosition();
  const [bgColor, setBgColor] = useState('bg-black');
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [waitlistPage,setWaitlistPage] = useState(false);

  const primary = <p>From seamless onboarding to smart trading with <span className='text-[#7a50bc]'>AI driven insights</span>, we&apos;ve got you covered. Be ahead of the market with Porfo&apos;s <span className='text-[#7a50bc]'>AI assistant</span>.</p>
  const secondary = <p>As a <span className='text-[#7a50bc]'>smart wallet</span> and <span className='text-[#7a50bc]'>investment assistant</span>, Porfo simplifies the management of digital assets, making it easy for beginners to navigate the crypto landscape.</p>

  const highlights2 = {
    'investment' : 'text-[#7a50bc]',
    'assistant' : 'text-[#7a50bc]',
    'smart' : 'text-[#7a50bc]',
    'wallet' : 'text-[#7a50bc]',
    'simplifies' : 'text-[#7a50bc]'
  }
  const highlights1 = {
    'smart' : 'text-[#7a50bc]',
    'trading' : 'text-[#7a50bc]',
    'AI' : 'text-[#7a50bc]',
    'driven' : 'text-[#7a50bc]',
    'insights' : 'text-[#7a50bc]',
    'assistant' : 'text-[#7a50bc]'
    
  }

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    }, 1000)
  }, [])

  useEffect(() => {
    if (scrollPosition >= 92) setBgColor('bg-black');
    else setBgColor('bg-black')
  })

  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
        scroll = new locomotiveModule.default({
            smooth: true,
            smoothMobile: false,
            resetNativeScroll: true
        });
    });

    return () => {
        if (scroll) {
            scroll.destroy();
        }
    };
}, []);

  return (
    
      waitlistPage ?
        <div> 
          <Waitlist/>
        </div> :
        <div className={`${bgColor}`}>
          <div className='block md:hidden'><NavbarMobile/></div>
          {hasLoaded && 
            (<div className='hidden md:block'>
              <motion.div
                variants={imageDivTranslate}
                initial='initial'
                animate='enter'
                exit='exit'
                zIndex='9999'
              >
                  <Navbar setWaitlistPage={setWaitlistPage}/>
              </motion.div>
                
            </div>)
          }
          
          <div className='overflow-x-hidden'>
              <div className='block md:hidden'><HeroMobile/></div>
              <div className='hidden md:block'><Hero/></div>
          </div>
          <div className='overflow-x-hidden'>
              <Description tag='About Porfo' content={primary}/>
              <div className='hidden md:block'><Features/></div>
              <div className='block md:hidden'><FeaturesMobile/></div>
              
              <Description tag='How we differ' content={secondary}/>
          </div>
          
          
          <div className='hidden md:block'><KeyFeatures/></div>      
          <div className='block md:hidden'><KeyFeaturesMobile/></div>
          
          <div className='overflow-x-hidden'>
            <div className='hidden md:block'><Slideshow/></div>
            <div className='block md:hidden'><SlideshowMobile/></div>
            <Skills/>
          </div>
          
          <div className='overflow-x-hidden'>
            <div className='hidden md:block'><HighlightMain half={true} hideButton={false}/></div>
          
            <div className='hidden md:block'><Download/></div>
            <div className='block md:hidden'><DownloadMobile/></div>
          </div>
          

        </div>
    
  )
}
