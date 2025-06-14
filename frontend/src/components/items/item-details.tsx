import { Item } from "@/types/items";
import Image from "next/image";

export default function ItemDetails({ item, className, onClose } : { 
    item: Item | null,
    className?: string,
    onClose?: () => void
}) {
    return item && <div className={`${className}`}>
            <button onClick={onClose} className="absolute top-5 right-5 text-gray-700 text-3xl hover:text-white"><b>X</b></button>
            <Image
                src={item.image}
                alt="item-image"
                width={400}
                height={400}
                />
            <div className="w-2/3 max-h-max">
                <h1 className="text-lg font-bold">{item.name}</h1>
                <p className="break words mt-3">{item.description}</p>
            </div>

    </div>
}