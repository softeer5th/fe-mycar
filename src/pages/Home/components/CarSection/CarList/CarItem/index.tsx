import { Car } from '../../../../Home.types';
import * as S from './CarItem.styled';

interface CarItemProps {
  car: Car;
}

function formatTenThousandUnit(num: number) {
  const tenThousandUnit = (num / 10000).toFixed(2);

  return Number(tenThousandUnit).toLocaleString('ko-KR');
}

const CarItem = ({ car }: CarItemProps) => {
  return (
    <S.CarItemLayout>
      <img src={car.imgSrc} alt="현대차" />
      <S.Name>{car.name}</S.Name>
      <S.Price>{formatTenThousandUnit(car.price)}만원</S.Price>
      <span>링크</span>
    </S.CarItemLayout>
  );
};

export default CarItem;
