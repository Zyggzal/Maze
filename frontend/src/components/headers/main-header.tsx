'use client';

import { UserContext } from "@/contexts/user";
import { TUserContext } from "@/types/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function MainHeader() {
    const { user, logout } = useContext(UserContext) as TUserContext;
    const pathname = usePathname();

    const styles = {
        active: 'text-blue-500 font-bold',
        passive: 'text-white hover:underline'
    };

    const LinkStyles = (path: string) => {
        return pathname === path ? styles.active : styles.passive;
    };

    return <header className="fixed t-0 w-full h-30 z-5 border-white border-b px-10 pt-4 bg-black flex items-center">
        <h1 className="text-5xl mr-10">MAZE</h1>
        <div className="flex gap-x-5 w-full justify-between">
            <div className="flex gap-x-5 items-center">
                <Link className={LinkStyles('/')} href="/">Home</Link>
                <Link className={LinkStyles('/inventory')} href="/inventory">Inventory</Link>
            </div>
            <div className="text-end">
                {
                    user ? 
                        <div className="flex gap-x-5 items-center">
                            <p>Make yourself at home, {user.login}</p>
                            <button className="border-2 border-white rounded-md px-4 py-2 hover:border-blue-500 hover:text-blue-500" onClick={() => logout()}>Logout</button>
                        </div>
                        :
                        <div>
                            <Link className={LinkStyles('/login')} href="/login">Login</Link>
                        </div>
                }
            </div>
        </div>
    </header>;
};