'use client';

import { UserContext } from "@/contexts/user";
import { TUserContext } from "@/types/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function MainHeader() {
    const { user, isLoggedIn, logout } = useContext(UserContext) as TUserContext;
    const pathname = usePathname();

    const styles = {
        active: 'text-blue-500 font-bold',
        passive: 'text-white'
    };

    const LinkStyles = (path: string) => {
        return pathname === path ? styles.active : styles.passive;
    };

    const onLogout = () => {
        logout();
        window.location.reload();
    }

    return <header className="fixed t-0 w-full h-30 z-5 border-white border-b ps-10 pt-4 bg-black flex items-center">
        <h1 className="text-5xl mr-10">MAZE</h1>
        <div className="flex gap-x-5">
            <Link className={LinkStyles('/')} href="/">Home</Link>
            <Link className={LinkStyles('/inventory')} href="/inventory">Inventory</Link>
            <div className="self-end">
                {
                    isLoggedIn ? 
                        <div>
                            <p>Make yourself at home, {user?.login}</p>
                            <button onClick={onLogout}>Logout</button>
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