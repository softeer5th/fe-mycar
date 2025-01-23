import styled from 'styled-components';

export const CarModelListLayout = styled.ul<{ $currentIdx: number }>`
  display: flex;
  gap: 3.2rem;
  transform: ${({ $currentIdx }) => `translateX(${-143.2 * $currentIdx}rem)`};
  transition: transform 0.5s;
`;
