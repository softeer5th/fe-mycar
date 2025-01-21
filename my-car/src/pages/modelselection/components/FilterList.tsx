import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const FilterList = () => {
  return (
    <WdSelectWrapper>
      <TitleContainer>
        <WdSelectTitle>구동방식 </WdSelectTitle>
        <InfoIcon />
      </TitleContainer>
      <WdSelectButton>2WD</WdSelectButton>
      <WdSelectButton>4WD</WdSelectButton>
    </WdSelectWrapper>
  );
};

const WdSelectWrapper = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoIcon = styled(AiOutlineInfoCircle)`
  width: 18px;
  height: 18px;
  color: #666666;
`;

const WdSelectTitle = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
`;

const WdSelectButton = styled.button`
  border-radius: 0;
  border: 1px solid #fff;
  background-color: #007fa8;
  color: #fff;
  width: 138px;
  height: 40px;
  margin-top: 10px;
`;
