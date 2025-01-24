import {
  CarModelName,
  CarName,
  CarPrice,
  CarSubName,
  Preview,
  Price,
  PriceDescription,
  PriceTitle,
  PriceWrapper,
} from "./CarModelMakingView.styled";

export default function CarModelMakingView() {
  return (
    <Preview>
      <CarModelName>
        <CarName>아이오닉 6 - Exclusive(스탠다드) 18인치</CarName>
        <CarSubName>아이오닉 6 Exclusive(스탠다드) 18인치 2WD</CarSubName>
      </CarModelName>
      <CarPrice>
        <PriceWrapper>
          <PriceTitle>세제혜택 적용 전 차량 가격</PriceTitle>
          <Price>52,090,000 원</Price>
        </PriceWrapper>
        <PriceDescription>
          *세제혜택이 반영된 금액은 견적 완료 시 확인 가능합니다.
        </PriceDescription>
      </CarPrice>
    </Preview>
  );
}
