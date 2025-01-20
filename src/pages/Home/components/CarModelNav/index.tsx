import * as S from './CarModelNav.styled';

const tabs = [
  {
    label: '수소/전기차',
    value: 'electronic',
  },
  {
    label: 'N',
    value: 'n',
  },
  {
    label: '승용',
    value: 'passenger',
  },
  {
    label: 'SUV',
    value: 'suv',
  },
  {
    label: 'MPV',
    value: 'mpv',
  },
  {
    label: '소형트럭&택시',
    value: 'small',
  },
  {
    label: '트럭',
    value: 'truck',
  },
  {
    label: '버스',
    value: 'bus',
  },
];

const CarModelNav = () => {
  return (
    <S.CarModelNavLayout>
      <S.TabTitle>모델 선택</S.TabTitle>
      <S.TabList>
        {tabs.map((tab) => (
          <S.TabItem>{tab.label}</S.TabItem>
        ))}
      </S.TabList>
      <S.TabCheckbox>모델 비교</S.TabCheckbox>
    </S.CarModelNavLayout>
  );
};

export default CarModelNav;
