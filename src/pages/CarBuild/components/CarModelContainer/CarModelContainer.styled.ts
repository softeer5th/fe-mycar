import styled from 'styled-components';

export const CarModelCarousel = styled.div`
  position: relative;
  max-width: 140rem;
  overflow: hidden;
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
