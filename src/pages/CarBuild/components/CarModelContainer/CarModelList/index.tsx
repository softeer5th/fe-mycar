import CarModelItem from './CarModelItem';
import { CarModel } from '../../../CarBuild.types';
import { CarModelListLayout } from './CarModelList.styled';

interface CarModelListProps {
  carModelList: CarModel[];
  currentIdx: number;
}

const CarModelList = ({ carModelList, currentIdx }: CarModelListProps) => {
  return (
    <CarModelListLayout $currentIdx={currentIdx}>
      {carModelList.map((carModel) => (
        <CarModelItem key={carModel.id} carModel={carModel} />
      ))}
    </CarModelListLayout>
  );
};

export default CarModelList;
