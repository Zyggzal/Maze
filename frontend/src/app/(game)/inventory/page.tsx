import Inventory from "./inventory";
import { getUserItems } from "@/services/items";
import { getStoredUserServer } from "@/data/session";

export default async function InventoryPage() {
    const user = await getStoredUserServer();

    const items = await getUserItems(user._id);

    return <div className="flex flex-col items-center pt-5">
        <h1 className="text-5xl mb-10">INVENTORY</h1>
        <Inventory items={items?.data.items}/>
    </div>
}