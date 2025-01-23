import {
  CardWrapper,
  CarImageWrapper,
  CarImageButton,
  CarImg,
  CarTrimBadge,
  CarTrimDetail,
  CarTrimDetailButton,
  CarTrimDetailImg,
  CarTrimDetailImgWrapper,
  CarTrimDetailsWrapper,
  CarTrimDetailTextWrapper,
  CarTrimPrice,
  CarTrimTitle,
  CreateMyCarButton,
} from "./CarModelCardWraper.styled.ts";

export default function CarModelCardWrapper() {
  return (
    <CardWrapper>
      <CarTrimTitle>E-Value +(스탠다드) 18인치</CarTrimTitle>
      <CarTrimPrice>
        49,450,000 원<CarTrimBadge>Best</CarTrimBadge>
      </CarTrimPrice>
      <CarImageWrapper>
        <CarImageButton>
          <CarImg src="https://www.hyundai.com/contents/vr360/CE02/trim/VH.png"></CarImg>
        </CarImageButton>
      </CarImageWrapper>
      <CarTrimDetailTextWrapper>
        <CarTrimDetail>2WD</CarTrimDetail>
        <CarTrimDetailButton>상세품목</CarTrimDetailButton>
      </CarTrimDetailTextWrapper>
      <CarTrimDetailsWrapper>
        <CarTrimDetailImgWrapper>
          <CarTrimDetailImg src="https://www.hyundai.com/contents/vr360/CE02/trim/VH-USP-001.png"></CarTrimDetailImg>
        </CarTrimDetailImgWrapper>
        <CarTrimDetailImgWrapper>
          <CarTrimDetailImg src="https://www.hyundai.com/contents/vr360/CE02/trim/VH-USP-001.png"></CarTrimDetailImg>
        </CarTrimDetailImgWrapper>
        <CarTrimDetailImgWrapper>
          <CarTrimDetailImg src="https://www.hyundai.com/contents/vr360/CE02/trim/VH-USP-001.png"></CarTrimDetailImg>
        </CarTrimDetailImgWrapper>
      </CarTrimDetailsWrapper>
      <CreateMyCarButton>내 차 만들기</CreateMyCarButton>
    </CardWrapper>
  );
}
