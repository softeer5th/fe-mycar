import styled from 'styled-components';

export const CarItemLayout = styled.li`
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Name = styled.span`
  ${({ theme }) => theme.fonts.label.large};
`;

export const Price = styled.span`
  ${({ theme }) => theme.fonts.label.small};
`;
