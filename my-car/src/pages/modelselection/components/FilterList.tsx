import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface FilterListProps {
  is2WD: boolean;
  onFilterClick: (num: number) => void;
}

export const FilterList = ({ is2WD, onFilterClick }: FilterListProps) => {
  return (
    <WdSelectWrapper>
      <TitleContainer>
        <WdSelectTitle>구동방식 </WdSelectTitle>
        <InfoIcon />
      </TitleContainer>
      <WdSelectButton isSelected={is2WD} onClick={() => onFilterClick(2)}>
        2WD
      </WdSelectButton>
      <WdSelectButton isSelected={!is2WD} onClick={() => onFilterClick(4)}>
        4WD
      </WdSelectButton>
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

const WdSelectButton = styled.button<{ isSelected: boolean }>`
  border-radius: 0;
  background-color: ${(props) => (props.isSelected ? '#007fa8' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  border: 1px solid ${(props) => (props.isSelected ? '#007fa8' : '#e4dcd3')};
  width: 138px;
  height: 40px;
  margin-top: 10px;
`;
