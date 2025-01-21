import styled from 'styled-components';

export const CarListLayout = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8rem 4rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray300};

  padding: 5rem 32rem 0 32rem;
`;
