'user client';

import { FormInputValidation } from "@/types/form";
import { useState } from "react";

export default function FormInput({ name, type, placeholder, validate, onValueChange } :
    {
        name: string,
        type: string,
        placeholder?: string,
        validate?: FormInputValidation
        onValueChange?: (value: any, name: string,  errors: string[]) => void
    }
) {
    const [validationErrors, setValidationErrors] = useState<string[]>();

    const onChangeHandler = (value: string) => {
        const errors = [];
        if(validate?.required && (!value || value.trim() === '')) errors.push(`This field is required.`);
        if(validate?.email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) errors.push('Invalid email.');
        if(validate?.minLength && value.length < validate?.minLength) errors.push(`Minimum length: ${validate?.minLength} characters.`);
        if(validate?.maxLength && value.length > validate?.maxLength) errors.push(`Maximum length: ${validate?.maxLength} characters.`);
        if(validate?.minValue && value.length < validate?.minValue) errors.push(`Minimum value: ${validate?.minValue}.`);
        if(validate?.maxValue && value.length > validate?.maxValue) errors.push(`Maximum value: ${validate?.maxValue}.`);

        setValidationErrors(errors);
        if(onValueChange) onValueChange(value, name, errors);
    }

    return <div className="w-full">
        <label className="capitalize flex justify-between ">
            {name}:  
            <input
            className="p-4 bg-black"
                onChange={(e) => onChangeHandler(e.target.value)}
                name={name} 
                placeholder={placeholder}
                type={type}
                />
        </label> 
        {
            validationErrors && <span className="text-red-500 text-sm text-right">{validationErrors[0]}</span>
        }
    </div>
}