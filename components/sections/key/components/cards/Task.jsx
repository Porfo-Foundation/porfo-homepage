import Image from "next/image";
import KeyCard from "../KeyCard";

const Task = ({id}) => {
    return ( 
        <KeyCard color='bg-red-400' id={id}>
            {/* <Image alt="bell" src="/images/iphone.png" height={250} width={250} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-20"/> */}
            <Image 
                alt="bell" 
                src="/images/mocks/assistant.png" 
                height={250} 
                width={250} 
                className="
                        absolute 
                        top-1/2 
                        left-1/2 
                        transform 
                        -translate-x-1/2 
                        -translate-y-1/2 
                        py-20 
                        opacity-70
                        "
                    />
        </KeyCard>
     );
}
 
export default Task;