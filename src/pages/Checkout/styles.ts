import styled from 'styled-components';

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

  > div:last-child {
    display: flex;
    column-gap: 1rem;
    row-gap: 0.75rem;
  }
`;

export const Input = styled.input`
  background-color: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  padding: 0.75rem;
  border-radius: 4px;
  color: ${props => props.theme['base-text']};
  font-size: 0.875rem;

  // HIDE ARROWS FROM INPUT NUMBER
  /* Chrome, Safari, Edge, Opera */
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  ::placeholder {
    color: ${props => props.theme['base-label']};
  }

  &:nth-child(1),
  &:nth-child(3),
  &:nth-child(5) {
    max-width: 12.5rem;
  }
  &:last-child {
    max-width: 3.75rem;
  }
`;
