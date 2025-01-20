const enum myCarStep {
    selection =  "모델 선택",
    exterior =  "외장 색상",
    interior =  "내장 색상",
    option = "옵션",
}

export function Header( currentCarModel: string, currentStep:  myCarStep.exterior ) {

    currentStep = myCarStep.exterior;

    return (
        <div>
            <HeaderTop carModel = {currentCarModel}></HeaderTop>
            <HeaderStep step = {currentStep}></HeaderStep>
        </div>

    )
}

function HeaderTop(carModel: any){
    return(
        <div>

        </div>
    )
}


function HeaderStep(step: any){
    return(
        <div>

        </div>
    )
}