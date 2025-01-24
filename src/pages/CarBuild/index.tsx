import { Tab } from '../../components/Tab';
import * as S from './CarBuild.styled';
import CarModelContainer from './components/CarModelContainer';
import { Link, useParams } from 'react-router';

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
  const { id } = useParams();

  return (
    <S.CarBuildLayout>
      <S.CarBuildHeader>
        <Link to={`/car-build/${id}`}>01 모델 선택</Link>
        <span>|</span>
        <S.InactiveLink to={`/car-build/${id}`}>02 내 차 만들기</S.InactiveLink>
      </S.CarBuildHeader>
      <S.TabRoot>
        <Tab.root defaultValue={TABS[0].value}>
          <S.TabHeader>
            <S.TabTitle>구동방식</S.TabTitle>
            <S.TabList>
              {TABS.map((tab) => (
                <li key={tab.value}>
                  <Tab.trigger value={tab.value}>{tab.label}</Tab.trigger>
                </li>
              ))}
            </S.TabList>
          </S.TabHeader>
          {TABS.map((tab) => (
            <Tab.content value={tab.value} key={tab.value}>
              <CarModelContainer engineType={tab.value} />
            </Tab.content>
          ))}
        </Tab.root>
      </S.TabRoot>
      <S.CarModelFooter>
        <span>
          * 표시된 가격은 세제혜택 반영 전 금액으로 견적 완료 시 세제혜택이 적용된 금액 확인이
          가능합니다.
        </span>
        <span>* 모델별 차량 이미지는 참고용 예시로 실제와 다를 수 있습니다.</span>
      </S.CarModelFooter>
    </S.CarBuildLayout>
  );
};

export default CarBuild;
