'use client';

import { useState } from "react";

export default function useTyper() {
    const [output, setOutput] = useState('');

    const punctuationDelay = 200;

    function clear() {
        setOutput('');
    }

    function type(offset: number, text: string, cadence: number, endDelay: number, onEnd?: () => void) {
        setOutput(prev => prev + text[offset]);

        if(offset >= text.length - 1) {
            if(onEnd) setTimeout(onEnd, endDelay);
            
            return;
        }

        let delay = cadence;

        if(/[.|,|?|!|:]/.test(text[offset])) {
            delay += punctuationDelay;
        }

        setTimeout(() => {
            type(offset + 1, text, cadence, endDelay, onEnd);
        }, delay);
    }

    function startTyping(text: string, cadence: number, endDelay: number = punctuationDelay, onEnd?: () => void) {
        if(text.length === 0 || cadence < 0) return;

        clear();
        type(0, text, cadence, endDelay, onEnd);
    }

    return { output, startTyping, clear };
}