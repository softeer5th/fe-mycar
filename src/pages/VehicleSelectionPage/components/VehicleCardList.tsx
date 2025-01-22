import { use } from 'react';
import { Vehicle } from '../../../domain/Vehicle';
import VehicleCard from './VehicleCard';
import styled from 'styled-components';

const VehicleCardList = ({label, vehicleDataList} : {label: string, vehicleDataList : Promise<Vehicle[]>}) => {
  const data = use(vehicleDataList);
  
  return (
    <CardListContainer>
      {data?.filter(vehicle => vehicle.type === label)
        .map((vehicle:Vehicle) => <VehicleCard key={vehicle.id} {...vehicle} />)}
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px 40px;
`

export default VehicleCardList;