import React from 'react';

type Props = {
    step: number;
    detailStep: number;
}

export default function Nav({ step, detailStep }: Props) {

    return (
        <nav className='w-full h-20 px-[50px] flex flex-row items-center bg-[#e4dcd3]'>
            <div className={`p-[3px] ${step === 0 ? 'pr-[50px]' : 'pr-[28px]'} font-bold text-xl text-[${step === 0 ? '#000000' : '#00000080'}]`}><span className='mr-5'>01 </span>모델 선택</div>
            <div className='h-[26px] border-[0.5px] border-[#9F9A93]' />
            <div className={`p-[3px] ${step === 0 ? 'pl-[50px]' : 'pl-[28px]'} font-bold text-xl text-[${step === 1 ? '#000000' : '#00000080'}]`}><span className='mr-5'>02 </span>내 차 만들기</div >
            {step === 1 &&
                <ol className='flex flex-row font-semibold'>
                    <li className={`pl-[15px] ${detailStep !== 0 && 'text-[#00000080]'} after:content-[' '] after:mx-3 after:inline-block after:w-[12px] after:h-[12px] after:border-b-[1px] after:border-r-[1px] after:border-[#00000080] after:rotate-[-45deg]`}>외장 색상</li>
                    <li className={`${detailStep !== 1 && 'text-[#00000080]'} after:content-[' '] after:mx-3 after:inline-block after:w-[12px] after:h-[12px] after:border-b-[1px] after:border-r-[1px] after:border-[#00000080] after:rotate-[-45deg]`}>내장 색상</li>
                    <li className={`${detailStep !== 2 && 'text-[#00000080]'}`}>옵션</li>
                </ol>}
        </nav>
    )
}