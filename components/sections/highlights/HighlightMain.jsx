'use client'

import Projects from './Highlights'
import MobileProjects from './mobile/MobileProjects';


const HighlightMain = ({ half, hideButton }) => {

    return ( 
        
        <div className = {`
            h-[80%]
            mt-[8%]
            md:h-screen
            flex 
            items-center 
            justify-center 
            text-3xl 
            transition
            duration-400
            ease-in
            relative
            overflow-x-hidden
        `}>
            <div className='block md:hidden'>
                <MobileProjects/>
            </div>
            <div className='hidden md:block'>
                <Projects half={half} hideButton={hideButton}/>
            </div>
            
        </div>
     );
}
 
export default HighlightMain;