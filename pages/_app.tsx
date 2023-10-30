import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import { getServerSession, Session } from 'next-auth'; // Import the Session type
import Link from 'next/link'
import Logout from './logout'

export default function App({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState<Session | null>(null); // Specify the type

  useEffect(() => {
    async function getSession() {
      try {
        const serverSession: any = await getServerSession();
        setSession(serverSession);
      } catch (error) {
        console.error('Error while fetching session:', error);
        setSession(null);
      }
    }

    getSession();
  }, []);
  console.log(session)
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
