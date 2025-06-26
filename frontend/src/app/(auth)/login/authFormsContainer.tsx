'use client';

import Image from "next/image";
import { useState } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import Feather from "./feather";

export default function AuthFormsContainer() {
    const [isLogin, setIsLogin] = useState(true);

    return <div className={`relative flex justify-center ${isLogin ? 'h-100' : 'h-150'} mt-60 w-300 transition-height duration-300`}>
        {
            isLogin ? <LoginForm/> : <RegisterForm/>
        }
        <Feather 
            className="w-50 h-100"
            rotation={ isLogin ? "-rotate-80" : "rotate-20"}
            translate={ isLogin ? "" : "translate-x-110 -translate-y-150" }
            text={ isLogin ? "Register" : "Login" }
            onClick={() => setIsLogin(prev => !prev)}/>
        <Image
            priority={true}
            className="absolute z-1 bottom-0"
            src='/images/backgrounds/auth/Book.png'
            alt="login form book background"
            height={360}
            width={1008}
        />
    </div> 
};