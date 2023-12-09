'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';


export default function Skillset({data, heading}) {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            
            <Titles data={data} setSelectedProject={setSelectedProject} heading={heading}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
          
    )
}
