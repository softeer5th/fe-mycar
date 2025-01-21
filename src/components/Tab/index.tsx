import { useState } from 'react';
import type { ReactNode } from 'react';
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
    const labels = data.map(({label}) => label);
    const handleClickChangeTab = (label: string) => {
        setSelectedTab(label);
    }


    return (
      <div>
        <LabelListContainer>
          <LabelTitle>모델 선택</LabelTitle>
          <LabelList>
            {labels.map((label) => 
              <Label key={label} onClick={() => handleClickChangeTab(label)}>
                <LabelButton selected={selectedTab === label}>
                  {label}
                </LabelButton>
              </Label>)}
          </LabelList>
          <div>모델 비교</div>
        </LabelListContainer>
        <div>
          {data.find(({label}) => label === selectedTab)?.content}
        </div>
      </div>
    )
}

const LabelListContainer = styled.div`
    width: 100%;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;

    border-bottom: 1px solid ${(props) => props.theme.color['border']};
`

const LabelTitle = styled.h3 `
    ${(props) => props.theme.typo.body1};
` 

const LabelList = styled.ul`
    display: flex;
    gap: 25px;

    flex-wrap: nowrap;
    justify-content: space-between;
`

const Label = styled.li`
    margin: 0px 10px;
`

const LabelButton = styled.button<{selected: boolean}>`
    ${(props) => props.theme.typo.label};
    color: ${(props) => props.selected ? props.theme.color.highlight : props.theme.color['text-sub']};
`

export default Tab;