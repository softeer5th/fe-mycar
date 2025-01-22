import { Suspense } from "react";
import { useParams } from "react-router";
import { fetchModelData } from "../../apis";
import Stepper from "../../components/Stepper";
import ModelCardList from "./components/ModelCardList";

const ModelSelectionPage = () => {
  const { vehicleId } = useParams();
  if (!vehicleId) return null;

  const steps = [{ step: 1, title: "모델 선택" }, { step: 2, title: "내 차 만들기" }];
  const modelDataList = fetchModelData(Number(vehicleId));
  

  return (
  <>
    <Stepper steps={steps} highlightStep={2} separatorType="line" />
    <Suspense fallback={<div>hi</div>}>
      <ModelCardList modelDataList={modelDataList} />
    </Suspense>
  </>
  )
}

export default ModelSelectionPage;