import styled from 'styled-components';
import Navigation from '../../../assets/navigation.png';
import Trunk from '../../../assets/trunk.png';
import DoorHandle from '../../../assets/door_handle.png';
import { router } from '../../../routes';

export const BoxList = ({ list }) => {
  if (list == null) return;
  return (
    <BoxListWrapper>
      <BoxListHeader>
        <span>모델 비교</span>
        <span>| 전체 모델</span>
        <span>({list.length})</span>
      </BoxListHeader>
      <ArticleContainer>
        {list.map((item, index) => (
          <Article key={index}>
            <ArticleTitle>{item.name}</ArticleTitle>
            <ArticlePrice>{item.price}</ArticlePrice>
            <CarPreviewImage src={item.imgUrl} />
            <ArticleDetail>
              <span>{item.wd}</span>
              <span>상세품목 </span>
            </ArticleDetail>
            <ArticleOption>
              <li>
                <img src={Navigation} />
              </li>
              <li>
                <img src={Trunk} />
              </li>
              <li>
                <img src={DoorHandle} />
              </li>
            </ArticleOption>
            <PrimaryButton onClick={() => router.navigate('/options')}>내 차 만들기</PrimaryButton>
          </Article>
        ))}
      </ArticleContainer>
    </BoxListWrapper>
  );
};

const BoxListWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BoxListHeader = styled.div``;

const ArticleContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const Article = styled.article`
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #f6f3f2;
`;

const ArticleTitle = styled.h4`
  font-size: 24px;
`;

const ArticlePrice = styled.span`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.32px;
  margin-top: 8px;
`;

const CarPreviewImage = styled.img`
  margin-top: 50px;
`;

const ArticleDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ArticleOption = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
`;

const PrimaryButton = styled.button`
  height: 50px;
  background-color: #002c5f;
  color: white;
  border-radius: 0;
  margin-top: 50px;
`;
