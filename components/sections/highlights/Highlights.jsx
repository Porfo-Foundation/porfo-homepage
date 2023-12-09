'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Highlight from './utils/Highlight';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/reusable/Button';

const highlights = [
  {
    title: "Porfo: The Future of Digital Wallets and Trading Simplified",
    src: "article 1.png",
    color: "#2e2e2e",
    href: 'https://www.btcwires.com/c-buzz/porfo-the-future-of-digital-wallets-and-trading-simplified/'
  },
  {
    title: "Porfo: Revolutionizing the Crypto Wallet Landscape",
    src: "article 2.png",
    color: "#2e2e2e",
    href: 'https://www.btcwires.com/c-buzz/porfo-revolutionizing-the-crypto-wallet-landscape/'
  },
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home({ half, hideButton}) {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const router = useRouter();

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }

  // const handleClick = () => {
  //   window.open(href, '_blank');
  // };

  const text = hideButton ? 'haha' : 'sed';
  const display = hideButton ? 'hidden' : 'block'
  

  return (
      <div
          className='
            h-screen 
            flex 
            items-center 
            justify-center 
            text-3xl 
            text-white
            transition
            duration-400
            ease-in
          '
      
      >
      <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
        <div className='flex flex-col items-start'>
            <div className='flex gap-4 items-center mb-[2%]'>
                <div className='text-white opacity-60 relative pl-[10.5%] text-xs md:text-xl'>Blog</div>
                <hr className="w-[100px] border-1 border-white opacity-60"/>
            </div>
            <div className={styles.body}>
            {
                highlights.map( (highlight, index) => {
                  return <div key = {index}><Highlight index={index} title={highlight.title} manageModal={manageModal} key={index}/></div>
                })
            }
            </div>
        </div>
        
        <div 
            className={`-mt-10 ${display}`}
            onClick={() => {}}
        >
          <div className='flex items-center justify-center  h-[80px] w-[230px]'>
            <Button className='
                    bg-[#3b3b3b] 
                    h-[60px] 
                    w-[200px] 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center 
                    hover:cursor-pointer
              '>
                <div className="flex flex-col items-center space-y-[-10px]">
                <div className="z-10 text-xl group-hover:text-[20px] transition duration-1000 text-white">Visit blog</div>
                </div>            
            </Button>
          </div>
        </div>
        
        
        <>
            <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={`${styles.modalContainer} group rounded-3xl `} style={{backgroundColor: '#2e2e2e'}} >
                <div style={{top: index * -100 + "%"}} className={`${styles.modalSlider} group`}>
                {
                    highlights.map( (highlight, index) => {
                    const { src, color } = highlight
                    return <div 
                              className={`${styles.modal} z-[999] object-fi`} 
                              style={{backgroundColor: color}} 
                              key={`modal_${index}`} 
                              
                            >
                              <Image 
                              src={`/blogs/${highlight.src}`}
                              width={300}
                              height={0}
                              alt="image"
                              className='rounded-lg shadow-md'
                              />
                    </div>
                    })
                }
                </div>
            </motion.div>
            <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
            <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
        </>
      </main>
      </div>
  )
}