/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */

'use client';

import {
  ReactNode, useContext, useEffect, useState,
} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { CartContext } from './CartContext';

// const BASE_URI = process.env.BASE_URI as string;

type CartProps = {
  children: ReactNode;
};

export const CartState = ({ children }: CartProps) => {
  const router = useRouter();
  const { data } = useSession();
  const [products, setProducts] = useState<Product[]>([]);

  // Add to Cart Function
  const AddToCart = async (product: Product) => {
    if (!data?.user?.email) {
      return router.push('/api/auth/signin');
    }
    const addData = {
      // @ts-ignore
      userId: +data.user.id,
      productId: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    };
    const addResponse = await fetch('/api/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addData),
    });
    const addResult = await addResponse.json();

    if (!addResponse.ok) {
      return toast.error(addResult.message);
    }
    toast.success(addResult.message);
    return setProducts((prev) => [...prev, product]);
  };

  // Remove from Cart Function
  const RemoveItem = (productId: number) => {
    toast.success('Item Removed.');
    return setProducts(
      products?.filter((product) => product?.id !== productId),
    );
  };

  useEffect(() => {
    const UserProducts = async () => {
      const response = await fetch('/api/myproducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data?.user?.email }),
      });
      const result = await response.json();
      if (!response.ok) {
        return console.log(result.message);
      }
      setProducts(result?.data?.products);
      return console.log(result.data);
    };
    UserProducts();
  }, [data]);

  return (
    // @ts-ignore
    <CartContext.Provider value={{ AddToCart, products, RemoveItem }}>
      {children}
      <Toaster />
    </CartContext.Provider>
  );
};

export const UseCart = () => {
  const Cart = useContext(CartContext);
  if (Cart === undefined) {
    throw new Error('UseCart Must be wrapped in CartProvider');
  }
  return Cart;
};
