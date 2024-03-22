'use client';

import Carousel from '@/components/Carousel';
import { ThreeDCardDemo } from '@/components/ui/ProductCard';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<Product[]>([]);
  // const imageSrc = 'https://rb.gy/y89xfw';
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 -mt-96">
        {data?.map((product) => (
          <div key={product?.id}>
            <ThreeDCardDemo
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
