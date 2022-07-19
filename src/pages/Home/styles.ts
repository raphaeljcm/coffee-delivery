import styled from 'styled-components';
import backgroundImg from '../../assets/home-background.png';

export const Background = styled.div`
  background: ${props => `url(${backgroundImg}) no-repeat center,
    linear-gradient(
      0deg,
      ${props.theme.white} 0%,
      ${props.theme.background}33 50%,
      ${props.theme.background} 75%,
      ${props.theme.white} 100%
      )`};
  background-size: cover;
  width: 100%;
`;

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding-block: 5rem;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.12rem;
  max-width: 95%;

  > div:first-child {
    h1 {
      font-weight: 800;
      font-family: 'Baloo 2', sans-serif;
      line-height: 130%;
      font-size: 3rem;
      margin-bottom: 1rem;
      color: ${props => props.theme['base-title']};
    }

    p {
      font-size: 1.25rem;
      line-height: 130%;
      color: ${props => props.theme['base-subtitle']};
    }
  }

  > div:last-child {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
  }
`;

export const HomeOption = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme['base-text']};

  &:last-child {
    margin-top: 1rem;
  }

  div {
    display: flex;
    padding: 0.5rem;
    border-radius: 100%;
    background-color: ${({ color }) => color};
    line-height: 130%;

    margin-right: 0.75rem;
  }
`;

export const CoffeesWrapper = styled.section`
  padding-bottom: 5rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
  }
`;
