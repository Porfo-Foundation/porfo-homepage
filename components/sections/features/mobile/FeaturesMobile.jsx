import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import FeatureCard from '../components/FeatureCard';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FeatureCardMobile from '../components/FeatureCardMobile';

const FeaturesMobile = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return ( 
        <div className='carousel'>
            <div className='flex flex-col gap-4 items-center mb-[8vw]'>
              <div className='text-center text-4xl font-bold text-white'>Things we <span className='text-[#7a50bc]'>Offer</span></div>
              <div className='text-center text-2xl font-light w-[80%] text-neutral-400'>Explore a diverse set of modern tools</div>
            </div>
            
            <Carousel 
                infiniteLoop={true}
                
                showStatus={false}
                showIndicators={false}
            >
                <div className="p-5 flex items-center justify-center">
                    
                <FeatureCardMobile 
                    title='Automated portfolio' 
                    description='Streamline your crypto investments with our AI-driven Manager'
                    image='accounting.png'
                    color='bg-[#7a50bc]'
                    bgColor='bg-gradient-to-br from-[#533482]/[.40] to-transparent via-transparent'
                />
                </div>
                <div className="p-5 flex items-center justify-center">
                <FeatureCardMobile 
                    title='Cross-chain bridging' 
                    description='Experience lightning fast cross-chain swaps with our platform.'
                    image='oneclick.png'
                    color='bg-[#7a50bc]'
                    bgColor='bg-gradient-to-br from-[#533482]/[.40] to-transparent via-transparent'
                />
                </div>
                <div className="p-5 flex items-center justify-center">
                <FeatureCardMobile 
                    title='On-Chain analytics' 
                    description='Unlock deep insights with our on-chain analytics.'
                    image='plsystem.png'
                    color='bg-[#7a50bc]'
                    bgColor='bg-gradient-to-br from-[#533482]/[.40] to-transparent via-transparent'
                />
                </div>
                <div className="p-5 flex items-center justify-center">
                <FeatureCardMobile 
                    title='Account Abstracted Wallet' 
                    description='Enjoy hassle-free transactions with our account abstracted wallet.'
                    image='wallet.png'
                    color='bg-[#7a50bc]'
                    bgColor='bg-gradient-to-br from-[#533482]/[.40] to-transparent via-transparent'
                />
                </div>
                <div className="p-5 flex items-center justify-center">
                <FeatureCardMobile 
                    title='Opportunity Calculation' 
                    description='A few position changes can bring the most traffic by using the opportunity metric.'
                    image='opport.png'
                    color='bg-[#7a50bc]'
                    bgColor='bg-gradient-to-br from-[#533482]/[.40] to-transparent via-transparent'
                />
                </div>
                <div className="p-5 flex items-center justify-center">
                <FeatureCardMobile 
                    title='Crystal Clear P&L System' 
                    description='Simplified and transparent tracking of your profits and losses.'
                    image='plsystem.png'
                    color='bg-[#7a50bc]'
                    bgColor='bg-gradient-to-br from-[#533482]/[.40] to-transparent via-transparent'
                />
                </div>
            </Carousel>
        </div>
     );
}
 
export default FeaturesMobile;