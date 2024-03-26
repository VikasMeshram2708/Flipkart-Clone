/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { NextAuthOptions } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import prismaInstance from '@/helpers/PrismaInstance';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import ConnectDb from '@/helpers/Db';

const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  adapter: PrismaAdapter(prismaInstance),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Enter email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
        },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // connect to DB;
        await ConnectDb();

        const userExists = await prismaInstance.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        const passwordMatched = await bcrypt.compare(
          credentials.password,
          userExists?.password as string,
        );

        if (!passwordMatched) {
          return null;
        }
        return {
          id: `${userExists?.id}`,
          name: userExists?.name,
          email: userExists?.email,
          image: userExists?.image,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      // console.log('session', session);
      return session;
    },
    async jwt({ token, user }) {
      if (token && user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
