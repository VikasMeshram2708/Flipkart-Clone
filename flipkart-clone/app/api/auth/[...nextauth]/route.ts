/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter Email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter Password',
        },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        await ConnectDb(); // Connect to the database

        try {
          const user = await prismaInstance.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            // If the user doesn't exist, create a new one
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const newUser = await prismaInstance.user.create({
              data: {
                name: 'Default Name', // Set a default name if you don't have a name field
                email: credentials.email,
                password: hashedPassword,
              },
            });
            return newUser;
          }

          // If the user exists, verify the password
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password as string,
          );

          if (!isPasswordValid) {
            return null;
          }

          return user;
        } catch (e) {
          console.log(e instanceof Error && e?.message);
          return null;
        } finally {
          await prismaInstance.$disconnect(); // Disconnect from the database
        }
      },
    }),
  ],
  callbacks: {
    async signIn({
      user, account, profile, email, credentials,
    }) {
      // Handle the user data storage for Google provider
      let userInDB = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });

      // If the user doesn't exist, create a new one
      if (!userInDB) {
        userInDB = await prisma.user.create({
          data: {
            name: user.name as string,
            email: user.email as string,
            image: user.image as string,
          },
        });
      } else {
        // If the user exists, update their information
        userInDB = await prisma.user.update({
          where: {
            email: user.email as string,
          },
          data: {
            name: user.name as string,
            image: user.image,
          },
        });
      }

      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
