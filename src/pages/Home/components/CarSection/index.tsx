import { useState } from 'react';
import CarModelNav from '../CarModelNav';
import CarList from './CarList';
import * as S from './CarSection.styled';
import { TabValue } from '../../Home.types';

const CarSection = () => {
  const [selectedTab, setSelectedTab] = useState<TabValue>('electronic');

  const handleClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedTab(e.currentTarget.value as TabValue);
  };

  return (
    <>
      <CarModelNav selectedTab={selectedTab} handleClickTab={handleClickTab} />
      <S.CarSectionLayout>
        <CarList selectedTab={selectedTab} />
      </S.CarSectionLayout>
    </>
  );
};

export default CarSection;
