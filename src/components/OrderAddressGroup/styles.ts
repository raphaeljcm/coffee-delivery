import styled from 'styled-components';
import { devices, pxToRem } from '../../styles/functions/func';

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: ${pxToRem(200)} 1fr ${pxToRem(60)};
  grid-auto-flow: dense;
  gap: 1rem 0.75rem;

  @media ${devices.mobileL} {
    grid-template-columns: ${pxToRem(100)} 1fr ${pxToRem(60)};
  }

  @media ${devices.mobileS} {
    grid-template-columns: ${pxToRem(80)} 1fr ${pxToRem(50)};
  }

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

      @media ${devices.mobileL} {
        width: ${pxToRem(80)};
      }
    }

    &#complement {
      grid-row-start: 3;
      grid-column-start: span 2;
    }

    &#district {
      grid-row-start: 4;
      width: ${pxToRem(200)};

      @media ${devices.mobileL} {
        width: auto;
        grid-column-start: span 3;
      }
    }

    &#city {
      grid-row-start: 5;
      grid-column-start: span 2;
    }

    &#acronym {
      grid-row-start: 5;
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

      &::placeholder {
        color: ${props => props.theme['base-label']};
      }

      &.error {
        border-color: red;
      }
    }

    p.optional {
      position: absolute;
      top: 1rem;
      right: 1rem;

      font-size: 0.75rem;
      font-weight: 400;
      line-height: 130%;
      color: ${props => props.theme['base-label']};
      font-style: italic;
    }

    p.error {
      font-size: 0.75rem;
      color: red;
      margin-top: 0.5rem;
    }
  }
`;
