import React, { useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion-3d';
import Hammer from 'hammerjs'

export default function Earth() {
    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    });

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/moon/color.jpg',
        '/assets/moon/normal.png',
        '/assets/moon/occlusion.png'
    ]);

    useEffect(() => {
        const canvas = scene.current;
        const hammer = new Hammer(canvas);

        let rotation = 0;

        hammer.get('rotate').set({ enable: true });

        hammer.on('rotate', (event) => {
            // Adjust rotation speed as needed
            const rotationSpeed = 0.01;
            rotation += event.rotation * rotationSpeed;
            canvas.style.transform = `rotate(${rotation}rad)`;
        });

        return () => {
            hammer.destroy();
        };
    }, []);

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.02} />
            <directionalLight intensity={2.5} position={[1, 0, -0.25]} />
            <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
                {[...Array(50)].map((_, index) => (
                    <mesh key={index} position={[Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]}>
                        <boxGeometry args={[0.1, 0.1, 0.1]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
                ))}
            </motion.mesh>
        </Canvas>
    );
}
