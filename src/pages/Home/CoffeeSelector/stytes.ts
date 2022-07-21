import styled from 'styled-components';

export const CoffeeContainer = styled.div`
  width: 16rem;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: relative;
    top: -1rem;
    margin-bottom: 0.5rem;
  }

  img + div {
    background-color: ${props => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    color: ${props => props.theme['yellow-dark']};
    font-weight: 700;
    line-height: 130%;
    font-size: 0.625rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme['base-subtitle']};
    line-height: 130%;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme['base-label']};
    line-height: 130%;
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const CoffeeDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:first-child {
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};

    span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      margin-left: 0.3rem;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
