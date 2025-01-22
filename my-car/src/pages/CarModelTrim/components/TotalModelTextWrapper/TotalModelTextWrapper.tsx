import {TotalModelBorder, TotalModelCount, TotalModelText, TotalModelTextBox} from "./TotalModelTextWrapper.styled.ts";


export default function TotalModelTextWrapper({count}: {count: number}) {



    return (
        <TotalModelTextBox>
            <TotalModelText>
                모델 비교
            </TotalModelText>
            <TotalModelBorder />
            <TotalModelText>
                전체 모델
                <TotalModelCount>
                    ({count})
                </TotalModelCount>
            </TotalModelText>
        </TotalModelTextBox>

    )
}