import { ShoppingCart, ShoppingCartSimple } from "phosphor-react";
import { IconWeight } from "phosphor-react/dist/lib";
import { CartContainer } from "./styles";

interface CartProps {
  variant?: string;
  weight?: IconWeight;
  color: string;
}

export function Cart({ variant, weight, color }: CartProps) {
  return (
    <CartContainer color="yellow">
      {variant === "simple" ? (
        <ShoppingCartSimple size={22} />
      ) : (
        <ShoppingCart size={22} weight={weight} color={color} />
      )}
    </CartContainer>
  );
}
