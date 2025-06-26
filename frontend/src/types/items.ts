export type Item = {
    id: string,
    name: string,
    description: string,
    image: string
};

export type TItemContext = {
    items: Item[] | null
    getItemById: (id: string) => Item | null,
    getItemsByIds: (ids: string[]) => Item[] | null,
    getItemsByUserId: (id: string) => Promise<Item[] | null>
}