import React, { useRef } from 'react'
import styles from './style.module.scss';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

export default function index({heading, data, setSelectedProject}) {
  return (
    <div className={styles.titles}>
        <div className='flex gap-4 items-center mb-[2%]'>
            <div className='text-white opacity-60 relative pl-[10.5%] text-xs md:text-xl'>{heading}</div>
            <hr className="w-[100px] border-1 border-white opacity-60"/>
        </div>
        
        {
            data.map( (project, i) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
    </div>
  )
}

function Title({data, setSelectedProject}) {

    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
    
    return (
        <div ref={container} className={styles.title}>
            <div 
                className={styles.wrapper}
                onMouseOver={() => {setSelectedProject(i)}}
                onMouseLeave={() => {setSelectedProject(null)}}
            >
                <motion.p style={{clipPath: clip}}>
                    <div className='font-semibold text-3xl md:text-7xl mb-2 md:py-3'>
                        {title}
                    </div>
                    
                </motion.p>
                
            </div>
        </div>
    )
}
