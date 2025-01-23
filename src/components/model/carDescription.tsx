import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Tmodel from '../../types/model';
import { numberConverter } from '../../utils/converter';
import { CustomMode } from '../../pages/model'

type Props = {
    mode: CustomMode;
    setMode: Dispatch<SetStateAction<CustomMode>>;
    model: Tmodel | undefined;
    preview: string;
};

export default function CarDescription({ mode, setMode, model, preview }: Props) {

    const [imageStep, setImageStep] = useState<number>(1);
    const [intervalState, setIntervalState] = useState<number>(-1);
    const [animationCount, setAnimationCount] = useState<number>(0);


    const handleMode = (e) => {
        const targetMode = e.currentTarget.name as CustomMode;

        setMode(Number(targetMode));
    }

    const animation = () => {
        const interval = setInterval(() => {
            setAnimationCount((prevCount) => prevCount + 1);
            setImageStep((prevStep) => {
                if (prevStep === 60) {
                    return 1;
                } else if (prevStep === 59) {
                    return 60;
                }
                else return (prevStep + 1) % 60;
            })
        }, 800)
        setIntervalState(interval);

    }
    const increaseStep = () => {
        if (imageStep === 59) setImageStep(60);
        else setImageStep(imageStep + 1)
    }

    const decreaseStep = () => {
        if (imageStep === 1) setImageStep(60);
        else setImageStep(imageStep - 1);
    }

    useEffect(() => {
        if (animationCount >= 60 && intervalState > 0) {
            clearInterval(intervalState);
            setIntervalState(-1);
            setAnimationCount(0);
        }
    }, [animationCount])

    if (model === undefined) return


    console.log(model);
    console.log(preview);

    return (
        <div className="w-full flex flex-col flex-1 ">
            <div className="w-full">
                <h2 className="w-full text-left text-[30px] font-semibold">{model.name} - {model.product}</h2>
                <div className="w-full flex flex-row items-start justify-between">
                    <div className="flex flex-row pt-[10px]">
                        <p className="mr-10 text-[#666666] text-base font-normal">{model.name} {model.category} {model.product}</p>
                        <div className="">
                            <button className="mr-3 text-[#002C5f] font-medium after:inline-block after:w-[8px] after:h-[8px] after:ml-[6px] after:mt-[6px] after:border-b-2 after:border-r-2 after:border-[#002C5f] after:rotate-[-45deg] after:-translate-x-[2px] after:-translate-y-[2px]">
                                모델 변경
                            </button>
                            <button className="text-[#002C5f] font-medium after:inline-block after:w-[8px] after:h-[8px] after:ml-[6px] after:mt-[6px] after:border-b-2 after:border-r-2 after:border-[#002C5f] after:rotate-[-45deg] after:-translate-x-[2px] after:-translate-y-[2px]">
                                카탈로그</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex flex-row items-center justify-between">
                            <p className="text-[19px] mr-10 font-medium">세제혜택 적용 전 차량 가격</p>
                            <h2 className="text-[30px] font-semibold">{numberConverter(model.cost)} 원</h2>
                        </div>
                        <p className="mt-[5px] text-[#666666] text-left">*세제혜택이 반영된 금액은 견적 완료 시 확인 가능합니다.</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-around w-full bg-center bg-contain bg-no-repeat bg-[url("https://www.hyundai.com/static/images/model/bg_vr360_circle.png")]'>
                <p className='text-[#666666]' onClick={decreaseStep}>ᐸ</p>
                <img onClick={animation} className='h-4/5' src={`http://localhost:5000${preview}/3/${String(imageStep).padStart(3, '0')}.png`}></img>
                <p className='text-[#666666]' onClick={increaseStep}>ᐳ</p>
            </div>
            <p className='text-[#666666] text-left'>
                * 상기 이미지는 내/외장 색상 선책을 돕기 위한 참고용으로 제공되고 있습니다.
            </p>
            <p className='text-[#666666] text-left'>
                (탑트림에 모든 옵션을 포함한 차량 기준으로 제작되었습니다.)
            </p>
            <div className={`mt-5 flex flex-row items-center justify-center`}>
                <button name={CustomMode.exterior.toLocaleString()} onClick={handleMode} className={`h-[40px] w-[140px] text-[15px] font-medium ${mode === CustomMode.exterior ? 'bg-[#007FA8] text-white ' : 'bg-[#E4DCD3]'}`}>Exterior</button>
                <button name={CustomMode.interior.toLocaleString()} onClick={handleMode} className={`h-[40px] w-[140px] text-[15px] font-medium ${mode === CustomMode.interior ? 'bg-[#007FA8] text-white ' : 'bg-[#E4DCD3]'}`}>Interior</button>
            </div>
        </div>
    )
}

