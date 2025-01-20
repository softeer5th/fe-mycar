import CarList from './CarList';
import * as S from './CarSection.styled';

const CarSection = () => {
  return (
    <S.CarSectionLayout>
      <CarList />
    </S.CarSectionLayout>
  );
};

export default CarSection;
