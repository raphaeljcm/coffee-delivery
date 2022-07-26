import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useProduct } from '../../contexts/ProductContext';
import { CartType, CoffeeType } from '../../types';
import { Cart } from '../Cart';
import { ProductCounterContainer } from './style';

interface ProductCounterProps {
  height: 'small' | 'medium';
  coffee: CartType | CoffeeType;
  isCheckoutPage?: boolean;
}

export function ProductCounter({
  height,
  coffee,
  isCheckoutPage,
}: ProductCounterProps) {
  const { order, addProductToOrder, updateProductAmount } = useProduct();
  const [productAmount, setProductAmount] = useState(() => {
    const isProduct = order.find(prod => prod.id === coffee.id);

    if (isProduct) {
      return isProduct.amount;
    }

    return 0;
  });

  function handleAddProducToCart() {
    if (productAmount === 0) {
      toast.error('Tá querendo adicionar o que patrão?');
      return;
    }
    const product = {
      ...coffee,
      amount: productAmount,
    };
    addProductToOrder(product);
  }

  return (
    <>
      <ProductCounterContainer height={height}>
        <button
          type="button"
          onClick={() => {
            if (isCheckoutPage) {
              setProductAmount(prev => prev - 1);
              updateProductAmount(coffee.id, productAmount - 1);
            } else {
              setProductAmount(prev => prev - 1);
            }
          }}
          disabled={isCheckoutPage ? productAmount <= 1 : productAmount === 0}
        >
          <Minus size={14} weight="bold" color="#8047F8" />
        </button>
        <input type="text" readOnly value={productAmount} />
        <button
          type="button"
          onClick={() => {
            if (isCheckoutPage) {
              setProductAmount(prev => prev + 1);
              updateProductAmount(coffee.id, productAmount + 1);
            } else {
              setProductAmount(prev => prev + 1);
            }
          }}
        >
          <Plus size={14} weight="bold" color="#8047F8" />
        </button>
      </ProductCounterContainer>
      {!isCheckoutPage && (
        <button type="button" onClick={handleAddProducToCart}>
          <Cart color="#F3F2F2" weight="fill" containerColor="purpleDark" />
        </button>
      )}
    </>
  );
}
