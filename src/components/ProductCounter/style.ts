import styled from 'styled-components';

export const ProductCounterContainer = styled.div`
  position: relative;

  button {
    background-color: transparent;
    border: none;
    line-height: 0;
    position: absolute;
    z-index: 1;
    top: 0.65rem;

    &:hover {
      > svg {
        cursor: pointer;
        line {
          transition: stroke 700ms;
          stroke: ${props => props.theme['purple-dark']};
        }
      }
    }
  }

  button:first-of-type {
    left: 0.5rem;
  }

  button:last-of-type {
    right: 0.5rem;
  }
`;
