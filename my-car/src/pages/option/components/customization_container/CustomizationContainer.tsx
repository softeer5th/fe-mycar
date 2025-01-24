import { ColorContainer } from './color_container/ColorContainer';
import * as S from './CustomizationContainer.styled';
import { OptionContainer } from './option_container/OptionContainer';
interface CustomizationContainerProps {
  onPriceAdded: (number: number) => void;
}

export const CustomizationContainer = ({ onPriceAdded }: CustomizationContainerProps) => {
  return (
    <S.CustomizationContainer>
      <ColorContainer></ColorContainer>
      <OptionContainer onPriceAdded={(number) => onPriceAdded(number)}></OptionContainer>
      {/* <CompleteButton></CompleteButton> */}
    </S.CustomizationContainer>
  );
};
