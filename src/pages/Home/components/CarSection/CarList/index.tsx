import { useEffect, useState } from 'react';
import CarItem from './CarItem';
import * as S from './CarList.styled';
import { Car } from '../../../Home.types';
import { getCarList } from '../../../../../api/car';

interface CarListProps {
  selectedTab: string;
}

const CarList = ({ selectedTab }: CarListProps) => {
  const [carList, setCarList] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCarList = async (selectedTab: string) => {
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
