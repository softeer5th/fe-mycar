import React, { useState } from 'react';
import { color, Tcolors, Toptions } from '../../types/custom';

type Props = {
    detail: {
        colors: Tcolors,
        options: Toptions
    }
};

export default function CarOption({ detail }: Props) {
    const { colors, options } = detail;
    const [exteriorColor, setExteriorColor] = useState<color>(colors.exterior[0]);
    const [interiorColor, setInteriorColor] = useState<color>(colors.interior[0]);

    const [isSelected, setIsSelected] = useState<boolean>(true);


    return (
        <div className='w-[660px] min-w-[660px] overflow-y-auto text-left px-[80px]'>
            <h2 className='text-[30px] font-semibold mb-[30px]'>색상</h2>
            <div className='w-full flex flex-col pt-5 px-[50px] pb-[35px] bg-[#F6F3F2] '>
                <div className='flex flex-row w-full border-b-[0.5px] border-[#666666] items-center justify-around'>
                    <div className='mb-1 font-semibold text-[#666666]'>전체</div>
                    <div className='mb-1 font-semibold text-[#666666]'>50대 이상</div>
                </div>
                <p className='mt-[30px] text-sm'>
                    <span className='text-base font-semibold'>넥쏘 구매자</span> 중&nbsp;
                    <span className='text-base font-semibold'>80%</span>가&nbsp;
                    <span className='text-base text-[#007FA8] font-semibold'>크리미 화이트 펄 색상</span>을 선택하셨습니다.
                </p>
                <div className='h-[200px]'></div>
            </div>
            <div className='flex flex-row items-center justify-between pb-5 mt-10 border-b-[1px] border-[#CCCCCC]'>
                <p className='text-xl font-semibold'>외장색상</p>
                <span className=' text-sm text-[#666666]'>{exteriorColor.color}</span>
            </div>
            <ul className='flex flex-row'>
                {colors.exterior.map((color: color, index) => {
                    return (
                        <li key={`ex-${color.color}`}>
                            <button className='p-2'>
                                <img width={85} height={85} className='border-[0.5px] border-[#CCCCCC]' src={`http://localhost:5000${color.img}`} />
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div className='flex flex-row items-center justify-between pb-5 mt-10 mb-4 border-b-[1px] border-[#CCCCCC]'>
                <p className='text-xl font-semibold'>내장색상</p>
                <span className=' text-sm text-[#666666]'>{interiorColor.color}</span>
            </div>
            <ul className='flex flex-col mb-[60px]'>
                {colors.interior.map((color: color, index) => {
                    return (
                        <li key={`in-${color.color}`}>
                            <button className='w-full p-2 pt-4'>
                                <img height={85} className='border-[0.5px] border-[#CCCCCC]' src={`http://localhost:5000${color.img}`} />
                            </button>
                        </li>
                    )
                })}
            </ul>
            <h2 className='text-[30px] font-semibold mb-[30px]'>옵션</h2>
            <div className='w-full flex flex-row justify-start items-end mt-10 '>
                <button className={`w-[140px] h-[40px] px-5 py-[5px] text-[15px] border-[#CCCCCC] border-[0.5px] font-medium ${isSelected ? 'border-[black] border-b-0' : 'text-[#666666] border-b-[black]'}`}>선택 품목</button>
                <button className={`w-[140px] h-[40px] px-5 py-[5px] text-[15px] border-[#CCCCCC] border-[0.5px] font-medium ${!isSelected ? 'border-[black] border-b-0' : 'text-[#666666] border-b-[black]'}`}>기본 포함 품목</button>
                <div className='flex-1 border-b-[0.5px] border-[black]' />
            </div>
            { }
        </div>
    )
}