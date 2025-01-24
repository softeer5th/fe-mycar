import { Header } from '../../components/header/Header';
import { useParams } from 'react-router-dom';
// import { Tabbar } from '../../components/header/header.styled';
import styled from 'styled-components';
import { PreviewContainer } from './components/preview_container/PreviewContainer';
import { CustomizationContainer } from './components/customization_container/CustomizationContainer';
import { useState } from 'react';

export default function Option() {
  const { model } = useParams();
  const [currentPrice, setCurrentPrice] = useState<number>(52_580_000);

  return (
    <>
      <Header currentCarModel={model} currentStep={1} />

      <CarMakingContatiner>
        <PreviewContainer currentPrice={currentPrice} />

        <CustomizationContainer
          onPriceAdded={(number) => {
            setCurrentPrice(currentPrice + number);
          }}
        />
      </CarMakingContatiner>
    </>
  );
}

const CarMakingContatiner = styled.div`
  padding-top: 139px;
  display: flex;
  position: relative;
`;
