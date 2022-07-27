import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import { toast } from 'react-toastify';
import { ActionTypes } from '../reducers/orders/actions';
import { productsReducer } from '../reducers/orders/reducer';
import { CartType } from '../types';

interface ProductContextData {
  order: CartType[];
  addProductToOrder: (newProducts: CartType) => void;
  updateProductAmount: (productId: number, amount: number) => void;
  removeProductFromCart: (productId: number) => void;
  resetProduct: () => void;
}

interface ProductContextProviderProps {
  children: ReactNode;
}

const ProductContext = createContext({} as ProductContextData);

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [productsInCartState, dispatch] = useReducer(productsReducer, {
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

  const resetProduct = useCallback(() => {
    try {
      dispatch({ type: ActionTypes.RESET_STATE });
    } catch (err) {
      toast.error('An error ocurred');
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{
        order,
        addProductToOrder,
        updateProductAmount,
        removeProductFromCart,
        resetProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => useContext(ProductContext);
