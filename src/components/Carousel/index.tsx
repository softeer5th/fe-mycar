import { type PropsWithChildren, type ReactNode, useState } from 'react';
import styled from 'styled-components';

import CarouselControl from './CarouselControl';

interface CarouselProps {
  count: number;
  children: ReactNode[];
}

const Carousel = ({ count, children }: CarouselProps) => {
  const SIZE = children.length;
  const STEPS_COUNT = Math.ceil(SIZE / count);

  const [step, setStep] = useState(0);
  
  const handleClickPlusStep = (index: number) => {
    setStep(index);
  };

  return(
    <CarouselContainer>
      <CarouselButtons>
        {new Array(STEPS_COUNT).fill(0).map((_, i) => 
          <CarouselButton $selected={i === step} onClick={() => handleClickPlusStep(i)}/>)}
      </CarouselButtons>
      <CarouselContents>
        <CarouselItems>
          {children.map((child, index) => <CarouselItem $count={count} key={index}>
            {child}
          </CarouselItem>)}
        </CarouselItems>
        <CarouselControl direction='left'/>
        <CarouselControl direction='right'/>
      </CarouselContents>
    </CarouselContainer>
  ); 
};

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const CarouselContents = styled.div`
  width: 1180px;
  margin: 0 auto;
  overflow: scroll;  
`;

const CarouselItems = styled.ul`
  display: inline-flex;
  gap: 1rem;
`;

const CarouselItem = styled.li<{ $count: number }>`
  display: flex;
  width: 300px;
`;
/* width: calc(1180px - ${({ $count })=>$count-1 *1rem }) */

const CarouselButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`;

const CarouselButton = styled.button<{ $selected: boolean }>`
  width: 12px;
  height: 12px;
  overflow: hidden;
  font-size: 0;
  color: transparent;
  background-color: ${({ theme, $selected }) => 
    $selected ? theme.color.highlight : theme.color['border-dark']};
  border-radius: 6px;
  opacity: 1;
`;

export default Carousel; 

