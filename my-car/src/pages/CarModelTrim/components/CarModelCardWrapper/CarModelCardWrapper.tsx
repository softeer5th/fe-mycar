import {
  CardWrapper,
  CarImageWrapper,
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
      <button>
        <CarImageWrapper>
          <CarImg src="https://www.hyundai.com/contents/vr360/CE02/trim/VH.png"></CarImg>
        </CarImageWrapper>
      </button>
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
