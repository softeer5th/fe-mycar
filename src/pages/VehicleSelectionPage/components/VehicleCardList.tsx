import { use } from 'react';
import styled from 'styled-components';

import type { Vehicle } from '../../../domain/Vehicle';
import VehicleCard from './VehicleCard';

interface VehicleCardListProps {
  label: string;
  vehicleDataList: Promise<Vehicle[]>;
}

const VehicleCardList = ({ label, vehicleDataList }: VehicleCardListProps) => {
  const data = use(vehicleDataList);
  
  return (
    <CardListContainer>
      {data?.filter(vehicle => vehicle.type === label)
        .map((vehicle: Vehicle) => <VehicleCard key={vehicle.id} {...vehicle} />)}
    </CardListContainer>
  );
};

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px 40px;
  max-width: 1120px;
  padding-top: 60px;
  margin: 0 auto;
`;

export default VehicleCardList;