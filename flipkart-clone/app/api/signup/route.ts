import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import { UserShema } from '@/models/User';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const POST = async (req: NextRequest) => {
  try {
    const reqBody: UserShema = await req.json();

    // check if the email is alread in use
    const emailExists = await prismaInstance.user.findUnique({
      where: {
        email: reqBody.email,
      },
    });

    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          message: 'User Already exists.',
        },
        {
          status: 422,
        },
      );
    }

    // hash teh password
    const hashedPassword = await bcrypt.hash(reqBody.password, 10);
    // Connect To DB
    await ConnectDb();
    await prismaInstance.user.create({
      data: {
        name: reqBody.name,
        email: reqBody.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'User Registered',
      },
      {
        status: 200,
      },
    );
  } catch (e) {
    const err = e as Error;
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return NextResponse.json(
          {
            success: false,
            message:
              'An account with this email address already exists. Please use a different email address.',
          },
          {
            status: 500,
          },
        );
      }
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
