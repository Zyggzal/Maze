'use client';

import Form from "@/components/form/form"
import { UserContext } from "@/contexts/user";
import { TUserContext } from "@/types/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function LoginForm() {
    const { login } = useContext(UserContext) as TUserContext;
    const router = useRouter();

    const onFormSubmit = async (values: any) => {
        if(await login(values.email, values.password)) {
            router.replace('/');
        }
    }

    return <Form
                className='flex flex-col items-center justify-between border-2 border-white p-10 text-2xl min-w-150 max-w-1/3 z-5 relative -top-50 bg-black/30'
                fields={[
                    {
                        type: 'email',
                        name: 'email',
                        placeholder: 'Email',
                        validate: {
                            email: true,
                            required: true
                        }
                    },
                    {
                        type: 'password',
                        name: 'password',
                        placeholder: 'Password',
                        validate: {
                            required: true
                        }
                    }
                ]}
                formAction={onFormSubmit}
            />;
};