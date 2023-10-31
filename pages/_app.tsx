import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { getServerSession } from "next-auth/next"
import Link from 'next/link'
import Logout from './logout'
import authOptions from "./api/auth/[...nextauth]";
import Navbar from './nav';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

{/* <nav>
        {!!session && <Logout />}
        {!session && <Link href='/login'>Login</Link>}
      </nav> */}


// export async function getServerSideProps(context: any) {
//   const session = await getServerSession(context.req, context.res, authOptions)
//   console.log('-----session-----', session)
//   return {
//     props: { session }
//   }
// }


