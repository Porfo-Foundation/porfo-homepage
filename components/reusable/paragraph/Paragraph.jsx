import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}

export default function Paragraph({
    content,
    tag,
    highlights,
}) {

    const phrase = "I am an interactive developer based in India. I like creating visually appealing experiences. My goal is to inspire and connect with people through development and design.";
    const description = useRef(null);
    const isInView = useInView(description);
      
    return (
        <div className="flex text-start justify-center">
                <div className = {`
                    h-[80%]
                    md:h-screen
                    text-3xl
                    md:text-6xl
                    font-semibold
                    leading-tight
                    md:leading-normal
                    w-[80%]
                    flex
                    flex-col
                    items-start
                    justify-center
                    
                `}>
                        <div className="flex gap-4 items-center mb-[2%]">
                            <div className={`
                                    text-xs 
                                    md:text-xl 
                                    opacity-60 
                                    font-light
                                    text-white
                            `}>
                                {tag}
                            </div>
                            <hr className={`
                                    w-[100px] 
                                    border-1 
                                    opacity-60
                                    
                            `}/>
                        </div>
                        <div ref={description} className={styles.description}>
                            <div className={`${styles.body}`}>
                                <div className=''>
                                   <p className=''>
                                    {content.split(" ").map((word, index) => {
                                            const wordStyle = highlights[word] || '';
                                            return (
                                            <span key={index} className={`${styles.mask} ${wordStyle}`}>
                                                <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                                                {word}
                                                </motion.span>
                                            </span>
                                            );
                                        })}
                                    </p> 
                                </div>
                                
                            </div>
                        </div>
                </div>
        </div>
    )
}