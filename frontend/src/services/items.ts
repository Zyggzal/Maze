import { Get } from "./api";

export async function getUserItems(userId: string) {
    return await Get(`items/user/${userId}`);
}

export async function getItemById(id: string) {
    return await Get(`items/${id}`);
}