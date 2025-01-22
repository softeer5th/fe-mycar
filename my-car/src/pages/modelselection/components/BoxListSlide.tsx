import { BoxList } from './BoxList';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export const BoxListSlide = ({ is2WD }: { is2WD: boolean }) => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/assets/data/car.json');
        const data = await response.json();
        let wd = '4WD';

        if (is2WD === true) wd = '2WD';
        setCarData(data['아이오닉6'][wd]);
      } catch (error) {
        alert(error);
      }
    };
    setCurrentPage(0);
    fetchData();
  }, [is2WD]);

  const totalPages = Math.ceil(carData.length / 4);

  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태

  return (
    <BoxListSlideWrapper>
      <BoxListNav>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <NavButton isSelected={index === currentPage} onClick={() => setCurrentPage(index)} />
          </li>
        ))}
      </BoxListNav>

      <SlideContainer>
        <SlideWrapper currentPage={currentPage}>
          <BoxList list={carData} />
        </SlideWrapper>
      </SlideContainer>
    </BoxListSlideWrapper>
  );
};

const BoxListSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 27px;
`;

const BoxListNav = styled.ul`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 2;
`;

const NavButton = styled.button<{ isSelected: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  padding: 0;
  background-color: ${({ isSelected }) => (isSelected ? '#007fa8' : '#ddd')};
`;

const SlideContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: calc(350px * 4 + 16px * 3);
`;

const SlideWrapper = styled.div<{ currentPage: number }>`
  display: flex;
  transform: translateX(-${(props) => props.currentPage * 100}%);
  transition: transform 0.5s ease-in-out;
`;
