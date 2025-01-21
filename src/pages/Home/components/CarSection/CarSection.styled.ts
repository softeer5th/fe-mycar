import styled from 'styled-components';

export const CarSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TabList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  height: 7rem;

  button {
    ${({ theme }) => theme.fonts.body.small};
    color: ${({ theme }) => theme.colors.gray400};

    &[data-state='active'] {
      color: ${({ theme }) => theme.colors.blue300};
    }
  }
`;

export const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 112rem;
  margin: 0 auto;
  gap: 10rem;
`;

export const TabTitle = styled.h3`
  ${({ theme }) => theme.fonts.body.medium};
`;

export const TabCheckbox = styled.h3`
  font-size: 1.65rem;
  font-weight: 500;
`;
