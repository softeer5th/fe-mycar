import React from 'react';
import * as S from './CustomizationContainer.styled';
export const CustomizationContainer = () => {
  return (
    <S.CustomizationContainer>
      <S.ColorContainer>
        <S.TitleText>색상</S.TitleText>
        <S.ExteriorColorContainer>
          <S.SubTitleContainer>
            <S.SubTitleText>외장색상</S.SubTitleText>
            <S.SelectedColorText>녹턴 그레이 메탈릭</S.SelectedColorText>
          </S.SubTitleContainer>
          <S.ExteriorColorList>
            <S.ExteriorColorItem></S.ExteriorColorItem>
          </S.ExteriorColorList>
        </S.ExteriorColorContainer>
        <S.InteriorColorContainer>
          <S.SubTitleContainer>
            <S.SubTitleText>내장색상</S.SubTitleText>
            <S.SelectedColorText>블랙모노톤</S.SelectedColorText>
          </S.SubTitleContainer>
          <S.InteriorColorList>
            <S.InteriorColorItem></S.InteriorColorItem>
          </S.InteriorColorList>
        </S.InteriorColorContainer>
      </S.ColorContainer>

      {/* <OptionContainer>
        <TitleText></TitleText>
        <TabbarContainer>
          <Tabbar></Tabbar>
          <DynamicContent>
            <DivisionContainer></DivisionContainer>
            <DetailProductContainer></DetailProductContainer>
          </DynamicContent>
        </TabbarContainer>
      </OptionContainer>

      <CompleteButton></CompleteButton> */}
    </S.CustomizationContainer>
  );
};
