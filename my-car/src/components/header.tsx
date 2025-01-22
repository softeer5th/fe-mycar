import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  currentCarModel: string;
  currentStep: number;
}

const categoryList = ['수소/전기차', 'N', '승용', 'SUV', 'MPV', '소형트럭 & 택시', '트럭', '버스'];

export function Header({ currentCarModel }: HeaderProps) {
  const [isMocalOpen, setIsModalOpen] = useState(false);
  const [currentCarType, setCurrentCarType] = useState('수소/전기차');
  const [carModelList, setCarModelList] = useState({});
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/assets/data/carModelList.json');
        const data = await response.json();
        setCarModelList(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <StyledHeader>
        <HeaderTop>
          <h1>HYUNDAI</h1>
          <HeaderButton onClick={() => setIsModalOpen(!isMocalOpen)}>
            {' '}
            | {currentCarModel}{' '}
          </HeaderButton>
        </HeaderTop>
        <HeaderBottom>
          <HeaderButton>model 선택</HeaderButton>
          <HeaderButton>내차 만들기</HeaderButton>
        </HeaderBottom>
      </StyledHeader>
      {isMocalOpen && (
        <>
          <ModalBackground />

          <CarSelectModal>
            <Tabbar>
              {categoryList.map((item) => (
                <CarSelectModalTabbar
                  key={item}
                  $isSelected={currentCarType === item}
                  onClick={() => {
                    setCurrentCarType(item);
                  }}
                >
                  {item}
                </CarSelectModalTabbar>
              ))}
            </Tabbar>

            <Wrapper>
              <TabbarItemContainer>
                {carModelList[currentCarType].map((item) => (
                  <TabbarItem
                    key={item.name}
                    onClick={() => {
                      setIsModalOpen(false);
                      Navigate('/'); // 사실 이동 안함 ㅋㅋ
                    }}
                  >
                    <img src={item.img} alt="car" width={'160px'} />
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </TabbarItem>
                ))}
              </TabbarItemContainer>
            </Wrapper>
          </CarSelectModal>
        </>
      )}
    </>
  );
}

const StyledHeader = styled.header`
  width: 100vw; // 너비
  background-color: #e4dcd3; // 배경색
  position: fixed; // 고정
  top: 0; // 위
  left: 0; // 왼쪽
  height: 139px; // 높이
`;

const HeaderTop = styled.div`
  display: flex; // 플렉스
  gap: 16px;
  align-items: center; // 가운데 정렬
  padding: 0 24px; // 패딩
  height: 50%; // 높이
`;

const HeaderBottom = styled.div`
  display: flex; // 플렉스
  gap: 40px;
  align-items: center; // 가운데 정렬
  padding: 0 8px 0 40px; // 패딩
  height: 50%; // 높이
`;

const HeaderButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 69px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const CarSelectModal = styled.div`
  position: fixed;
  top: 69px;
  height: 300px;
  width: 100vw;
  background-color: #fff;
  z-index: 3;
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
`;

const Tabbar = styled.div`
  display: flex;
`;

const CarSelectModalTabbar = styled.div<{ $isSelected: boolean }>`
  width: 140px;
  height: 40px;
  background-color: ${(props) => (props.$isSelected ? '#fff' : '#444')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$isSelected ? '#444' : '#fff')};
  cursor: pointer;
  transition: all 0.2s ease;
`;

const TabbarItemContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const TabbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  height: 70%;
  width: 240px;
  &: hover {
    background-color: #f6f3f2;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
