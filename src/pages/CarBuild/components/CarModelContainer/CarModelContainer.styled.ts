import styled from 'styled-components';

export const CarModelCarouselContainer = styled.div`
  position: relative;
`;

export const IndexButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  gap: 0.8rem;
  top: -3.2rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const IndexButton = styled.button<{ $isSelected: boolean }>`
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.blue400 : theme.colors.gray300};
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
`;

export const CarModelCarousel = styled.div`
  position: relative;
  max-width: 140rem;
  overflow-x: hidden;
  margin: 0 auto;
`;

export const CarouselButton = styled.button`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray350};
  color: ${({ theme }) => theme.colors.white};
  top: 50%;
  transform: translateY(-50%);
  padding: 1.2rem 1.6rem;
  font-size: 2.4rem;
  z-index: 10;
`;

export const CarouselPrevButton = styled(CarouselButton)`
  left: 0;
`;

export const CarouselNextButton = styled(CarouselButton)`
  right: 0;
`;
