import styled from 'styled-components';

export const BoxList = () => {
  return (
    <BoxListWrapper>
      <BoxListHeader>
        <span>모델 비교</span>
        <span>| 전체 모델</span>
        <span>(10)</span>
      </BoxListHeader>
      <ArticleContainer>
        <Article>
          <h4>Prestige(롱레인지) 18인치</h4>
          <span>62,510,000원</span>
          <img></img>
          <div>
            <span>2WD</span>
            <span>상세품목 </span>
          </div>
          <div>
            <ul>
              <li>
                <img></img>
              </li>
              <li>
                <img></img>
              </li>
              <li>
                <img></img>
              </li>
            </ul>
          </div>
          <button>내 차 만들기</button>
        </Article>
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
`;

const Article = styled.article`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
