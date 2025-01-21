import { TABS } from '../../Home.constants';
import { TabValue } from '../../Home.types';
import * as S from './CarModelNav.styled';

interface CarModelNavProps {
  selectedTab: TabValue;
  handleClickTab: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CarModelNav = ({ selectedTab, handleClickTab }: CarModelNavProps) => {
  return (
    <S.CarModelNavLayout>
      <S.TabTitle>모델 선택</S.TabTitle>
      <S.TabList>
        {TABS.map((tab) => (
          <li key={tab.value}>
            <S.TabItem
              value={tab.value}
              onClick={handleClickTab}
              selected={selectedTab === tab.value}
            >
              {tab.label}
            </S.TabItem>
          </li>
        ))}
      </S.TabList>
      <S.TabCheckbox>모델 비교</S.TabCheckbox>
    </S.CarModelNavLayout>
  );
};

export default CarModelNav;
