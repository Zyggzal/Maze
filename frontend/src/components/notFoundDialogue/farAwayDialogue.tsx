'use client';

import { useRouter } from "next/navigation";
import Dialogue from "../dialogue/dialogue";

export default function FarAwayDialogue() {
    const router = useRouter();
    return <>
        <Dialogue 
            onEnd={()=>router.replace('/friendly-voice')} 
            dialogueId="not-found-2"
            className="flex flex-col items-center gap-y-5"
            />
    </>
};