/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */

'use client';

import {
  ReactNode, useContext, useState,
} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from './CartContext';

type CartProps = {
  children: ReactNode;
};

export const CartState = ({ children }: CartProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Add to Cart Function
  const AddToCart = (product: Product) => {
    toast.success('Item added to Cart.');
    return setProducts((prev) => [...prev, product]);
  };

  // Remove from Cart Function
  const RemoveItem = (productId: number) => {
    toast.success('Item Removed.');
    return setProducts(products?.filter((product) => product?.id !== productId));
  };

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
