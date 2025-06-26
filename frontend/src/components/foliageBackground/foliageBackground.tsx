import Image from "next/image";

export default function FoliageBackground({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
    return <div className="h-full">
        <div className="relative z-1 px-40 h-full">
            {children}
        </div>
        <Image
            priority={true}
            className="fixed bottom-0 left-0 w-auto h-half"
            src={'/images/backgrounds/basic/BorderBasicBottom.png'}
            alt="Bottom Border"
            width={498}
            height={900}
        />
        <Image
            priority={true}
            className="fixed top-30 right-0  w-auto h-half"
            src={'/images/backgrounds/basic/BorderBasicTop.png'}
            alt="Bottom Border"
            width={498}
            height={900}
        />
    </div>
}