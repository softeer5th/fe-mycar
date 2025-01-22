import CarList from './CarList';
import * as S from './CarSection.styled';
import { TABS } from '../../Home.constants';
import { Tab } from '../../../../components/Tab';

const CarSection = () => {
  return (
    <S.CarSectionLayout>
      <Tab.root defaultValue={TABS[0].value}>
        <S.TabBar>
          <S.TabTitle>모델 선택</S.TabTitle>
          <S.TabList>
            {TABS.map((tab) => (
              <li key={tab.value}>
                <Tab.trigger value={tab.value}>{tab.label}</Tab.trigger>
              </li>
            ))}
          </S.TabList>
          <S.TabCheckbox>모델 비교</S.TabCheckbox>
        </S.TabBar>
        {TABS.map((tab) => (
          <Tab.content value={tab.value}>
            <CarList tab={tab.value} />
          </Tab.content>
        ))}
      </Tab.root>
    </S.CarSectionLayout>
  );
};

export default CarSection;
