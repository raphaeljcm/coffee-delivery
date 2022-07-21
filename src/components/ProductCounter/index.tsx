import { Minus, Plus } from 'phosphor-react';
import { ProductCounterContainer } from './style';

export function ProductCounter() {
  return (
    <ProductCounterContainer height="small">
      <button type="button">
        <Minus size={14} weight="bold" color="#8047F8" />
      </button>
      <input type="text" readOnly value={1} />
      <button type="button">
        <Plus size={14} weight="bold" color="#8047F8" />
      </button>
    </ProductCounterContainer>
  );
}
