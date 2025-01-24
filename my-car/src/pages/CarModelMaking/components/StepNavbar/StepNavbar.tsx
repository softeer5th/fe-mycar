import SubStep from "../SubStep/SubStep.tsx";
import {
  StepItem,
  StepItemAnchor,
  StepTitle,
  StepWrapper,
} from "./StepNavbar.styled.ts";

export default function StepNavbar() {
  return (
    <StepWrapper>
      <StepItem>
        <StepItemAnchor first={true}>
          <StepTitle>01</StepTitle>
          모델 선택
        </StepItemAnchor>
      </StepItem>
      <StepItem>
        <StepItemAnchor first={false}>
          <StepTitle>02</StepTitle>내 차 만들기
        </StepItemAnchor>
      </StepItem>
      <SubStep />
    </StepWrapper>
  );
}
