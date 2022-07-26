import styled from 'styled-components';
import { pxToRem } from '../../styles/functions/func';

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: ${pxToRem(200)} 1fr ${pxToRem(60)};
  grid-auto-flow: dense;
  gap: 1rem 0.75rem;

  div {
    position: relative;
    &#cep {
      width: ${pxToRem(200)};
    }

    &#street {
      grid-row-start: 2;
      grid-column-start: span 3;
    }

    &#number {
      grid-row-start: 3;
      width: ${pxToRem(200)};
    }

    &#complement {
      grid-row-start: 3;
      grid-column-start: span 2;
    }

    &#district {
      grid-row-start: 4;
      width: ${pxToRem(200)};
    }

    &#city {
      grid-row-start: 4;
      grid-column-start: span 1;
    }

    &#acronym {
      grid-row-start: 4;
    }

    input {
      background-color: ${props => props.theme['base-input']};
      border: 1px solid ${props => props.theme['base-button']};
      padding: 0.75rem;
      border-radius: 4px;
      color: ${props => props.theme['base-text']};
      font-size: 0.875rem;
      width: 100%;

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
    }

    p {
      position: absolute;
      top: 1rem;
      right: 1rem;

      font-size: 0.75rem;
      font-weight: 400;
      line-height: 130%;
      color: ${props => props.theme['base-label']};
      font-style: italic;
    }
  }
`;
