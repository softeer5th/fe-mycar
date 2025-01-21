import styled from 'styled-components';
import { Header } from '../../components/header.tsx';
import { FilterList } from './components/FilterList.tsx';
import { BoxListSlide } from './components/BoxListSlide.tsx';

export default function ModelSelection() {
  return (
    <ModelSelectionWrapper>
      <Header currentCarModel="아이오닉6" currentStep={0}></Header>

      <MainContent>
        <ModelSelectContainer>
          <FilterList />
          <BoxListSlide />
        </ModelSelectContainer>
      </MainContent>
    </ModelSelectionWrapper>
  );
}
const ModelSelectionWrapper = styled.div``;

const MainContent = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 24px 12px 24px;
  box-sizing: border-box;
`;

const ModelSelectContainer = styled.div``;
