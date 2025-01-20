import * as S from './CarItem.styled';

interface Car {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
}

interface CarItemProps {
  car: Car;
}

const CarItem = ({ car }: CarItemProps) => {
  return (
    <S.CarItemLayout>
      <img src={car.imgSrc} alt="현대차" />
      <S.Name>{car.name}</S.Name>
      <S.Price>{car.price}</S.Price>
      <span>링크</span>
    </S.CarItemLayout>
  );
};

export default CarItem;
