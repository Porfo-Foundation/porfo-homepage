'use client'

import Image from "next/image";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import Container from "../../central/Container";

const Footer = () => {
    const scrollPosition = useScrollPosition();
    return ( 
        <Container>
            <div className={`
                    h-[vw]
                    flex 
                    items-center 
                    justify-center 
                    
                    overflow-x-hidden
                `}>
                
            </div>
        </Container>
        
     );
}
 
export default Footer;