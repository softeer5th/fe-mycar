import * as S from './header.styled';
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
      <S.StyledHeader>
        <S.HeaderTop>
          <h1>HYUNDAI</h1>
          <S.HeaderButton onClick={() => setIsModalOpen(!isMocalOpen)}>
            {' '}
            | {currentCarModel}{' '}
          </S.HeaderButton>
        </S.HeaderTop>
        <S.HeaderBottom>
          <S.HeaderButton $isActive={true}>model 선택</S.HeaderButton>
          <S.HeaderButton>내차 만들기</S.HeaderButton>
        </S.HeaderBottom>
      </S.StyledHeader>
      {isMocalOpen && (
        <>
          <S.ModalBackground />

          <S.CarSelectModal>
            <S.Tabbar>
              {categoryList.map((item) => (
                <S.CarSelectModalTabbar
                  key={item}
                  $isSelected={currentCarType === item}
                  onClick={() => {
                    setCurrentCarType(item);
                  }}
                >
                  {item}
                </S.CarSelectModalTabbar>
              ))}
            </S.Tabbar>

            <S.Wrapper>
              <S.TabbarItemContainer>
                {carModelList[currentCarType].map((item) => (
                  <S.TabbarItem
                    key={item.name}
                    onClick={() => {
                      setIsModalOpen(false);
                      Navigate('/'); // 사실 이동 안함 ㅋㅋ
                    }}
                  >
                    <img src={item.img} alt="car" width={'160px'} />
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </S.TabbarItem>
                ))}
              </S.TabbarItemContainer>
            </S.Wrapper>
          </S.CarSelectModal>
        </>
      )}
    </>
  );
}
