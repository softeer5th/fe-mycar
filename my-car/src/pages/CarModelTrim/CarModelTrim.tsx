import StepNavbar from "./components/StepNavbar/StepNavbar.tsx";
import { useState } from "react";
import { TrimWrapper } from "./components/TrimList/TrimList.tsx";
import TotalModelTextWrapper from "./components/TotalModelTextWrapper/TotalModelTextWrapper.tsx";
import CarModelCardWrapper from "./components/CarModelCardWrapper/CarModelCardWrapper.tsx";
import MultipleItems from "./components/CardSlider/CarSlider.tsx";
import CarSlider from "./components/CardSlider/CarSlider.tsx";

export type TrimTypeNameType = {
  trimTitle: string;
  trimTypeList: string[];
};

export default function CarModelTrim() {
  // 서버한테 받아오면 useEffect 한번 호출하고 끝
  const [trimTypeNameList, setTrimTypeNameList] = useState<TrimTypeNameType[]>([
    {
      trimTitle: "변속기",
      trimTypeList: ["스탠다드", "롱레인지"],
    },
    {
      trimTitle: "변속기",
      trimTypeList: ["스탠다드", "롱레인지"],
    },
    {
      trimTitle: "변속기",
      trimTypeList: ["스탠다드", "롱레인지"],
    },
  ]);

  const [selectedTrim, setSeletedTrim] = useState<number[]>([0, 0, 0]);
  const [totalModelCount, setTotalModelCount] = useState<number>(3);

  return (
    <>
      <StepNavbar />
      <TrimWrapper
        trimTypeNameList={trimTypeNameList}
        selectedTrim={selectedTrim}
        setSeletedTrim={setSeletedTrim}
      />
      <TotalModelTextWrapper count={totalModelCount} />
      <CarSlider />
    </>
  );
}
