import {TrimListItem, TrimName, TrimNameList, TrimTitle, TrimList} from "./TrimList.styled.ts";
import {TrimTypeNameType} from "../../CarModelTrim.tsx";



export function TrimWrapper({trimTypeNameList, selectedTrim, setSeletedTrim}: {
    trimTypeNameList: TrimTypeNameType[];
    selectedTrim: number[];
    setSeletedTrim: React.Dispatch<React.SetStateAction<number[]>>;
}) {




    return (
        <TrimList>
            {
                trimTypeNameList.map((trimTypeName, index) => {
                    const {trimTitle, trimTypeList} = trimTypeName;

                    return (
                        <TrimListBox
                            key={trimTitle}
                            title={trimTitle}
                            typeList={trimTypeList}
                            onClick={(nameIndex: number) => {
                                const newSelectedTrim = [...selectedTrim]
                                newSelectedTrim[index] = nameIndex
                                setSeletedTrim(newSelectedTrim)
                            }}
                            selectedIndex={selectedTrim[index]}/>
                    )
                })
            }
        </TrimList>
    )
}


function TrimListBox({title, typeList, selectedIndex, onClick}: {title: string, typeList: string[], selectedIndex: number, onClick: (nameIndex: number) => void}) {

    return (
        <TrimListItem>
            <TrimTitle>
                {title}
            </TrimTitle>
            <TrimNameList>
                {
                    typeList.map((type, index) =>
                        <TrimName
                            key={type}
                            onClick={() => onClick(index)}
                            isSelected={selectedIndex === index}>
                            {type}
                        </TrimName>
                    )
                }
            </TrimNameList>
        </TrimListItem>
    )
}