import * as S from './PreviewContainer.styled';
import { useState } from 'react';

export const PreviewContainer = () => {
  const [preview, setPreview] = useState({
    exterior: {
      color: 'black pearl',
      url: '/src/assets/car_making_preview.png',
    },
    interior: {
      color: 'white',
      url: '/src/assets/car_making_preview_interior.png',
    },
  });

  const [isExterior, setIsExterior] = useState(true);

  return (
    <S.PreviewContainer>
      <S.HeaderContainer>
        <S.TitleContainer>
          <S.TitleText>아이오닉 6</S.TitleText>
          <S.ContentContainer>
            <S.ContentText>아이오닉 6은 2022년 출시된 전기차입니다</S.ContentText>
            <S.ContentButton>모델 변경 카탈로그</S.ContentButton>
          </S.ContentContainer>
        </S.TitleContainer>
        <S.PriceContainer>100원</S.PriceContainer>
      </S.HeaderContainer>

      <S.ImageContainer>
        <S.Image src={isExterior ? preview.exterior.url : preview.interior.url} />

        <S.Toggle>
          <S.ToggleItem
            isSelected={isExterior}
            onClick={() => {
              setIsExterior(true);
            }}
          >
            Exterior
          </S.ToggleItem>
          <S.ToggleItem
            isSelected={!isExterior}
            onClick={() => {
              setIsExterior(false);
            }}
          >
            Interior
          </S.ToggleItem>
        </S.Toggle>
      </S.ImageContainer>
    </S.PreviewContainer>
  );
};
