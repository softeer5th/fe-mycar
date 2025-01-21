import { BoxList } from './BoxList';
import styled from 'styled-components';
export const BoxListSlide = () => {
  return (
    <BoxListSlideWrapper>
      <BoxListSliderHeader>
        <ul>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
        </ul>
      </BoxListSliderHeader>

      <BoxList />
    </BoxListSlideWrapper>
  );
};

const BoxListSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxListSliderHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const BoxListHeader = styled.div``;
