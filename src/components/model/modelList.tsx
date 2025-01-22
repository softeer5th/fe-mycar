import React, { Dispatch, SetStateAction } from 'react'
import Tmodel from '../../types/model'
import ModelCard from './modelCard'

type Props = {
    models: Tmodel[],
    setStep: Dispatch<SetStateAction<number>>
    setSelectedModel: Dispatch<SetStateAction<Tmodel | undefined>>;
}

const ModelList = ({ models, setStep, setSelectedModel }: Props) => {

    const increaseStep = (model: Tmodel) => {
        setStep((prevStep) => prevStep + 1);
        setSelectedModel(model);
    }


    return (
        <div className='w-full h-full flex flex-col'>
            <div className='flex flex-row items-start mt-[30px] mb-[20px] text-base'>
                <span className="after:pr-[10px] after:h-[15px] after:translate-y-[2px] after:content-[''] after:border-r-[1px] after:w-[1px] after:inline-block">모델 비교</span>
                <span className='pl-[10px]'>전체 모델 <span className='text-base text-[#007FA8]'>({models.length})</span></span>
            </div>
            <div>
                {
                    models.map((model) =>
                        <ModelCard onClick={() => increaseStep(model)} model={model} />
                    )}
            </div>
        </div>
    )
}

export default ModelList