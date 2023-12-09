'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import Container from "../../central/Container";

const Description = ({tag, content, black}) => {
    const scrollPosition = useScrollPosition();
    return ( 
        <Container>
            <div className={`
                    h-screen
                    flex 
                    items-center 
                    justify-center 
                    text-white
                    transition
                    duration-400
                    ease-in
                    overflow-x-hidden
                    
                    ${black ? 'text-black' : 'text-white'}
                `}>
                <div className = {`
                    
                    text-4xl
                    md:text-4xl 
                    lg:text-5xl
                    font-semibold
                    
                    w-[80%]
                    flex
                    flex-col
                    items-start
                    justify-center
                    
                    ${black ? 'text-black' : 'text-white'}
                `}>
                        <div className="flex gap-4 items-center mb-[2%]">
                            <div className={`
                                    text-xs 
                                    md:text-xl 
                                    opacity-60 
                                    font-light
                                    
                                    ${black ? 'text-black' : 'text-white'}
                            `}>
                                {tag}
                            </div>
                            <hr className={`
                                    w-[100px] 
                                    border-1 
                                    opacity-60
                                    ${black ? 'border-black' : 'border-white'}
                            `}/>
                        </div>
                        
                    
                        <div className="font-regular leading-normal">
                            {content}
                        </div>
                        
            
                </div>
            </div>
        </Container>
        
     );
}
 
export default Description;