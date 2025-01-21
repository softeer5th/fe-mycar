import { BoxList } from './BoxList';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export const BoxListSlide = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/assets/data/car.json');
        const data = await response.json();
        setCarData(data['아이오닉6']['2WD']);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(carData.length / 4);

  return (
    <BoxListSlideWrapper>
      <BoxListNav>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <NavButton />
          </li>
        ))}
      </BoxListNav>
      <BoxList list={carData} />
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
