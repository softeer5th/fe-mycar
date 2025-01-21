import { useEffect, useState } from 'react';
import CarItem from './CarItem';
import * as S from './CarList.styled';

const electronicCarList = [
  {
    id: 1,
    imgSrc: 'https://www.hyundai.com/contents/repn-car/side-45/casper_ev_45side.png',
    name: '캐스퍼 일렉트릭',
    price: 30000000,
  },
  {
    id: 2,
    imgSrc: 'https://www.hyundai.com/contents/repn-car/side-45/casper_ev_45side.png',
    name: '캐스퍼 일렉트릭',
    price: 30000000,
  },
  {
    id: 3,
    imgSrc: 'https://www.hyundai.com/contents/repn-car/side-45/casper_ev_45side.png',
    name: '캐스퍼 일렉트릭',
    price: 30000000,
  },
  {
    id: 4,
    imgSrc: 'https://www.hyundai.com/contents/repn-car/side-45/casper_ev_45side.png',
    name: '캐스퍼 일렉트릭',
    price: 30000000,
  },
];

const passengerCarList = [
  {
    id: 1,
    imgSrc: 'https://www.hyundai.com/contents/repn-car/side-45/casper_ev_45side.png',
    name: '승용차',
    price: 30000000,
  },
  {
    id: 2,
    imgSrc: 'https://www.hyundai.com/contents/repn-car/side-45/casper_ev_45side.png',
    name: '승용차',
    price: 30000000,
  },
  {
    id: 3,
    imgSrc: 'https://www.hyundai.com/contents/repn-car/side-45/casper_ev_45side.png',
    name: '승용차',
    price: 30000000,
  },
  {
    id: 4,
    imgSrc: 'https://www.hyundai.com/contents/repn-car/side-45/casper_ev_45side.png',
    name: '승용차',
    price: 30000000,
  },
];

interface CarListProps {
  selectedTab: string;
}

const CarList = ({ selectedTab }: CarListProps) => {
  const [carList, setCarList] = useState(electronicCarList);

  useEffect(() => {
    if (selectedTab === 'passenger') {
      setCarList(passengerCarList);
    } else if (selectedTab === 'electronic') {
      setCarList(electronicCarList);
    }
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
