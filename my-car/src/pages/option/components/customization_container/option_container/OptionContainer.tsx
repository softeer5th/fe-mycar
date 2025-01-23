import * as S from './OptionContainer.styled';
import * as C from '../color_container/ColorContainer.styled';
import { useState } from 'react';

interface OptionContainerProps {
  onPriceAdded: (number: number) => void;
}

export const OptionContainer = ({ onPriceAdded }: OptionContainerProps) => {
  const [isSelected, setIsSelected] = useState(true);
  const [isDefault, setIsDefault] = useState(true);
  const [currentPrice, setCurrentPrice] = useState<number[]>([]);

  return (
    <S.OptionContainer>
      <C.TitleText>옵션 </C.TitleText>
      <S.TabbarContainer>
        <S.Tabbar>
          <S.TabbarItem
            isSelected={isSelected === true}
            onClick={() => {
              setIsSelected(true);
            }}
          >
            선택 품목
          </S.TabbarItem>
          <S.TabbarItem
            isSelected={isSelected === false}
            onClick={() => {
              setIsSelected(false);
            }}
          >
            기본 포함 품목
          </S.TabbarItem>
        </S.Tabbar>
        <S.DynamicContent>
          <S.DivisionContainer>
            <S.SubTitleText>구분</S.SubTitleText>
            <S.DivisionList>
              <S.DivisionListItem
                isDefault={isDefault === true}
                onClick={() => {
                  setIsDefault(true);
                }}
              >
                기본
              </S.DivisionListItem>
              <S.DivisionListItem
                isDefault={isDefault === false}
                onClick={() => {
                  setIsDefault(false);
                }}
              >
                빌트인캠 <br /> 690,000
              </S.DivisionListItem>
            </S.DivisionList>
          </S.DivisionContainer>
          <S.DetailProductContainer>
            <S.SubTitleText>상세 품목</S.SubTitleText>
            <S.DetailProductList>
              <S.DetailProductListItem
                isSelected={currentPrice.includes(0)}
                onClick={() => {
                  if (currentPrice.includes(0)) {
                    setCurrentPrice(currentPrice.filter((price) => price !== 0));
                    onPriceAdded(-490_000);
                    return;
                  } else {
                    setCurrentPrice([...currentPrice, 0]);
                    onPriceAdded(490_000);
                  }
                }}
              >
                <S.ItemImage src="/src/assets/option_example.png" />
                <S.ItemContainer>
                  <S.ItemTitleContainer>
                    <S.ItemTitle>프론트 블랙 그릴</S.ItemTitle>
                    <S.ItemContent>dwdw</S.ItemContent>
                  </S.ItemTitleContainer>

                  <S.ItemPriceText>690,000 원</S.ItemPriceText>
                </S.ItemContainer>
              </S.DetailProductListItem>
            </S.DetailProductList>
          </S.DetailProductContainer>
        </S.DynamicContent>
      </S.TabbarContainer>
    </S.OptionContainer>
  );
};
