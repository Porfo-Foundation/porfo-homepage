import Container from "@/components/central/Container";
import FeatureCard from "./FeatureCard";

const FeaturedSection = () => {
    return ( 
        
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
            
                <FeatureCard 
                    title='Automated portfolio' 
                    description='Streamline your crypto investments with our AI-driven Manager'
                    image='accounting.png'
                    color='bg-[#7a50bc]'
                />
                <FeatureCard 
                    title='Cross-chain bridging' 
                    description='Experience lightning fast cross-chain swaps with our platform.'
                    image='oneclick.png'
                    color='bg-[#7a50bc]'
                />
                <FeatureCard 
                    title='On-Chain analytics' 
                    description='Unlock deep insights with our on-chain analytics.'
                    image='plsystem.png'
                    color='bg-[#7a50bc]'
                />
                <FeatureCard 
                    title='Account Abstracted Wallet' 
                    description='Enjoy hassle-free transactions with our account abstracted wallet.'
                    image='wallet.png'
                    color='bg-[#7a50bc]'
                />
                <FeatureCard 
                    title='Opportunity Calculation' 
                    description='A few position changes can bring the most traffic by using the opportunity metric.'
                    image='opport.png'
                    color='bg-[#7a50bc]'
                />
                <FeatureCard 
                    title='Crystal Clear P&L System' 
                    description='Simplified and transparent tracking of your profits and losses.'
                    image='plsystem.png'
                    color='bg-[#7a50bc]'
                />
            </div>
        
     );
}
 
export default FeaturedSection;