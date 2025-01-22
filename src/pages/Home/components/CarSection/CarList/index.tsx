import { useEffect, useState } from 'react';
import CarItem from './CarItem';
import * as S from './CarList.styled';
import { Car } from '../../../Home.types';
import { getCarList } from '../../../../../api/car';
import useTabContext from '../../../../../hooks/useTabContext';

interface CarListProps {
  tab: string;
}

const CarList = ({ tab }: CarListProps) => {
  const { selectedTab } = useTabContext();
  const [carList, setCarList] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCarList = async (selectedTab: string) => {
      const data = await getCarList(selectedTab);
      setCarList(data);
    };

    if (tab === selectedTab) {
      fetchCarList(selectedTab);
    }
  }, [selectedTab, tab]);

  return (
    <S.CarListLayout>
      {carList.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </S.CarListLayout>
  );
};

export default CarList;
