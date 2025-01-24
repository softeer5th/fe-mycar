import CarModelItem from './CarModelItem';
import { CarModel } from '../../../CarBuild.types';
import * as S from './CarModelList.styled';

interface CarModelListProps {
  carModelList: CarModel[];
  currentIdx: number;
}

const CarModelList = ({ carModelList, currentIdx }: CarModelListProps) => {
  return (
    <S.CarModelListLayout $currentIdx={currentIdx}>
      {carModelList.map((carModel) => (
        <CarModelItem key={carModel.id} carModel={carModel} />
      ))}
    </S.CarModelListLayout>
  );
};

export default CarModelList;
