import classNames from "classnames";
import { useFeatureStore } from "./utils/store";

const KeyCard = ({color, children, id}) => {
    const inViewFeature = useFeatureStore((state) => state.inViewFeature);
    return ( 
        <div className={classNames(
                    "absolute inset-0 h-full w-full rounded-2xl shadow-md transition-opacity bg-opacity-0 md:bg-opacity-70  backdrop-filter backdrop-blur-lg", 
                    
                    inViewFeature === id ? "opacity-100" : "opacity-0"
                    
                )}>
            <div 
                
                className={`
                    ${color}
                    absolute 
                    scale-[1.5]
                    blur-3xl 
                    w-40 
                    h-40 
                    rounded-full 
                    -z-10 
                    transition-opacity 
                    duration-300 
                    hidden
                    md:block 
                    ${inViewFeature === id ? "opacity-100" : "opacity-0"}
                    
                `}
            ></div>
            
                {children}
            
        </div>
     );
}
export default KeyCard;
