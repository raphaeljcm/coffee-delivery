import { createContext, ReactNode, useCallback, useState } from 'react';

type Cart = {
  id: number;
  name: string;
  price: number;
  qtd: number;
  image: string;
};

interface CartContextData {
  productsInCart: Cart[];
  addProductToCart: (newProducts: Cart) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productsInCart, setProductsInCart] = useState<Cart[]>([]);

  const addProductToCart = useCallback((newProducts: Cart) => {
    setProductsInCart(prevProducts => [...prevProducts, newProducts]);
  }, []);

  return (
    <CartContext.Provider value={{ productsInCart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
}
