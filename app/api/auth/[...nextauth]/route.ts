import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";

const authOptions: NextAuthOptions = {
    // adapter: PrismaAdapter(new PrismaClient()) as any,
    providers: [
        CredentialsProvider({
            id: "domain-login",
            name: "Sign in",
            credentials: {
                username: {label: 'username', type: 'text'}
            },
            async authorize(credentials) {
                const user = {
                    username: credentials?.username
                };

                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        }),
        CredentialsProvider({
            id: "domain-register",
            name: "Sign up",
            credentials: {
                username: { label: "Username", type: "text" }
            },
            async authorize(credentials) {
                // const user = {
                //     username: credentials?.username
                // };

                return {
                    username: credentials?.username
                };
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            
            
            // if (user) {
            //     token.id = user.id;
            //     // token.username = user.username;
            // }
            // token.username = user.
            // token.username =


            // console.log(user.username)

            return token;
        },
        async session({ session, token, user }) {
            // console.debug(user)
            // session?.user?.id = token.id;
            // session?.user?.username = token?.username;
            // console.debug({token})
            return session;
        }
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt"
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };