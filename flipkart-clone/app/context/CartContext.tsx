import { createContext } from 'react';

export type CartProps = {
  AddToCart: (product: Product) => void;
  RemoveItem: (productId: number) => Product[];
  products: Product[];
};
export const CartContext = createContext<CartProps | null>(null);
