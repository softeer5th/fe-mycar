import { React } from 'react';
import { Header } from '../../components/header/Header';
import { useParams } from 'react-router-dom';
import { Tabbar } from '../../components/header/header.styled';
import styled from 'styled-components';
import { PreviewContainer } from './components/PreviewContainer';
export default function Option() {
  const { model } = useParams();

  return (
    <>
      <Header currentCarModel={model} currentStep={1} />

      <CarMakingContatiner>
        <PreviewContainer />

        {/* <CustomizationContainer>
          <ColorContainer>
            <TitleText></TitleText>
            <ExteriorColorContainer></ExteriorColorContainer>
            <InteriorColorContainer></InteriorColorContainer>
          </ColorContainer>

          <OptionContainer>
            <TitleText></TitleText>
            <TabbarContainer>
              <Tabbar></Tabbar>
              <DynamicContent>
                <DivisionContainer></DivisionContainer>
                <DetailProductContainer></DetailProductContainer>
              </DynamicContent>
            </TabbarContainer>
          </OptionContainer>

          <CompleteButton></CompleteButton>
        </CustomizationContainer> */}
      </CarMakingContatiner>
    </>
  );
}

const CarMakingContatiner = styled.div`
  padding-top: 139px;
  display: flex;
`;
