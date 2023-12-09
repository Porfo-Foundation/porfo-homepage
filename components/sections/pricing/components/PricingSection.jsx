import Container from "@/components/central/Container";
import PricingCard from "./PricingCard";

const PricingSection = () => {
    return ( 
        
            <div
                className="
                    
                    grid 
                    grid-cols-1
                    sm:grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3
                    xl:grid-cols-3 
                    2xl:grid-cols-3
                    gap-8
                "
            >
                
                {[...Array(3)].map((_, index) => (
                    <PricingCard key={index} />
                ))}
            </div>
        
     );
}
 
export default PricingSection;