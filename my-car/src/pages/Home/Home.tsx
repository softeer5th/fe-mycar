import HomeBanner from "./components/HomeBanner/HomeBanner.tsx";
import TabMenu from "./components/TabMenu/TabMenu.tsx";
import CarModelList from "./components/CarModelList/CarModelList.tsx";
import {useEffect, useState} from "react";
import {url, port} from "../../mocks/handlers.ts";

export type carModelSelectionType = number;

export type CarModelItemType = {
    src: string,
    carName: string,
    price: string,
    badge: string,
    carId: number,
}

export type CarModelItemListType = {
    type: string,
    carList: CarModelItemType[],
}

export default function Home() {
  const [carModelSelection, setCarModelSelection] = useState<carModelSelectionType>(0);
  const [carModelItemLists, setCarModelItemLists] = useState<CarModelItemListType[]>()

    useEffect(() => {
        fetch(`${url}${port}/api/home`).then((res) => {
            res.json().then(({data}) => {
                setCarModelItemLists(data)
            });
        })
    }, []);


  return (
    <>
      <HomeBanner />
      <TabMenu
        setCarModelSelection={setCarModelSelection}
        carModelSelection={carModelSelection}
      />
      <div style={{ borderBottom: "1px solid #e5e5e5" }}></div>

        {carModelItemLists != null ? <CarModelList carModelItemList={carModelItemLists[carModelSelection]}/> : null}
    </>
  );
}
