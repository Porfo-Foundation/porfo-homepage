"use client"

import { motion } from "framer-motion";
import { slideUp, opacity } from "../../../utils/animator";
import { useEffect, useState } from "react";
import styles from './page.module.scss';
import { Audio } from "react-loader-spinner";

const Loader = ({
    
}) => {
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return ( 
        <motion.div 
            variants={slideUp}
            initial='initial'
            exit='exit'
            className={`${styles.introduction}`}>
            {dimension.width > 0 && 
            <>
                <motion.p variants={opacity} initial="initial" animate="enter" className="flex flex-col gap-3">
                    <div>
                        <div className="">
                        </div>
                    </div>
                    <div className="text-2l">
                        Hold on
                    </div>
                    {/* <div className="text-xl w-[50vw] font-light">
                        In 2010, a Florida programmer paid 10,000 bitcoins 
                        for two pizzas. Fast forward to today, and that would 
                        be worth tens of millions of dollars.
                    </div>
                        */}
                </motion.p>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
     );
}
 
export default Loader;
