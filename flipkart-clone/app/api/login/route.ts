import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    console.log('incoming-data', reqBody);

    const { email, password } = reqBody;

    // Connect to DB

    await ConnectDb();
    // Find the User
    const user = await prismaInstance.user.findUnique({
      where: {
        email,
      },
    });

    // Compare the password
    const matchedPassword = await bcrypt.compare(
      password,
      user?.password as string,
    );

    if (!matchedPassword) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid Credentials provided',
        },
        {
          status: 422,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'User Logged in.',
      },
      {
        status: 200,
      },
    );
  } catch (e) {
    const err = e as Error;
    if (e instanceof PrismaClientKnownRequestError) {
      return NextResponse.json(
        {
          success: false,
          message: e?.message,
        },
        {
          status: 500,
        },
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: err?.message,
      },
      {
        status: 500,
      },
    );
  }
};
