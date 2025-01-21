import { useState } from 'react';
import CarModelNav from '../CarModelNav';
import CarList from './CarList';
import * as S from './CarSection.styled';

const CarSection = () => {
  const [selectedTab, setSelectedTab] = useState('electronic');

  const handleClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedTab(e.currentTarget.value);
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
