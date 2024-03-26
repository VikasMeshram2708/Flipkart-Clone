import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    console.log('req-pro', reqBody);

    //  connect to DB
    await ConnectDb();

    // insert product to DB
    const userWithProducts = await prismaInstance.user.findUnique({
      where: {
        email: reqBody.email,
      },
      select: {
        products: true,
      },
    });
    return NextResponse.json(
      {
        success: true,
        data: userWithProducts,
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
