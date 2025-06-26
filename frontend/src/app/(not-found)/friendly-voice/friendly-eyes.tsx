'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FriendlyEyes({ className, width = 1555, height = 1170, interval = 800 } : { 
    className?: string, 
    width?: number, 
    height?: number,
    interval?: number 
}) {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         const number = Math.floor(Math.random() * 20 );
    //         if(Math.random() < 0.5) {
    //             setTranslate(prev => ({...prev, x: number}));
    //         }
    //         else {
    //             setTranslate(prev => ({...prev, y: number}));
    //         }
    //         console.log(number);
    //     }, interval);

    //     return () => clearInterval(timer);
    // }, []);

    return <div className={className}>
        <Image
            priority={true}
            src='/images/Eyes.png'
            alt="Friendly eyes"
            width={width}
            height={height}
            className={`transform translate-x-${translate.x} translate-y-${translate.y} w-150 h-auto`}
            />
    </div>
}