'use client';

import { Item, TItemContext } from "@/types/items";
import { createContext, useEffect, useState } from "react";
import itemsJson from '../data/items.json';

export const ItemContext = createContext<TItemContext|null>(null);

const ItemProvider = ({ children } : { children: React.ReactNode }) => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        setItems(itemsJson as Item[]);
    }, []);

    const getItemById = (id: string) => {
        return items.find(item => item.id === id) || null;
    };

    const getItemsByIds = (ids: string[]) => {
        if(!items) return null;

        return items.filter(item => ids.includes(item.id));
    };

    return <ItemContext.Provider value={{ items, getItemById, getItemsByIds }}>
        {children}
    </ItemContext.Provider>
}

export default ItemProvider;