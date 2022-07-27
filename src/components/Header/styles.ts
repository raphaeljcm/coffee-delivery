import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid hsla(0, 0%, 98%, 0.1);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }

  button {
    all: unset;
  }
`;

export const Map = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};
  line-height: 130%;
`;
