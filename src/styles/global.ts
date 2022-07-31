import { createGlobalStyle } from 'styled-components';
import { devices } from './functions/func';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline-color: ${props => props.theme['yellow-dark']};
  }

  @media ${devices.mobileL} {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .container {
    max-width: min(90rem, 90vw);
    margin-inline: auto;
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme['base-button']};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.purple};
    border-radius: 1rem;
  }

  .react-modal-overlay {
    background-color: rgba(128, 71, 248, .3);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 90vw;
    max-width: 576px;
    background-color: ${props => props.theme.background};
    padding: 1.5rem 2.12rem;
    position: relative;
    border-radius: .24rem;

    p {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .2s;

    &:hover {
      filter: brightness(.8);
    }
  }
`;
