import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link'
import Logout from './logout'


const Navbar = () => {
const { data: session } = useSession();
  return (
    <nav>
      {session && ( <Logout /> )}
      {!session && ( <Link href='/login'>Login</Link>)}
    </nav>
  );
};


export default Navbar;
