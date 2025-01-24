import type { ReactNode } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface TabProps {
  data: TabData[];
}

interface TabData {
  label: string;
  content: ReactNode;
}

const Tab = ({ data }: TabProps) => {
  const [selectedTab, setSelectedTab] = useState(data[0].label);
  const labels = data.map(({ label }) => label);
  const handleClickChangeTab = (label: string) => {
    setSelectedTab(label);
  };

  return (
    <div>
      <LabelListContainer>
        <LabelListContents>
          <LabelTitle>모델 선택</LabelTitle>
          <LabelList>
            {labels.map((label) => 
              <Label key={label} onClick={() => handleClickChangeTab(label)}>
                <LabelButton selected={selectedTab === label}>
                  {label}
                </LabelButton>
              </Label>)}
          </LabelList>
          <LabelCheckboxContainer>
            <LabelCheckbox />
            <LabelCheckboxContent>모델 비교</LabelCheckboxContent>
          </LabelCheckboxContainer>
        </LabelListContents>
      </LabelListContainer>
      <div>
        {data.find(({ label }) => label === selectedTab)?.content}
      </div>
    </div>
  );
};

const LabelListContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.color['border']};
`;

const LabelListContents = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    height: 70px;
    margin: 0 auto;
`;

const LabelTitle = styled.h3 `
    ${(props) => props.theme.typo.body1};
`; 

const LabelList = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    gap: 25px;
    justify-content: space-between;
`;

const Label = styled.li`
    margin: 0 10px;
`;

const LabelButton = styled.button<{ selected: boolean }>`
    ${(props) => props.theme.typo.label};
    color: ${(props) => props.selected ? 
      props.theme.color.highlight : props.theme.color['text-sub']};
`;

const LabelCheckboxContainer = styled.div`
    display: flex;
    gap: 0.25rem;
    align-items: center;
`;

const LabelCheckbox = styled.button`
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    background: transparent;
    border: 2px solid #ccc;
    border-radius: 14px;

    &::after {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 8px;
      height: 5px;
      content: "";
      border: 2px solid #ccc;
      border-top: 0;
      border-right: 0;
      transform: rotate(-45deg);
    }
`;

const LabelCheckboxContent = styled.span`
  ${(props) => props.theme.typo.label};
`;

export default Tab;