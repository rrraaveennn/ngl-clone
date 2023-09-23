import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as any,
    providers: [
        CredentialsProvider({
            // id: "domain-login",
            name: "Sign in",
            credentials: {
                username: {label: 'username', type: 'text'}
            },
            async authorize(credentials) {
                if (!credentials?.username) {
                    throw new Error("Please enter your username.");
                }

                const user = {
                    username: credentials?.username
                };

                // const data = await prisma.user.create({
                //     data: {
                //         username: user.username,
                //         role: 'user',
                //         Inbox: {
                //             create: {}
                //         }
                //     }
                // });

                const data = await prisma.user.findFirst({
                    where: {
                        username: user.username
                    }
                });

                if (!data) {
                    throw new Error("Invalid username.");
                }

                console.log("authorized user: ", data);

                return data;
            }
        }),
        // CredentialsProvider({
        //     id: "domain-register",
        //     name: "Sign up",
        //     credentials: {
        //         username: { label: "Username", type: "text" }
        //     },
        //     async authorize(credentials) {
        //         const user = {
        //             username: credentials?.username
        //         };

        //         return {
        //             ...user
        //         };
        //     }
        // })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }

            console.log("jwt callback: ", { token, user })

            return token;
        },
        async session({ session, token }) { 
            if (session?.user) {
                session.user.id = token.id;
            }

            console.log("session callback: ", { session, token });

            return session;
        }
    },
    debug: process.env.NODE_ENV === 'development',
    
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };