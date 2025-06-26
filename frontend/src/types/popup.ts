export type TPopupContext = {
    showPopup: (text: string, title?: string, lifeTime?: number) => void
};

export type PopupProps = {
    id: number,
    text: string, 
    onClose: (popupID: number) => void,
    title?: string, 
    lifeTime?: number,
    className?: string
};