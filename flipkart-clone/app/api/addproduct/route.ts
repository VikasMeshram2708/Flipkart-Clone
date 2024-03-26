import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const reqBody: UserProduct = await request.json();
    const {
      userId, productId, title, price, description, category, image,
    } = reqBody;
    //  connect to DB
    await ConnectDb();

    // insert product to DB
    await prismaInstance.products.create({
      data: {
        productId,
        title,
        description,
        image,
        price: `${price}`,
        category,
        author: {
          connect: {
            id: userId,
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
