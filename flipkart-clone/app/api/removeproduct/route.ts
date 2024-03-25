import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import { NextRequest, NextResponse } from 'next/server';

export const DELETE = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { productId, userId } = reqBody;

    //  connect to DB
    await ConnectDb();

    // Delete the item by it's id
    await prismaInstance.products.delete({
      where: {
        id: productId,
        authorId: userId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Item Removed',
      },
      {
        status: 200,
      },
    );
  } catch (e) {
    const err = e as Error;
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
