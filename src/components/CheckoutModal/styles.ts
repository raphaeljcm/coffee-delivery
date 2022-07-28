import styled from 'styled-components';

export const ModalContainer = styled.div`
  text-align: center;

  h2 {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 48%;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      padding-block: 1rem;
    }

    .cancel {
      color: #e92929;
      border: 1px solid #e92929;
      background-color: transparent;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }

    .confirm {
      background-color: ${props => props.theme.yellow};
      color: ${props => props.theme.white};

      &:hover {
        background-color: ${props => props.theme['yellow-dark']};
      }
    }
  }
`;
