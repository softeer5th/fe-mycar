import styled from "styled-components";

export const CarModelMakingViewWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: auto;
  margin: 0 auto;
  overflow-x: hidden;
`;
export const Preview = styled.section`
  width: calc(100% - 660px);
  padding-top: 199px;

  position: fixed;
  left: 0;
  top: 0;
  width: calc(100% - 640px);
  height: 100%;
  padding: 160px 80px 0 72px;
  z-index: 2;
  background-color: #fff;
`;
export const Option = styled.section``;

export const CarModelName = styled.div``;
export const CarName = styled.div`
  font-size: 30px;
  font-weight: 500;
  font-family: "HyundaiSansHeadKR";
  line-height: 44px;
  letter-spacing: -0.4px;
  line-height: 1;
`;
export const CarSubName = styled.div`
  margin-top: 15px;
`;

export const CarPrice = styled.div`
  margin-top: 50px;
`;
export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PriceTitle = styled.div`
  display: inline-block;
  margin-right: 40px;
  font-family: "HyundaiSansHeadKR";
  font-size: 19px;
  letter-spacing: -0.4px;
  color: #000;
  line-height: 1;
  vertical-align: middle;
`;
export const Price = styled.div`
  display: inline-block;
  font-family: "HyundaiSansHeadKR";
  font-size: 30px;
  letter-spacing: -0.4px;
  color: #000;
  line-height: 1;
  vertical-align: middle;
  font-weight: 500;
`;
export const PriceDescription = styled.div`
  margin-top: 5px;
  font-family: "HyundaiSansTextKRR";
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.4px;
  line-height: 24px;
  color: #666;
`;
