'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { TUserContext, User } from "@/types/auth";
import { PopupContext } from "./popup";
import { TPopupContext } from "@/types/popup";
import { getStoredUser, Login, Logout, Register } from "@/services/auth";

export const UserContext = createContext<TUserContext|null>(null);

const UserProvider = ({ children } : { 
    children: React.ReactNode
}) => {
    const { showPopup } = useContext(PopupContext) as TPopupContext;

    const [user, setUser] = useState<User|null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); 

    const getUserFromSession = async () => {
        const sessionUser = await getStoredUser();
        if(sessionUser.loggedIn) {
            setUser(sessionUser.data);
            setIsLoggedIn(true);
        }
    };

    useEffect(() => {
        getUserFromSession();
    }, []);

    const login = async (email: string, password: string) => {
        const res = await Login(email, password);

        if(res.success) {
            getUserFromSession();
            return true;
        }
        else {
            showPopup(res.error || '', 'Login error', 5000);
        }

        return false;
    }

    const logout = async () => {
        await Logout();
        setIsLoggedIn(false);
    }

    const register = async (login: string, email: string, password: string) => {
        const res = await Register(login, email, password);

        if(res.success) {
            getUserFromSession();
            return true;
        }
        else {
            showPopup(res.error || '', 'Registration error', 5000);
        }

        return false;
    }

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
