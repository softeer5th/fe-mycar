import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 150px;
`;

export const TabbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
`;

export const Tabbar = styled.div`
  width: 100%;
  height: 46px;
  border-bottom: 2px solid #666;
  display: flex;
  justify-content: flex-start;
`;

export const TabbarItem = styled.div<{ isSelected: boolean }>`
  height: 100%;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: ${(props) => (props.isSelected ? '2px solid #666' : '1px solid #ccc')};
  color: ${(props) => (props.isSelected ? '#000' : '#666')};
  border-bottom: none;
`;

export const DynamicContent = styled.div`
  padding-top: 50px;
`;

export const DivisionContainer = styled.div``;

export const SubTitleText = styled.h2`
  font-size: 20px;
`;

export const DivisionList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 34px;
`;

export const DivisionListItem = styled.li<{ isDefault?: boolean }>`
  width: 236px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${(props) => (props.isDefault ? '2px solid #007fa8' : '2px solid #ccc')};
`;

export const DetailProductContainer = styled.div`
  margin-top: 40px;
`;

export const DetailProductList = styled.ul`
  displat: flex;
  flex-direction: row;
  gap: 33px;
  margin-top: 20px;
`;
export const DetailProductListItem = styled.li<{ isSelected?: boolean }>`
  width: 237px;
  height: 276px;
  border: ${(props) => (props.isSelected ? '2px solid #007fa8' : '2px solid #ccc')};
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 60%;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 20px 14px 20px;
  justify-content: space-between;
  height: 40%;
  box-sizing: border-box;
`;

export const ItemTitleContainer = styled.div``;

export const ItemTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const ItemContent = styled.p`
  font-size: 12px;
`;

export const ItemPriceText = styled.div`
  font-size: 16px;
  color: #666;
`;
