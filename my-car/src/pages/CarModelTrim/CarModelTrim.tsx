import StepNavbar from "./components/StepNavbar/StepNavbar.tsx";
import {useEffect, useState} from "react";
import { TrimWrapper } from "./components/TrimList/TrimList.tsx";
import TotalModelTextWrapper from "./components/TotalModelTextWrapper/TotalModelTextWrapper.tsx";
import CarSlider from "./components/CardSlider/CarSlider.tsx";
import {TrimLayout} from "./components/TrimLayout/TrimLayout.styled.ts";
import {port, url} from "../../mocks/handlers.ts";

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


  useEffect(() => {
    fetch(`${url}${port}/api/carModelSelection?carId=1&trimNameList=1`).then((res) => {
      res.json().then(({data}) => {
        console.log(data)
      });
    })
  }, []);

  return (
    <>
      <StepNavbar />
      <TrimLayout>
        <TrimWrapper
            trimTypeNameList={trimTypeNameList}
            selectedTrim={selectedTrim}
            setSeletedTrim={setSeletedTrim}
        />
        <TotalModelTextWrapper count={totalModelCount} />
        <CarSlider />
      </TrimLayout>
    </>
  );
}
