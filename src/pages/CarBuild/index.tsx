import { Tab } from '../../components/Tab';
import * as S from './CarBuild.styled';
import CarModelList from './components/CarModelList';

const TABS = [
  {
    label: '2WD',
    value: '2wd',
  },
  {
    label: '4WD',
    value: '4wd',
  },
];

const CarBuild = () => {
  return (
    <div>
      <header>
        <button>01 모델 선택</button>
        <button>02 내 차 만들기</button>
      </header>
      <div>
        <span>구동방식</span>
        <Tab.root defaultValue={TABS[0].value}>
          <S.TabList>
            {TABS.map((tab) => (
              <li key={tab.value}>
                <Tab.trigger value={tab.value}>{tab.label}</Tab.trigger>
              </li>
            ))}
          </S.TabList>
          {TABS.map((tab) => (
            <Tab.content value={tab.value} key={tab.value}>
              <CarModelList engineType={tab.value} />
            </Tab.content>
          ))}
        </Tab.root>
        <div>엔진탭</div>
      </div>
      <div>모델 비교 | 전체 모델</div>
      <footer>표시된 가격 어쩌구</footer>
    </div>
  );
};

export default CarBuild;
