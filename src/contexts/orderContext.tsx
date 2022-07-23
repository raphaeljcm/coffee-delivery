import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { toast } from 'react-toastify';
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
      try {
        const product = productsInCart.find(prod => prod.id === newProduct.id);

        if (product) {
          const products = productsInCart.map(prod => {
            if (prod.id === newProduct.id) {
              return { ...prod, amount: newProduct.amount };
            }
            return prod;
          });

          setProductsInCart(products);
          toast.success('Produto adicionado com sucesso!');
        } else {
          setProductsInCart(prevProducts => [...prevProducts, newProduct]);
          toast.success('Produto adicionado com sucesso!');
        }
      } catch (err) {
        toast.error('Não foi possível adicionar o produto');
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
      try {
        const products = productsInCart.filter(prod => prod.id !== productId);

        setProductsInCart(products);
        toast.success('Produto removido com sucesso');
      } catch (err) {
        toast.error('Não foi possível remover o produto');
      }
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
