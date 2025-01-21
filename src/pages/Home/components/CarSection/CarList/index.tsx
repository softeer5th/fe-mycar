import { useEffect, useState } from 'react';
import CarItem from './CarItem';
import * as S from './CarList.styled';
import { Car, TabValue } from '../../../Home.types';
import { getCarList } from '../../../../../api/car';

interface CarListProps {
  selectedTab: TabValue;
}

const CarList = ({ selectedTab }: CarListProps) => {
  const [carList, setCarList] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCarList = async (selectedTab: TabValue) => {
      const data = await getCarList(selectedTab);
      setCarList(data);
    };

    fetchCarList(selectedTab);
  }, [selectedTab]);

  return (
    <S.CarListLayout>
      {carList.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </S.CarListLayout>
  );
};

export default CarList;
