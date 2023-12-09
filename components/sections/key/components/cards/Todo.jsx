import Image from "next/image";
import KeyCard from "../KeyCard";

const Todo = ({id}) => {
    return ( 
        <KeyCard color='bg-[#7a50bc]' id={id} className='flex items-ceter justify-center'>
            {/* <Image alt="bell" src="/images/iphone.png" height={250} width={250} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-20"/> */}
            <Image 
                alt="bell" 
                src="/images/mocks/management.png" 
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
                        opacity-60
                        "
                    />
        </KeyCard>
     );
}
 
export default Todo;