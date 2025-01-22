import { useEffect, useState } from 'react';
import useTabContext from '../../../../hooks/useTabContext';
import CarModelItem from './CarModelItem';
import { CarModel } from '../../CarBuild.types';

const CarModelList = ({ engineType }: { engineType: string }) => {
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
    <ul>
      {carModelList.map((carModel) => (
        <CarModelItem key={carModel.id} carModel={carModel} />
      ))}
    </ul>
  );
};

export default CarModelList;
