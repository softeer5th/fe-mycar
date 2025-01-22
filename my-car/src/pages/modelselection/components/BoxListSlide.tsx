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
        console.error('Error fetching car data:', error);
      }
    };

    fetchData();
  }, [is2WD]);

  const totalPages = Math.ceil(carData.length / 4);
  const itemsPerPage = 4; // 페이지당 보여줄 아이템 개수

  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태
  const currentData = carData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <BoxListSlideWrapper>
      <BoxListNav>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <NavButton onClick={() => setCurrentPage(0)} />
          </li>
        ))}
      </BoxListNav>
      <BoxList list={currentData} />
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

const NavButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  padding: 0;
  background-color: #ddd;
`;
