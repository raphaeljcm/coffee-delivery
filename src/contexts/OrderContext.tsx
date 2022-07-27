import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { Order } from '../types';

interface OrderContextData {
  order: Order;
  addOrder: (newOrder: Order) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

const OrderContext = createContext({} as OrderContextData);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState({} as Order);

  const addOrder = useCallback((newOrder: Order) => {
    try {
      setOrder(newOrder);
      toast.success('Pedido realizado!');
    } catch (err) {
      toast.error('Ocorreu um erro, por favor tente novamente');
    }
  }, []);

  return (
    <OrderContext.Provider value={{ order, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);
