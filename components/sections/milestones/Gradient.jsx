import { useInView } from "framer-motion";
import { useRef } from "react";

const Gradient = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {margin: '-50% 0px -50% 0px'});
    console.log('Moon gradient : ', isInView)
    return ( 
        <div 
            ref={ref}
            className={`
                    bg-purple-700 
                    absolute 
                    scale-[3.5] 
                    blur-3xl 
                    w-40 
                    h-40 
                    rounded-full 
                    mix-blend-screen
                    transition-opacity 
                    duration-300 
                    hidden 
                    md:block
                    top-1/2 
                    transform 
                    translate-x-[260%] 
                    -translate-y-[150%]
                    ${isInView ? 'opacity-60' : 'opacity-0'} 
                `}

        ></div>
     );
}
 
export default Gradient;