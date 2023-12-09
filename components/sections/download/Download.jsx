'use client'

import { useScrollPosition } from "../../../hooks/useScrollPosition";
import Container from "../../central/Container";
import DownloadCard from "./components/DownloadCard";

const Download = ({tag, content, black}) => {
    const scrollPosition = useScrollPosition();
    return ( 
        <Container>
            <div className={`
                    
                    flex 
                    items-center 
                    justify-center 
                    text-3xl 
                    text-black
                    transition
                    duration-400
                    ease-in
                    
                    
                `}>
                <div className = {`
                    
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
                        
                      <DownloadCard/> 
            
                </div>
            </div>
        </Container>
        
     );
}
 
export default Download;