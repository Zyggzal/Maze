'use client';

import { PopupProps } from "@/types/popup";
import { useEffect, useState } from "react";

export default function Popup({ id, text, title, lifeTime, className, onClose } : PopupProps) {
    const [timeoutHandle, setTimeoutHandle] = useState<NodeJS.Timeout>();

    useEffect(() => {
        if(lifeTime) {
            setTimeoutHandle(setTimeout(() => onClose(id), lifeTime));
        }
    }, []);

    return <div className={`relative ${className || ''}`}>
        <button 
            onClick={()=> {
                clearTimeout(timeoutHandle);
                onClose(id);
            }} 
            className="absolute top-5 right-5 text-gray-700 text-xl hover:text-white"
        >
            <b>X</b>
        </button>
        {
            title &&
            <>
                <h1>{title}</h1>
                <hr/>
            </>
        }
        <p className="mt-5">{text}</p>
    </div>
};