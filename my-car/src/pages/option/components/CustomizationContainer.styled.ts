import styled from 'styled-components';

export const CustomizationContainer = styled.div`
  flex: 1;
  padding: 30px 80px 0 80px;
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const ExteriorColorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

export const SubTitleText = styled.p`
  font-size: 20px;
`;

export const SelectedColorText = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ExteriorColorList = styled.ul`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
`;

export const ExteriorColorItem = styled.li`
  width: 85px;
  height: 85px;
  margin: 8px;
  background-color: #ccc;
`;

export const InteriorColorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InteriorColorList = styled.ul`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const InteriorColorItem = styled.li`
  width: 100%;
  height: 75px;
  margin-bottom: 25px;
  background-color: #ccc;
`;
