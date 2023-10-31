import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import { getServerSession } from "next-auth/next"
import Link from 'next/link'
import Logout from './logout'
import authOptions from "./api/auth/[...nextauth]";

export default async function App({ Component, pageProps, session }: AppProps) {
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


