'use client'

import { useScrollPosition } from "../../../../hooks/useScrollPosition";
import Container from "../../../central/Container";
import KeyCard from "./KeyCard";
import Task from "./cards/Task";
import Todo from "./cards/Todo";
import Chain from "./cards/Chain";
import Sim from "./cards/Sim";
import { KeyItem } from "./KeyItem";


const features = [
    {
        title: '<p><span className="text-[#7a50bc]">Unified</span> Portfolio Management</p>',
        id: 'todo',
        card: Todo,
        
    },
    {
        title: '<p><span className="text-[#7a50bc]">AI powered</span> trading assistant</p>',
        id: 'task',
        card: Task
    },
    {
        title: '<p>Smart<span className="text-[#7a50bc]"> Market Alerts</span></p>',
        id: 'chain',
        card: Chain
    },
    {
        title: '<p>Transaction<span className="text-[#7a50bc]"> Simulation</span></p>',
        id: 'sim',
        card: Sim
    }
    
]
const Key = () => {
    const scrollPosition = useScrollPosition();
    return ( 
        <Container>
            <div className={`
                    h-screen 
                    flex 
                    items-center 
                    justify-center 
                    text-3xl 
                    text-white
                    transition
                    duration-400
                    ease-in
                    md:mt-[20rem]
                    md:mb-[20rem]
                    
                `}>
                <div className = {`
                    md:h-screen
                    text-3xl
                    md:text-4xl lg:text-5xl
                    font-semibold
                    leading-tight
                    md:leading-normal
                    w-[80%]
                    flex
                    flex-col
                    items-start
                    justify-center
                    
                `}>
                    <div className="flex w-full gap-20 items-start">
                        <div className="w-full py-[50vh]">
                                <ul>
                                    {features.map((feature) => (
                                        <li key={feature.id} className="leading-normal">
                                            <KeyItem id={feature.id} htmlContent={feature.title}>
                                                {feature.title}
                                            </KeyItem>
                                        </li>
                                    ))}
                                </ul>
                            
                        </div>
                        <div className="w-full sticky top-0 h-screen flex items-center">
                            <div className="w-[80%] aspect-square relative">
                                    {features.map((feature) => (
                                        <feature.card key={feature.id} id={feature.id}/>
                                    ))}
                                    {/* <KeyCard gradient='from-black to-blue-600'/> */}
                            </div>
                            
                        </div>
                    </div>
                    
            
                </div>
            </div>
        </Container>
        
     );
}
export default Key;