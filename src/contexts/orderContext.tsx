import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

type Cart = {
  id: number;
  name: string;
  price: number;
  qtd: number;
  image: string;
};

interface OrderContextData {
  productsInCart: Cart[];
  addProductToCart: (newProducts: Cart) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

const OrderContext = createContext({} as OrderContextData);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [productsInCart, setProductsInCart] = useState<Cart[]>([]);

  const addProductToCart = useCallback((newProducts: Cart) => {
    setProductsInCart(prevProducts => [...prevProducts, newProducts]);
  }, []);

  return (
    <OrderContext.Provider value={{ productsInCart, addProductToCart }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);
