'use client';

import { UseCart } from '@/app/context/CartState';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductCard({
  id,
  title,
  description,
  price,
  imageSrc,
  product,
}: {
  id: number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  product: Product;
}) {
  // @ts-ignore
  const { AddToCart } = UseCart();
  return (
    <div className="border-2 border-green-300 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-80 overflow-hidden">
        <Link href={`/${id}`}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="cursor-pointer bg-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <div className="p-4">
        <h2 className="line-clamp-1 text-lg font-semibold mb-2">{title}</h2>
        <p className="line-clamp-2 text-white mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-indigo-600">
            $
            {price}
          </p>
          <button
            onClick={() => AddToCart(product)}
            type="button"
            className="btn btn-success rounded-md btn-outline btn-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
