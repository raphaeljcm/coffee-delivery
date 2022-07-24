import { CartType } from '../../types';

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
}

export type Action =
  | { type: ActionTypes.ADD_PRODUCT_TO_CART; payload: { newProduct: CartType } }
  | {
      type: ActionTypes.UPDATE_PRODUCT_AMOUNT;
      payload: { productId: number; amount: number };
    }
  | {
      type: ActionTypes.REMOVE_PRODUCT_FROM_CART;
      payload: { productId: number };
    };
