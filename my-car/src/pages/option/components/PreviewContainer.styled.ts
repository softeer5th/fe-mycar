import styled from 'styled-components';

export const PreviewContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 30px 80px 0 80px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div``;

export const TitleText = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ContentText = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const ContentButton = styled.span`
  color: #002c5f;
`;

export const PriceContainer = styled.b`
  font-size: 30px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 2/1;
  padding: 20px 0 20px 0;
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: center;
`;

export const ToggleItem = styled.button<{ isSelected?: boolean }>`
  width: 140px;
  height: 40px;
  background-color: ${(props) => (props.isSelected ? '#007fa8' : '#e4dcd3')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  border: none;
`;
