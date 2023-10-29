import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { getServerSession } from 'next-auth';
import Link from 'next/link'
import Logout from './logout'


export default async function App({ Component, pageProps }: AppProps) {
  const session = await getServerSession(pageProps.req);

  return (
    <div>
      <nav>
        {!!session && <Logout />}
        {!session && <Link href='/login'>Login</Link>}
      </nav>
      <Component {...pageProps} />
    </div>
  )
}
