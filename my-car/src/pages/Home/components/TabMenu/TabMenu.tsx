import {
    ModelCompare,
    TabMenuButton,
    TabMenuIconList,
    TabMenuIconWrapper,
    TapMenuName,
    TapMenuWrapper
} from "./TabMenu.styled.ts";
import {carModelSelectionType} from "../../Home.tsx";
import * as React from "react";


export default function TabMenu({setCarModelSelection, carModelSelection}: {setCarModelSelection: React.Dispatch<React.SetStateAction<carModelSelectionType>>, carModelSelection: carModelSelectionType}) {
    const carGroupNameList: string[] = [
        '수소/전기차',
        'N',
        '승용',
        'SUV',
        'MPV',
        '소형트럭&택시',
        '트럭',
        '버스'
    ]

    const changeCarModelState = (modelState: number) => {
        setCarModelSelection(modelState)
    }


    return (
        <TapMenuWrapper>
            <TapMenuName>모델 선택</TapMenuName>
            <TabMenuIconWrapper>
                {
                    carGroupNameList.map((carGroupName, index) =>
                        <TabMenuIconBox
                            key={carGroupName}
                            carGroup={carGroupName}
                            isSelected={carModelSelection === index}
                            onClick={() => changeCarModelState(index)}/>
                    )
                }
            </TabMenuIconWrapper>
            <ModelCompare>모델 비교</ModelCompare>
        </TapMenuWrapper>
    )
}


function TabMenuIconBox({carGroup, isSelected, onClick}: {carGroup: string, isSelected: boolean, onClick: () => void}) {

    return (
        <TabMenuIconList>
            <TabMenuButton isSelected={isSelected} onClick={() => onClick()}>
                <span>{carGroup}</span>
            </TabMenuButton>
        </TabMenuIconList>
    )
}