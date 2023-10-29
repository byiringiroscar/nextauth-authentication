import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from '@vercel/postgres';

const handler = NextAuth({
    session: {
      strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
              },
              async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const response = await sql`SELECT * FROM users WHERE email = ${credentials?.email}`;
                const user = response.rows[0];
                const passwordCorrect = await compare(
                  credentials?.password || '',
                  user.password
                );
                console.log({passwordCorrect})
                if(passwordCorrect){
                  return {
                    id: user.id,
                    email: user.email
                  }
                }
                console.log({credentials})
                return null
                
              }
        })
    ]

});



export default handler;