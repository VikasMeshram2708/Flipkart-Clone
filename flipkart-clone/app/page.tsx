'use client';

import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const getProductsData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setData(result);
      return result;
    };
    getProductsData();
  }, []);
  return (
    <main className="min-h-screen max-w-[90%] mx-auto">
      {/** TODO: Carousel */}
      <div className="mt-10">
        <Carousel />
      </div>

      {/* 3d Cards */}
      <div className="mt-36 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-5 lg:gap-10">
        {data?.map((product) => (
          <div key={product?.id}>
            <ProductCard
              title={product?.title}
              description={product?.description}
              imageSrc={product?.image}
              price={product?.price}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
