import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import { getServerSession } from "next-auth/next"
import Link from 'next/link'
import Logout from './logout'
import authOptions from "./api/auth/[...nextauth]";

type CustomAppProps = AppProps & {
  session: any;
}

export default function App({ Component, pageProps, session }: CustomAppProps) {
  return (
    <div>
      <nav>
        {!!session && <Logout />}
        {!session && <Link href='/login'>Login</Link>}
      </nav>
      <Component {...pageProps} />
    </div>
  );
}



export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions)
  return {
    props: { session }
  }
}


