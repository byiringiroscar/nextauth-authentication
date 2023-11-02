import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link'
import Logout from './logout'

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav>
      {session ? (
        <Logout />
      ) : (
        <Link href='/login'>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
