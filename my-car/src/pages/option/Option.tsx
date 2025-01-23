import { Header } from '../../components/header/Header';
import { useParams } from 'react-router-dom';
// import { Tabbar } from '../../components/header/header.styled';
import styled from 'styled-components';
import { PreviewContainer } from './components/PreviewContainer';
import { CustomizationContainer } from './components/CustomizationContainer';

export default function Option() {
  const { model } = useParams();

  return (
    <>
      <Header currentCarModel={model} currentStep={1} />

      <CarMakingContatiner>
        <PreviewContainer />

        <CustomizationContainer />
      </CarMakingContatiner>
    </>
  );
}

const CarMakingContatiner = styled.div`
  padding-top: 139px;
  display: flex;
`;
