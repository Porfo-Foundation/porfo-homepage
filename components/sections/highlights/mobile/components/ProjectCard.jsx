import Image from "next/image";

const ProjectCard = () => {
    return ( 
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-8 items-start">
                <div className="h-80 w-80 flex items-center justify-center relative">
                    <Image
                        alt="cover"
                        fill
                        src={'/images/2.jpg'}
                        
                        className='
                            object-cover 
                            h-full 
                            w-full 
                        '
                    />
                </div>
                <div className="flex w-80 items-center justify-between">
                    <div className="flex flex-col items-start gap-2">
                        <div className="text-white text-2xl">Project 1</div> 
                        <div className="text-white text-sm opacity-60">Nextjs - Reactjs - MongoDB</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center">
                        <div>View</div>
                    </div>
                </div>
                
                
            </div>
        </div>
     );
}
 
export default ProjectCard;