import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { ProductCounterContainer } from './style';

interface ProductCounterProps {
  height: 'small' | 'medium';
}

export function ProductCounter({ height }: ProductCounterProps) {
  const [productAmount, setProductAmount] = useState(0);

  function decreaseProductAmount() {
    if (productAmount !== 0) {
      setProductAmount(prev => prev - 1);
    }
  }

  return (
    <ProductCounterContainer height={height}>
      <button type="button" onClick={decreaseProductAmount}>
        <Minus size={14} weight="bold" color="#8047F8" />
      </button>
      <input type="text" readOnly value={productAmount} />
      <button type="button" onClick={() => setProductAmount(prev => prev + 1)}>
        <Plus size={14} weight="bold" color="#8047F8" />
      </button>
    </ProductCounterContainer>
  );
}
