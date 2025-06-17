'use client';

import useTyper from "@/hooks/typer";
import { useContext, useEffect, useMemo, useState } from "react";
import { LineChunk, TDialogueContext } from "@/types/dialogue";
import { DialogueContext } from "@/contexts/dialogue";

export default function Dialogue({ dialogueId, className, buttonStyle, talkerStyle, onEnd } : { 
    dialogueId: string,
    className?: string, 
    buttonStyle?: string, 
    talkerStyle?: string, 
    onEnd?: () => void
}) {
    const { output, startTyping } = useTyper();
    const [chunks, setChunks] = useState<LineChunk[]|null>();
    const [linePointer, setLinePointer] = useState({ chunk: 0, line: 0 });
    const [showSkipButton, setShowSkipButton] = useState(false);

    const { dialogueById } = useContext(DialogueContext) as TDialogueContext;

    const currentChunk = useMemo(() => {
        if(!chunks) return;

        return chunks[linePointer.chunk]
    }, [chunks, linePointer.chunk]);

    useEffect(() => {
        setChunks(dialogueById(dialogueId));
    }, [dialogueId, dialogueById]);

    useEffect(() => {
        if(!chunks || !currentChunk) return;

        startTyping(currentChunk.lines[linePointer.line], currentChunk.cadence, 0, () => setShowSkipButton(true));
    }, [linePointer, chunks]);

    const showLine = () => {
        if(!chunks || !currentChunk) return;

        setShowSkipButton(false);
        if(linePointer.line + 1 >= currentChunk.lines.length) {
            if(linePointer.chunk + 1 >= chunks.length) {
                if(onEnd) onEnd();
                return;
            }

            setLinePointer(prev => ({ chunk: prev.chunk + 1, line: 0 }))
        }
        else {
            setLinePointer(prev => ({ ...prev, line: prev.line + 1}));
        }
    };

    return <div className={className}>
        { currentChunk && <h1>{currentChunk.talker && <span className={talkerStyle}>{currentChunk.talker}: </span>}{output}</h1> }
        { showSkipButton && <button className={buttonStyle} onClick={()=>showLine()}>&rarr;</button> }
    </div>
}