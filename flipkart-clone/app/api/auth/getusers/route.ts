import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    // connect to DB
    ConnectDb();

    // query to db
    const users = await prismaInstance.user.findMany({});
    return NextResponse.json(
      {
        succes: true,
        data: users,
      },
      {
        status: 201,
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
