import Stepper from "../../components/Stepper";

const ModelSelectionPage = () => {
  const steps = [{ step: 1, title: "모델 선택" }, { step: 2, title: "내 차 만들기" }];

  return (
      <Stepper steps={steps} highlightStep={2} separatorType="line" />
  )
}

export default ModelSelectionPage;