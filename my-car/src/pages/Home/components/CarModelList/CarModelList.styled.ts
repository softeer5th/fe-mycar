import {styled} from "styled-components";

export const CarModelGrid = styled.ul`
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
