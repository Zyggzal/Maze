'use client';

import { createContext, useState } from "react";
import { PopupProps, TPopupContext } from "@/types/popup";
import Popup from "@/components/popup/popup";

export const PopupContext = createContext<TPopupContext|null>(null);

const PopupProvider = ({ children } : { children: React.ReactNode }) => {
    const [popups, setPopups] = useState<PopupProps[]>([]);

    const showPopup = (text: string, title?: string, lifeTime?: number) => {
        setPopups(prev => [
            ...prev,
            {
                id: Date.now(),
                text,
                title, 
                lifeTime,
                onClose: (id) => {
                    setPopups(prev => prev.filter(popup => popup.id !== id));
                }
            } 
        ]);
    };

    return <PopupContext.Provider value={{ showPopup }}>
        <div className="h-full relative">
            {children}
            <div className="absolute h-max w-max bottom-0 right-0">
                {
                    popups.map(popup => {
                        return <Popup
                            key={popup.id}
                            id={popup.id}
                            text={popup.text}
                            title={popup.title}
                            lifeTime={popup.lifeTime}
                            onClose={popup.onClose}
                            className='px-15 py-5 border-white border-1 min-w-100'
                            />
                    })
                }
            </div>
        </div>
    </PopupContext.Provider>
}

export default PopupProvider;