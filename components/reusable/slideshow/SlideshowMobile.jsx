import { useInView } from "framer-motion";
import { useRef } from "react";

const SlideshowMobile = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {margin: '10% 0px -20% 0px'});
    const isInView2 = useInView(ref, {margin: '10% 0px -30% 0px'});

    return ( 
        <div className="h-[30rem] w-full flex flex-col items-center justify-between mt-20 mb-10">
            <div className="h-[20%] w-[80%] flex items-center text-center justify-center font-semibold text-3xl text-white">
                <p className="text-white">Highly Interpolable with <span className="text-[#7a50bc]">Bolt Network</span></p>
            </div>
            <div className="h-[60%] w-[100%] flex items-center justify-center">
                <div className="h-[90%] w-full flex items-center justify-center gap-3 scale-[0.7]">
                    <img ref={ref} src={'/images/coins/tether.png'} className={`h-[60%] aspect-square transition-opacity duration-1000 ${ isInView2 ? 'opacity-20' : 'opacity-0'}`}/>
                    <img ref={ref} src={'/images/coins/cardano.png'} className={`h-[60%] aspect-square transition-opacity duration-1000 ${ isInView ? 'opacity-50' : 'opacity-0'}`}/>
                    <img src={'/images/coins/bitcoin.png'} className="h-[80%] aspect-square "/>
                    <img ref={ref} src={'/images/coins/tron.png'} className={`h-[60%] aspect-square transition-opacity duration-1000 ${ isInView ? 'opacity-50' : 'opacity-0'}`}/>
                    <img ref={ref} src={'/images/coins/cardano.png'} className={`h-[60%] aspect-square transition-opacity duration-1000 ${ isInView2 ? 'opacity-20' : 'opacity-0'}`}/>

                </div>
            </div>
            <div className="h-[20%] w-[80%] text-neutral-400 items-center flex text-center text-2xl">
                Connect effortlessly across multiple chains – experience unparalleled interoperability and fluidity in your crypto transactions.
            </div>
        </div>
     );
}
 
export default SlideshowMobile;