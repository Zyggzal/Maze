import FriendlyEyes from "./friendly-eyes"
import Dialogue from "@/components/dialogue/dialogue"

export default function FriendlyVoice() {

    return <div className="relative bg-black w-screen h-screen flex flex-column justify-center items-center select-none">
        <FriendlyEyes className="-translate-y-40 opacity-20"/>
        <Dialogue 
            className="absolute flex justify-between w-xl h-30" 
            talkerStyle="font-bold"
            buttonStyle="max-h-max font-bold text-blue-400 py-1 px-2 hover:bg-blue-400 hover:text-white transition-all rounded-sm opacity-50 hover:opacity-100" 
            dialogueId="friendly-voice"/>
    </div>
}

//  border-t-1 border-blue-400 p-4 rounded-t-md