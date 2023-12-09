import { useRef } from "react";
import FeatureCard from "../features/components/FeatureCard";
import FeatureCardMobile from "../features/components/FeatureCardMobile";
import { useInView } from "framer-motion";

const KeyFeaturesMobile = () => {
    const ref = useRef(null);
    const inView = useInView(ref);
    return ( 
        <div className="flex items-center justify-center">
                
                <div className = {`
                    w-[90%]
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-20
                `}>
                    <div className="text-white text-3xl text-bold font-semibold text-center">All you need <span className="text-[#B13F60]">in one place</span></div>
                    
                    <div
                        className="
                            grid 
                            grid-cols-1
                            sm:grid-cols-1 
                            md:grid-cols-2 
                            lg:grid-cols-2
                            xl:grid-cols-3 
                            2xl:grid-cols-3
                            gap-8
                        "
                    >
                        
                        
                        <div ref={ref} className={`transition duration-500 ease-out ${inView ? 'scale-[1]' : 'scale-[0.2]'}`}>
                            <FeatureCardMobile
                                title='Unified Management' 
                                description='Streamline your crypto investments with our AI-driven Manager'
                                image='Portfolio.png'
                                color='bg-[#7a50bc]'
                                scale='scale-[1]'
                                bgColor='bg-gradient-to-br from-[#b13f60]/[.40] to-transparent via-transparent'
                            />
                        </div>
                        <div>
                            <FeatureCardMobile 
                                title='AI Powered Assistant' 
                                description='Experience lightning fast cross-chain swaps with our platform'
                                image='text.png'
                                color='bg-red-500'
                                scale='scale-[0.7]'
                                transparency='opacity-40'
                                bgColor='bg-gradient-to-br from-[#b13f60]/[.40] to-transparent via-transparent'
                            />
                        </div>
                        <div>
                            <FeatureCardMobile 
                                title='Smart Alerts' 
                                description='Unlock deep insights with our on-chain analytics'
                                image='bell.png'
                                color='bg-blue-600'
                                scale='scale-[1]'
                                transparency='opacity-70'
                                bgColor='bg-gradient-to-br from-[#b13f60]/[.40] to-transparent via-transparent'
                            />
                        </div>
                        <div>
                            <FeatureCardMobile 
                                title='Transaction Simulation' 
                                description='Simulate end to end transaction in real time'
                                image='simulation.png'
                                color='bg-blue-600'
                                scale='scale-[1]'
                                bgColor='bg-gradient-to-br from-[#b13f60]/[.40] to-transparent via-transparent'
                            />
                        </div>
                        
                    </div>
                </div>
        </div>
     );
}
 
export default KeyFeaturesMobile;