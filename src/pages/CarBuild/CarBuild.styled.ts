import styled from 'styled-components';

export const TabList = styled.ul`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray300};

  button {
    ${({ theme }) => theme.fonts.body.small};
    color: ${({ theme }) => theme.colors.gray400};
    width: 10.9rem;
    transition: color 0.5s, background-color 0.5s;
    padding: 1.2rem 1rem;

    &[data-state='active'] {
      background-color: ${({ theme }) => theme.colors.blue400};
      color: ${({ theme }) => theme.colors.white};
      border: 0.1rem solid ${({ theme }) => theme.colors.blue400};
    }
  }
`;
