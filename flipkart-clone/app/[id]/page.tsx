import GetSingleProduct from '@/lib/GetSingleProduct';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

type Params = {
  params: {
    id: number;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const productsData: Promise<Product> = GetSingleProduct(id);
  const productItem = await productsData;

  return {
    title: productItem?.title,
    description: productItem.description,
  };
}

export default async function page({ params: { id } }: Params) {
  console.log('params', id);
  const productsData: Promise<Product> = GetSingleProduct(id);
  const productItem = await productsData;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          width={500}
          height={500}
          src={productItem.image}
          alt={productItem.title}
          className="w-full h-full max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{productItem?.title}</h1>
          <p className="py-6">{productItem?.description}</p>
          <button type="button" className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
