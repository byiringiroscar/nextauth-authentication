'use client';
import { signOut } from "next-auth/react";
import Link from 'next/link'

const Logout = () => {
    return <Link href="#" onClick={() => signOut()} >SignOut</Link>
}


export default Logout;