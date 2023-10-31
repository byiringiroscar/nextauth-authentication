'use client'
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from '@vercel/postgres';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"


export const config = {
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
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}


export default NextAuth(config);