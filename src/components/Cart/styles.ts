import styled, { css } from 'styled-components';

const CART_COLORS = {
  yellow: 'yellow-light',
  purple: 'purple',
  purpleDark: 'purple-dark',
} as const;

interface CartContainerProps {
  color: keyof typeof CART_COLORS;
  amount?: number;
}

export const CartContainer = styled.div<CartContainerProps>`
  background-color: ${props => props.theme[CART_COLORS[props.color]]};
  color: ${props => props.theme.white};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  position: relative;

  transition: background-color 300ms;

  ${({ amount }) =>
    amount &&
    css`
      &::before {
        content: '${amount}';
        background-color: ${props => props.theme['yellow-dark']};
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 100%;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
      }
    `}

  ${({ color }) =>
    color === 'purpleDark' &&
    css`
      &:hover {
        background-color: ${props => props.theme.purple};
      }
    `}
`;
