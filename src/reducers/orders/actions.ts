import { CartType } from '../../types';

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
}

export function addProductToOrderAction(newProduct: CartType) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      newProduct,
    },
  };
}

export function updateProductAmountAction(productId: number, amount: number) {
  return {
    type: ActionTypes.UPDATE_PRODUCT_AMOUNT,
    payload: {
      productId,
      amount,
    },
  };
}

export function removeProductFromCartAction(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
    },
  };
}
