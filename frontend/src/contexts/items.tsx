'use client';

import { Item, TItemContext } from "@/types/items";
import { createContext, useContext, useEffect, useState } from "react";
import itemsJson from '../data/items.json';
import { PopupContext } from "./popup";
import { TPopupContext } from "@/types/popup";
import { Get } from "@/services/api";

export const ItemContext = createContext<TItemContext|null>(null);

const ItemProvider = ({ children } : { children: React.ReactNode }) => {
    const [items, setItems] = useState<Item[]>([]);

    const { showPopup } = useContext(PopupContext) as TPopupContext;

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

    const getItemsByUserId = async (id: string) => {
        const res = await Get(`items/user/${id}`);

        if(res.status == 200) {
            return res.data.items;
        }
        else {
            showPopup(res.error, 'Item error', 5000);
        }
    };

    return <ItemContext.Provider value={{ items, getItemById, getItemsByIds, getItemsByUserId }}>
        {children}
    </ItemContext.Provider>
}

export default ItemProvider;