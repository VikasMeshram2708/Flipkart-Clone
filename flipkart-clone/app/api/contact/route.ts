import ConnectDb from '@/helpers/Db';
import prismaInstance from '@/helpers/PrismaInstance';
import { ContactSchema, ContactShemaType } from '@/models/Contact';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export const POST = async (request: NextRequest) => {
  try {
    const reqBody:ContactShemaType = await request.json();
    // sanitize the incoming data
    const { name, email, message } = reqBody;
    ContactSchema.parse({ name, email, message });

    // connect to db
    await ConnectDb();

    // query to db
    await prismaInstance.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you. Our team will connect with you shortly.',
    }, {
      status: 200,
    });
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
    if (e instanceof ZodError) {
      return NextResponse.json({
        success: false,
        message: e.errors[0].message,
      }, {
        status: 500,
      });
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
