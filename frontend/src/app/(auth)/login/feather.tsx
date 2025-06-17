import Image from "next/image"

export default function Feather({ className, translate, rotation, text, onClick } :
    {
        text?: string,
        className?: string,
        translate?: string,
        rotation?: string,
        onClick: () => void
    }
) {
    return <div 
        className={`z-6 absolute transition-transform duration-600 text-white hover:text-blue-500 -bottom-80 ${className || ''} ${translate || ''}`}
        onClick={onClick}>
            <Image
                className={`transition duration-400 z-2 absolute ${rotation || ''}`}
                fill={true}
                src='/images/backgrounds/auth/Feather.png'
                alt='feather contour image'
                />
            { text && <h1 className="z-5 absolute bottom-25 text-2xl font-bold bg-black/50">{text}</h1> }
    </div>
}