import CarModelItem from './CarModelItem';
import { CarModel } from '../../../CarBuild.types';
import styled from 'styled-components';

const CarModelList = ({ carModelList }: { carModelList: CarModel[] }) => {
  return (
    <CarModelListLayout>
      {carModelList.map((carModel) => (
        <CarModelItem key={carModel.id} carModel={carModel} />
      ))}
    </CarModelListLayout>
  );
};

const CarModelListLayout = styled.ul`
  display: flex;
  gap: 3.2rem;
`;

export default CarModelList;
