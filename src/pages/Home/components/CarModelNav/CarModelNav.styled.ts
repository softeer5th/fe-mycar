import styled from 'styled-components';

export const CarModelNavLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  height: 7rem;
  max-width: 112rem;
  margin: 0 auto;
`;

export const TabList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const TabItem = styled.button<{ selected: boolean }>`
  ${({ theme }) => theme.fonts.body.small};
  color: ${({ theme, selected }) => (selected ? theme.colors.blue300 : theme.colors.gray400)};
`;

export const TabTitle = styled.h3`
  ${({ theme }) => theme.fonts.body.medium};
`;

export const TabCheckbox = styled.h3`
  font-size: 1.65rem;
  font-weight: 500;
`;
