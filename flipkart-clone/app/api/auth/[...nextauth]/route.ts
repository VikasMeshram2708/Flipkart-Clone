import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
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
      async authorize(credentials) {
        // Connect to DB
        await ConnectDb();

        // Find user by email
        const user = await prismaInstance.user.findUnique({
          where: { email: credentials?.email as string },
        });

        if (!user) {
          return null; // User not found
        }

        // Compare passwords
        const comparePassword = await bcrypt.compare(
          credentials?.password as string,
          user?.password as string,
        );

        if (!comparePassword) {
          return null; // Passwords don't match
        }

        return user; // Return the user if credentials are valid
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      let userInDb = await prismaInstance.user.findUnique({
        where: { email: user.email as string },
      });

      // Create user if not found
      if (!userInDb) {
        userInDb = await prismaInstance.user.create({
          data: {
            name: user.name as string,
            email: user.email as string,
            image: user.image as string,
          },
        });
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
