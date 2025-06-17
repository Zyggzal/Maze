'use client';

import { createContext, useEffect, useState } from "react";
import { TUserContext, User } from "@/types/auth";
import useAPI from "@/hooks/api";
import Cookies  from 'js-cookie';

export const UserContext = createContext<TUserContext|null>(null);

const UserProvider = ({ children } : { children: React.ReactNode }) => {
    const api = useAPI();
    const [user, setUser] = useState<User|null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); 

    useEffect(() => {
        const cookieUser = Cookies.get('user');

        if(cookieUser) {
            setUser(JSON.parse(cookieUser));
            setIsLoggedIn(true);
        }
    }, []);

    const addUserToStorage = (user: User) => {
        setUser(user);
        Cookies.set('user', JSON.stringify(user), {
                path: '/',
                expires: 2
        });
        setIsLoggedIn(true);
    }

    const login = async (email: string, password: string) => {
        const res = await api.Login(email, password);

        if(res.status === 200) {
            addUserToStorage(res.data);
        }
    }

    const logout = () => {
        Cookies.remove('user');
        setUser(null);
        setIsLoggedIn(false);
    }

    const register = async (login: string, email: string, password: string) => {
        const res = await api.Register(login, email, password);

        if(res.status === 200) {
            addUserToStorage(res.data.user);
        }
    }

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
