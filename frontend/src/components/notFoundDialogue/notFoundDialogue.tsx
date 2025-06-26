'use client';

import Link from "next/link";
import { useContext, useState } from "react";
import Dialogue from "../dialogue/dialogue";
import { UserContext } from "@/contexts/user";
import { TUserContext } from "@/types/auth";

export default function NotFoundDialogue() {
    const { isLoggedIn } = useContext(UserContext) as TUserContext;
    const [showNo, setShowNo] = useState(false);
        console.log(isLoggedIn)
    return <>
        <Dialogue onEnd={()=>setShowNo(true)} skipButton={false} dialogueId="not-found-1"/>
        { isLoggedIn && showNo && <Link className="mt-5 opacity-5" href={'/far-away-from-home'}>No</Link>}
    </>
};