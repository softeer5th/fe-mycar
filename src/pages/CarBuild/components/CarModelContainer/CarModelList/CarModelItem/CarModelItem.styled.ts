import styled from 'styled-components';

export const CarModelItemLayout = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.beige350};
  padding: 3rem;
  gap: 2rem;
  width: calc(25% - 2.4rem);
`;

export const ItemHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ModelTitle = styled.span`
  ${({ theme }) => theme.fonts.label.sl};
`;

export const ModelPrice = styled.span`
  ${({ theme }) => theme.fonts.label.large};
  font-weight: 700;
`;

export const BestBadge = styled.span`
  position: absolute;
  bottom: -3rem;
  ${({ theme }) => theme.fonts.label.small};
  background-color: ${({ theme }) => theme.colors.red400};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.4rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    ${({ theme }) => theme.fonts.body.small}
    color: ${({ theme }) => theme.colors.navy};
    flex-shrink: 0;
  }
`;

export const Description = styled.span`
  ${({ theme }) => theme.fonts.body.small}
  color: ${({ theme }) => theme.colors.gray400};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const OptionList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2.4rem;

  img {
    width: 6.5rem;
  }
`;

export const BuildButton = styled.button`
  ${({ theme }) => theme.fonts.body.small}
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  height: 5rem;
`;
