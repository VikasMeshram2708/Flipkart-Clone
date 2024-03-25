'use client';

import { UseCart } from '@/app/context/CartState';
import RemoveCard from '@/components/RemoveCard';

export default function Cart() {
  // @ts-ignore
  const { products } = UseCart();

  const getTotal = products?.reduce(
    (total: any, product: { price: any }) => total + product.price,
    0,
  );

  return (
    <section className="min-h-screen max-w-[90%] mx-auto py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:max-w-[60%] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map((product: Product) => (
            <RemoveCard
              key={product?.id}
              id={product?.id}
              title={product?.title}
              description={product?.description}
              imageSrc={product?.image}
              price={product?.price}
              product={product}
            />
          ))}
        </div>

        {/* Checkout */}
        <div className="lg:max-w-[20%] mx-auto w-full space-y-3">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <div className="bg-slate-700 shadow-md p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Subtotal:</span>
              <span>
                $
                {getTotal}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Shipping:</span>
              <span>Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <span className="font-semibold">Total:</span>
              <span>
                $
                {getTotal}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="w-full py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
