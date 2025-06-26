'use client';

import { FormField } from "@/types/form";
import FormInput from "./formInput"
import { useMemo, useState } from "react";

export default function Form({ className, fields, formAction } :
    {
        className: string,
        formAction: (values: any) => void,
        fields: FormField[]
    }
) {
    const [values, setValues] = useState<any>({});
    const [formErrors, setFormErrors] = useState<{ [key: string]: string[] }>({});
    //const [state, action, pending] = useActionState(formAction)

    const isValid = useMemo<boolean>(() => {
        const errorValues = Object.values(formErrors);
        return errorValues.length != 0 && errorValues.every(e => e.length === 0);
    }, [formErrors]);

    const onFormValueChange = (value: any, name: string, errors: string[]) => {
        setValues((prev: any) => {
            const next = prev;
            next[name] = value;

            return {...next};
        });

        setFormErrors((prev: any) => {
            const next = prev;
            next[name] = errors;

            return {...next};
        });
    }

    return <form onSubmit={(e) => {
        e.preventDefault();
        formAction(values);
    }} className={className}>
        {
            fields.map((field: FormField) => {
                return <FormInput
                    key={`${field.name}forminput`} 
                    name={field.name} 
                    placeholder={field.placeholder} 
                    type={field.type}
                    validate={field.validate}
                    onValueChange={onFormValueChange}/>
            })
        }
        <button className="px-8 py-3 rounded-lg bg-black/60 border-1 border-transparent not-disabled:hover:border-white hover:bg-black disabled:bg-gray-800/40 disabled:text-gray-400" type="submit" disabled={!isValid}>Submit</button>
    </form>
} 