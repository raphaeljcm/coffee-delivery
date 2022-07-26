import { ShoppingCart, ShoppingCartSimple } from 'phosphor-react';
import { IconWeight } from 'phosphor-react/dist/lib';
import { useProduct } from '../../contexts/ProductContext';
import { CartContainer } from './styles';

interface CartProps {
  variant?: string;
  weight?: IconWeight;
  color: string;
  isCart?: boolean;
  containerColor: 'yellow' | 'purple' | 'purpleDark';
}

export function Cart({
  variant,
  weight,
  color,
  containerColor,
  isCart,
}: CartProps) {
  const { order } = useProduct();

  return (
    <CartContainer color={containerColor} amount={isCart ? order.length : 0}>
      {variant === 'simple' ? (
        <ShoppingCartSimple size={22} />
      ) : (
        <ShoppingCart size={22} weight={weight} color={color} />
      )}
    </CartContainer>
  );
}
