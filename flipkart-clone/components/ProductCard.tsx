import Image from 'next/image';
import React from 'react';

export default function ProductCard({
  title,
  description,
  price,
  imageSrc,
}: {
  title: string;
  description: string;
  price: number;
  imageSrc: string;
}) {
  return (
    <div className="border-2 border-green-300 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="bg-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2 className="line-clamp-1 text-lg font-semibold mb-2">{title}</h2>
        <p className="line-clamp-2 text-white mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-indigo-600">
            $
            {price}
          </p>
          <button type="button" className="btn btn-success rounded-md btn-outline btn-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
