import React from 'react'
import styles from './style.module.scss';

export default function index({data, selectedProject}) {

    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    }
    
    return (
        <div className={styles.descriptions}>
            <div className='flex gap-4 items-center mb-[2%] opacity-0'>
                <div className='text-white opacity-60 relative pl-[10.5%] text-xs md:text-xl'>Skills I have</div>
                <hr className="w-[100px] border-1 border-white opacity-60"/>
            </div>
            {
                data.map( (project, i) => {
                    const { title, description } = project;
                    return (
                    <div 
                        key={i} 
                        className={styles.description}
                        style={{clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                    >
                        <p>
                            <div className='font-semibold text-3xl md:text-7xl mb-2 md:py-3'>
                                {title}
                            </div>
                            
                        </p>
                        {/* <p>{description}</p> */}
                    </div>
                    )
                })
            }
        </div>
    )
}