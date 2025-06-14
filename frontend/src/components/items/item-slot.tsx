import { Item } from "@/types/items";
import Image from "next/image";

export default function ItemSlot({ item, className, onClick } : { 
    item: Item | null,
    className?: string,
    onClick?: () => void
}) {
    return item && <div className={className}>
        <div onClick={onClick} className="relative w-full h-full flex flex-col items-center">
            <Image
                src={item.image}
                alt="item-image"
                width={500}
                height={500}
                />
            <p>{item.name}</p>
        </div>
    </div>
}