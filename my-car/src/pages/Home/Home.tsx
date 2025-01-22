
import HomeBanner from "./components/HomeBanner/HomeBanner.tsx";
import TabMenu from "./components/TabMenu/TabMenu.tsx";
import CarModelList from "./components/CarModelList/CarModelList.tsx";
import {useState} from "react";


export type carModelSelectionType = number

export default function Home() {

  const [carModelSelection, setCarModelSelection] = useState<carModelSelectionType>(0)

  return (
    <>
      <HomeBanner/>
      <TabMenu setCarModelSelection={setCarModelSelection} carModelSelection={carModelSelection} />
      <div style={{ borderBottom: "1px solid #e5e5e5" }}></div>

      <CarModelList carModelSelection={carModelSelection} />
    </>
  );
}
