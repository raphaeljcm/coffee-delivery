import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import { toast } from 'react-toastify';
import { ActionTypes } from '../reducers/orders/actions';
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
      dispatch({
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload: { newProduct },
      });
      toast.success('Produto adicionado com sucesso!');
    } catch (err) {
      toast.error('Não foi possível adicionar o produto');
    }
  }, []);

  const updateProductAmount = useCallback(
    (productId: number, amount: number) => {
      dispatch({
        type: ActionTypes.UPDATE_PRODUCT_AMOUNT,
        payload: { productId, amount },
      });
    },
    []
  );

  const removeProductFromCart = useCallback((productId: number) => {
    try {
      dispatch({
        type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
        payload: { productId },
      });
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
