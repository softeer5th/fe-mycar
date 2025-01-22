import { useEffect, useState } from 'react';
import CarModelList from './CarModelList';
import useTabContext from '../../../../hooks/useTabContext';
import { CarModel } from '../../CarBuild.types';

const CarModelContainer = ({ engineType }: { engineType: string }) => {
  const [carModelList, setCarModelList] = useState<CarModel[]>([]);
  const { selectedTab } = useTabContext();

  useEffect(() => {
    const fetchCarModelList = async (engineType: string) => {
      const res = await fetch(`/car/model?engine=${engineType}`);
      const result = await res.json();
      setCarModelList(result);
    };

    if (selectedTab === engineType) {
      fetchCarModelList(engineType);
    }
  }, [selectedTab, engineType]);

  return (
    <>
      <div>
        <span>모델 비교</span>
        <span>|</span>
        <span>전체 모델 ({carModelList.length})</span>
      </div>
      <CarModelList carModelList={carModelList} />
    </>
  );
};

export default CarModelContainer;
