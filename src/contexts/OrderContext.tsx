import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import { toast } from 'react-toastify';
import {
  addProductToOrderAction,
  removeProductFromCartAction,
  updateProductAmountAction,
} from '../reducers/orders/actions';
import { ordersReducer } from '../reducers/orders/reducer';
import { CartType } from '../types';

interface OrderContextData {
  order: CartType[];
  addProductToOrder: (newProducts: CartType) => void;
  updateProductAmount: (productId: number, amount: number) => void;
  removeProductFromCart: (productId: number) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

const OrderContext = createContext({} as OrderContextData);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [productsInCartState, dispatch] = useReducer(ordersReducer, {
    order: [],
  });

  const { order } = productsInCartState;

  const addProductToOrder = useCallback((newProduct: CartType) => {
    try {
      dispatch(addProductToOrderAction(newProduct));
      toast.success('Produto adicionado com sucesso!');
    } catch (err) {
      toast.error('Não foi possível adicionar o produto');
    }
  }, []);

  const updateProductAmount = useCallback(
    (productId: number, amount: number) => {
      dispatch(updateProductAmountAction(productId, amount));
    },
    []
  );

  const removeProductFromCart = useCallback((productId: number) => {
    try {
      dispatch(removeProductFromCartAction(productId));
      toast.success('Produto removido com sucesso');
    } catch (err) {
      toast.error('Não foi possível remover o produto');
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{
        order,
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
