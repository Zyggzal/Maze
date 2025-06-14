'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
    const pathname = usePathname();

    const styles = {
        active: 'text-blue-500',
        passive: 'text-white'
    };

    const LinkStyles = (path: string) => {
        return pathname === path.replaceAll('/', '') ? styles.active : styles.passive;
    };

    return <header className="fixed t-0 w-full h-30 z-5 border-white border-b ps-10 pt-4 bg-black flex items-center">
        <h1 className="text-5xl mr-10">MAZE</h1>
        <div className="flex gap-x-5">
            <Link className={LinkStyles('/')} href="/">Home</Link>
            <Link className={LinkStyles('/inventory')} href="/inventory">Inventory</Link>
        </div>
    </header>;
};