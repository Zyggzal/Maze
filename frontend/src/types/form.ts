export type FormInputValidation = {
    required?: boolean,
    email?: boolean,
    minLength?: number,
    maxLength?: number,
    minValue?: number,
    maxValue?: number 
};

export type FormField = {
    type: string,
    name: string,
    placeholder?: string
    validate?: FormInputValidation
};