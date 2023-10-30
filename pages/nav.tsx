// import { useEffect, useState } from 'react';
// import { getServerSession } from 'next-auth';
// import Link from 'next/link'
// import Logout from './logout'


// const Navbar = () => {
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     const getSession = async () => {
//       const session: any = await getServerSession();
//       setSession(session);
//     };

//     getSession();
//   }, []);

//   return (
//     <nav>
//       {!!session && <Logout />}
//       {!session && <Link href='/login'>Login</Link>}
//     </nav>
//   );
// };


// export default Navbar;
