import CarItem from './CarItem';
import * as S from './CarList.styled';

const carList = [
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

const CarList = () => {
  return (
    <S.CarListLayout>
      {carList.map((car) => (
        <CarItem car={car} />
      ))}
    </S.CarListLayout>
  );
};

export default CarList;
