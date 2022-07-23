import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { CartType } from '../types';

interface OrderContextData {
  productsInCart: CartType[];
  addProductToOrder: (newProducts: CartType) => void;
  updateProductAmount: (productId: number, amount: number) => void;
  removeProductFromCart: (productId: number) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

const OrderContext = createContext({} as OrderContextData);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [productsInCart, setProductsInCart] = useState<CartType[]>([]);

  const addProductToOrder = useCallback(
    (newProduct: CartType) => {
      const product = productsInCart.find(prod => prod.id === newProduct.id);

      if (product) {
        const products = productsInCart.map(prod => {
          if (prod.id === newProduct.id) {
            return { ...prod, amount: newProduct.amount };
          }
          return prod;
        });

        setProductsInCart(products);
      } else {
        setProductsInCart(prevProducts => [...prevProducts, newProduct]);
      }
    },
    [productsInCart]
  );

  const updateProductAmount = useCallback(
    (productId: number, amount: number) => {
      const newProducts = productsInCart.map(prod => {
        if (prod.id === productId) {
          return { ...prod, amount };
        }

        return prod;
      });

      setProductsInCart(newProducts);
    },
    [productsInCart]
  );

  const removeProductFromCart = useCallback(
    (productId: number) => {
      const products = productsInCart.filter(prod => prod.id !== productId);

      setProductsInCart(products);
    },
    [productsInCart]
  );

  return (
    <OrderContext.Provider
      value={{
        productsInCart,
        addProductToOrder,
        updateProductAmount,
        removeProductFromCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);
