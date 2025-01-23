import { useState, useEffect } from 'react';
import { getSuccessCarModel } from '../../api/car';
import { CarModel } from '../CarBuild/CarBuild.types';
import { Tab } from '../../components/Tab';
import styled from 'styled-components';

const TABS = ['Exterior', 'Interior'];

const OPTION_TABS = ['선택품목', '기본포함품목'];
const SUB_TABS = ['파워트레인/성능', '지능형 안전기술', '안전', '외관', '내장'];

const CarBuildSuccess = () => {
  const [successCarModel, setSuccessCarModel] = useState<CarModel>();

  useEffect(() => {
    const fetchSuccessCarModel = async () => {
      const data = await getSuccessCarModel();
      setSuccessCarModel(data);
    };

    fetchSuccessCarModel();
  }, []);

  return (
    <CarBuildSuccessLayout>
      <TitleContainer>
        <Title>나의 {successCarModel?.name}(이)가 완성되었습니다!</Title>
        <SubTitle>
          {successCarModel?.name} {successCarModel?.description} {successCarModel?.model}
        </SubTitle>
      </TitleContainer>
      <Tab.root defaultValue={TABS[0]}>
        <Tab.content value={TABS[0]}>
          <CarModelBackgroundWrapper>
            <img src={successCarModel?.exteriorImgSrc} width={568} height={300} />
          </CarModelBackgroundWrapper>
        </Tab.content>
        <Tab.content value={TABS[1]}>
          <img src={successCarModel?.interiorImgSrc} width={568} height={300} />
        </Tab.content>
        <TabList>
          {TABS.map((tab) => (
            <Tab.trigger key={tab} value={tab}>
              {tab}
            </Tab.trigger>
          ))}
        </TabList>
      </Tab.root>

      <Tab.root defaultValue={OPTION_TABS[0]}>
        <TabList>
          {OPTION_TABS.map((tab) => (
            <Tab.trigger key={tab} value={tab}>
              {tab}
            </Tab.trigger>
          ))}
        </TabList>

        <Tab.content value={OPTION_TABS[0]}>
          <div>선택품목</div>
        </Tab.content>

        <Tab.content value={OPTION_TABS[1]}>
          <Tab.root defaultValue={SUB_TABS[0]}>
            <SubTabList>
              {SUB_TABS.map((tab) => (
                <Tab.trigger key={tab} value={tab}>
                  {tab}
                </Tab.trigger>
              ))}
            </SubTabList>

            <Tab.content value={SUB_TABS[0]}>
              <div>{SUB_TABS[0]}</div>
            </Tab.content>
            <Tab.content value={SUB_TABS[1]}>
              <div>{SUB_TABS[1]}</div>
            </Tab.content>
          </Tab.root>
        </Tab.content>
      </Tab.root>
    </CarBuildSuccessLayout>
  );
};

const CarBuildSuccessLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 0;
  gap: 2.4rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  ${({ theme }) => theme.fonts.subTitle}
`;

const Title = styled.span`
  ${({ theme }) => theme.fonts.label.sl}
`;

const SubTitle = styled.span`
  ${({ theme }) => theme.fonts.subTitle}
`;

const CarModelBackgroundWrapper = styled.div`
  background: url('https://www.hyundai.com/static/images/model/bg_vr360_circle.png') no-repeat
    center 10px;
  background-size: cover;
`;

const TabList = styled.ul`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray300};

  button {
    ${({ theme }) => theme.fonts.body.small};
    color: ${({ theme }) => theme.colors.gray400};
    width: 10.9rem;
    transition: color 0.5s, background-color 0.5s;
    padding: 1.2rem 1rem;

    &[data-state='active'] {
      background-color: ${({ theme }) => theme.colors.blue400};
      color: ${({ theme }) => theme.colors.white};
      border: 0.1rem solid ${({ theme }) => theme.colors.blue400};
    }
  }
`;

export const SubTabList = styled.ul`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 4rem;

  button {
    ${({ theme }) => theme.fonts.body.small};
    color: ${({ theme }) => theme.colors.gray400};
    transition: color 0.5s, background-color 0.5s;
    padding: 1.2rem 1rem;

    &[data-state='active'] {
      color: ${({ theme }) => theme.colors.blue300};
    }
  }
`;

export default CarBuildSuccess;
