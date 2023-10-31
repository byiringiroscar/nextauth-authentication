import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link'
import Logout from './logout'


const Navbar = () => {
const { data: session } = useSession();
  return (
    <nav>
      {session && ( <Link href="#" onClick={() => signOut()} >SignOut</Link>)}
      {!session && ( <Link href='/login'>Login</Link>)}
    </nav>
  );
};


export default Navbar;
