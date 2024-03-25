import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const reqBody: UserProduct = await request.json();
    //  connect to DB
    await ConnectDb();

    // insert product to DB
    await prismaInstance.products.create({
      data: {
        productId: reqBody.productId,
        title: reqBody.title,
        description: reqBody.description,
        price: `${reqBody.price}`,
        category: reqBody.category,
        author: {
          connect: {
            id: reqBody.userId,
          },
        },
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: 'Item added to Cart.',
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
