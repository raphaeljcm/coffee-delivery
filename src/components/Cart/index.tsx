import { ShoppingCart, ShoppingCartSimple } from 'phosphor-react';
import { IconWeight } from 'phosphor-react/dist/lib';
import { useOrder } from '../../contexts/OrderContext';
import { CartContainer } from './styles';

interface CartProps {
  variant?: string;
  weight?: IconWeight;
  color: string;
  containerColor: 'yellow' | 'purple' | 'purpleDark';
}

export function Cart({ variant, weight, color, containerColor }: CartProps) {
  const { productsInCart } = useOrder();

  return (
    <CartContainer color={containerColor} amount={productsInCart.length}>
      {variant === 'simple' ? (
        <ShoppingCartSimple size={22} />
      ) : (
        <ShoppingCart size={22} weight={weight} color={color} />
      )}
    </CartContainer>
  );
}
