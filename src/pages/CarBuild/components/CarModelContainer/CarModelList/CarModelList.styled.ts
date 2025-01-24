import styled from 'styled-components';

const width = 160;
const gap = 7.2;
const padding = 2;

const totalWidth = width + gap + padding;

export const CarModelListLayout = styled.ul<{ $currentIdx: number }>`
  display: flex;
  gap: 7.2rem;
  transform: ${({ $currentIdx }) => `translateX(${-totalWidth * $currentIdx}rem)`};
  transition: transform 0.5s;
`;
