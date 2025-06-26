'use client';

import ItemDetails from "@/components/items/item-details";
import ItemSlot from "@/components/items/item-slot";
import { Item } from "@/types/items";
import { useState } from "react";

export default function Inventory({ items } : { items: Item[] | undefined }) {
    const [selectedItem, setSelectedItem] = useState<Item|null>(null);

    return <div className="relative">
        {
            items && <div className="flex flex-wrap justify-center">
                {
                    items.map((item, id) => 
                        <ItemSlot onClick={()=>setSelectedItem(item)} key={`${item.id}itemslot${id}`} className="w-40 h-45 border-5 border-white rounded-md m-5 p-2 bg-black hover:bg-gray-700" item={item}/>
                    )
                }
            </div>
        }
        <ItemDetails onClose={()=>setSelectedItem(null)} item={selectedItem} className="left-1/14 h-1/3 w-6/7 bg-black border-5 border-white rounded-md m-5 p-5  mx-auto flex justify-between items-center fixed bottom-5 z-5"/>
    </div>
};