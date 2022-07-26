import { CartType } from '../../types';
import { Action, ActionTypes } from './actions';

interface ProductsState {
  order: CartType[];
}

export function productsReducer(
  state: ProductsState,
  action: Action
): ProductsState {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const product = state.order.find(
        prod => prod.id === action.payload.newProduct.id
      );

      if (product) {
        const products = state.order.map(prod => {
          if (prod.id === action.payload.newProduct.id) {
            return { ...prod, amount: action.payload.newProduct.amount };
          }
          return prod;
        });
        return {
          order: [...products],
        };
      }
      return {
        order: [...state.order, action.payload.newProduct],
      };
    }

    case ActionTypes.UPDATE_PRODUCT_AMOUNT: {
      const newProducts = state.order.map(prod => {
        if (prod.id === action.payload.productId) {
          return { ...prod, amount: action.payload.amount };
        }

        return prod;
      });

      return {
        order: [...newProducts],
      };
    }

    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const products = state.order.filter(
        prod => prod.id !== action.payload.productId
      );

      return {
        order: [...products],
      };
    }
    default:
      return state;
  }
}
