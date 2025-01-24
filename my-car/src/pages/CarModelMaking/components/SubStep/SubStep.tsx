import { SubStepIcon, SubStepItem, SubStepWrapper } from "./SubStep.styled";

export default function SubStep() {
  return (
    <SubStepWrapper>
      <SubStepItem>외장 색상</SubStepItem>
      <SubStepIcon>&gt;</SubStepIcon>
      <SubStepItem>내장 색상</SubStepItem>
      <SubStepIcon>&gt;</SubStepIcon>
      <SubStepItem>옵션</SubStepItem>
    </SubStepWrapper>
  );
}
