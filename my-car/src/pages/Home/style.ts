import { styled } from "styled-components";
// title style
export const PageTitleWrapper = styled.section`
  width: 100%;
  height: 360px;
  padding: 90px 60px 0px 60px;
  background-color: rgb(228, 220, 211);
`;

export const PageTitle = styled.div`
  height: 100%;
  background-color: rgba(246, 243, 242, 0.7);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

export const Title = styled.h1`
  font-size: 58px;
  line-height: 51px;
`;

export const Detail = styled.p`
  margin-top: 40px;
  font-weight: 500;
`;

// tap menu style

export const TabMenuWrapper = styled.div`
  max-width: 1120px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }
`;

export const TabMenuName = styled.h3`
  margin-right: 50px;
  flex: 1;
  font-size: 20px;
  line-height: 34px;
`;

export const ModelCompare = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TabMenuIconWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

export const TabMenuIconList = styled.li`
  margin: 0px 25px;
  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-right: 0px;
  }
`;

export const TabMenuButton = styled.button`
  letter-spacing: 0.016px;
  color: #666;
  line-height: 1;
  font-weight: 500;
`;

//color: #007fa8;

export const CarModelList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px 40px;
  margin-top: 60px;
  max-width: 1120px;
  width: 100%;
  margin: 60px auto 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 24px;
  }
  //   @media (max-width: px) {
  //     grid-template-columns: repeat(2, 1fr);

  //   }
`;

export const CarModel = styled.li``;

export const CarImgWrapper = styled.div`
  display: inline-block;
  text-align: center;
  overflow: hidden;
`;
export const CarImg = styled.img`
  object-fit: contain;
  width: 110%;
  margin-left: -5%;
  border-style: none;
`;

export const CarText = styled.div`
  margin-top: 10px;
  text-align: center;
`;
export const CarName = styled.p`
  font-size: 20px;
  letter-spacing: -0.4px;
  line-height: 1.3;
`;
export const CarAmount = styled.p`
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: -0.4px;
  line-height: 1;
`;
export const CarBadge = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  margin: 2px 0 0;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: #666;
`; // N포함 or 캐스퍼 온라인
// 1024
