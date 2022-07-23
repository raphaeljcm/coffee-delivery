import styled from 'styled-components';
import { pxToRem } from '../../styles/functions/func';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  h2 {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 1rem;
  }
`;

export const FormContainer = styled.div`
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  &:first-child {
    margin-bottom: 0.75rem;
  }

  > div:first-child {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;

    h3 {
      line-height: 130%;
      color: ${props => props.theme['base-subtitle']};
      font-weight: 400;
      font-size: 1rem;
    }

    p {
      line-height: 130%;
      font-size: 0.875rem;
      color: ${props => props.theme['base-text']};
    }
  }
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;

  button {
    background-color: ${props => props.theme['base-button']};
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    min-width: ${pxToRem(200)};
    color: ${props => props.theme['base-text']};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    transition: all 400ms;

    &:hover {
      background-color: ${props => props.theme['base-hover']};
      color: ${props => props.theme['base-subtitle']};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${props => props.theme.purple};
      background-color: ${props => props.theme['purple-light']};
    }
  }
`;

export const ConfirmOrderContainer = styled.div`
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px ${pxToRem(44)};
  padding: 2.5rem;

  > div:last-of-type {
    display: flex;
    justify-content: space-between;
    margin-top: ${pxToRem(24)};

    p {
      font-weight: 400;
      color: ${props => props.theme['base-text']};
      font-size: 1rem;
      line-height: 130%;
    }

    p + p {
      margin-top: ${pxToRem(14)};
    }

    > div:last-child {
      text-align: right;
    }

    div p:last-child {
      font-weight: 700;
      color: ${props => props.theme['base-subtitle']};
      font-size: ${pxToRem(20)};
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: ${pxToRem(12)} ${pxToRem(8)};
    background-color: ${props => props.theme.yellow};
    border-radius: 6px;
    color: ${props => props.theme.white};
    font-weight: 700;
    font-size: ${pxToRem(14)};
    line-height: 160%;
    text-transform: uppercase;
    border: 0;
    cursor: pointer;
    margin-top: ${pxToRem(24)};

    transition: background-color 400ms;

    &:hover {
      background-color: ${props => props.theme['yellow-dark']};
    }
  }
`;

export const ProductInCart = styled.div`
  border-bottom: 1px solid ${props => props.theme['base-button']};
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  padding-bottom: ${pxToRem(24)};

  &:not(:first-child) {
    padding-top: ${pxToRem(24)};
  }

  img {
    width: ${pxToRem(64)};
    height: ${pxToRem(64)};
    margin-right: ${pxToRem(20)};
  }

  h3 {
    color: ${props => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  > div:first-of-type {
    > div {
      display: flex;
      gap: 0.5rem;

      > button {
        display: flex;
        align-items: center;
        background-color: ${props => props.theme['base-button']};
        color: ${props => props.theme['base-text']};
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        padding: 0.5rem;
        border: 0;
        border-radius: 6px;
        height: 2rem;
        cursor: pointer;

        transition: background-color 400ms;

        &:hover {
          background-color: ${props => props.theme['base-hover']};
        }

        svg {
          margin-right: 0.2rem;
        }
      }
    }
  }

  > div:last-child {
    margin-left: auto;

    font-weight: 700;
    font-size: 1rem;
    color: ${props => props.theme['base-text']};
    line-height: 130%;

    span {
      margin-left: 0.2rem;
    }
  }
`;
