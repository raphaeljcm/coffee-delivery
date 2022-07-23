import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { useOrder } from '../../contexts/OrderContext';
import { Cart } from '../Cart';
import { ProductCounterContainer } from './style';

type Coffee = {
  id: number;
  name: string;
  image: string;
  price: number;
};

interface ProductCounterProps {
  height: 'small' | 'medium';
  coffee: Coffee;
  isCheckoutPage?: boolean;
}

export function ProductCounter({
  height,
  coffee,
  isCheckoutPage,
}: ProductCounterProps) {
  const [productAmount, setProductAmount] = useState(0);
  const { addProductToOrder } = useOrder();

  function decreaseProductAmount() {
    if (productAmount !== 0) {
      setProductAmount(prev => prev - 1);
    }
  }

  function addToCart() {
    if (productAmount === 0) {
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
          onClick={decreaseProductAmount}
          disabled={productAmount === 0}
        >
          <Minus size={14} weight="bold" color="#8047F8" />
        </button>
        <input type="text" readOnly value={productAmount} />
        <button
          type="button"
          onClick={() => setProductAmount(prev => prev + 1)}
        >
          <Plus size={14} weight="bold" color="#8047F8" />
        </button>
      </ProductCounterContainer>
      {!isCheckoutPage && (
        <button type="button" onClick={addToCart}>
          <Cart color="#F3F2F2" weight="fill" containerColor="purpleDark" />
        </button>
      )}
    </>
  );
}
